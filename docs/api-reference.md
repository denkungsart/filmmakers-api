---
sidebar_label: 'API Reference'
---

# API Reference

This page provides a quick overview of all available API endpoints. Click on any endpoint to view detailed documentation.

## Base URL

All API requests should be made to:

```
https://www.filmmakers.eu/api/v1/
```

## Endpoints Overview

| Resource | Method | Endpoint | Description | Status |
|----------|--------|----------|-------------|--------|
| [Attributes](/attributes#get-all-attributes) | GET | `/attributes` | List all available attributes | Stable |
| [Attributes](/attributes#get-keyvalue-pairs-for-attributes) | GET | `/attributes/{key}` | Get key/value pairs for a specific attribute | Stable |
| [Actor Profiles](/actor-profiles#get-all-actor-profiles) | GET | `/actor_profiles` | List all actor profiles | Stable |
| [Actor Profiles](/actor-profiles#get-a-specific-actor-profile) | GET | `/actor_profiles/{id}` | Get a specific actor profile | Stable |
| [Crew Profiles](/crew-profiles#get-all-crew-profiles) | GET | `/crew_profiles` | List all crew profiles | Stable |
| [Crew Profiles](/crew-profiles#get-a-specific-crew-profile) | GET | `/crew_profiles/{id}` | Get a specific crew profile | Stable |
| [Talent Agencies](/talent-agencies#get-talent-agency-data) | GET | `/talent_agencies/{id}` | Get talent agency information | Stable |
| [Blog Posts](/blog-posts#get-all-blog-posts) | GET | `/blog_posts` | List all blog posts | Stable |
| [Blog Posts](/blog-posts#get-a-specific-blog-post) | GET | `/blog_posts/{id}` | Get a specific blog post | Stable |
| [Showreels](/showreels#get-a-specific-showreel) | GET | `/showreels/{id}` | Get a specific showreel | Stable |
| [Showreel Media](/showreel-media#get-specific-showreel-media) | GET | `/showreel_media/{id}` | Get specific showreel media | Stable |
| [Messages](/messages#get-all-messages) | GET | `/messages` | List all messages | Beta |
| [Messages](/messages#get-a-specific-message) | GET | `/messages/{id}` | Get a specific message | Beta |
| [Casting Calls](/casting-calls#get-all-casting-calls) | GET | `/casting_calls` | List all casting calls | Beta |
| [Casting Calls](/casting-calls#get-a-specific-casting-call) | GET | `/casting_calls/{id}` | Get a specific casting call | Beta |

## Authentication

All endpoints require authentication. You can authenticate using either:

- **Token-based authentication**: Pass your API key in the `Authorization` header
- **OAuth 2.0**: Use the client credentials flow for access tokens

See [Authentication](/authentication) for details.

## Common Parameters

Most list endpoints support the following parameters:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | Page number for pagination | 1 |
| `per_page` | Number of results per page | 25 |
| `locale` | Response language (en, de, fr, it, es, pl, ro, ru, tr) | en |
| `fields` | Comma-separated list of fields to include | all |

See [Pagination](/pagination) for more details on navigating results.
