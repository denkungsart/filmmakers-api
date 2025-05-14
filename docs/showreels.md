---
sidebar_label: 'Showreels'
---

# Showreels

## Get a specific showreel

```shell
curl "https://www.filmmakers.eu/api/v1/showreels/100" \
  -H "Authorization: Token token=API_KEY"
```

> The above command returns JSON structured like this:

```json
{
  "id": 100,
  "showreel_type": "video",
  "name": "Showreel 2024",
  "position": 1,
  "poster_copyright": "Photographer XYZ",
  "download": true,
  "showreel_medium_ids": [
    123456,
    123457,
    123458,
    123459,
    123460
  ],
  "poster": "https://imgproxy.filmmakers.eu/8f7c74be-c696-11ee-85a8-4781e0bae8b1.jpg"
}

```

This endpoint retrieves a specific showreel.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/showreels/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the showreel to retrieve (refer to the `showreel_ids` array field from actor_profiles endpoint to obtain these ids)

### Response fields

See example response to the right for an overview of included fields

Field | Type | Description
--------- | ------- | -----------
id | integer | ID of the showreel
showreel_type | string | either `video` or `audio`
name | string | name of the showreel
position | integer | The position of the showreel on Filmmakers
poster | string | Image url to the showreel poster/thumb
poster_copyright | string | Copyright for the showreel poster/thumb
download | boolean | Whether the download option is active on Filmmakers
showreel_medium_ids| array | IDs of showreel media contained in the showreel (see `showreel_media` endpoint below)
