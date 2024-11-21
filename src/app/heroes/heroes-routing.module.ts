import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { NewpageComponent } from './pages/newpage/newpage.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { EditpageComponent } from './pages/editpage/editpage.component';
import { ListpageComponent } from './pages/listpage/listpage.component';

const routes: Routes = [
  {
    path:"",
    component:LayoutComponent,
    children:[
      {
        path:"new",
        component:NewpageComponent
      },
      {
        path:"search",
        component:SearchpageComponent
      },
      {
        path:"edit/:id",
        component:EditpageComponent
      },
      {
        path:"list",
        component:ListpageComponent
      },
      {
        path:":id",
        component:HeropageComponent
      },
      {
        path:"**",
        redirectTo:"list"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
