import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ContentViewWrapperComponent } from './dashboard/contentViewWrapper/contentViewWrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Login } from './login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentViewWrapperComponent,
    DashboardComponent,
    Login
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
