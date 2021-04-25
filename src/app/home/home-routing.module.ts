import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'configuration',
        loadChildren: () => import('../configuration/configuration.module').then( m => m.ConfigurationPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'service',
        loadChildren: () => import('../service/service.module').then( m => m.ServicePageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'chatmessage',
        loadChildren: () => import('../chatmessage/chatmessage.module').then( m => m.ChatmessagePageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'newservice',
        loadChildren: () => import('../newservice/newservice.module').then( m => m.NewservicePageModule),
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {
}
