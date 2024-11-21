import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotofundpageComponent } from './pages/notofundpage/notofundpage.component';



@NgModule({
  declarations: [
    NotofundpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotofundpageComponent
  ]
})
export class SharedModule { }
