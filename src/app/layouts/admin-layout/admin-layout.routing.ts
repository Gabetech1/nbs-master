import { Routes } from '@angular/router';
import { NewTrackingComponent } from 'src/app/pages/new-tracking/new-tracking.component';
import { TrackingListComponent } from 'src/app/pages/tracking-list/tracking-list.component';


export const AdminLayoutRoutes: Routes = [
    { path: '',      component: TrackingListComponent },
    { path: 'new_tracking',      component: NewTrackingComponent },
    
];
