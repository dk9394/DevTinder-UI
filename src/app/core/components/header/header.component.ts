import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // currentUser: IUser | null = null;
  currentUser: any;
  isLoggedIn = false;

  constructor(
    // private userService: UserService,
    // private apiService: ApiService,
    // private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.userService.getCurrentUser().subscribe({
    //   next: (user) => {
    //     console.log('user', user);
    //     this.currentUser = user;
    //     this.isLoggedIn = !!user;
    //   },
    // });
  }

  onLogout(): void {
    // this.authService.logout().subscribe({
    //   next: (res) => {
    //     this.userService.clearCurrentUser();
    //     this.isLoggedIn = false;
    //     this.apiService.clearToken();
    //     this.router.navigate(['../'], { relativeTo: this.route });
    //   },
    // });
  }
}
