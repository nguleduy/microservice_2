import {Component, OnInit} from '@angular/core';
import {Nid} from '../../model/Nid';
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nid-list',
  templateUrl: './nid-list.component.html',
  styleUrls: ['./nid-list.component.scss']
})
export class NidListComponent implements OnInit {

  public nids: Nid[];

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getNids().subscribe((nids) => {
      console.log(nids);
      this.nids = nids;
    }, (error) => {
      console.log(error);
    });
  }

  /** Nid actions */
  deleteNid(nid): void {
    this.userService.deleteNid(nid.id).subscribe((data) => {
      this.nids.splice(this.nids.indexOf(nid), 1);
    }, (error) => {
      console.log(error);
    });
  }

  updateNid(nid): void {
    this.userService.setterNid(nid);
    this.router.navigate(['/nid']);
  }

  createNid(): void {
    const nid = new Nid();
    this.userService.setterNid(nid);
    this.router.navigate(['/nid']);
  }

}
