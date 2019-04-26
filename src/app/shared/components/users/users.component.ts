import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../api/services/users/objects/user';
import { UserService } from '../../../api/services/users/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users : User[];
  
  genders : string[];
  
  nationalities : string[];

  limit : number = 12;

  constructor(
    private userService : UserService
  ) {}

  ngOnInit() {
    this.getGenders();
    this.getNationalities();
  }

  getGenders() {
    this.genders = [
      '',
      'male',
      'female'
    ];
  }

  getNationalities() {
    this.nationalities = [
      '', 'AU', 'BR', 'CA', 'CH', 'DE',
      'DK', 'ES', 'FI', 'FR', 'GB', 'IE',
      'IR', 'NO', 'NL', 'NZ', 'TR', 'US'
    ];
  }

  generateUsers( options : any ) : void {
    if ( options.limit <= this.limit ) {
      this.userService.getUsers( options )
        .subscribe( users => this.users = users['results'] );
    }
  }

  removeDupes( value, index, self ) {
    return self.indexOf(value) === index;
  }

}