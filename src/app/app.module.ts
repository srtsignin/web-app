import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { RosefireAdapterService } from './rosefire-adapter/rosefire-adapter.service';
import { RolesAdapterService } from './roles-adapter/roles-adapter.service';
import { ActiveUsersService } from './active-users/active-users.service';
import { CoursesService } from './courses/courses.service';
import { ApiModule } from './api/api.module';
import { environment } from '../environments/environment';
import { StudentRowModule } from './student-row/student-row.module';
import { MembershipModule } from './membership/membership.module';
import { MembershipRowModule } from './membership-row/membership-row.module';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { PendingRequestsModule } from './pending-requests/pending-requests.module';
import { StaffModule } from './staff/staff.module';
import { StaffComponent } from './staff/staff.component';
import { RegistrationModule } from './registration/registration.module';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './auth/auth-guard.service';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent},
  { path: 'student', component:  StudentComponent, canActivate: [AuthGuardService], data: {expectedRole: 'Student'}},
  { path: 'tutor', component: TutorComponent, canActivate: [AuthGuardService], data: {expectedRole: 'Tutor'}},
  { path: 'staff', component: StaffComponent, canActivate: [AuthGuardService], data: {expectedRole: 'Staff'}},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], data: {expectedRole: 'Admin'}},
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    LoginModule,
    StudentModule,
    TutorModule,
    StudentRowModule,
    MembershipModule,
    MembershipRowModule,
    AdminModule,
    PendingRequestsModule,
    StaffModule,
    RegistrationModule,
    ApiModule.forRoot(environment.settings.backend)
  ],
  providers: [
    LoginService,
    RosefireAdapterService,
    RolesAdapterService,
    ActiveUsersService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
