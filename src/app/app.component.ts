import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(public userService: UserService) {}

  title = 'webmaster';

  ngOnInit() {
    this.userService.logindata().subscribe();
  }
}
