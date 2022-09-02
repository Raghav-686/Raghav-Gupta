import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WelocomeComponentComponent } from './welocome-component/welocome-component.component';
import { OrderComponent } from './welcome-page/order/order.component';
import { CartComponent } from './welcome-page/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    WelocomeComponentComponent,
    OrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
