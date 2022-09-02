import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Order {
  img: string;
  desc: string;
  price: number;
  id: number;
  count: number;
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  orderSubscription: any;
  cartTotal: number = 0;

  constructor() {
    this.orderSubscription = this.cartData.subscribe(item => {
      if (item) {
        this.addCartData(item.data, item.flag);
        this.cartData.next(null);
      }
    });
  }

  order_data: any = [
    { 'img': './assets/saree.png', 'desc': 'Black Floral Pattern Digital Print Poly Saree', 'price': 199, id: 1 },
    { 'img': './assets/shirt.png', 'desc': 'Men Casual White Checked Slim Fit Shirt', 'price': 99, id: 2 },
    { 'img': './assets/girl_shirt.png', 'desc': 'Girl Casual Blue Denim Slim Fit Shirt', 'price': 99, id: 3 },
    { 'img': './assets/kurta.png', 'desc': 'Printed A-Line Kurta', 'price': 99, id: 4 }
  ]


  cartData = new BehaviorSubject<any>(null);

  addCartData(item: any, addFlag: string) {
    let localData = localStorage.getItem('order'), cartData: any = {};
    if (!localData) {
      cartData[item.id] = { ...item, count: 1 };
    }
    else {
      cartData = JSON.parse(localData);
      if (cartData[item.id]) {
        if (addFlag === 'A') {
          cartData[item.id].count++;
        } else {
          cartData[item.id].count--;
          if (cartData[item.id].count === 0) {
            delete cartData[item.id];
          }
        }
      } else {
        cartData[item.id] = { ...item, count: 1 };
      }
    }
    this.getCartTotal(cartData);
    localStorage.setItem('order', JSON.stringify(cartData));
  }

  getCartData(): { [key: number]: Order } {
    let localData = localStorage.getItem('order'), cartData: any = {};
    if (localData) {
      cartData = JSON.parse(localData);
    }
    this.getCartTotal(cartData);
    return cartData;
  }

  getCartTotal(data: any) {
    let total = 0;
    Object.keys(data).forEach(key => {
      total += data[key].count * data[key].price;
    });
    this.cartTotal = total;
  }
}
