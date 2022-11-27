import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// from  https://github.com/stroblp/svelte-persistent-store
// from !!! https://mattjennings.io/blog/how-to-enable-hmr-for-sveltekit-on-gitpod
 
export default defineConfig({
  plugins: [svelte()],
  
  // server: {
  //   // configure vite for HMR with Gitpod
  //   hmr: process.env.GITPOD_WORKSPACE_URL
  //     ? {
  //       // removes the protocol and replaces it with the port we're connecting to
  //       host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-'),
  //       //host:$GITPOD_WORKSPACE_URL,
  //       protocol: 'wss',
  //       clientPort: 443
  //     }
  //     : true
  // },

  vite: {
    server: {
      // configure vite for HMR with Gitpod
      hmr: process.env.GITPOD_WORKSPACE_URL
        ? {
            // removes the protocol and replaces it with the port we're connecting to
            host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-'),
            protocol: 'wss',
            clientPort: 443
          }
        : true
    }
  }



   //base:"/svelte_route/"
})



// import { defineConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()]
// })
