import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FoodBox } from '../Model/foodBox.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private service: OrderDetailsService) { }
  foodData!:FoodBox[];
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
