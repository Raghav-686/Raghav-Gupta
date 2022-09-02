import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {

  }

  cartTotal: number = 0;


  plus = (data: any) => {
    this.orderService.cartData.next({ data, flag: 'A' });
  }

  minus = (data: any) => {
    this.orderService.cartData.next({ data, flag: 'S' });
  }

}
