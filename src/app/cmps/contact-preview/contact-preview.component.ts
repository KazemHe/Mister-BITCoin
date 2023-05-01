import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
    @Input() contact!: Contact
    @Output() remove = new EventEmitter<string>()


// ngOnInit(){
//     console.log(this.contact)
// }

    onRemoveContact() {
        this.remove.emit(this.contact._id)
    }
}
