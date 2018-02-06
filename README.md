# wappalyzer-api

Simple wrap of [Wappalyzer](https://github.com/AliasIO/Wappalyzer) to use instead of subscription wappalyzer API.

> WARNING!!! Use [Wappalyzer](https://github.com/AliasIO/Wappalyzer) API in production, this image is only for development purposes. 

API loosely mimics Wappalyzer API with a single endpoint `lookup/v1`

## Lookup API

Look up a domain with Wappalyzer.

### Resource URI

```
lookup/v1/
```

### Resource information

|                 |                                                          |
| --------------- | --------------------------------------------------------:|
| Method          | GET                                                      |
| Execution       | Synchronous / Asynchronous (when call yields no results) |
| Response format | JSON                                                     |

### Resource parameters

| NAME          | REQUIRED      | DESCRIPTION                    | EXAMPLE             |
| ------------- |:-------------:|:------------------------------:| -------------------:|
| url           | Yes           | URL of the web page to analyze | https://example.com |

### Example request

```
GET https://localhost:3000/lookup/v1/?url=https://example.com
```

### Example response

```json
{
  "urls": [
    "https://wordpress.com/"
  ],
  "applications": [
    {
      "name": "Criteo",
      "confidence": "100",
      "version": "",
      "icon": "Criteo.svg",
      "website": "http://criteo.com",
      "categories": [
        {
          "36": "Advertising Networks"
        }
      ]
    },
    {
      "name": "Facebook",
      "confidence": "100",
      "version": "",
      "icon": "Facebook.svg",
      "website": "http://facebook.com",
      "categories": [
        {
          "5": "Widgets"
        }
      ]
    },
    {
      "name": "Google Analytics",
      "confidence": "100",
      "version": "UA",
      "icon": "Google Analytics.svg",
      "website": "http://google.com/analytics",
      "categories": [
        {
          "10": "Analytics"
        }
      ]
    },
    {
      "name": "Google Font API",
      "confidence": "100",
      "version": "",
      "icon": "Google Font API.png",
      "website": "http://google.com/fonts",
      "categories": [
        {
          "17": "Font Scripts"
        }
      ]
    },
    {
      "name": "Nginx",
      "confidence": "100",
      "version": "",
      "icon": "Nginx.svg",
      "website": "http://nginx.org/en",
      "categories": [
        {
          "22": "Web Servers"
        }
      ]
    },
    {
      "name": "WordPress",
      "confidence": "100",
      "version": "",
      "icon": "WordPress.svg",
      "website": "http://wordpress.org",
      "categories": [
        {
          "1": "CMS"
        },
        {
          "11": "Blogs"
        }
      ]
    },
    {
      "name": "Yandex.Metrika",
      "confidence": "100",
      "version": "",
      "icon": "Yandex.Metrika.png",
      "website": "http://metrika.yandex.com",
      "categories": [
        {
          "10": "Analytics"
        }
      ]
    },
    {
      "name": "jQuery",
      "confidence": "100",
      "version": "2.2.4",
      "icon": "jQuery.svg",
      "website": "http://jquery.com",
      "categories": [
        {
          "12": "JavaScript Frameworks"
        }
      ]
    },
    {
      "name": "PHP",
      "confidence": "0",
      "version": "",
      "icon": "PHP.svg",
      "website": "http://php.net",
      "categories": [
        {
          "27": "Programming Languages"
        }
      ]
    }
  ],
  "meta": {
    "language": "en"
  }
}
```

