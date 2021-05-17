import { Component, OnInit } from '@angular/core';
import {Receipe} from '../Receipe';
import {ReceipeService} from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.page.html',
  styleUrls: ['./receipe-list.page.scss'],
})
export class ReceipeListPage implements OnInit {

  public receipeList:Receipe[] = [] as Receipe[];

  constructor(private receipeService : ReceipeService) { }

  ngOnInit() {
    this.receipeList = this.receipeService.getAllReceipes();
  }

}
