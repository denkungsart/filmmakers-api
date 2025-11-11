---
sidebar_label: 'Showreel Media'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Showreel Media

## Get Specific Showreel Media

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/showreel_media/{id}" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/showreel_media/{id}', {
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
  <TabItem value="php" label="PHP (cURL)">
    ```php
    <?php
    $showreelMediaId = '{id}'; // Replace with the actual showreel media ID
    $apiKey = 'API_KEY'; // Replace with your actual API key
    $url = "https://www.filmmakers.eu/api/v1/showreel_media/" . $showreelMediaId;

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Token token=' . $apiKey,
    ]);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'cURL Error: ' . curl_error($ch);
    } else {
        echo $response;
        // For further processing, you might want to decode the JSON:
        // $data = json_decode($response, true);
        // var_dump($data);
    }

    curl_close($ch);
    ?>
    ```
  </TabItem>
</Tabs>

Replace `{id}` with the ID of the showreel media you want to retrieve.

##### Example Response

```json
{
  "id": 123456,
  "type": "ShowreelVideo",
  "name": "Faking Bullshit",
  "director": "Alexander Schubert",
  "role": "Rocky",
  "year": 2019,
  "download": true,
  "duration": "171.6",
  "skills": [
    "languages/deutsch"
  ],
  "vita_entry_id": 300,
  "link_visible": true,
  "skill": "languages/deutsch",
  "picture": "https://imgproxy.filmmakers.eu/8f7c74be-c696-11ee-85a8-4781e0bae8b1.jpg",
  "asset": null,
  "proxies": {
    "sd": "https://static.filmmakers.eu/production/0fd099dc-c698-11ee-93cb-cb381089a4e7.mp4",
    "hd": "https://static.filmmakers.eu/production/107a9e6e-c698-11ee-8895-f34d7095f1f5.mp4",
    "full_hd": "https://static.filmmakers.eu/production/109d0832-c698-11ee-b7b8-fb95fd1a375c.mp4"
  }
}
```

This endpoint retrieves specific showreel media.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/showreel_media/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the showreel media to retrieve (refer to the `showreel_medium_ids` array field from the showreels endpoint to obtain these IDs)

### Response Fields

See the example response above for an overview of included fields.

Field | Type | Description
--------- | ------- | -----------
id | integer | ID of the video or audio
type | string | Either `ShowreelVideo` (for videos) or `ShowreelAudio` (for audios)
name | string | Name of the video or audio
director | string | Name of the director linked to the medium (if any)
role | string | Name of the role linked to the medium (if any)
year | integer | Year of the medium (if any)
download | boolean | Whether the download option is active on Filmmakers
duration | float | Duration in seconds
skills | array | Links to skills from actor profile attributes, in the format of `NAME#VALUE`, e.g., `languages#deutsch` or `dialects#berlinerisch`
skill | string | Deprecated, please use `skills`
vita_entry_id | integer | ID of vita entry (credit) if any
picture | string | Image URL to the thumbnail
asset | string | Only filled in for type `ShowreelAudio`, may contain codecs `AAC` or `MP3`
proxies | array | For the type `ShowreelVideo`, provides links to transcoded proxies in MP4 format (H.264). These proxies may include the following quality options:<br />- **sd**: 480p<br />- **hd**: 720p<br />- **full_hd**: 1080p<br /><br />Note that depending on the quality of the source file, `full_hd` and/or `hd` might not be available. Additionally, there might be two legacy proxies:<br />- **web_quality**: Roughly equivalent to 720p<br />- **portrait**: Media in portrait mode
link_visible | boolean | Indicates if the user allows `vita_entry_id` and `skills` to be visible
