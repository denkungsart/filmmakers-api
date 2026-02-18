---
sidebar_label: 'Error Codes'
---

# Error Codes

Filmmakers uses conventional HTTP response codes to indicate the
success or failure of an API request.

- Codes in the `2xx` range indicate success.
- Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter is missing, the request lacks valid authentication credentials, etc.).
- Codes in the `5xx` range indicate an error with our servers (these should rarely happen).

Certain `4xx` errors, notably the `410 Gone` status, indicate that a requested resource is no longer available at the original URL.

For merged resources (for example, an actor profile or a talent agency merged into another record), the response includes the ID of the new resource:

```json
{ "id": 123, "status": "merged", "new_id": 456 }
```

Clients should use new_id to access the merged resource.

For soft-deleted resources, the response is:

```json
{ "id": 123, "status": "deleted" }
```

Clients should treat this resource as permanently unavailable.
