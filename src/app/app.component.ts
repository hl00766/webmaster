import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(public userService: UserService, private i18n: NzI18nService) {}

  title = 'webmaster';

  ngOnInit() {
    this.userService.logindata().subscribe();
    this.i18n.setLocale(zh_CN);
  }
}
