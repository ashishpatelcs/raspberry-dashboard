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

@NgModule({
  declarations: [
    AppComponent,
    FormModalComponent,
    HomeComponent,
    CardLogsComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'new', component: FormModalComponent }
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
