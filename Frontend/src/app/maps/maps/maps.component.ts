import { MapsService } from './../maps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: string;
  lng: string;
  location: Object;
  markers: [];


  constructor(private map: MapsService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {

      console.log(data);
    });
  }

}
