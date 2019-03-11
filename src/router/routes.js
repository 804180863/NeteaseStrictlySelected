import Account from '../pages/Account/Account.vue'
import Classify from '../pages/Classify/Classify.vue'
import GeneralThings from '../pages/GeneralThings/GeneralThings.vue'
import Tab from '../pages/GeneralThings/Tab.vue'
import Home from '../pages/Home/Home.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'

import Login from '../pages/Login/Login.vue'
import ClassifyList from '../pages/Classify/ClassifyList'
export default [
    {
      path: '/Account',
      component: Account,
      meta: {
        showFooter: false
      }
    },
    {
        path: '/Classify',
        component: Classify,
        children:[
          {
          path: '/Classify/ClassifyList',
          component: ClassifyList,
          meta: {
            showFooter: true
          }
        },
        {
          path: '',
          redirect:'/Classify/ClassifyList',
          meta: {
            showFooter: true
          }
        }
        ],
        meta: {
            showFooter: true
          }
      },
      {
        path: '/GeneralThings',
        component: GeneralThings,
        redirect:'/GeneralThings/tab/0',
        children:[
          {
          path: '/GeneralThings/Tab/:id',
          component: Tab,
          meta: {
            showFooter: true
          }
        },],
        meta: {
            showFooter: true
          }
      },
      {
        path: '/Home',
        component: Home,
        meta: {
            showFooter: true
          }
      },
      {
        path: '/Account/Login',
        component: Login,
        meta: {
            showFooter: false
          }
      },
      {
        path: '/ShoppingCart',
        component: ShoppingCart,
        meta: {
            showFooter: true
          }
      },
      {
        path: '/',
        redirect: '/Home',
        meta: {
            showFooter: true
          }
      }
  ]