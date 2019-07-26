import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/product',
        pathMatch: 'full'
      },
      {
        path: 'material',
        loadChildren:
          './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/mat-icon.module#IconsModule'
      },
      {
        path: 'product',
        loadChildren:'./product/product.module#ProductModule'
      },
      {
        path: 'category',
        loadChildren:'./category/category.module#CategoryModule'
      } 
    ]
  }
];
