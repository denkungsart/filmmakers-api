---
sidebar_label: 'Pagination'
---

# Pagination

This API supports pagination, following the proposed [RFC-8288](https://tools.ietf.org/html/rfc8288) standard for Web linking.

Pagination information is included in the response HTTP headers, namely `Total` (total entries), `Per-Page` (entries per page), and `Link` (containing links to corresponding pages).

The current page can be set using the `page` parameter, and the number of entries per page can be specified with the optional `per_page` parameter. The default value for `per_page` is 250, and the maximum allowed value for `per_page` is 1000. If this limit is exceeded, a `400 Bad Request` error code will be returned.
