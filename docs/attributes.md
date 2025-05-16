---
sidebar_label: 'Attributes'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Attributes

## Get All Attributes

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/attributes/" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/attributes/', {
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

> The above command returns an array structured like this:

```json
[
  "accent_skill",
  "accents",
  "dances",
  "dialect_skill",
  "dialects",
  "drivers_licenses",
  ...
]
```

This endpoint retrieves all possible profile attributes that are closed lists, such as languages or nationalities, as well as attributes for credits (vita entries).

For countries, ISO 3166-1 alpha-2 codes are used ([see here](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). For federal states (states/subdivisions), ISO 3166-2 codes are used, e.g., for Germany: [https://en.wikipedia.org/wiki/ISO_3166-2:DE](https://en.wikipedia.org/wiki/ISO_3166-2:DE). Since the ISO lists are standardized (and extensive), they are not present in this endpoint for the time being.

## Get Key/Value Pairs for Attributes

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/attributes/xxx" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    // Replace 'xxx' with the specific attribute key, e.g., 'nationalities'
    fetch('https://www.filmmakers.eu/api/v1/attributes/xxx', {
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

> The above command returns JSON structured like this (e.g., for nationalities):

```json
{
  "AD": "Andorran",
  "AE": "United Arab Emirates",
  "AF": "Afghan",
  "AG": "Antigua and Barbuda",
  "AL": "Albanian",
  "AM": "Armenian",
  "AO": "Angolan",
  "AR": "Argentinean",
  "AT": "Austrian",
  "AU": "Australian",
  ...
}
```

This endpoint retrieves all possible key/value pairs for one of the attributes. Pass one of the supported locales (see above) as a parameter to retrieve localized values.
