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
import { NidFormComponent } from './components/nid-form/nid-form.component';
import { PassportFormComponent } from './components/passport-form/passport-form.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: ListUserComponent},
  {path: 'op', component: UserFormComponent},
  {path: 'nids', component: NidListComponent},
  {path: 'ppids', component: PassportListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent,
    NidListComponent,
    PassportListComponent,
    NidFormComponent,
    PassportFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
