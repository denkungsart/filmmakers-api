---
sidebar_label: 'Blog Posts'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Blog Posts

## Get All Blog Posts

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/blog_posts" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/blog_posts', {
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
[
  {
    "id": 36,
    "title": "Blog post title",
    "blog_id": 1,
    "tags": [{ "id": 2, "name": "News" }],
    "mentions": [{ "mentionable_type": "ActorProfile", "mentionable_id": 789 }]
  },
  {
    "id": 35,
    "title": "Blog post title",
    "blog_id": 1,
    "tags": [{ "id": 3, "name": "Awards" }],
    "mentions": []
  }
]
```

This endpoint retrieves all blog posts available with the access rights of the API key.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/blog_posts`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
blog_id | id | Limit blog posts to a specific blog ID (e.g., `blog_id` from actor profile)
page | 1 | Page to display – see "Pagination" section
per_page | 250 | Items per page – see "Pagination" section
tags[id] | null | Filter items by tags – allows passing multiple tag IDs using array form of the parameter, e.g., `tags[id][]=1&tags[id][]=5`
actor_profiles[id] | null | Filter by IDs of actor profiles who have been mentioned in blog posts – allows passing multiple actor profile IDs using array form of the parameter, e.g., `actor_profiles[id][]=7&actor_profiles[id][]=9`

### Response Fields

Field | Type | Description
--------- | ------- | -----------
id | number | Unique ID of the blog post
blog_id | number | Unique ID of the blog the post belongs to
title | string | Title of the blog post
tags | array of objects | Includes ID and name of the associated tags
mentions | array of objects | Includes type and ID of the mentioned object

## Get a Specific Blog Post

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/blog_posts/123" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/blog_posts/123', {
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
  "id": 123,
  "title": "Blog post title",
  "note": "Blog post note",
  "publication_date": "2019-09-02T12:44:19.776+02:00",
  "source": null,
  "tags": [
    {
      "id": 3,
      "name": "News"
    },
    {
      "id": 4,
      "name": "Premiere"
    }
  ],
  "body": "Blog post body",
  "body_html": "<div>Blog post body<figure class=\"attachment attachment--preview attachment--jpg\"><div class=\"image-wrapper\"><img src=\"https://imgproxy.filmmakers.eu/83570365-9d0f-4165-85c6-df1dd48adb1f.jpg\"><div class=\"image-caption\"><span title=\"© Acme inc\">© Acme inc</span></div></div></figure></div>",
  "images": [
    {
      "url": "https://imgproxy.filmmakers.eu/83570365-9d0f-4165-85c6-df1dd48adb1f.jpg",
      "copyright": "Acme inc"
    },
    {
      "url": "https://imgproxy.filmmakers.eu/83570365-9d0f-4165-85c6-df1dd48adb1f.jpg",
      "copyright": "Abc inc"
    }
  ],
  "mentions": [
    {
      "mentionable_type": "ActorProfile",
      "mentionable_id": 789
    }
  ]
}
```

This endpoint retrieves a specific blog post.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/blog_posts/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the blog post to retrieve

### Response Fields

See the example response above for an overview of included fields.

Field | Type | Description
--------- | ------- | -----------
title | string | Title of the blog post
note | string | Optional comment on the post
body | string | Plain text representation of the blog post body with line breaks, **but no HTML markup**
body_html | string | Blog post body with **HTML markup**, includes images with copyright information. Allowed HTML tags are `a, br, div, em, figcaption, figure, h1, img, li, ol, strong, ul`. Example CSS to show copyright over the image at the top left corner: `.image-wrapper { position: relative; } .image-caption { position: absolute; top: 0; left: 0; z-index: 1; }`
publication_date | datetime | Publication date of this post
source | string | Original source of the post – e.g., a newspaper in case an article was shared from an external URL. Will be null in case of internal posts, i.e., posts written by the entity themselves.
source.url | string | URL of the source article
source.publication_date | datetime | Date of publication of original (may be null if source date cannot be determined)
tags | array | Array of tags applied to the blog post, each containing two key-value pairs: "id" and "name". Available tag names are: "News", "Premiere", "Awards", and "Press"
images[].url | string | Image URL
images[].cover | boolean | True if image is a cover image; default: `false`
images[].copyright | string | Image copyright
mentions | array | Array of objects mentioned in the blog post, e.g., actor profiles. Contains the `mentionable_type` of the related object and `mentionable_id`.
