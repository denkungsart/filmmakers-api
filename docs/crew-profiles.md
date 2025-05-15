---
sidebar_label: 'Crew Profiles'
---

# Crew Profiles

## Get All Crew Profiles

Here is an example request:

```shell
curl "https://www.filmmakers.eu/api/v1/crew_profiles" \
  -H "Authorization: Token token=API_KEY"
```

> The above command returns JSON structured like this:

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

This endpoint retrieves all crew profiles available with the access rights of the API key. Most of the time, it is scoped to a talent agency.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/crew_profiles`

### Query Parameters

| Parameter         | Default | Description |
|-------------------|---------|-------------|
| page              | 1       | Page to display – see "Pagination" section |
| per_page          | 250     | Items per page – see "Pagination" section |
| gender            | null    | Allows filtering by gender values. Possible values are: `male`, `female`, `transgender_female`, `transgender_male`, `non_binary`, `custom`. Returned as `m`, `f`, or `i` in the JSON response (depending on internal mapping). |
| updated_at[gte]   | null    | Allows filtering for profiles updated since the passed timestamp. Passed as an integer Unix timestamp. |
| q                 | null    | Allows filtering by name. Uses trigram, so allows fuzzy & partial matches. |
| include_picture   | false   | If set to `true`, the result will include the profile picture thumbnail in a field named `main_picture_url_tile`. |
| picture_version   | null    | Can be set to `original`, `large`, `thumb`, or `thumb_large` to change the included picture version. The picture will be included in a field named `picture_url`. _(Only applies if `include_picture` is `true`.)_ |
| fields            | name,gender | Can be used to modify the fields included in the response. Allowed fields are: `name`, `first_name`, `last_name`, `gender`, `professions`, `languages`, `representative`, `updated_at` |
| order             | id      | Changes the order of returned results. Allowed values: `id`, `name`, `last_name`. |
| professions[]     | null    | Filter crew profiles by professions – allows passing multiple profession names using array form of the parameter, e.g., `professions[]=regie&professions[]=kamera`. Allowed values: `regie`, `autor`, `kamera`, `komponist`, `dramaturg`, `schnitt`. |

> **Note:**
> - Only visible showreels and vita entries are returned.
> - Pictures that are invisible or still processing are skipped.
> - The `representative` field is only present if the crew member is represented by a talent agency employee.
> - If a user requests a forbidden or unknown field in `fields`, it is ignored (not an error).

### Response Fields

| Field                 | Type             | Description |
|-----------------------|------------------|-------------|
| id                    | number           | Unique ID of the crew profile |
| name                  | string           | Full name of the crew member (usually first & last name) |
| gender                | string           | `f` for female, `m` for male, `i` for diverse |
| professions           | array of strings | A list of professions, e.g., `["regie", "kamera"]` |
| main_picture_url_tile | string           | Profile picture URL (thumbnail version) if `include_picture` is set |
| picture_url           | string           | Profile picture URL of the specified version if `picture_version` is set |
| picture_copyright     | string           | Copyright information |
| representative        | JSON Object      | Contains "id" and "name" of the talent agency employee |
| updated_at            | string           | Format ISO 8601 |

---

## Get a Specific Crew Profile

Example request:

```shell
curl "https://www.filmmakers.eu/api/v1/crew_profiles/123" \
  -H "Authorization: Token token=API_KEY"
```

> The above command returns JSON structured like this:

```json
{
  "id": 162,
  "first_name": "John",
  "last_name": "Doe",
  "year_of_birth": 1980,
  "place_of_birth": "Berlin",
  "professions": ["regie", "autor"],
  "nationalities": ["DE", "FR"],
  "languages": {
    "deutsch": "muttersprachlich",
    "englisch": "fliessend"
  },
  "accommodation_options": [
    "Berlin",
    "Köln"
  ],
  "about_me": "This is a text about me.",
  "representative": {
    "id": 123,
    "name": "Jane Roe"
  },
  "talent_agency_id": 1,
  "pictures": [
    {
      "id": 140,
      "copyright": "John Doe",
      "url": "https://imgproxy.filmmakers.eu/production/abc.jpg",
      "versions": {
        "original": "https://imgproxy.filmmakers.eu/...",
        "large": "https://imgproxy.filmmakers.eu/...",
        "thumb": "https://imgproxy.filmmakers.eu/...",
        "thumb_large": "https://imgproxy.filmmakers.eu/..."
      },
      "orientation": "portrait",
      "dimensions": [50, 64],
      "crop_coordinates": {
        "x": 0,
        "y": 36,
        "w": 357,
        "h": 357
      },
      "main_picture": true,
      "year": 2020,
      "recorded_at": "2020-12-23T18:16:52+00:00"
    }
  ],
  "external_showreels": [
    "https://youtube.com/john-doe/video"
  ],
  "showreels": [
    {
      "name": "My Showreel",
      "url": "https://www.filmmakers.eu/crew/john-doe/showreels/15",
      "type": "video"
    }
  ],
  "showreel_ids": [12345],
  "showreel_medium_ids": [123456],
  "vita": {
    "film": [
      {
        "name": "Sample Film",
        "year_from": 2019,
        "year_to": 2019
      }
    ],
    "television": [],
    "theatre": [],
    "award": []
  },
  "homepage_url": "https://www.example.com",
  "agency_profile_url": "https://www.my-agency/my-profile",
  "imdb_link": "https://www.imdb.com/name/nm1234",
  "imdb_id": "nm1234",
  "facebook_page": "my-facebook-page",
  "instagram_username": "my-instagram-name",
  "wikipedia_url": "https://de.wikipedia.org/wiki/my-wikipedia-page",
  "country": "DE",
  "state": "DE-RP",
  "gender": "m",
  "updated_at": "2021-06-22T16:14:11.519+02:00"
}
```

This endpoint retrieves a specific crew profile.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/crew_profiles/<ID>`

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| ID        | The ID of the crew profile to retrieve |

### Query Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| enum      | null    | If set to `translate`, attributes are translated if possible (e.g., gender will be `male` or `männlich` instead of `m`). Note that arrays and hashes will be joined to strings when translating. |
| locale    | en      | Translates attributes with closed lists. Possible values are: `en`, `de`, `fr`, `it`, `es`, `pl`, `ro`, `ru`, `tr`. Only has an effect if `enum` is set to `translate`. |

### Response Fields

The JSON structure will include relevant crew-related fields similar to those shown above. Not all fields are guaranteed to appear in every profile, and additional fields may be added without notice. Important fields include:

- **id**: Unique ID of the crew profile
- **first_name**, **last_name**, **name**: Strings representing the person's name
- **gender**: `m`, `f`, or `i` in the default form; can be expanded/translated if `enum=translate` is set
- **professions**: Array of strings indicating the crew member’s areas of expertise (e.g., `["regie", "autor", "kamera"]`)
- **languages**: JSON object, e.g., `{ "deutsch": "muttersprachlich" }`
- **representative**: JSON object with `id` and `name` of the representing agent
- **talent_agency_id**: ID of the primary talent agency representing the crew member
- **pictures**: Array of JSON objects with information about each uploaded picture
- **showreels**, **showreel_ids**, **showreel_medium_ids**: Showreels connected to the profile
- **vita**: Structured data about film/theatre/TV credits, awards, etc.
- **country**, **state**: Country and state codes (or translated values if `enum=translate` is used)
