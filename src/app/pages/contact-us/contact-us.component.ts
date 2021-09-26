import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  contactForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl(),
  });

  constructor(private api: ApiService) {}

  ngOnInit() {}

  sendMessage() {
    // console.log(this.contactForm.value.username);
    var data = {
      full_name: this.contactForm.value.username,
      phone_number: this.contactForm.value.phone,
      email: this.contactForm.value.email,
      subject: "Filled Contact Form",
      message: this.contactForm.value.message,
      admin_email: "admin@nulbulkshipping.com",
      site_name: "Nulbulk Shipping",
      receiver_email: "jessyjee77@gmail.com",
      receiver_name: "Jessy",
    };
    this.api.sendMessage(data).subscribe(
      (res) => {
        // console.log(res);
      },
      (err) => {
        // console.log(err);
        if (err.error.text == "Email sent" || err.status == 200) {
          this.contactForm.reset();
          alert("Your message has been sent. We will get back to you soon.");
        } else {
          alert(
            "Message could not be sent. Please check your internet or try again later."
          );
        }
      }
    );
  }
}
