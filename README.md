# Vue SSR to `<head>`

Testing server-side rendering into the `<head>` of the document using `<Teleport to='head'>`. Alas this doesn’t work well at the moment because Vue, when hydrating, expects Teleport contents to match exactly the innerHtml of the target element. This results in duplicate content ending up in the head.

To start:

```sh
npm install
npm run server

open http://localhost:3001
```
