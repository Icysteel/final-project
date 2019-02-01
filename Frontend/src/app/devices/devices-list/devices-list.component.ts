import { DevicesService } from './../devices.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users-list',
  templateUrl: './devices-list.component.html'
})
export class DevicesListComponent implements OnInit {
  constructor(private readonly devicesService: DevicesService) { }

  devices: any[];

  ngOnInit() {
    this.devicesService.travelTime().subscribe(data => console.log(data));
    this.devicesService.getAllDevices().subscribe(data => {
      this.devices = data;
    });

  }

}
