import { Component, OnInit } from '@angular/core';
import { ParkData } from '../providers/park-data';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage implements OnInit {

parks: Array<ParkData> = []
searchQuery: string ='';

  //parks: Array<Object> = []

  constructor(public navCtrl: NavController, public parkData: ParkData, public router: Router) {
    parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
   }

  //  goParkDetails(theParkData){
  //    console.log(theParkData);
  //  }

   goParkDetails( theParkData ){
    let url = '/tabs/details/' + theParkData.id
    this.router.navigate([url]);
}

getParks(event){
  //reset items back to all the items
  this.parkData.getParks().then(theResult =>{
    this.parks = theResult;
  })

  // set querystring to the value of the searchbar
  let querystring = event.target.value;

  if (querystring !== undefined){
    //if the value is an empty string don't filter the items
    if (querystring.trim() == ''){
      return;
    }

    this.parkData.getFilteredParks(querystring).then(theResult => {
      this.parks = theResult;
    })
  }
}

  ngOnInit() {
  }

}
