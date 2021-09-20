import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl(),
  })

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  sendMessage(){
    console.log(this.contactForm.value.username)
   var data = {
      username: this.contactForm.value.username,
      phone: this.contactForm.value.phone,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    }
    this.api.sendMessage(data).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    })
  }

}
