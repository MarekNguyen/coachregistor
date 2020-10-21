import { createApp } from 'vue';
import router from './router'
import App from './App.vue'
import store from './store/index'

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseBadge from './components/ui/BaseButton.vue'

const app = createApp(App)
app.use(router);
app.use(store);
app.component('app-card', BaseCard)
app.component('app-button', BaseButton)
app.component('app-badge', BaseBadge)
app.mount('#app');
