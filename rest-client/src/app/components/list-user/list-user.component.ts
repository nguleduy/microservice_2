import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';
import {Nid} from '../../model/Nid';
import {Passport} from '../../model/Passport';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users: User[];
  public nids: Nid[];
  public passports: Passport[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    }, (error) => {
      console.log(error);
    });

    this.userService.getNids().subscribe((nids) => {
      console.log(nids);
      this.nids = nids;
    }, (error) => {
      console.log(error);
    });

    this.userService.getPassports().subscribe((passports) => {
      console.log(passports);
      this.passports = passports;
    }, (error) => {
      console.log(error);
    });
  }

  /** Nid actions */
  createNid() {
  }

  /** User actions */
  deleteUser(user): void {
    this.userService.deleteUser(user.id).subscribe((data) => {
      this.users.splice(this.users.indexOf(user), 1);
    }, (error) => {
      console.log(error);
    });
  }

  updateUser(user): void {
    this.userService.setter(user);
    this.router.navigate(['/op']);
  }

  newUser(): void {
    const user = new User();
    this.userService.setter(user);
    this.router.navigate(['/op']);
  }

}
