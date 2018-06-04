# complainHAR
Utility to convert har files into md format.
Use case:
1. Backend does not work
2. Record interaction with the browser network tool, save as har file
3. Convert to markdown with complainHAR
4. Paste markdown to issue and complain

Almost copy pasted from https://github.com/mattcg/har-to-curl

## Install
```
  npm install -g .
```
Will publish to npm, maybe


## Features
- see urls, methods, headers and payloads (with amazing prettyprinted json)
- SPDY headers currently stripped


## Example

```
  complainhar something.har something.md
```

## Example (redacted) output

## Request 0 - GET https://ubi.fishmarket.eu/api/lists?limit=-1&type=sea_bass

#### Headers:
| Name | Value |
|-------|:-------|
| pragma | no-cache |
| accept-encoding | gzip, deflate, sdch, br |
| accept-language | en-US,en;q=0.8,it-IT;q=0.6,it;q=0.4 |
| user-agent | Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 |
| accept | application/json, text/plain, */* |
| referer | https://ubi.fishmarket.eu/app/sea_basss?search=&reverse=0&sortBy=artist&view=0&list=-1&filters=eyJhdmFpbGFiaWxpdHkiOlsiYXZhaWxhYmxlIiwibm90QXZhaWxhYmxlIiwicmVzZXJ2ZWQiXX0%3D&item= |


## Response 0 - GET https://ubi.fishmarket.eu/api/lists?limit=-1&type=sea_bass

#### Headers:
| Name | Value |
|-------|:-------|
| date | Mon, 07 May 2018 17:00:58 GMT |
| content-encoding | gzip |
| server | nginx/1.12.2 |
| etag | W/"de2-I1A4ETDnewD28s+sGWiZMX5p9jE" |
| vary | Accept-Encoding |
| x-cache | Miss from cloudfront |
| content-type | application/json; charset=utf-8 |
| status | 200 |
| strict-transport-security | max-age=31536000; includeSubDomains; |
| x-amz-cf-id | 0_rG6lpfdNnGwbTrSE65A0B2bo4wtZlDEsDf6nfq9TgOWeJFPsWbTA== |
| via | 1.1 5d4055ddd4ab6dc339d40953c6e99219.cloudfront.net (CloudFront) |


-------------


## Request 1 - PATCH https://api.fishmarket.eu/api/sea_bass

#### Headers:
| Name | Value |
|-------|:-------|
| pragma | no-cache |
| origin | https://api.fishmarket.eu |
| accept-encoding | gzip, deflate, sdch, br |
| accept-language | en-US,en;q=0.8,it-IT;q=0.6,it;q=0.4 |
| user-agent | Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 |
| content-type | application/json;charset=UTF-8 |
| accept | application/json, text/plain, */* |
| content-length | 152 |

#### PostData
 ```
{
  "ids": [
    "56deef47f8a6568e37fccd05",
    "58e24b0298b6540ab7dac5ce",
    "56deef47f8a6568e37fccd07"
  ],
  "push": {
    "lists": "5ae18d0cf37121794226be2f"
  },
  "output": "object"
}
```
## Response 1 - PATCH https://api.fishmarket.eu/api/sea_bass

#### Headers:
| Name | Value |
|-------|:-------|
| date | Mon, 07 May 2018 17:01:04 GMT |
| via | 1.1 5d4055ddd4ab6dc339d40953c6e99219.cloudfront.net (CloudFront) |
| vary | Accept-Encoding |
| server | nginx/1.12.2 |
| strict-transport-security | max-age=31536000; includeSubDomains; |
| x-cache | Miss from cloudfront |
| content-type | application/json; charset=utf-8 |
| status | 200 |
| content-length | 133 |

#### Response payload
 ```
{
  "code": 1,
  "content": {
    "n": 3,
    "nModified": 3,
    "opTime": {
      "ts": "6552885135979577347",
      "t": 4
    },
    "ok": 1
  }
}
```


-------------


## Request 2 - GET https://api.fishmarket.eu/api/lists?limit=-1&type=sea_bass

#### Headers:
| Name | Value |
|-------|:-------|
| pragma | no-cache |
| accept-encoding | gzip, deflate, sdch, br |
| accept-language | en-US,en;q=0.8,it-IT;q=0.6,it;q=0.4 |
| user-agent | Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 |
| accept | application/json, text/plain, */* |
## Response 2 - GET https://api.fishmarket.eu/api/lists?limit=-1&type=sea_bass

#### Headers:
| Name | Value |
|-------|:-------|
| date | Mon, 07 May 2018 17:01:09 GMT |
| content-encoding | gzip |
| server | nginx/1.12.2 |
| etag | W/"de2-I1A4ETDnewD28s+sGWiZMX5p9jE" |
| vary | Accept-Encoding |
| x-cache | Miss from cloudfront |
| content-type | application/json; charset=utf-8 |
| status | 200 |
| strict-transport-security | max-age=31536000; includeSubDomains; |
| via | 1.1 5d4055ddd4ab6dc339d40953c6e99219.cloudfront.net (CloudFront) |

