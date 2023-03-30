import type { AppRouteModule } from '/@/router/types';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    // {
    //   path: 'ltp',
    //   name: 'Ltp',
    //   component: () => import('/@/views/dashboard/ltp/index.vue'),
    //   meta: {
    //     // affix: true,
    //     title: t('routes.dashboard.ltp'),
    //   },
    // },
    // {
    //   path: 'analysis',
    //   name: 'Analysis',
    //   component: () => import('/@/views/dashboard/analysis/index.vue'),
    //   meta: {
    //     // affix: true,
    //     title: t('routes.dashboard.analysis'),
    //   },
    // },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
    {
      path: 'appendix',
      name: 'Appendix',
      component: IFrame,
      meta: {
        frameSrc: 'https://ltp.ai/docs/appendix.html',
        title: t('routes.dashboard.appendix'),
      },
    },
  ],
};

export default dashboard;
