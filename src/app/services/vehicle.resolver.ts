import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { catchError } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleResolver implements Resolve<boolean> {
  vehicles : any;

  constructor(private http: HttpClient,public uS: UsersService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.uS.vehicle().pipe(
      catchError((err) => {
        return of(null)
      })
    )
  }
}
