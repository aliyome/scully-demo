import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
