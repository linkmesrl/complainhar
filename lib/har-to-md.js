module.exports = harToCurl;

function harToCurl(har) {
	if (typeof har === 'string') {
		har = JSON.parse(har);
	}

	if (!har || typeof har !== 'object') {
		return;
	}
	if (har.request) {
		return harToCurl.fromEntry(har);
	}

	if (har.log && Array.isArray(har.log.entries)) {
		return harToCurl.fromLog(har.log);
	}

	if (Array.isArray(har)) {
		return harToCurl.fromEntries(har).join('\n\n');
	}

	if (Array.isArray(har.entries)) {
		return harToCurl.fromLog(har);
	}
}

harToCurl.fromLog = function(log) {
	if (!log || !Array.isArray(log.entries)) {
		return;
	}

	return harToCurl.fromEntries(log.entries);
};

harToCurl.fromEntries = function(entries) {
	return entries.map(harToCurl.fromEntry).join('\n\n-------------\n\n');
};

harToCurl.fromEntry = function(entry, i) {
	let opString;

	opString = `\n## Request ${i} - ${entry.request.method} ${entry.request.url} \n`;
	if (!entry || !entry.request) {
		return '';
	}
	opString += headerTable(entry.request.headers);
	if (entry.request.postData) {
		opString += '\n\n#### PostData\n ```\n' + tryJSON(entry.request.postData.text) + '\n```';
	}

	opString += `\n## Response ${i} - ${entry.request.method} ${entry.request.url} \n`;
	if (!entry.response) {
		opString += 'No response!!11one!';
	}
	opString += headerTable(entry.response.headers);
	if (entry.response.content) {
		opString += '\n\n#### Response payload \n ```\n' + tryJSON(entry.response.content.text) + '\n```';
	}

	return `${opString}\n`
}

// pretty print json
const tryJSON = (text) => {
	try {
		return JSON.stringify(JSON.parse(text), null, 2)
	} catch (e) {
		return text
	}
}

const headerTable = (headers) => {
	let headerTable = ''
	headerTable += '\n#### Headers:\n'
	headerTable += '| Name | Value |\n'
	headerTable += '|-------|:-------|\n'

	//hide SPDY headers FOR NOW
	headerTable += headers
		.filter(header => header.name[0] !== ':')
		.map((header) => `| ${header.name} | ${header.value} |`).join('\n')
	return headerTable
}
