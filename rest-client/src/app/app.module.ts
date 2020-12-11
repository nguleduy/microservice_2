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
import { SmsListComponent } from './components/sms-list/sms-list.component';
import {SmsService} from './shared-service/sms.service';

const appRoutes: Routes = [
  {path: '', component: ListUserComponent},
  {path: 'smslist', component: SmsListComponent},
  {path: 'nidlist', component: NidListComponent},
  {path: 'passportlist', component: PassportListComponent},
  {path: 'op', component: UserFormComponent},
  {path: 'nid', component: NidFormComponent},
  {path: 'passport', component: PassportFormComponent},
  {path: 'map', component: MapBoxComponent}
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
    SmsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, MapService, SmsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
