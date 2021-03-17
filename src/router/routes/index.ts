import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};


export const basicRoutes = [LoginRoute]