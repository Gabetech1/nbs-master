import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form) {
    if(form.value.password != form.value.cpassword){
        alert('Passwords do not match')
    }else{
      const data ={
        fname: form.value.fname,
        lname: form.value.lname,
        email: form.value.email,
        password: form.value.password,
        role: form.value.role,
      }

      console.log (data)
      this.api.register(data).subscribe(res => {
        console.log(res)
        this.router.navigate(['/user-login'])
      }, err => {
        console.log(err)
      })
    }

  
  }


   

}
