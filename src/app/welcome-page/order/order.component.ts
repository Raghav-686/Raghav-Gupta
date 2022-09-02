import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(
    public orderService: OrderService
  ) { }

  ngOnInit(): void {

  }

  add = (data: any) => {
    this.orderService.cartData.next({ data, flag: 'A' });
  }

}
