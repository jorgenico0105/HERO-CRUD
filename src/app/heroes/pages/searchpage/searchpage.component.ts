import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HerosericeService } from '../../services/heroserice.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styles: ``
})
export class SearchpageComponent {
  public posibleHerores:Hero[]=[]
  public searchInput=new FormControl
  public selectedHero?:Hero;
  constructor(private  heroService:HerosericeService){
  }
  searchHero(){
    const value:string=this.searchInput.value || ""
     this.heroService.getSuges(value).subscribe(heroes=>this.posibleHerores=heroes)
  }
  onSelectedOption(event:MatAutocompleteSelectedEvent):void{
    const {value}=event.option
    this.searchInput.setValue(value.superhero)
    this.heroService.getHeroByid(value.id).subscribe(hero=>this.selectedHero=hero)
  }
}
