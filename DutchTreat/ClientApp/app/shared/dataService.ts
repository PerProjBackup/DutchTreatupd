import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from './product';
import { Order, OrderItem } from './order';
//import * as OrderNS from './order';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public order: Order = new Order();

  public products: Product[] = [];
    //{ title: "First Product", price: 19.99 },
    //{ title: "Second Product", price: 9.99 },
    //{ title: "Third Product", price: 14.99 }

  loadProducts(): Observable<boolean> {
    return this.http.get("/api/products")
      .pipe(map((data: any[]) => {
        this.products = data;
        return true;
      }));
  }

  public addToOrder(product: Product) {

    //if (this.order) { this.order = new Order;  }

    let item: OrderItem = this.order.items.find(i => i.productId == product.id);

    if (item) {
    item.quantity++

    } else {

      item = new OrderItem();
      item.productId = product.id;
      item.productArtist = product.artist;
      item.productArtId = product.artId;
      item.productCategory = product.category;
      item.productSize = product.size;
      item.productTitle = product.title;
      item.unitPrice = product.price;
      item.quantity = 1;

      this.order.items.push(item);
    }
  }
  
}