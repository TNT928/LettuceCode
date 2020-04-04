import { Component, OnInit, Output, Input} from '@angular/core';
import { RecipeService } from '../recipe.service'
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  userInput;
  calories;
  vegetarian;
  vegan;
  treenuts;
  

constructor() { }
@Output() submitted = new EventEmitter();

 
  ngOnInit() {

  }
  onSubmit(userInput, calories,vegetarian,vegan, treenuts){
    this.submitted.emit({userInput, calories,vegetarian,vegan, treenuts});
  }
 

}
