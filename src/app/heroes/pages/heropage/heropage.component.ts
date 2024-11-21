import { Component, OnInit } from '@angular/core';
import { HerosericeService } from '../../services/heroserice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styles: ``
})
export class HeropageComponent implements OnInit {
  public hero?:Hero
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private heroservice:HerosericeService,
    private router:Router
  ){}
  goBack():void{
    this.router.navigateByUrl("/heroes/list")
  }
  ngOnInit(): void {
    this.ActivatedRoute.params
    .pipe(
      switchMap(({id})=>this.heroservice.getHeroByid(id)),
      delay(1000) 
    ).subscribe(hero=>{
      if(!hero) return this.router.navigate(["/heroes/list"])
        this.hero=hero
      return;
    })
  }
}
