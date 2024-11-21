import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HerosericeService } from '../../services/heroserice.service';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styles: ``
})
export class HerocardComponent implements OnInit{
  constructor(){}
  @Input()
  public hero!:Hero;
  ngOnInit(): void {
    if ( !this.hero ) throw new Error("Hero is required")
  }
}
