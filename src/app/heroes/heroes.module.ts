import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { ListpageComponent } from './pages/listpage/listpage.component';
import { NewpageComponent } from './pages/newpage/newpage.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { EditpageComponent } from './pages/editpage/editpage.component';
import { HerocardComponent } from './components/herocard/herocard.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    HeropageComponent,
    ListpageComponent,
    NewpageComponent,
    SearchpageComponent,
    EditpageComponent,
    HerocardComponent,
    HeroImagePipe,
  
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
