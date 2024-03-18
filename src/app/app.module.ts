import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AutRegisPageComponent } from './aut-regis-page/aut-regis-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
   
    AuthorizationComponent,
        AutRegisPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
