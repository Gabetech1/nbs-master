import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

declare interface shippingData {
  tracking_number:string;
  package: string;
  sender_name:string;
  sender_phone: string;
  sender_city: string;
  sender_country: string;
  sender_zipcode: string;
  sender_address: string;
  recipient_name:string;
  recipient_phone: string;
  recipient_city: string;
  recipient_country: string;
  recipient_zipcode: string;
  recipient_address: string;
  tracking_status:string;
  tracking_date: Date;
  user_id:number;
}


@Component({
  selector: 'app-tracking-list',
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.scss']
})
export class TrackingListComponent implements OnInit {
  public tableData1: TableData;

  constructor(private api: ApiService, private router: Router) { }
  ship;
  ngOnInit() {

    this.api.getrack().subscribe(res => {
      console.log(res)
      this.ship = res;
      console.log(this.ship)
    }, err=> {
      console.log(err)
    })

      this.tableData1 = {
          headerRow: [ 'Tracking Number', 'Package', 'Sender', 'Recipient', 'Status', 'Date','Action'],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
              ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
              ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
              ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
          ]
      };

  }

  edit(id){
    console.log(id)
   // this.router.navigate(['update_tracking/'+id])
  }

  delete(id){
    console.log(id)
    if(confirm('Are you sure you want to delete this tracking details?')){
      this.api.deleteTrackById(id).subscribe(res => {
        window.location.reload();
      ///  this.router.navigate(['/nul-admin/tracking_list'])
      }, err => {
        window.location.reload();
        console.log(err)
      })
    }

  }

  }
