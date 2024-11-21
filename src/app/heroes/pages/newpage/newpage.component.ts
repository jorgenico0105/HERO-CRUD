import { Component } from '@angular/core';
interface creadores{
  id:string,
  value:string
}
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styles: ``
})

export class NewpageComponent {
  public creador:creadores[]=[
    {id:"DC Comics",value:"DC-COMICS"},
    {id:"Marvel Comics",value:"Marvel"}
  ]
}
