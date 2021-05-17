import { Component, OnInit } from '@angular/core';
import {Receipe} from '../Receipe';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ReceipeService} from '../receipe.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.page.html',
  styleUrls: ['./receipe-details.page.scss'],
})
export class ReceipeDetailsPage implements OnInit {

  public selectedReceipe:Receipe = {} as Receipe;

  constructor(private activatedRoute : ActivatedRoute ,
              private receipeService : ReceipeService,
              private alertController : AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      let receipeId = param.get('receipeId');
      this.selectedReceipe = this.receipeService.getReceipe(receipeId);
    });
  }

  async clickDeleteReceipe(receipeId:string){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
