import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from "@ngxs/store";
import {UserState} from "./ngxs/AppState";
import {FormsModule} from "@angular/forms";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {Service} from "./ngxs/Service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
