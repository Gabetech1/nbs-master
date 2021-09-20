import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-tracking',
  templateUrl: './new-tracking.component.html',
  styleUrls: ['./new-tracking.component.scss']
})
export class NewTrackingComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }


  track(form) {
    const data = {
      tracking_number : form.value.trackingno,
      tracking_package : form.value.package,
      tracking_status : form.value.status,

      sender_fname : form.value.sender_fname,
      sender_lname : form.value.sender_lname,
      sender_oname : form.value.sender_oname,
      sender_phone : form.value.sender_phone,
      sender_email : form.value.sender_email,
      sender_city : form.value.sender_city,
      sender_country : form.value.sender_country,
      sender_zipcode : form.value.sender_zipcode,
      sender_address : form.value.sender_address,

      recipient_fname : form.value.recipient_fname,
      recipient_lname : form.value.recipient_lname,
      recipient_oname : form.value.recipient_oname,
      recipient_phone : form.value.recipient_phone,
      recipient_email : form.value.recipient_email,
      recipient_city : form.value.recipient_city,
      recipient_country : form.value.recipient_country,
      recipient_zipcode : form.value.recipient_zipcode,
      recipient_address : form.value.recipient_address
    }

    if(form.value.trackingno == ""){
      this.api.showAlert('danger', 'Tracking number field is empty')
    }else{
//  console.log(data)
this.api.track(data).subscribe(res=> {
  //console.log(res)
  this.api.showAlert('success', 'New Tracking Details Added')
  form.reset();
}, err => {
  console.log(err)
  if(err.status = 200){
    this.api.showAlert('success', 'New Tracking Details Added')
   // form.reset();
  }else{
 this.api.showAlert('danger', 'Failed to save details. Check your internet connection')

  }
})
    }
  
  }

}
