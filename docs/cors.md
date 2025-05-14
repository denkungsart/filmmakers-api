---
sidebar_label: 'CORS'
---

# Cross origin resource sharing

The API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin.

Here's a sample request sent from a browser hitting [https://www.example.com/](https://www.example.com/):

```
$ curl -I https://www.filmmakers.eu/api/v1/actor_profiles -H "Origin: https://www.example.com"
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET
```
