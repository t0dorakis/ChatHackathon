# ChatHackathon

TODO:
- Moderation: https://beta.openai.com/docs/guides/moderation/moderation

## Run

### Comic

First, create an `.env` file in the root folder with the following content:

```
OPENAI_API_KEY="<YOUR_API_KEY>"
OPENAI_ORGANISATION="<YOUR_ORG_KEY>"
```

Now, from root folder:

`node comic/comic.js`


## Includes test calls
Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

Test calls are in the file [test-api.http](test-api.http)

## OpenAPI

[API documentation](https://beta.openai.com/docs/api-reference/introduction?lang=node.js)