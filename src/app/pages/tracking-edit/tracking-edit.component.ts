import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

export class user {
  id;
  number;
}
@Component({
  selector: "app-tracking-edit",
  templateUrl: "./tracking-edit.component.html",
  styleUrls: ["./tracking-edit.component.scss"],
})
export class TrackingEditComponent implements OnInit {
  name: user;
  number: any;
  desc: any;
  status: any;
  sender: any;
  s_phone: any;
  s_email: any;
  s_city: any;
  s_country: any;
  s_address: any;
  s_post: any;
  recipient: any;
  r_email: any;
  r_phone: any;
  r_city: any;
  r_country: any;
  r_address: any;
  r_post: any;
  trackid: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //const id = this.route.snapshot.paramMap.get("id");
    const id = {
      id: this.route.snapshot.paramMap.get("id"),
    };
    this.api.editrack(id).subscribe(
      (res) => {
        // console.log(res)
        this.trackid = res["id"];
        this.number = res["tracking_number"];
        this.desc = res["package"];
        this.status = res["tracking_status"];
        this.sender = res["sender_name"];
        this.s_phone = res["sender_phone"];
        this.s_email = res["sender_email"];
        this.s_city = res["sender_city"];
        this.s_country = res["sender_country"];
        this.s_post = res["sender_zipcode"];
        this.s_address = res["sender_address"];
        this.recipient = res["recipient_name"];
        this.r_phone = res["recipient_phone"];
        this.r_email = res["recipient_email"];
        this.r_city = res["recipient_city"];
        this.r_country = res["recipient_country"];
        this.r_post = res["recipient_zipcode"];
        this.r_address = res["recipient_address"];
      },
      (err) => {
        //  console.log(err)
      }
    );
  }

  ngOnInit() {}

  update(form) {
    const data = {
      tracking_id: form.value.trackingid,
      tracking_number: form.value.trackingno,
      tracking_package: form.value.package,
      tracking_status: form.value.status,

      sender_name: form.value.sender_fname,
      sender_phone: form.value.sender_phone,
      sender_email: form.value.sender_email,
      sender_city: form.value.sender_city,
      sender_country: form.value.sender_country,
      sender_zipcode: form.value.sender_zipcode,
      sender_address: form.value.sender_address,

      recipient_name: form.value.recipient_fname,
      recipient_phone: form.value.recipient_phone,
      recipient_email: form.value.recipient_email,
      recipient_city: form.value.recipient_city,
      recipient_country: form.value.recipient_country,
      recipient_zipcode: form.value.recipient_zipcode,
      recipient_address: form.value.recipient_address,
    };

    //  console.log(data)
    this.api.updateTrackById(data).subscribe(
      (res) => {
        //    console.log(res)
        this.api.showAlert(
          "success",
          "Tracking Details has been updated successfully"
        );
        this.router.navigate(["/nul-admin/tracking_list"]);
      },
      (err) => {
        //   console.log(err)
        if (err.error.text == "inserted successfully") {
          this.api.showAlert(
            "success",
            "Tracking Details has been updated successfully"
          );
          this.router.navigate(["/nul-admin/tracking_list"]);
        } else {
          this.api.showAlert(
            "failed",
            "Check your internet connection and try again"
          );
        }
      }
    );
  }

  delete(aa) {
    // console.log('nxc')
  }
}
