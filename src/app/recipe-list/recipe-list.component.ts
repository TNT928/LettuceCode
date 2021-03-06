import { Component, OnInit,Input, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   
  constructor(private search : SearchCriteriaComponent, private Recipe : RecipeService) { }
  userInput : any;
  recipes=[];
   loading= false;
   noData= false;
  ngOnInit() {
  }

 

  onSubmit({userInput, calories,vegetarian,vegan, treenuts}){
    this.loading =true;
    this.noData = false;
   this.Recipe.getRecipes(userInput,calories,vegetarian,vegan, treenuts).subscribe( (data:any) => {
     this.recipes = data.hits
     this.loading=false

     if(!this.recipes.length){
      this.noData = true;
     }else if(this.recipes.length){
      this.noData = false;
    }
   })
   
    
  }

   

}