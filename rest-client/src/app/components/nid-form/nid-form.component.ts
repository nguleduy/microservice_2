import {Component, OnInit} from '@angular/core';
import {Nid} from '../../model/Nid';
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nid-form',
  templateUrl: './nid-form.component.html',
  styleUrls: ['./nid-form.component.scss']
})
export class NidFormComponent implements OnInit {

  public nid = new Nid();
  public nidError: Nid;
  public isNidCreated = false;
  public nidExist = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.nid = this.userService.getterNid();
  }

  createNid(): void {
    this.userService.createNid(this.nid).subscribe(
      data => {
        console.log(data);
        this.nid = new Nid();
        this.isNidCreated = true;
        this.nidExist = false;
        this.nidError = new Nid();
      },
      error => {
        this.nidError = error.error;
        this.isNidCreated = false;
        if (error.status === 409) {
          this.isNidCreated = false;
          this.nidExist = true;
        }
        console.log(error);
      }
    );
  }

  processNidForm(): void {
    if (this.nid.id === undefined) {
      this.userService.createNid(this.nid).subscribe((nid) => {
        console.log(nid);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.userService.updateNid(this.nid).subscribe((nid) => {
        console.log(nid);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
