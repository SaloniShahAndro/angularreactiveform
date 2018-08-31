import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { routing } from './/app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterService} from './user-register.service';

import { HttpClientModule } from '@angular/common/http';
import { DisplayUserComponent } from './display-user/display-user.component';  // replaces previous Http service


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DisplayUserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
