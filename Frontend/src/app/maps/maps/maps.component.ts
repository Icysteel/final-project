import { DevicesService } from './../../devices/devices.service';
import { MapsService } from './../maps.service';
import { Component, OnInit } from '@angular/core';
import { DeviceModel } from 'src/app/devices/device.model';


export class NewDeviceModel {
  longitude: number;
  latitude: number;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  interval: any;

  constructor(private map: MapsService) { }

  devices: DeviceModel[];
  newDevices: NewDeviceModel[];
  lat = 42.6354123;
  lng = 23.3025379;

  // custom map styling
  styles = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#212121'
        }
      ]
    },
    {
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#212121'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'administrative.country',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#bdbdbd'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#181818'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#1b1b1b'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#2c2c2c'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#8a8a8a'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#373737'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#3c3c3c'
        }
      ]
    },
    {
      'featureType': 'road.highway.controlled_access',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#4e4e4e'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#3d3d3d'
        }
      ]
    }
  ];

  public origin: any;
  public destination: any;
  directions: boolean;


  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      this.devices = data;
      console.log(data);
      this.newDevices = [];
      this.newDevices.push({
        longitude: +data[0].latitude,
        latitude: +data[0].longitude,
      });

      this.lat = this.devices[0].latitude;
      this.lng = this.devices[0].longitude;

      this.refreshData();
      this.interval = setInterval(() => {
        this.getDirection();
      }, 2500);
    });
  }
  refreshData(): any {
    console.log('refresh works');
    if (this.newDevices.length > 2) {
      this.directions = true;
    }
  }

  mapClick(event): void {
    this.newDevices.push({ latitude: event.coords.lat, longitude: event.coords.lng });

  }

  getDirection() {
    if (this.newDevices.length >= 2) {
      this.directions = true;

      console.log('getDir works');
      this.origin = { lat: +this.newDevices[0].latitude.toString(), lng: +this.newDevices[0].longitude.toString() };
      this.destination = { lat: +this.newDevices[1].latitude, lng: +this.newDevices[1].longitude };
    }
  }




}
