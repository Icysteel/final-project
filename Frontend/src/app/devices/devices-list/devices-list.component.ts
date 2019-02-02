import { DevicesService } from './../devices.service';
import { Component, OnInit } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'app-users-list',
  templateUrl: './devices-list.component.html'
})
export class DevicesListComponent implements OnInit {
  constructor(private readonly devicesService: DevicesService) { }

  devices: any[];
  devices2 = [];

  ngOnInit() {
    const getArray = [];
    let params = '';
    this.devicesService.getAllDevices().subscribe(data => {
      this.devices = data;

      this.devices.forEach(dev => this.devices2.push(dev.name));
      this.devices.forEach(dev => getArray.push(dev.name));
      params = getArray.join(', ');
      this.devicesService.getFromApi(params).subscribe(data1 => console.log(data1));

    });

  }

}
