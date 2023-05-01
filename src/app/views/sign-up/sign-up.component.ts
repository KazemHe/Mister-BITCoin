import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service ';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {


userName! : string 

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
) { }




  onSignup() {
    this.userService.signUp({ name: this.userName })
        .subscribe({
            next: () => this.router.navigateByUrl('Home'),
            error: err => console.log('err:', err)
        })
}





}
