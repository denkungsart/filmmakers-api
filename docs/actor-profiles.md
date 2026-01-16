---
sidebar_label: 'Actor Profiles'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Actor Profiles

## Get All Actor Profiles

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/actor_profiles" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/actor_profiles', {
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
    $url = 'https://www.filmmakers.eu/api/v1/actor_profiles';

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
  <TabItem value="ruby" label="Ruby (Net::HTTP)">
    ```ruby
    require 'net/http'
    require 'json'

    api_key = 'API_KEY' # Replace with your actual API key
    uri = URI('https://www.filmmakers.eu/api/v1/actor_profiles')

    request = Net::HTTP::Get.new(uri)
    request['Authorization'] = "Token token=#{api_key}"

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    data = JSON.parse(response.body)
    puts data
    ```
  </TabItem>
</Tabs>

##### Example Response

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "gender": "m"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "gender": "f"
  }
]
```

This endpoint retrieves all actor profiles available with the access rights of the API key. Most of the time, it is scoped to a talent agency.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/actor_profiles`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
page | 1 | Page to display – see "Pagination" section
per_page | 250 | Items per page – see "Pagination" section
include_picture | false | If set to true, the result will include the profile picture thumbnail in a field named `main_picture_url_tile`.
picture_version | null | Can be set to `original`, `large`, `thumb`, or `thumb_large` to change the included picture version. The picture will be included in a field named `picture_url`. _(Only applies if `include_picture` is true)_
fields | name,gender | Can be used to modify the fields included in the response. Possible values are: `age`, `gender`, `gender_new`, `first_name`, `last_name`, `name`, `main_profession`, `professions`, `languages`, `representative`, `updated_at`.
order | id | Changes the order of returned results. Possible values are: `id`, `name`, `last_name`
direction | asc | Specifies the order direction of returned results. Possible values are: `asc` (ascending), `desc` (descending)
gender | null | Allows filtering by gender values. Possible values are: `male`, `female`, `transgender_female`, `transgender_male`, `non_binary`, `custom`.
updated_at[gte] | null | Allows filtering for profiles updated since the passed timestamp. Passed as an integer Unix timestamp.
acting_age[lte] | null | Filter profiles with acting_age less than or equal to the value
acting_age[gte] | null | Filter profiles with acting_age greater than or equal to the value
languages | null | Filter profiles by languages (using ISO 639-2 codes). Multiple languages can be separated by commas, e.g., `deu,eng`
q | null | Allows filtering by name. Uses trigram, so allows fuzzy & partial matches

### Response Fields

Field | Type | Description
--------- | ------- | -----------
id | number | Unique ID of the actor profile
age | number |
gender | string | `f` for female, `m` for male, `i` for diverse
gender_new | string | `female` for female, `male` for male, `transgender_male` for transgender male, `transgender_female` for transgender female, `non_binary` for non-binary, `custom` for custom set gender
gender_description | string | Custom information actors can enter about their gender identity (free text, max 75 characters)
gender_searchability | array of strings | List of genders the actor profile can be found under, e.g., `["female", "non_binary"]`. _This always at least includes the gender of the actor profile if visible._
name | string | Full name (i.e., first & last name). _Name can be retrieved separately by using the fields parameter._
first_name | string |
last_name | string |
main_profession | string | Main profession of the actor profile. Possible values: `actor`, `young_actor`, `performer`.
professions | array of strings | List of professions, e.g., `["schauspieler", "synchronsprecher"]`. _This includes the main_profession "schauspieler" (actor) or "nachwuchsdarsteller" (young_actor) when given._
languages | JSON Object | Format `{ "language": "skill level" }`
updated_at | string | Format ISO 8601
main_picture_url_tile | string | Profile picture URL (thumbnail version)
picture_url | string | Profile picture URL of specified version
picture_copyright | string | Copyright information for the profile picture
representative | JSON Object | "id" and "name" of the agent representing the actor

## Get a Specific Actor Profile

