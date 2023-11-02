import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexClientComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { NavBarComponent } from './pages/components/header/nav-bar/nav-bar.component';
import { TopBannerComponent } from './pages/components/header/top-banner/top-banner.component';
import { DropdownsCategoryComponent } from './pages/components/header/dropdowns-category/dropdowns-category.component';
import { ClientComponent } from './client.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './pages/components/footer/footer.component';
import { HeroesComponent } from './pages/components/heroes/heroes.component';
import { IndexPaginationComponent } from './pages/index/index-pagination/index-pagination.component';
import { LoginComponent } from './pages/login/login.component';
import { AddClassifiedAdsComponent } from './pages/add-classified-ads/add-classified-ads.component';

@NgModule({
  declarations: [
    ClientComponent,
    IndexClientComponent,
    DetailsComponent,
    HeaderComponent,
    NavBarComponent,
    TopBannerComponent,
    DropdownsCategoryComponent,
    FooterComponent,
    HeroesComponent,
    IndexPaginationComponent,
    LoginComponent,
    AddClassifiedAdsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, NgbModule],
})
export class ClientModule {}
