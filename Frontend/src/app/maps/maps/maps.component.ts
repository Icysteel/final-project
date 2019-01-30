import { MapsService } from './../maps.service';
import { Component, OnInit } from '@angular/core';
import { DeviceModel } from 'src/app/devices/device.model';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  devices: DeviceModel[];


  constructor(private map: MapsService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      this.devices = data;
    });
  }



}
