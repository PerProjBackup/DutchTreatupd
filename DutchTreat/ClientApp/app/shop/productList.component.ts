﻿import { Component, OnInit } from "@angular/core"
import { DataService } from "../shared/dataService";
import { Product } from "../shared/product"

@Component({
  selector: "product-list",
  templateUrl: "productList.component.html",
  styleUrls: ["productList.component.css"]

})
export class ProductList implements OnInit {

  constructor(private data: DataService) {
    //this.products = data.products;
  }

  public products: Product[] = [];

  ngOnInit(): void {
    this.data.loadProducts()
      .subscribe(success => {
        if (success) { this.products = this.data.products; }
      });
  }

  addProduct(product: Product) {
    this.data.addToOrder(product);
  }

}

//  public products = [
//  { title: "First Product", price: 19.99 },
//  { title: "Second Product", price: 9.99 },
//  { title: "Third Product", price: 14.99 }
//];