---
sidebar_label: 'Webhooks'
---

# Webhooks

A webhook is an endpoint on your server that receives requests from Filmmakers, notifying you about events for actor profiles such as a profile edit. This requires a new endpoint on your server such as https://www.example.com/webhooks/filmmakers which should be publicly accessible and allow unauthenticated POST requests. Note that HTTPS URLs are required for all webhook endpoints.

**Read the event data**

Filmmakers sends the event data in the request body. Each event is structured as an Event object with a type, timestamp, and related Filmmakers resource nested under data (currently only an actor profile id - see example on the right)

```json
{
  "type": "actor_profile.updated",
  "created": 1633887337,
  "data": {
    "id": 123
  }
}
```

There are currently two event types: `actor_profile.updated` and `actor_profile.deleted`. Note that update events are grouped if they occur within a reasonable timeframe, e.g. you might only receive 1 webhook if an actor profile is updated several times within a short timeframe.

**Return a 200 response**

Send a successful 200 response to Filmmakers as quickly as possible because the event is retried with an exponential back off if a response isn't sent within a reasonable time. This means that you should write any long-running processes as code that can run asynchronously outside the webhook endpoint.

**Verify requests are sent by Filmmakers**

```
X-Signature: t=1492774577, v1=5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd
```

All webhook events are signed by including a signature in each event's header. This allows you to verify that the events were sent by Filmmakers, not by a third party. The Api key is used as secret to sign webhook events. Signatures are generated using a hash-based message authentication code (HMAC) with SHA-256.

The `X-Signature` header included in each signed event contains a timestamp and one signature. The timestamp is prefixed by `t=`, and the signature is prefixed by a scheme. Schemes start with `v`, followed by an integer. Currently, the only signature scheme is `v1`.

You can verify the signature on your side as follows (see example on the right in Ruby):

```ruby
# Step 1: Extract the timestamp and signatures from the header
signature = request.headers["X-Signature"]
  .split(",")
  .map { |part| part.split("=") }
  .to_h
# (this returns a hash like { "t" => 1492774577, "v1" => "5257a86..." })

# Step 2: Prepare the signed_payload string
payload = request.body.read
signed_payload = "#{signature['t']}.#{payload}"

# Step 3: Determine the expected signature
expected_signature = OpenSSL::HMAC.hexdigest(
  OpenSSL::Digest.new("sha256"),
  "YOUR_FILMMAKERS_API_KEY",
  signed_payload
)

# Step 4: Compare the signatures
expected_signature == signature["v1"]
```

:::caution
Webhooks are not yet generally available. If you are interested in using them please contact our support
:::
