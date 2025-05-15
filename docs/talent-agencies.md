---
sidebar_label: 'Talent Agencies'
---

# Talent Agencies

## Get Talent Agency Data

```shell
curl "https://www.filmmakers.eu/api/v1/talent_agencies/123" \
  -H "Authorization: Token token=API_KEY"
```

> The above command returns JSON structured like this:

```json
{
  "id": 1,
  "name": "Example agency",
  "short_name": "Agency",
  "homepage_url": "https://www.example.com",
  "filmmakers_url": "https://www.filmmakers.eu/agents/example-agency",
  "imdb_link": "https://pro.imdb.com/company/co0000001",
  "imdb_id": "co0000001",
  "showreel_url": "https://www.example.com/showreel",
  "facebook_page": "my-facebook-page",
  "instagram_username": "myinstaprofile",
  "public_email": "info@example.com",
  "picture_url": "https://imgproxy.filmmakers.eu/bf042068-c6ac-11ee-b970-a34dadd10171.jpg",
  "address": {
    "city": "Mainz",
    "country": "DE",
    "fax": null,
    "line1": "Wallstr. 11",
    "line2": "",
    "phone": "49613163691950",
    "zipcode": "55122"
  },
  "employees": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "phone": "49613163691950",
      "email": "info@example.com",
      "role": "role",
      "picture_url": "https://imgproxy.filmmakers.eu/bfa9eb4c-c6ac-11ee-9015-f30db07efa43.jpg"
    }
  ],
  "associations": [
    "vda"
  ]
}
```

This endpoint retrieves a specific talent agency.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/talent_agencies/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the talent agency to retrieve

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| associations | array of strings | Possible values are: `pma`, `sfaal`, `vda` |

See the example response above for an overview of included fields.
