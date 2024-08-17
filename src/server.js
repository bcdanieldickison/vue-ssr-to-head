import express from 'express'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app.js'

const server = express()

server.get('/', async (req, res) => {
  const app = createApp()
  const ctx = { teleports: {} }

  const html = await renderToString(app, ctx)
  console.debug("get / with teleports", ctx.teleports)
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <script type="importmap" src="/import-map.json"></script>
        <script type="module" src="/src/client.js"></script>
        ${ctx.teleports.head}
      </head>
      <body>
        <div id="app">${html}</div>
        <div id='footer'>${ctx.teleports['#footer']}</div>
      </body>
    </html>
  `)
})

server.use(express.static('.'))

server.listen(3001, () => {
  console.log('ready http://localhost:3001')
})
