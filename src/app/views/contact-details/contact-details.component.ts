import { Component, OnDestroy, OnInit,inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

import { Contact } from 'src/app/models/contact.model';
import { Observable, lastValueFrom, map, switchMap, tap } from 'rxjs';
@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
 
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    // private location: Location
) { }



location = inject(Location)
contact: Contact | null = null
contact$!: Observable<Contact>
ans$!: string
ans = ''


  ngOnInit(): void {
    this.contact$ = this.route.data.pipe(map(data => data['contact']))
  
  }

  onBack() {
    this.router.navigateByUrl('Contacts')
    // this.router.navigate(['/'])
    // this.location.back()
}

}
