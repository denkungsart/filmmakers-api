---
sidebar_label: 'Talent Agencies'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Talent Agencies

## Get Talent Agency Data

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/talent_agencies/{id}" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/talent_agencies/{id}', {
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
    $talentAgencyId = '{id}'; // Replace with the actual talent agency ID
    $apiKey = 'API_KEY'; // Replace with your actual API key
    $url = 'https://www.filmmakers.eu/api/v1/talent_agencies/' . $talentAgencyId;

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      'Authorization: Token token=' . $apiKey
    ));

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

Replace `{id}` with the ID of the talent agency you want to retrieve.

##### Example Response

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
      "email": "agent@example.com",
      "role": "agent",
      "function": null,
      "instagram_username": "mypersonalprofile",
      "imdb_link": "https://www.imdb.com/name/nm1234567",
      "picture_url": "https://imgproxy.filmmakers.eu/bfa9eb4c-c6ac-11ee-9015-f30db07efa43.jpg",
      "about_me": "This is a text about me",
      "about_me_html": "<div>This is a text about me</div>"
    }
  ],
  "associations": [
    "vda"
  ],
  "about_me": "A text about our agency.",
  "about_me_html": "<div>A text about our agency.</div>"
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
| about_me | string | Returned as plain text (stripped of any rich text formatting). This field is localized. If the `locale` query parameter is not provided, the API attempts to return the English (`en`) version of `about_me`. To request the `about_me` text in a specific language, use the `locale` query parameter (e.g., `?locale=de`). If the `about_me` content for the requested locale is not available, it will return null. |
| about_me_html | string | Returns an HTML version of `about_me` |
| employees[].about_me | string |Returned as plain text (stripped of any rich text formatting). This field is localized. If the `locale` query parameter is not provided, the API attempts to return the English (`en`) version of `about_me`. To request the `about_me` text in a specific language, use the `locale` query parameter (e.g., `?locale=de`). If the `about_me` content for the requested locale is not available, it will return null.|

See the example response above for an overview of included fields.
