import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    // this.user = this.userService.getter();
  }

  /**
  processForm(): void {
    if (this.user.id === undefined) {
      this.userService.createUser(this.user).subscribe((user) => {
        console.log(user);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.userService.updateUser(this.user).subscribe((user) => {
        console.log(user);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    }
  }
   **/

}
