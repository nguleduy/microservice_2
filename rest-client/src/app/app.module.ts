import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {NidListComponent} from './components/nid-list/nid-list.component';
import {PassportListComponent} from './components/passport-list/passport-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UserService} from './shared-service/user.service';
import {NidFormComponent} from './components/nid-form/nid-form.component';
import {PassportFormComponent} from './components/passport-form/passport-form.component';
import {HttpClientModule} from '@angular/common/http';
import {MapBoxComponent} from './components/map-box/map-box.component';
import {MapService} from './shared-service/map.service';
import {SmsListComponent} from './components/sms-list/sms-list.component';
import {SmsService} from './shared-service/sms.service';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {PmComponent} from './components/pm/pm.component';
import {RegisterComponent} from './components/register/register.component';
import {UserComponent} from './components/user/user.component';
import {TokenStorageService} from './auth/token-storage.service';
import {AuthService} from './auth/auth.service';
import {httpInterceptorProviders} from './auth/auth-interceptor';

const appRoutes: Routes = [
  {path: 'changed', component: ListUserComponent},
  {path: 'smslist', component: SmsListComponent},
  {path: 'nidlist', component: NidListComponent},
  {path: 'passportlist', component: PassportListComponent},
  {path: 'op', component: UserFormComponent},
  {path: 'nid', component: NidFormComponent},
  {path: 'passport', component: PassportFormComponent},
  {path: 'map', component: MapBoxComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'pm', component: PmComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent,
    NidListComponent,
    PassportListComponent,
    NidFormComponent,
    PassportFormComponent,
    MapBoxComponent,
    SmsListComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    PmComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, MapService, SmsService, TokenStorageService, AuthService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
