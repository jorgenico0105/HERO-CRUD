import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { enviroments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HerosericeService {

  private baseUrl:string=enviroments.baseUrl
  constructor(private httprequest:HttpClient) {

  }
  getHeroes():Observable<Hero[]> {
    return this.httprequest.get<Hero[]>(`${this.baseUrl}/heroes`);
  } 
  getHeroByid(id:string):Observable<Hero|undefined>{
    return this.httprequest.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error=>of(undefined))
    )
  }
  getSuges(query:string):Observable<Hero[]>{
    return this.httprequest.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }
}
