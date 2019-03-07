import Account from '../pages/Account/Account.vue'
import Classify from '../pages/Classify/Classify.vue'
import GeneralThings from '../pages/GeneralThings/GeneralThings.vue'
import Home from '../pages/Home/Home.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Login from '../pages/Login/Login.vue'
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
        meta: {
            showFooter: true
          }
      },
      {
        path: '/GeneralThings',
        component: GeneralThings,
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