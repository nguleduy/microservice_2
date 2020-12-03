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

  public nid: Nid;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.nid = this.userService.getter();
  }

  processNidForm() {
    if (this.nid.id == undefined) {
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
