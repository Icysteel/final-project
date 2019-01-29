
import { Injectable } from '@angular/core';
import { RequesterService } from 'src/app/core/requester.service';
import { Observable } from 'rxjs';

@Injectable()
export class DevicesService {
  public constructor(private readonly requester: RequesterService) { }

  public getAllDevices(): Observable<any> {
    return this.requester.get('http://localhost:3000/devices');
  }
}
