import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { NewTrackingComponent } from 'src/app/pages/new-tracking/new-tracking.component';
import { TrackingEditComponent } from 'src/app/pages/tracking-edit/tracking-edit.component';
import { TrackingPageComponent } from 'src/app/pages/tracking-page/tracking-page.component';
import { TrackingListComponent } from 'src/app/pages/tracking-list/tracking-list.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
  
  ],
  declarations: [   
    TrackingEditComponent,  
  ]
})

export class AdminLayoutModule {}
