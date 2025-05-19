import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  isAuthorizedUser$?: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthorizedUser$ = this.authService.isAuthorizedUser;
  }
}
