import { Component } from '@angular/core';


@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  meats = ['Chicken', 'Beef', 'Pork'];
  veggies = ['Broccoli', 'Mushroom', 'Green Pepper'];
  meat_choice: string;
  veggie_choice: string;
  meat_status = 0;
  veggie_status = 0;
  success = 0;
  fail = 0;
  dish_name: string;

  pickMeat(type: string){
    this.meat_status = 1;
    this.meat_choice = type;
  }
  pickVeggie(type: string){
    this.veggie_status = 1;
    this.veggie_choice = type;
  }

  restart(){
    this.meat_choice = '';
    this.veggie_choice = '';
    this.meat_status = 0;
    this.veggie_status = 0;
    this.success = 0;
    this.fail = 0;
  }
  checkOrder(){
    if(this.meat_choice == 'Chicken' && this.veggie_choice == 'Mushroom'){
      this.success = 1;
      this.dish_name = 'Mushroom chicken';
    }else if(this.meat_choice == 'Beef' && this.veggie_choice == 'Broccoli'){
      this.success = 1;
      this.dish_name = 'Broccoli beef';
    }else if(this.meat_choice == 'Pork' && this.veggie_choice == 'Green Pepper'){
      this.success = 1;
      this.dish_name = 'Spicy pork';
    }
    else{
      this.fail = 1;
    }

  }

}
