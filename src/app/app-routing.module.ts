import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewTrackingComponent } from './pages/new-tracking/new-tracking.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicesComponent } from './pages/services/services.component';
import { TrackingEditComponent } from './pages/tracking-edit/tracking-edit.component';
import { TrackingListComponent } from './pages/tracking-list/tracking-list.component';
import { TrackingPageComponent } from './pages/tracking-page/tracking-page.component';


const routes: Routes = [
 /*  {path: '', redirectTo: 'home', pathMatch: 'full'}, */
  {path: '', component: HomeComponent},
  {path: 'user-login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'tracking', component: TrackingPageComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'nul-admin',
    component: AdminLayoutComponent,
    children: [
     {path: '', redirectTo: 'tracking_list', pathMatch: 'full'},
     {path: 'tracking_list', component: TrackingListComponent},
     {path: 'new_tracking', component: NewTrackingComponent},
     {path: 'update_tracking/:id', component: TrackingEditComponent}
     
    ]},
  
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
