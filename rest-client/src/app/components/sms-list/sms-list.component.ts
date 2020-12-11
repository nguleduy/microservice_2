import {Component, OnInit} from '@angular/core';
import {SmsService} from '../../shared-service/sms.service';
import {Router} from '@angular/router';
import {Sms} from '../../model/Sms';

@Component({
  selector: 'app-sms-list',
  templateUrl: './sms-list.component.html',
  styleUrls: ['./sms-list.component.scss']
})
export class SmsListComponent implements OnInit {

  public sms: Sms[];

  constructor(
    private smsService: SmsService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.smsService.getSms().subscribe((sms) => {
      console.log(sms);
      this.sms = sms;
    }, (error) => {
      console.log(error);
    });
  }

}
