import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSignInComponent } from './home-sign-in/home-sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';

const routeConfig: Routes = [
    {
        path: 'home_signin',
        component: HomeSignInComponent,
        data: { title: 'Sign In Page' } // Use 'data' instead of 'title'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' } // Use 'data' instead of 'title'
      },
      {
        path: 'client_profile',
        component: ClientProfileComponent,
        data: { title: 'Create Client Profile' } // Use 'data' instead of 'title'
      },
      {
        path: 'schedule_meeting',
        component: ScheduleMeetingComponent,
        data: { title: 'Schedule Meetings'}
      },
      {
        path: '',
        redirectTo: `/home_signin`,
        pathMatch: `full`,
        data: { title: 'Sign In Page'}
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

export default routeConfig;