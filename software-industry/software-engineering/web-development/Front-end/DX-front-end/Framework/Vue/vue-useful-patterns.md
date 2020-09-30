# Project management
## vue.config.js --> Resource management


## scss/css architecture practices
```
// vue projects
// Pros:
// Cons:

- src-|
      |-scss-|-abstracts-|- _mixins.scss // duh
      |      |           |- _variables.scss // duh
      |      |- base-|- _base.scss // Compatibility, device, global setting
      |      |       |- _typography.scss  // body
      |      |- layout-|- *
      |      |- app.scss // import all
      |-view
      |-App.vue



```

## Use third party UI library
```javascript
// Assume that you are familiar with the basic vue project architecture
// If not, then keep RTFM

// package.json: Install whatever you wanna install

// main.js
import { whateverLibraryUwannaImport} from 'whateverPackageDotJSONdependencyUinstalled'

library.add(whateverLibraryUwannaImport)  // pascal

Vue.component('whatever-library-u-wanna-import', whateverLibraryUwannaImport )

// component/whateverComponent.vue

<template>
    <whatever-library-u-wanna-import></whatever-library-u-wanna-import>
</template>



// Example
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faCode, faPortrait, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye, faCode, faGithub, faLinkedin, faEnvelope, faPortrait, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// component
<font-awesome-icon :icon="['fab', 'linkedin']" />

```

# Data interaction
## Interact with ```data```
