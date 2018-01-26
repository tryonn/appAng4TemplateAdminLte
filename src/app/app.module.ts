import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ROUTES } from './app.route';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from './pages/pages.module';
import { DashboardV1Component } from './dashboard/dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './dashboard/dashboard-v2/dashboard-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    FooterComponent,
    DashboardComponent,
    DashboardV1Component,
    DashboardV2Component
  ],
  imports: [
    BrowserModule,
    PagesModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
