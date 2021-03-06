import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from '../../node_modules/ngx-toastr';

import { RouterModule } from '@angular/router';
import { FormModalComponent } from './form-modal/form-modal.component';
import { HomeComponent } from './home/home.component';
import { CardLogsComponent } from './card-logs/card-logs.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FormModalComponent,
    HomeComponent,
    CardLogsComponent,
    UsersListComponent,
    SettingsComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'new', component: FormModalComponent },
      { path: 'users', component: UsersListComponent },
      { path: 'reports', component: CardLogsComponent },
      { path: 'settings', component: SettingsComponent }
    ]),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
