import { createSSRApp } from 'vue'

export function createApp() {
  return createSSRApp({
    data () {
      return {
        msg: 'hello'
      }
    },
    template: `
      <h1>{{ msg }}</h1>
        <input v-model="msg" />
        <Teleport to="head">
          <meta name="test" :content="msg">
        </Teleport>
        <Teleport to="#footer">
          footer {{ msg }}
        </Teleport>
      `
  })
}
