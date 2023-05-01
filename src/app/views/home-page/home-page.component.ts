import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service ';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User | any;
  rate!: any
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (!this.user) {
      console.log('no user to show')
    }


    // this.bitcoinService.getRate(this.user.coins).then(rate => {
    //   this.rate = rate;
    // });
  }
}
