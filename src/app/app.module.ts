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
import { DialogModule } from './dialog/dialog.module';
import { environment } from '../environments/environment';
import { DialogComponent } from './dialog/dialog.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent},
  { path: 'student', component:  StudentComponent},
  { path: 'tutor', component: TutorComponent}
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
