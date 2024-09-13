import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../components/common/notFound'

import TaskList from '../pages/task/list'
import TaskEdit from '../pages/task/edit'
import TaskLog from '../pages/taskLog/list'

import NotificationEmail from '../pages/system/notification/email'
import NotificationSlack from '../pages/system/notification/slack'
import NotificationWebhook from '../pages/system/notification/webhook'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      component: NotFound,
      meta: {
        noNeedAdmin: true
      }
    },
    {
      path: '/',
      redirect: '/task'
    },
    {
      path: '/task',
      name: 'task-list',
      component: TaskList,
      meta: {
        noNeedAdmin: true
      }
    },
    {
      path: '/task/create',
      name: 'task-create',
      component: TaskEdit
    },
    {
      path: '/task/edit/:id',
      name: 'task-edit',
      component: TaskEdit
    },
    {
      path: '/task/log',
      name: 'task-log',
      component: TaskLog,
      meta: {
        noNeedAdmin: true
      }
    },
    {
      path: '/system',
      redirect: '/system/notification/email'
    },
    {
      path: '/system/notification/email',
      name: 'system-notification-email',
      component: NotificationEmail
    },
    {
      path: '/system/notification/slack',
      name: 'system-notification-slack',
      component: NotificationSlack
    },
    {
      path: '/system/notification/webhook',
      name: 'system-notification-webhook',
      component: NotificationWebhook
    }
  ]
})

export default router
