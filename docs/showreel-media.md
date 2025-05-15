---
sidebar_label: 'Showreel Media'
---

# Showreel Media

## Get Specific Showreel Media

```shell
curl "https://www.filmmakers.eu/api/v1/showreel_media/123456" \
  -H "Authorization: Token token=API_KEY"
```

> The above command returns JSON structured like this:

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
