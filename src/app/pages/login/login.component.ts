import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: any;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  login(form) {
    if (!(form.value.email && form.value.password)) {
      alert("Enter user details");
    } else {
      const data = {
        email: form.value.email,
        password: form.value.password,
      };
      
    /*  if(form.value.email == "daniel4u2210@yahoo.com" && form.value.password == "Nulbulk@21"){
         this.router.navigate(["/nul-admin/tracking_list"]);
          //  this.api.showAlert('success','login successful')
          form.reset();
      }
      else{
         this.api.showAlert("danger", "username or password is inccorect");
          form.reset();
      }
      */
      
      // console.log (data)
      this.api.login(data).subscribe(
        (res) => {
          //   console.log(res)
          this.router.navigate(["/nul-admin/tracking_list"]);
          //  this.api.showAlert('success','login successful')
          form.reset();
        },
        (err) => {
          //  console.log(err)
          this.api.showAlert("danger", "username or password is inccorect");
          form.reset();
        }
      );
      
    }
  }
}
