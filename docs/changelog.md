---
sidebar_label: 'Changelog'
---

# Changelog

- (2025-05-28) **TalentAgencies#show**: Add new employee fields `function`, `instagram_username`, `imdb_link` and `about_me`
- (2025-04-01) **TalentAgencies#show**: Added new fields `facebook_page` and `instagram_username`.
- (2025-03-18) **CrewProfiles#index**: Allowed filtering crew profiles by `professions` array.
- (2025-03-17) **CrewProfiles#show**: Added web presence fields `imdb_link`, `imdb_id`, `facebook_page`, `instagram_username`, `wikipedia_url`.
- (2025-03-17) **TalentAgencies#show**: Added new field `associations`.
- (2025-03-10) **BlogPosts#index/BlogPosts#show**: Added new field `mentions`; added possibility to filter blog posts by mentioned actor profiles.
- (2025-03-10) **ActorProfiles#show**: Added new field `mentioned_in_blog_post_ids`.
- (2025-02-25) **CrewProfiles#show**: Added new field `about_me`.
- (2025-02-13) **ActorProfile#index**: Added new filters for `acting_age` & `languages`.
- (2025-02-08) **ActorProfiles#show/TalentAgencies#show**: Deprecated `twitter_handle`. This will be removed in a future API version.
- (2024-11-14) **ActorProfile#show**: Added new fields `working_permits` and `attribute_visibility.working_permits`.
- (2024-10-29) **ActorProfile#show**: Added `:thumb_large` 500x500 profile picture option.
- (2024-10-28) **API**: Optional OAuth Authorization added to all endpoints.
- (2024-09-26) **ActorProfile#show**: Added new fields `ethnic_background`, `ethnic_background_details`, and `ethnic_background_description`.
- (2024-08-16) **ActorProfile#show**: Exposed `talent_agency_connections`, which includes more details about the agency connections of a profile.
- (2024-07-01) **ActorProfile#show**: Added new field `gender_description`.
- (2024-05-20) **ActorProfile#show**: Added new field `gender_searchability`.
- (2024-05-16) **ActorProfile#index**: Added new field `gender_new`, which replaces 'diverse' value with a larger range of gender values.
- (2024-04-26) **ActorProfile#show**: Added new field `in_development` to Vita.
- (2024-04-12) **ActorProfile#show**: Added new fields `main_profession` and `specializations`.
- (2024-03-19) **ActorProfile#show**: Added new field `episode_name` to Vita.
- (2023-08-17) **ActorProfile#index**: Added possibility to filter by `updated_at`.
- (2023-05-31) **ActorProfile#index**:
  - Also emit `picture_copyright` if `include_picture` is specified.
  - Added query field `representative`.
- (2023-04-26) **ActorProfile#show**: Added `filmmakers_url` and `filmmakers_cd_url` (formerly `castupload_url` and `castupload_professional_url`).
- (2022-12-06) **ActorProfile#show**: Added `unions`.
- (2022-09-09) **ActorProfile#index**: Added `updated_at` as selectable field.
- (2022-01-26) **ActorProfile#show**: Added `pitches`, `figures`, `native_dialects`, `sport_skills`, `special_skills`.
- (2022-01-12) **ActorProfile#show**: Added new fields `station` / `theatre` / `writer` to Vita.
