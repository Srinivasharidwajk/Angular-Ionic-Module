import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.scss'],
})
export class WishMessageComponent implements OnInit {

  public message:string = 'Hello';

  constructor() { }

  ngOnInit() {}

  public updateMessage(value:string){
    this.message = value;
  }

}
