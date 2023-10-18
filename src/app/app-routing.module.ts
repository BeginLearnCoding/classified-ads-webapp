import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { IndexComponent } from './client/pages/index/index.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    children: [{ path: 'index', component: IndexComponent }],
  },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
