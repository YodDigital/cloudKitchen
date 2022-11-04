import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FoodBox } from '../Model/foodBox.model';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor( private service: OrderDetailsService, private order: ActivatedRoute ) { }
  getMenuIndex!: any;
  menuData!: any;

  ngOnInit() {
    this.getMenuIndex = this.order.snapshot.paramMap.get('id');
     if (this.getMenuIndex){
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuIndex;
      })
     }
  }

}
