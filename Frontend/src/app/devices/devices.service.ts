
import { Injectable } from '@angular/core';
import { RequesterService } from 'src/app/core/requester.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class DevicesService {
  public constructor(private readonly requester: RequesterService) { }

  public getAllDevices(): Observable<any> {
    return this.requester.get('http://localhost:3000/devices');
  }

  public travelTime(): Observable<any> {
    const queryParams = new HttpParams();
    queryParams.set('devices', ['123'].join(', '));
    const date = { from: 1549019956549, to: 1549019956590 };

    const headers = new HttpHeaders();
    return this.requester.get(
      // tslint:disable-next-line:max-line-length
      `http://ec2-35-158-53-19.eu-central-1.compute.amazonaws.com:8080/api/travelTimeTableData?devices=123,456&date=${JSON.stringify(date)}`);
  }
}
