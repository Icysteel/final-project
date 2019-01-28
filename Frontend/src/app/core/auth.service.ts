import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserModel } from '../user/models/user.model';
import { EnginnerModel } from '../user/models/engineer.model';

@Injectable()
export class AuthService {
  // look up Persisting user authentication with BehaviorSubject in Angular
  // https://netbasal.com/angular-2-persist-your-login-status-with-behaviorsubject-45da9ec43243

  private readonly isLoggedInSubject$ = new BehaviorSubject<boolean>(
    this.hasToken()
  );

  public constructor(
    private readonly storageService: StorageService,
    private readonly requester: RequesterService

  ) { }

  public get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject$.asObservable();
  }

  public registerUser(user: UserModel): Observable<any> {
    return this.requester.post(
      'http://localhost:3000/register',
      JSON.stringify(user)
    );
  }

  public registerEngineer(user: EnginnerModel): Observable<any> {
    return this.requester.post(
      'http://localhost:3000/users',
      JSON.stringify(user)
    );
  }

  public loginUser(user: UserModel): Observable<any> {
    return this.requester
      .post('http://localhost:3000/login', JSON.stringify(user))
      .pipe(
        tap(response => {
          this.storageService.setItem('token', (<any>response));
          this.isLoggedInSubject$.next(true);
        })
      );

  }

  public logoutUser(): void {

    this.storageService.removeItem('token');
    this.storageService.clear();
    this.isLoggedInSubject$.next(false);

  }

  private hasToken(): boolean {
    return !!this.storageService.getItem('token');
  }

}
