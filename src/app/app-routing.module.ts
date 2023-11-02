import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { IndexClientComponent } from './client/pages/index/index.component';
import { IndexAdminComponent } from './admin/pages/index/index.component';
import { DetailsComponent } from './client/pages/details/details.component';
import { AddClassifiedAdsComponent } from './client/pages/add-classified-ads/add-classified-ads.component';
import { LoginComponent } from './client/pages/login/login.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    children: [
      { path: 'index', component: IndexClientComponent },
      {
        path: 'index/tinraovat/:id',
        component: DetailsComponent,
      },
      { path: 'create-classified-ads', component: AddClassifiedAdsComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'index', component: IndexAdminComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
