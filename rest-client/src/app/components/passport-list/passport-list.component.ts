import {Component, OnInit} from '@angular/core';
import {Passport} from '../../model/Passport';
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-passport-list',
  templateUrl: './passport-list.component.html',
  styleUrls: ['./passport-list.component.scss']
})
export class PassportListComponent implements OnInit {

  public passports: Passport[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getPassports().subscribe((passports) => {
      console.log(passports);
      this.passports = passports;
    }, (error) => {
      console.log(error);
    });
  }

  /********************* Passport actions */
  deletePassport(passport): void {
    this.userService.deletePassport(passport.ppid).subscribe((data) => {
      this.passports.splice(this.passports.indexOf(passport), 1);
    }, (error) => {
      console.log(error);
    });
  }

  updatePassport(passport): void {
    this.userService.setterPassport(passport);
    this.router.navigate(['/passport']);
  }

  createPassport(): void {
    const passport = new Passport();
    this.userService.setterPassport(passport);
    this.router.navigate(['/passport']);
  }

}
