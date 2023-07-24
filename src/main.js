import { createApp } from 'vue'
import App from './App.vue'

let elementApp = createApp(App);
// 애플리케이션 인스턴스 설정
elementApp.config.errorHandler = (err) =>  {
    console.log(err)
}
elementApp.mount('#app')