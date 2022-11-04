import { Component, Input, OnInit } from '@angular/core';
import { FoodBox } from '../foodBox.model';

@Component({
  selector: 'app-foodbox',
  templateUrl: './foodbox.component.html',
  styleUrls: ['./foodbox.component.css']
})
export class FoodboxComponent implements OnInit {

  constructor() { }
  @Input() food!: FoodBox;


  ngOnInit(): void {
  }

}
