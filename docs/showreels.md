---
sidebar_label: 'Showreels'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Showreels

## Get a Specific Showreel

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/showreels/100" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/showreels/100', {
      method: 'GET',
      headers: {
        'Authorization': 'Token token=API_KEY',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    ```
  </TabItem>
</Tabs>

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
ID | The ID of the showreel to retrieve (refer to the `showreel_ids` array field from the actor profiles endpoint to obtain these IDs)

### Response Fields

See the example response above for an overview of included fields.

Field | Type | Description
--------- | ------- | -----------
id | integer | ID of the showreel
showreel_type | string | Either `video` or `audio`
name | string | Name of the showreel
position | integer | The position of the showreel on Filmmakers
poster | string | Image URL to the showreel poster/thumbnail
poster_copyright | string | Copyright for the showreel poster/thumbnail
download | boolean | Whether the download option is active on Filmmakers
showreel_medium_ids | array | IDs of showreel media contained in the showreel (see `showreel_media` endpoint below)
