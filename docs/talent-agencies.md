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
      "about_me": "This is a text about me"
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
| employees[].about_me | string | This field is dependent on the locale. If no locale is passed, it defaults to "en". |

See the example response above for an overview of included fields.
