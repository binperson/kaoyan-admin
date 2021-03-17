import { createApp } from 'vue'
import App from './App.vue'

import { setupI18n } from '/@/locales/setupI18n';

import router, { setupRouter } from '/@/router';

import { isDevMode } from '/@/utils/env';

(async () => {
  const app = createApp(App);

  // 多语言配置
  await setupI18n(app);

  // 配置路由
  // setupRouter(app);

  // await router.isReady();

  app.mount('#app', true)

  // 开发环境生效
  if (isDevMode()) {
    // app.config.performance = true;
    window.__APP__ = app;
  }
})()
