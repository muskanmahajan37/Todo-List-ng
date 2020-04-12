import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dael:string = 'Full Dael';  // typescript is used ":string"
  
  constructor(){
    console.log(123);
    // this.dael="Gursewak";
    this.changeName('Gursewak');
  }

  changeName(name:string):void{
    this.dael= name;
  }
}
