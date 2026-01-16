---
sidebar_label: 'Quickstart'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart

Get up and running with the Filmmakers API in minutes.

## Prerequisites

Before you begin, you'll need an API key. Request one through [our support page](https://www.filmmakers.eu/contact/new).

## Make Your First Request

Once you have your API key, you can make your first API call. Let's retrieve a list of actor profiles:

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/actor_profiles?per_page=5" \
      -H "Authorization: Token token=YOUR_API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    const API_KEY = 'YOUR_API_KEY';

    fetch('https://www.filmmakers.eu/api/v1/actor_profiles?per_page=5', {
      headers: {
        'Authorization': `Token token=${API_KEY}`
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
    $apiKey = 'YOUR_API_KEY';
    $url = 'https://www.filmmakers.eu/api/v1/actor_profiles?per_page=5';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Token token=' . $apiKey
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);
    print_r($data);
    ```
  </TabItem>
</Tabs>

:::note
Replace `YOUR_API_KEY` with your actual API key.
:::

## Understanding the Response

A successful response returns a JSON array of actor profiles:

```json
[
  {
    "id": 12345,
    "display_name": "Jane Doe",
    "gender": "female",
    "profile_url": "https://www.filmmakers.eu/actors/jane-doe",
    "thumbnail_url": "https://...",
    ...
  },
  ...
]
```

## Pagination

List endpoints return paginated results. Check the `Link` header for navigation:

```
Link: <https://www.filmmakers.eu/api/v1/actor_profiles?page=2>; rel="next"
```

Use the `page` and `per_page` parameters to navigate:

```shell
curl "https://www.filmmakers.eu/api/v1/actor_profiles?page=2&per_page=25" \
  -H "Authorization: Token token=YOUR_API_KEY"
```

See [Pagination](/pagination) for more details.

## Next Steps

- Browse the [API Reference](/api-reference) for a complete list of endpoints
- Learn about [Authentication](/authentication) options including OAuth
- Explore [Actor Profiles](/actor-profiles) and [Crew Profiles](/crew-profiles) endpoints
- Check [Rate Limits](/rate-limits) to understand usage limits
