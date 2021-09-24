import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

declare var $: any;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url = "https://gabeshub.com";
  /* url = {
    "/core/*": {
      target: "http://localhost/clientapi/nulbulk/smtp",
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
    },
  }; */
  //url = 'http://localhost/nulbulk/nulbulk_backend';

  constructor(private http: HttpClient) {}

  register(data) {
    console.log(data);
    return this.http.post(this.url + "/siginUpUser.php", data);
  }
  login(data) {
    var headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    headers.append(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    console.log(data);
    return this.http.post(this.url + "/loginUser.php", data, {
      headers: headers,
    });
  }

  track(data) {
    console.log(data);
    return this.http.post(this.url + "/postTrackingData.php", data);
  }

  getrack() {
    return this.http.get(this.url + "/getTrackingData.php");
  }

  getrackById(id) {
    return this.http.post(this.url + "/getrackById.php", id);
  }

  updateTrackById(id) {
    return this.http.put(this.url + "/updateTrackById.php", id);
  }

  deleteTrackById(id) {
    console.log(id);
    return this.http.put(this.url + "/deleteTrackById.php", id);
  }

  getrackByNum(num) {
    return this.http.post(this.url + "/getrackByNum.php", num);
  }

  sendMessage(data) {
    var headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    return this.http.post(this.url + "/index.php", data, {
      headers: headers,
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
