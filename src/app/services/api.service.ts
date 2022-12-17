import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

declare var $: any;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url = "https://nulbulkapi.gabeshub.com";
  smtp_url = "https://apis.developmentsite.top/nulbulk/smtp";
  /* url = {
    "/core/*": {
      target: "http://localhost/clientapi/nulbulk/smtp",
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
    },
  }; */
  //url = "http://localhost/nulbulk_backend";
  //smtp_url = "http://localhost/nulbulk_backend";

  constructor(private http: HttpClient) {}

  httpHeaders() {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return headers;
  }

  register(data) {
    console.log(data);
    return this.http.post(this.url + "/siginUpUser.php", data, {
      headers: this.httpHeaders(),
    });
  }
  login(data) {
    console.log(data);
    return this.http.post(this.url + "/loginUser.php", data, {
      headers: this.httpHeaders(),
    });
  }
  editrack(data) {
    console.log(data);
    return this.http.post(this.url + "/getrackByid.php", data, {
      headers: this.httpHeaders(),
    });
  }

  trackByNum(data) {
    console.log(data);
    return this.http.post(this.url + "/getrackByNum.php", data, {
      headers: this.httpHeaders(),
    });
  }

  track(data) {
    console.log(data);
    return this.http.post(this.url + "/postTrackingData.php", data, {
      headers: this.httpHeaders(),
    });
  }

  getrack() {
    return this.http.get(this.url + "/getTrackingData.php");
  }

  getrackById(id) {
    return this.http.post(this.url + "/getrackByid.php", id, {
      headers: this.httpHeaders(),
    });
  }

  updateTrackById(id) {
    return this.http.post(this.url + "/updateTrackById.php", id, {
      headers: this.httpHeaders(),
    });
  }

  deleteTrackById(id) {
    console.log(id);
    return this.http.post(this.url + "/deleteTrackById.php", id, {
      headers: this.httpHeaders(),
    });
  }

  sendMessage(data) {
    return this.http.post(this.smtp_url + "/sendmail.php", data, {
      headers: this.httpHeaders(),
    });
  }

  isAuthenticated() {
    return this.http.get("/auth/isAuthenticated");
  }

  showAlert(type, msg) {
    //  const type = ['','info','success','warning','danger'];

    var color = Math.floor(Math.random() * 4 + 1);
    $.notify(
      {
        // icon: "pe-7s-like2",
        message: msg,
      },
      {
        type: type,
        timer: 5000,
        placement: {
          from: "top",
          align: "right",
        },
      }
    );
  }
}
