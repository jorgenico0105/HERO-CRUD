import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotofundpageComponent } from './shared/pages/notofundpage/notofundpage.component';

const routes: Routes = [
  {
    path:"auth",
    loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule),
  },
  {
    path:"heroes",
    loadChildren:()=>import("./heroes/heroes.module").then(m=>m.HeroesModule)
  },
  {
    path:"404",
    component:NotofundpageComponent
  },
  {
    path:"",
    redirectTo:"heroes",
    pathMatch:"full"
  },
  {
    path:"**",
    redirectTo:"404"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
