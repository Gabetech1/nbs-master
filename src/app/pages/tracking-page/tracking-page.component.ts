import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.scss']
})
export class TrackingPageComponent implements OnInit {
  ship;
  form:any;
    constructor(private api: ApiService, private router: Router) { }
  
    
    ngOnInit() {
    
     
    }
    
    track(num){
     // console.log(num.value.track)
  
      const data = {
        track : num.value.track
      }
      this.api.getrackByNum(data).subscribe(res => {
        //  console.log(res)
          this.ship = res;
        //  console.log(this.ship)
          if (this.ship.length == 0){
            this.api.showAlert('danger', 'Tracking number not found in our system')
          }
        }, err=> {
          console.log(err)
         
        })
         
    }
    
    delete(id){
      console.log(id)
    }
    
    }