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

  public passport = new Passport();
  public passportError: Passport;
  public isPassCreated = false;
  public passportExist = false;
  public isPassportCreated = false;


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.passport = this.userService.getterPassport();
  }

  createPassport(): void {
    this.userService.createPassport(this.passport).subscribe(
      data => {
        console.log(data);
        this.passport = new Passport();
        this.isPassCreated = true;
        this.passportExist = false;
        this.passportError = new Passport();
      },
      error => {
        this.passportError = error.error;
        this.isPassCreated = false;
        if (error.status === 409) {
          this.isPassCreated = false;
          this.passportExist = true;
        }
        console.log(error);
      }
    );
  }

  processPassportForm(): void {
    if (this.passport.ppid === undefined) {
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
