---
sidebar_label: 'Error Codes'
---

# Error Codes

Filmmakers uses conventional HTTP response codes to indicate the success or failure of an API request.

- Codes in the `2xx` range indicate success.
- Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter is missing, the request lacks valid authentication credentials, etc.).
- Codes in the `5xx` range indicate an error with our servers (these should rarely happen).

Certain `4xx` errors, notably the `410 Gone` status, indicate that a requested resource (such as an actor profile or a talent agency) has been merged with another and is no longer available at the original URL. The response will include the ID of the new resource, and clients should use this ID to access the merged resource.
