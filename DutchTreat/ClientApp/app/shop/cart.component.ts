import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
  selector: 'the-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class Cart implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
