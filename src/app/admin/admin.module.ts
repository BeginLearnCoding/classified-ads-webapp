import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexAdminComponent } from './pages/index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    IndexAdminComponent
  ],
  imports: [
    CommonModule, AppRoutingModule, NgbModule
  ],
})
export class AdminModule { }
