import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {PublicComponent} from './public.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {LoginComponent} from './login/login.component';
import {JoinComponent} from './join/join.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {ConfirmEmailComponent} from './confirm-email/confirm-email.component';
import {AuthResolverService} from '../service/auth-resolver.service';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    JoinComponent,
    ForgetPasswordComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthResolverService
  ]
})
export class PublicModule {
}
