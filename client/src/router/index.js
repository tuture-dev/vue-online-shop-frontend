import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Detail from '@/pages/Detail';

// Admin Components
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';
import Manufacturers from '@/pages/admin/Manufacturers';
import NewManufacturers from '@/pages/admin/NewManufacturers';
import EditManufacturers from '@/pages/admin/EditManufacturers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
        {
          path: 'manufacturers',
          name: 'Manufacturers',
          component: Manufacturers,
        },
        {
          path: 'manufacturers/new',
          name: 'NewManufacturers',
          component: NewManufacturers,
        },
        {
          path: 'manufacturers/edit/:id',
          name: 'EditManufacturers',
          component: EditManufacturers,
        },
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    }
  ],
});
