import {Component, OnInit} from '@angular/core';
import {Passport} from '../../model/Passport';
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-passport-form',
  templateUrl: './passport-form.component.html',
  styleUrls: ['./passport-form.component.scss']
})
export class PassportFormComponent implements OnInit {

  public passport: Passport;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.passport = this.userService.getterPassport();
  }

  processPassportForm() {
    if (this.passport.id == undefined) {
      this.userService.createPassport(this.passport).subscribe((passport) => {
        console.log(passport);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.userService.updatePassport(this.passport).subscribe((passport) => {
        console.log(passport);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