<Tabs groupId="api-examples">
  <TabItem value="curl" label="cURL" default>
    ```shell
    curl "https://www.filmmakers.eu/api/v1/actor_profiles/{id}" \
      -H "Authorization: Token token=API_KEY"
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript (Fetch)">
    ```javascript
    fetch('https://www.filmmakers.eu/api/v1/actor_profiles/{id}', {
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
    $actorProfileId = '{id}'; // Replace with the actual actor profile ID
    $apiKey = 'API_KEY'; // Replace with your actual API key
    $url = 'https://www.filmmakers.eu/api/v1/actor_profiles/' . $actorProfileId;

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
  <TabItem value="ruby" label="Ruby (Net::HTTP)">
    ```ruby
    require 'net/http'
    require 'json'

    actor_profile_id = '{id}' # Replace with the actual actor profile ID
    api_key = 'API_KEY' # Replace with your actual API key
    uri = URI("https://www.filmmakers.eu/api/v1/actor_profiles/#{actor_profile_id}")

    request = Net::HTTP::Get.new(uri)
    request['Authorization'] = "Token token=#{api_key}"

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    data = JSON.parse(response.body)
    puts data
    ```
  </TabItem>
</Tabs>

Replace `{id}` with the ID of the actor profile you want to retrieve.

##### Example Response

```json
{
  "id": 162,
  "first_name": "John",
  "last_name": "Doe",
  "filmmakers_url": "https://www.filmmakers.eu/actors/john-doe",
  "filmmakers_cd_url": "https://cd.filmmakers.eu/profil/castupload/162",
  "acting_age_from": 35,
  "acting_age_to": 45,
  "year_of_birth": 1980,
  "age": 41,
  "height": 170,
  "weight": 60,
  "state_code": "DE-RP",
  "accommodation_options": [
    "Berlin",
    "Frankfurt",
    "Köln"
  ],
  "homepage_url": "www.example.com",
  "imdb_link": "https://www.imdb.com/name/nm0000001",
  "imdb_id": "nm0000001",
  "facebook_page": "Filmmakers",
  "instagram_username": "Filmmakers",
  "sv_url": null,
  "wikipedia_url": "https://de.wikipedia.org/wiki/My_Page",
  "agency_profile_url": "https://www.my-agency/my-profile",
  "talent_agency_id": 1,
  "representative": {
    "id": 123,
    "name": "Jane Roe"
  },
  "profile_visibility": "public",
  "attribute_visibility": {
    "age": "public",
    "acting_age": "public",
    "gender": "public",
    "ethnic_appearances": "private",
    "figures": "private",
    "working_permits": "public"
  },
  "talent_agency_connections": [
    {
      "talent_agency_id": 1,
      "talent_agency_employee_id": 123,
      "agency_profile_url": "https://www.my-agency/my-profile",
      "talent_agency_name": "My primary agency",
      "categories": [
        "acting_agency"
      ],
      "regions": [
        "dach"
      ],
      "connection_type": "primary_agency"
    },
    {
      "talent_agency_id": 2,
      "talent_agency_employee_id": 321,
      "agency_profile_url": null,
      "talent_agency_name": "My PR agency",
      "categories": [
        "pr"
      ],
      "regions": [
        "italy"
      ],
      "connection_type": "secondary_agency"
    }
  ],
  "updated_at": "2021-06-22T16:14:11.519+02:00",
  "native_dialect": "rheinisch",
  "place_of_birth": "Darmstadt",
  "city": "Mainz",
  "gender": "m",
  "gender_new": "male",
  "gender_description": "genderfluid",
  "gender_searchability": [
    "male"
  ],
  "eye_color": "braun",
  "hair_color": "braun",
  "hair_length": "mittel",
  "ethnic_appearances": [
    "mitteleuropaisch"
  ],
  "ethnic_background": [
    "6471"
  ],
  "ethnic_background_details": [
    "6473"
  ],
  "ethnic_background_description": "My custom description",
  "figure": "normal",
  "pitch": "bariton",
  "nationalities": [
    "DE"
  ],
  "languages": {
    "deutsch": "muttersprachlich",
    "englisch": "fliessend"
  },
  "dialects": {
    "hessisch": "kann",
    "rheinisch": "kann"
  },
  "accents": {
    "osterreichisch": "kann"
  },
  "instruments": {
    "gitarre": "gut"
  },
  "sports": [
    "buhnenkampf"
  ],
  "dances": {
    "freestyle": "gut"
  },
  "main_profession": "actor",
  "specializations": [
    "synchronsprecher"
  ],
  "professions": [
    "schauspieler",
    "synchronsprecher"
  ],
  "singing": {
    "jazz": "grundkenntnisse"
  },
  "drivers_licenses": [
    "pkw-klasse-b-be"
  ],
  "licenses": [
    "fallschirmspringer-lizenz"
  ],
  "country": "DE",
  "state": "DE-RP",
  "special_skills": {
    "403": "gut"
  },
  "unions": [
    "bffs"
  ],
  "working_permits": [
    "EU-27",
    "GB"
  ],
  "about_me": "This is a text about me",
  "about_me_html": "<div>This is a text about me</div>",
  "locations": [
    {
      "name": "Berlin",
      "latitude": 52.52000659999999,
      "longitude": 13.404954,
      "place_id": "ChIJAVkDPzdOqEcRcDteW0YgIQQ",
      "type": "place",
      "country": "DE"
    },
    {
      "name": "Gdańsk",
      "latitude": 54.35202520000001,
      "longitude": 18.6466384,
      "place_id": "ChIJb_rUFBxz_UYRjb63Y_H7uZs",
      "type": "accommodation",
      "country": "PL"
    },
    {
      "name": "Munich",
      "latitude": 48.1351253,
      "longitude": 11.5819806,
      "place_id": "ChIJ2V-Mo_l1nkcRfZixfUq4DAE",
      "type": "accommodation",
      "country": "DE"
    },
    {
      "name": "Hamburg",
      "latitude": 53.5510846,
      "longitude": 9.9936818,
      "place_id": "ChIJuRMYfoNhsUcRoDrWe_I9JgQ",
      "type": "accommodation",
      "country": "DE"
    },
    {
      "name": "Cologne",
      "latitude": 50.937531,
      "longitude": 6.9602786,
      "place_id": "ChIJ5S-raZElv0cR8HcqSvxgJwQ",
      "type": "accommodation",
      "country": "DE"
    },
    {
      "name": "Berlin",
      "latitude": 52.52000659999999,
      "longitude": 13.404954,
      "place_id": "ChIJAVkDPzdOqEcRcDteW0YgIQQ",
      "type": "accommodation",
      "country": "DE"
    }
  ],
  "pictures": [
    {
      "id": 140,
      "copyright": "Jane Doe",
      "created_at": "2021-06-21T16:18:41.087+02:00",
      "url": "https://imgproxy.filmmakers.eu/production/b6ac24ef-7bbc-4486-bfc9-89fdce3a9fde.jpg",
      "versions": {
        "original": "https://imgproxy.filmmakers.eu/gqz46mqnA/rt:fit/w:3840/h:2160/f:jpg/ZS5qcGVn",
        "large": "https://imgproxy.filmmakers.eu/gqz46mqnA/rt:fit/w:1200/h:1200/f:jpg/ZS5qcGVn",
        "thumb": "https://imgproxy.filmmakers.eu/gqz46mqnA/rt:fill/el:1/c:528:528:nowe:250:0/w:190/h:190/g:no/f:jpg/ZS5qcGVn",
        "thumb_large": "https://imgproxy.filmmakers.eu/gqz46mqnA/rt:fill/el:1/c:528:528:nowe:250:0/w:500/h:500/g:no/f:jpg/ZS5qcGVn"
      },
      "orientation": "square",
      "dimensions": [
        370,
        370
      ],
      "crop_coordinates": {
        "x": 0,
        "y": 0,
        "w": 500,
        "h": 500
      },
      "main_picture": true,
      "year": 2021,
      "recorded_at": "2020-06-22T11:51:51.363+02:00"
    },
    {
      "id": 141,
      "copyright": "",
      "created_at": "2021-06-21T16:18:47.460+02:00",
      "url": "https://imgproxy.filmmakers.eu/production/5c5a1832-3ee4-495d-bfb0-03694dab0bd2.jpg",
      "versions": {
        "original": "https://imgproxy.filmmakers.eu/gqz46mqnA/rt:fit/w:3840/h:2160/f:jpg/ZS5qcGVn",
        "large": "https://imgproxy.filmmakers.eu/gqz46mqnA/rt:fit/w:1200/h:1200/f:jpg/ZS5qcGVn",
        "thumb": "https://imgproxy.filmmakers.eu/gqz46mqnA/rt:fill/el:1/c:528:528:nowe:250:0/w:190/h:190/g:no/f:jpg/ZS5qcGVn",
        "thumb_large": "https://imgproxy.filmmakers.eu/gqz46mqnA/rt:fill/el:1/c:528:528:nowe:250:0/w:500/h:500/g:no/f:jpg/ZS5qcGVn"
      },
      "orientation": "landscape",
      "dimensions": [
        365,
        360
      ],
      "main_picture": false,
      "year": 2021,
      "recorded_at": null
    }
  ],
  "external_showreel": "https://www.youtube.com/watch?v=xxxx",
  "external_showreels": [
    "https://www.youtube.com/watch?v=xxxx",
    "https://vimeo.com/xxxx"
  ],
  "showreels": [
    {
      "name": "Showreel 2021",
      "url": "https://www.filmmakers.eu/actors/john-doe/showreels/15",
      "type": "video"
    },
    {
      "name": "Showreel 2020",
      "url": "https://www.filmmakers.eu/actors/john-doe/showreels/16",
      "type": "video"
    },
    {
      "name":"Audioreel 2021",
      "url":"https://www.filmmakers.eu/actors/john-doe/showreels/17",
      "type":"audio"
    }
  ],
  "showreel_ids": [
    12345,
    12346
  ],
  "showreel_medium_ids": [
    123456,
    123457,
    123458,
    123459,
    123460
  ],
  "mentioned_in_blog_post_ids": [
    211,
    344
  ],
  "vita": {
    "primary_education": [
      {
        "name": "ABC School",
        "year_from": 2012
      }
    ],
    "award": [
      {
        "info": null,
        "name": "Avanca Film Festival - Best Performance",
        "year_from": 2017,
        "year_to": 2017,
        "award_nominated": true
      }
    ],
    "education": [
      {
        "info": null,
        "name": "123 School",
        "year_from": 2013,
        "year_to": 2014
      }
    ],
    "film": [
      {
        "info": null,
        "name": "Schneeflöckchen",
        "year_from": 2019,
        "year_to": 2020,
        "in_development": false,
        "role": "Jack",
        "role_type": "supporting",
        "distributor": null,
        "director": "Adolfo Kolmerer",
        "producer": null,
        "caster": null,
        "picture": {
          "url": "https://imgproxy.filmmakers.eu/gqz46mqnA"
        }
      },
      {
        "info": null,
        "name": "The Harmonica ",
        "year_from": 2018,
        "year_to": 2018,
        "in_development": false,
        "role": "Felix",
        "role_type": "leading",
        "distributor": null,
        "director": null,
        "producer": "Deutsche Film- und Fernsehakademie Berlin",
        "caster": null,
        "picture": {
          "url": null
        }
      }
    ],
    "television": [
      {
        "info": null,
        "name": "Mord mit Aussicht",
        "episode_name": "Sophie kommet doch all",
        "year_from": 2015,
        "year_to": 2016,
        "in_development": false,
        "type_genre": "series",
        "role": "Robert",
        "role_type": "episode_featured_part",
        "distributor": null,
        "director": null,
        "producer": null,
        "caster": null,
        "picture": {
          "url": null
        }
      }
    ],
    "theatre": [
      {
        "info": null,
        "name":"Das Dschungelbuch (Jungle Book)",
        "year_from":2001,
        "year_to":2002,
        "in_development": false,
        "type_genre": null,
        "favorite":false,
        "role":"Mowgli",
        "role_type": null,
        "director":"Robert Persche",
        "producer": null,
        "caster": null,
        "writer": null,
        "theater_name":"Stadttheater Klagenfurt",
        "theater_engagement_type": null,
        "picture": {
          "url": null
        },
        "distributor":"Stadttheater Klagenfurt"
      }
    ],
    "audio": [],
    "other": [],
    "internet": [],
    "commercial": []
  }
}
```

This endpoint retrieves a specific actor profile.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/actor_profiles/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the actor profile to retrieve

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
enum | null | If set to `translate`, attributes are translated if possible (e.g., gender will be `male` or `männlich` instead of `m`). _Note that hash and array attributes (e.g., dances / sports) will be joined to a comma-separated string when translating attributes._
locale | en | Translates attributes with closed lists; free text fields are only available in the entry language. Possible values are: `en`, `de`, `fr`, `it`, `es`, `pl`, `ro`, `ru`, `tr`. _This parameter only has an effect when `enum` is set to `translate`._

### Response Fields

See the example response above for an overview of included fields. Please note:

- **Deprecation**: `external_showreel` is deprecated. Use `external_showreels` instead.
- **Deprecation**: `pitch` is deprecated. Use `pitches` instead.
- **Deprecation**: `figure` is deprecated. Use `figures` instead.
- **Deprecation**: `native_dialect` is deprecated. Use `native_dialects` instead.
- **Deprecation**: `castupload_url` is deprecated. Use `filmmakers_url` instead.
- **Deprecation**: `castupload_professional_url` is deprecated. Use `filmmakers_cd_url` instead.
- **Deprecation**: `professions` is deprecated. Use `main_profession` and `specializations` instead.
- **Deprecation**: `ethnic_appearances` is deprecated. Use `ethnic_background`, `ethnic_background_details`, and `ethnic_background_description` instead.

It is not guaranteed that the example JSON structure shown is complete. Additional fields may be added without notice. The following table provides additional context for the individual fields visible in the example JSON structure:

Field | Type | Description
--------- | ------- | -----------
talent_agency_connections[].talent_agency_id | integer | ID of the talent agency
talent_agency_connections[].talent_agency_employee_id | integer | ID of the talent agency employee
talent_agency_connections[].agency_profile_url | string | Actor profile URL on the website of their agency
talent_agency_connections[].talent_agency_name | string | Name of the agency
talent_agency_connections[].categories | Array | Indicates the areas in which the agency represents the client. Possible values are "acting_agency", "advertising", "artist_management", "model_agency", "people_agency", "pr", "voice_agency", or "young_talent_agency". If the categories on the connection are empty, the categories of the talent agency are returned.
talent_agency_connections[].regions | Array | Indicates in which geographical regions the agency represents the client. If the regions on the connection are empty, the regions of the talent agency are returned. Possible values can be retrieved by using the attributes endpoint, see https://api.filmmakers.eu/attributes
talent_agency_connections[].connection_type | string | Indicates the type of agency connection, which can be either "primary_agency" (the main agency) or "secondary_agency". There can be multiple secondary agencies.
agency_profile_url | string | Actor profile URL on the website of their agency **Note** Please use talent_agency_connections[].agency_profile_url instead
talent_agency_id | integer | ID of the talent agency **Note** Please use talent_agency_connections[].talent_agency_id instead
representative.id | integer | ID of the talent agency employee **Note** Please use talent_agency_connections[].talent_agency_employee_id instead
representative.name | string | Name of the talent agency employee **Note** Please use talent_agency#employees.first_name/last_name instead
attribute_visibility | hash | Indicates per attribute `age`, `acting_age`, `gender`, `ethnic_appearances`, `figures`, and `working_permits` whether these are publicly visible on Filmmakers (`public`) or only visible to verified casting professionals (`private`)
profile_visibility | string | Visibility of the profile on Filmmakers (`public` or `private`)
showreel_ids | Array | IDs of showreels (see `showreels` endpoint)
showreel_medium_ids | Array | IDs of showreel media that are either connected to a showreel or credits/skills (see also `showreel_media` endpoint)
vita | hash | A collection of credits, where each entry contains structured data related to a specific credit. The entries are sorted by the following criteria: `in_development` (entries with `true` are prioritized), `year_to`/`year_from` (in descending chronological order), `position` (manually sorted by the user), and `id`. The credits are grouped by type, such as `education`, `television`, `theatre`, etc.
vita.x[].in_development | boolean | Indicates film projects that are still in development, meaning it has not been completed or released yet
ethnic_background | Array | Contains general ethnicities or heritages of the actor. Visibility depends on the setting for `ethnic_appearances` (as described above under _attribute_visibility_).
ethnic_background_details | Array | Contains specific ethnicities or heritages of the actor, e.g., specific countries.
ethnic_background_description | string | Contains a custom description of ethnicities or heritages entered by the actor.
about_me | string | Returned as plain text (stripped of any rich text formatting). This field is localized. If the `locale` query parameter is not provided, the API attempts to return the English (`en`) version of `about_me`. To request the `about_me` text in a specific language, use the `locale` query parameter (e.g., `?locale=de`). If the `about_me` content for the requested locale is not available, it will return null.
about_me_html | string | Returns an HTML version of `about_me` with **HTML markup**. Content is automatically sanitized. Allowed HTML tags include `a, b, br, div, em, h1, h2, h3, img, li, ol, p, strong, ul` and others.
mentioned_in_blog_post_ids | Array | IDs of blog posts in which the profile was mentioned
locations | Array | Places of residence (type: `place`) and housing options (type: `accommodation`). Places of residence are sorted on top.
