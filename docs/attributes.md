---
sidebar_label: 'Attributes'
---

# Attributes

## Get all attributes

```shell
curl "https://www.filmmakers.eu/api/v1/attributes/" \
  -H "Authorization: Token token=API_KEY"
```

> The above command returns an Array structured like this:

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

This endpoint retrieves all possible profile attributes that are closed lists like languages or nationalities as well as attributes for credits/vita.

For countries ISO 3166-1 alpha-2 codes are used [https://en.wikipedia.org/wiki/ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). For federal states (states/subdivisions) ISO 3166-2 are used, e.g. for Germany: [https://en.wikipedia.org/wiki/ISO_3166-2:DE](https://en.wikipedia.org/wiki/ISO_3166-2:DE). Since the ISO lists are standardized (and extensive), they are not present in this endpoint for the time being.

## Get key/value pairs for attributes

```shell
curl "https://www.filmmakers.eu/api/v1/attributes/xxx" \
  -H "Authorization: Token token=API_KEY"
```

> The above command returns JSON structured like this (e.g. for nationalities):

```json
{
  "AD":"Andorran",
  "AE":"United Arab Emirates",
  "AF":"Afghan",
  "AG":"Antigua and Barbuda",
  "AL":"Albanian",
  "AM":"Armenian",
  "AO":"Angolan",
  "AR":"Argentinean",
  "AT":"Austrian",
  "AU":"Australian",
  ...
}
```

This endpoint retrieves all possible key/value pair for one of the attributes. Pass one of the supported locales (see above) as param to retrieve localized values.
