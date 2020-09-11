import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionRoutingModule} from './session-routing.module';
import {SessionComponent} from './session/session.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {BsDropdownModule, TooltipModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    SessionComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule
  ]
})
export class SessionModule { }