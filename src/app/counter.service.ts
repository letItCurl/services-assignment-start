import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = 0;

  constructor(private usersService: UsersService) {
    this.usersService.bus.subscribe(()=> { this.count ++; console.log(this.count)})
  }
}
