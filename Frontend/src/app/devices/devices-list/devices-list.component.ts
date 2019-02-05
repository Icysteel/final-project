import { DevicesService } from './../devices.service';
import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';

import { МodalComponent } from 'src/app/shared/modal/modal.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './devices-list.component.html'
})
export class DevicesListComponent implements OnInit {
  constructor(private readonly devicesService: DevicesService) { }

  @ViewChild(МodalComponent) public modal: МodalComponent;
  @Input() public title: string;
  @Output() public getPostTitle = new EventEmitter<string>();


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
