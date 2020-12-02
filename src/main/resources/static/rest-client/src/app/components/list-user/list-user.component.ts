import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  private users: User[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    }, (error) => {
      console.log(error);
    });
  }

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
