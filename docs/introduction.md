---
sidebar_label: 'Introduction'
slug: /
---

# Introduction

Filmmakers provides a RESTful JSON API with OAuth and token-based authentication. You can request an API key with [our support](https://www.filmmakers.eu/contact/new). The permission scope of the API key varies depending on the use case, so when contacting us be sure to specify the desired use case (e.g. you plan on using Filmmakers data for a website).

# API updates and backwards compatibility

While we won't be introducing any major changes, we do plan to add new features and endpoints over time. Below is a list of changes that we consider backwards compatible:

* Adding new fields or links to responses
* Adding new resources or endpoints
* Adding of new (optional) query parameters
* Changing the default page length for paginated resources
* Modifying the attributes of individual fields (including adding, removing, or modifying values). Updated lists can be retrieved via the attributes endpoint (see dedicated section)
* Updating translations for individual attributes or skill levels

Please bear this in mind when programming against our API, and try to ensure that these non-breaking changes don't break your code.

If we do introduce a breaking change, we will create new endpoints with a new version prefix in the URI.
