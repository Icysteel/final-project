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
  devicesNames = [];

  table: any[];

  ngOnInit() {
    const getArray = [];
    let params = '';
    this.devicesService.getAllDevices().subscribe(data => {
      this.devices = data;

      this.devices.forEach(dev => this.devicesNames.push(dev.name));
      this.devices.forEach(dev => getArray.push(dev.name));
      params = getArray.join(',');
      this.devicesService.getFromApi(params).subscribe(data1 => {
        const arrayFromDevices = Object.entries(data1);
        this.table = arrayFromDevices;
        console.log(this.devicesNames);
        console.log('table:');

        console.log(this.table);


      });

    });

  }

}
