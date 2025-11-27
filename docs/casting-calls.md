---
sidebar_label: 'Casting Calls'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

::::caution
The Casting Calls API is in beta/early preview and may undergo changes. If you are interested in using them, please contact our support.
::::

# Casting Calls

The Casting Calls endpoint allows you to retrieve information about casting calls, including details about the production, roles, deadlines, and requirements.

## Get All Casting Calls

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/casting_calls" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/casting_calls', {
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
    $apiKey = 'API_KEY'; // Replace with your actual API key
    $url = "https://www.filmmakers.eu/api/v1/casting_calls";

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
    }

    curl_close($ch);
    ?>
    ```
  </TabItem>
</Tabs>

##### Example Response

```json
[
  { "id": 549, "name": "Project Sunrise" },
  { "id": 548, "name": "The Reality" },
  { "id": 547, "name": "Sunflowers for Happiness" },
  { "id": 546, "name": "Breakdown #4 Sunrise on the Reaping" }
]
```

This endpoint retrieves all casting calls available with the access rights of the API key. Each object contains the unique ID and name of the casting call.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/casting_calls`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
page | 1 | Page to display – see "Pagination" section
per_page | 250 | Items per page – see "Pagination" section
fields | name | Can be used to limit the fields included in the response. Possible values are: `name`, `casting_type`, `description`, `production_format`, `deadline`, `deadline_visible`. Multiple fields can be specified as a comma-separated list.

### Response Fields

Field | Type | Description
----- | ---- | -----------
id | integer | Unique ID of the casting call
name | string | Name of the casting call

---

## Get a Specific Casting Call

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/casting_calls/{id}" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    // Replace {id} with the actual casting call ID
    fetch('https://www.filmmakers.eu/api/v1/casting_calls/{id}', {
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
    $apiKey = 'API_KEY'; // Replace with your actual API key
    $castingCallId = '{id}'; // Replace {id} with the actual casting call ID
    $url = "https://www.filmmakers.eu/api/v1/casting_calls/" . $castingCallId;

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
    }

    curl_close($ch);
    ?>
    ```
  </TabItem>
</Tabs>

Replace `{id}` with the ID of the casting call you want to retrieve.

##### Example Response

```json
{
  "id": 549,
  "name": "Project Sunrise - 'Jordan' (lead role)",
  "description": "A coming-of-age drama about resilience and hope.",
  "deadline": "2025-02-25T12:04:00.000+01:00",
  "visibility": "public",
  "deadline_visible": true,
  "production_format": null,
  "casting_type": "ecasting",
  "production_id": 123,
  "working_permits": [],
  "regions": ["dach"],
  "contract_type": null,
  "created_at": "2025-02-18T13:05:24.865+01:00",
  "updated_at": "2025-02-18T13:05:24.865+01:00",
  "roles": [
    {
      "id": 750,
      "name": "Jordan",
      "description": "A determined teenager facing new challenges.",
      "contract_type": null,
      "deadline": "2025-02-25T12:04:00.000+01:00",
      "gender": ["female"],
      "acting_age_from": 15,
      "acting_age_to": 18,
      "languages": { "eng": "gut" },
      "ethnic_background": [6468, 6471],
      "ethnic_background_details": [],
      "created_at": "2025-02-18T13:05:24.865+01:00",
      "updated_at": "2025-02-18T13:05:24.865+01:00"
    }
  ]
}
```

This endpoint retrieves a specific casting call by its ID, including all production details and available roles.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/casting_calls/{id}`

Replace `{id}` with the ID of the casting call you want to retrieve.

### Response Fields

Field | Type | Description
----- | ---- | -----------
id | integer | Unique ID of the casting call
name | string | Name of the casting call
description | string | Description of the casting call
deadline | datetime | Application deadline
visibility | string | Visibility of the casting call: `public` or `private`
deadline_visible | boolean | Whether the deadline is visible
production_format | string or null | Format of the production
casting_type | string | Type of casting: `breakdown`, `ecasting` (Self Tape Request), `studio_casting` (scheduled audition at a site)
production_id | integer | ID of the related production
working_permits | array | Required working permits
regions | array | Regions relevant to the casting call
contract_type | string or null | Contract type
created_at | datetime | Creation timestamp
updated_at | datetime | Last update timestamp
roles | array | List of roles available in the casting call

#### Role Object Fields

Field | Type | Description
----- | ---- | -----------
id | integer | Unique ID of the role
name | string | Name of the role
description | string | Description of the role
contract_type | string or null | Contract type for the role
deadline | datetime | Application deadline for the role
gender | array | Accepted genders for the role
acting_age_from | integer | Minimum acting age
acting_age_to | integer | Maximum acting age
languages | object | Required languages and proficiency
ethnic_background | array | Required ethnic backgrounds
ethnic_background_details | array | Additional ethnic background details
created_at | datetime | Creation timestamp
updated_at | datetime | Last update timestamp
