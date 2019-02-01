import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceModel } from '../devices/device.model';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<DeviceModel[]>('http://localhost:3000/devices');
  }
}
