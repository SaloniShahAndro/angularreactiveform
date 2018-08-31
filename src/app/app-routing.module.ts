import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { DisplayUserComponent } from './display-user/display-user.component'

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'display', component: DisplayUserComponent}
  
];

export const routing = RouterModule.forRoot(routes);