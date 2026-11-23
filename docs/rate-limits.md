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
* `Ratelimit-Remaining`: The requests left in the current period, always `0` in a `429` response
* `Ratelimit-Reset`: When the current period ends and the quota resets, as a Unix timestamp in seconds

Only `429` responses carry these headers, and like all HTTP header names, theirs are case-insensitive. Periods are fixed 5-minute windows aligned to the clock, e.g. 12:00 to 12:05, rather than counted from your first request. After a `429`, wait until `Ratelimit-Reset` before sending further requests.
