---
sidebar_label: 'Authentication'
---

# Authentication

## Token-Based

Once you have been issued an API key, you can use the following code to authorize requests:

```shell
curl "api_endpoint_here" \
  -H "Authorization: Token token=API_KEY"
```

Filmmakers expects the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: Token token=API_KEY`

:::note
You must replace `API_KEY` with your personal API key.
:::

## OAuth

:::caution
OAuth support is not yet generally available. If you are interested in using it, please contact our support.
:::

The Filmmakers API supports the OAuth flow with refresh tokens.

### Setting Up OAuth Access

Once you have been issued an API key with OAuth Authorization enabled, you can use the following configuration from your client code:

[Filmmakers OpenID Configuration](https://www.filmmakers.eu/.well-known/openid-configuration)

See the example below on how to fetch the OAuth Access Token with curl.

```shell
export CLIENT_ID="your-client-id-goes-here"
export CLIENT_SECRET="your-client-secret-goes-here"
curl -s -X POST "https://www.filmmakers.eu/oauth/token" \
           -H "Content-Type: application/x-www-form-urlencoded" \
           --data-urlencode "grant_type=client_credentials" \
           --data-urlencode "client_id=$CLIENT_ID" \
           --data-urlencode "client_secret=$CLIENT_SECRET" \
           --data-urlencode "scope=public"
```

```json
{"access_token":"Uvm37RVcZano399REpMXh837fDT-jtSc0lTvmEexpKI","token_type":"Bearer","expires_in":7200,"scope":"public","created_at":1730119409}
```

:::note
You must replace `CLIENT_ID` and `CLIENT_SECRET` with your credentials.
:::

### Using OAuth Access Tokens

Filmmakers expects the OAuth Access Token to be included in all API requests to the server in a header that looks like the following:

`Authorization: Bearer ACCESS_TOKEN`

OAuth access tokens expire after a set period (currently 120 minutes, though this may change in the future) and must be refreshed. Your client software is responsible for automating the OAuth flow. You can always retrieve the expiry time of an access token from the introspection endpoint listed in the [Filmmakers OpenID Configuration](https://www.filmmakers.eu/.well-known/openid-configuration).

```shell
curl -I https://www.filmmakers.eu/api/v1/actor_profiles -H "Authorization: Bearer $ACCESS_TOKEN" -H "Accept: application/json"
```

```text
HTTP/1.1 200 OK
```

:::note
You must replace `ACCESS_TOKEN` with a non-expired OAuth Access Token.
:::

### Introspecting Tokens

Token information can be retrieved from the `introspection_endpoint` (see [Filmmakers OpenID Configuration](https://www.filmmakers.eu/.well-known/openid-configuration)).

```shell
curl -X POST https://www.filmmakers.eu/oauth/introspect \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "token=ACCESS_TOKEN" \
  -u "CLIENT_ID:CLIENT_SECRET"
```

:::note
You must replace `CLIENT_ID` and `CLIENT_SECRET` with your credentials and `ACCESS_TOKEN` with your OAuth Access Token.
:::
