import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HerosericeService } from '../../services/heroserice.service';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styles: ``
})
export class ListpageComponent implements OnInit{
  public heroes:Hero[]=[];
  constructor(private heroservice:HerosericeService) {}
  ngOnInit(): void {
    this.heroservice.getHeroes().subscribe( hero=>this.heroes=hero)
  }
}
