import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';

@Component({
  selector: 'the-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class Cart implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  onCheckout() {
    if (this.data.loginRequired) {
      // Force login
      this.router.navigate(["login"]);
    } else { // Go to checkout 
      this.router.navigate(["checkout"]); }
  }
}
