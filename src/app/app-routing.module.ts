import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './welcome-page/cart/cart.component';
import { OrderComponent } from './welcome-page/order/order.component';
import { WelocomeComponentComponent } from './welocome-component/welocome-component.component';

const routes: Routes = [
  { path: '', component: WelocomeComponentComponent },
  { path: 'order', component: OrderComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
