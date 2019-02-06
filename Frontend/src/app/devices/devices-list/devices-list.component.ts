import { DevicesService } from './../devices.service';
import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';

import { МodalComponent } from 'src/app/shared/modal/modal.component';
import { distinct } from 'rxjs/operators';


@Component({
  selector: 'app-users-list',
  templateUrl: './devices-list.component.html'
})
export class DevicesListComponent implements OnInit {
  constructor(private readonly devicesService: DevicesService) { }

  devices: any[];
  devicesNames = [];
  selectedDevices = [];
  table: any[];
  show = true;
  ngReady = false;

  ngOnInit() {
    const params = '';
    this.devicesService.getAllDevices().subscribe(data => {
      this.devices = data;
      console.log('devices');
      console.log(this.devices);



      this.devices.forEach(dev => this.devicesNames.push(dev.name));

    });

  }

  compareTimes(device) {
    this.selectedDevices.push(device);
    const i = this.devicesNames.indexOf(device);
    this.devicesNames.splice(i, 1);
  }

  removeDevice(device) {
    this.devicesNames.push(device);
    const i = this.selectedDevices.indexOf(device);
    this.selectedDevices.splice(i, 1);

  }

  callNg() {
    this.CallAPI();
    this.ngReady = true;
  }

  CallAPI() {
    const params = this.selectedDevices.join(',');
    this.devicesService.getFromApi(params).subscribe(data1 => {
      const arrayFromDevices = Object.entries(data1);
      this.table = arrayFromDevices;
    });
    console.log(this.selectedDevices);
  }
}
