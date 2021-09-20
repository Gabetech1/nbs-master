import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { ApiService } from './services/api.service';
import { NewTrackingComponent } from './pages/new-tracking/new-tracking.component';
import { TrackingEditComponent } from './pages/tracking-edit/tracking-edit.component';
import { TrackingPageComponent } from './pages/tracking-page/tracking-page.component';
import { TrackingListComponent } from './pages/tracking-list/tracking-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TrackingPageComponent,
    AdminLayoutComponent,
    TrackingListComponent,
    SidebarComponent,
    NewTrackingComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    TrackingEditComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  /*   AdminLayoutModule */
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
