---
sidebar_label: 'Messages'
---

::::caution
The Messages API is in beta/early preview and may undergo changes. If you are interested in using them, please contact our support.
::::

# Messages

The Messages endpoint allows you to retrieve messages such as casting invitations and notifications sent via the Filmmakers platform.

## Get All Messages

```shell
curl "https://www.filmmakers.eu/api/v1/messages" \
  -H "Authorization: Token token=API_KEY"
```

> The above command returns JSON structured like this:

```json
[
  { "id": 1320154, "subject": "Notification: Project Sunrise" },
  { "id": 1320153, "subject": "Notification: The Reality" },
  { "id": 1320152, "subject": "Notification: Sunflowers for Happiness" },
  { "id": 1320151, "subject": "Notification: Sunrise on the Reaping" }
]
```

This endpoint retrieves all messages available with the access rights of the API key. Each object contains the unique ID and subject of the message.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/messages`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
page | 1 | Page to display – see "Pagination" section
per_page | 250 | Items per page – see "Pagination" section
fields | subject | Can be used to limit the fields included in the response. Possible values are: `subject`, `message_type`, `body`, `sender_name`. Multiple fields can be specified as a comma-separated list.

### Response Fields

Field | Type | Description
----- | ---- | -----------
id | integer | Unique ID of the message
subject | string | Subject of the message

---

## Get a Specific Message

```shell
curl "https://www.filmmakers.eu/api/v1/messages/{id}" \
  -H "Authorization: Token token=API_KEY"
```

> Replace `{id}` with the ID of the message you want to retrieve.

> The above command returns JSON structured like this:

```json
{
  "id": 1320154,
  "subject": "Notification: New Project Update",
  "body": "<html><body>Message content here...</body></html>",
  "message_id": "abc123xyz@cd.filmmakers.eu",
  "message_type": "project_notification",
  "created_at": "2025-03-24T11:59:30.696+01:00",
  "updated_at": "2025-03-24T11:59:30.696+01:00",
  "in_reply_to_id": null,
  "metadata": {
    "production_id": 999,
    "casting_call_id": 111
  },
  "sender": {
    "messageable_type": "CastingSystem::Entity",
    "messageable_id": 241,
    "name": "Sunrise Productions"
  },
  "primary_recipients": [
    {
      "messageable_type": "TalentAgency",
      "messageable_id": 25
    }
  ]
}
```

This endpoint retrieves a specific message by its ID, including all details and metadata.

### HTTP Request

`GET https://www.filmmakers.eu/api/v1/messages/{id}`

Replace `{id}` with the ID of the message you want to retrieve.

### Response Fields

Field | Type | Description
----- | ---- | -----------
id | integer | Unique ID of the message
subject | string | Subject of the message
body | string | Message body (may contain HTML)
message_id | string | Unique message identifier
message_type | string | Type of message (e.g., `casting_invitation`)
created_at | datetime | Creation timestamp
updated_at | datetime | Last update timestamp
in_reply_to_id | integer or null | ID of the message this is in reply to, if any
metadata | object | Additional metadata (e.g., `production_id`, `casting_call_id`)
sender | object | Sender information (type, ID, name)
primary_recipients | array | List of primary recipients (type, ID)
