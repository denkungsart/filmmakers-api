---
sidebar_label: 'Rate Limits'
---

# Rate Limits

Rate limits are enforced on a per-IP address basis. Currently, Filmmakers allows up to 300 requests within a 5-minute period. If this quota is exceeded, your IP will be throttled for the remainder of this period. In this case, the API will return an error response with status code `429`.

Along with the status code, the following `RateLimit` response header fields will be returned:

```
Ratelimit-Limit: 300
Ratelimit-Remaining: 0
Ratelimit-Reset: 1597048500
```

* `Ratelimit-Limit`: The request quota associated with your client (defaults to 300)
* `Ratelimit-Reset`: The timestamp when the quota resets
