import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  public sidebarItems=[
  {label:"Listado",icon:"label",url:"./list"},
  {label:"Añadir",icon:"add",url:"./new"},
  {label:"Buscar",icon:"search",url:"./search"}
  ]
}
