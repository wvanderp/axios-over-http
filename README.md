# Axios-over-HTTP

has this ever happened to you?

you want to use axios, but your endpoint will not provide cors headers, or you want to download a file.

well, now you can! with axios-over-http, you can use axios over http!

you only need to setup a server and axios-over-http will do the rest!

## usage

```bash
npm install axios-over-http
```

server side:

we use express to do most of the heavy lifting for us, so its required to use this package.

we have implemented a router that is plug and play, so you only need to add it to your express app.

the url is configurable, but the default is `/axios`.

```js
import express from 'express'
import { axiosOverHttpEndpoint } from 'axios-over-http'

const app = express()

app.use('/axios', axiosOverHttpEndpoint);

app.listen(3000)
```

client side:

client side is just like using axios, but you need to specify the url of the server.
we currently only support the config style of axios. (dedicated get, post, etc. functions are not supported. let us know if you need them!)

the first argument is the url of the server, the second is the full featured axios config object.

```js
import axiosOverHttp from 'axios-over-http'

const response = await axiosOverHttp(
    'http://localhost:3000/axios',
    {
        method: 'get',
        url: 'https://example.com',
    }
);

console.log(response.data);
 ```

the response is similar to axios, but with a few differences:

TODO: document the differences :)
