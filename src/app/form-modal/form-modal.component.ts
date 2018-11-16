import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  public name: string;
  public rfid: string;
  public valid: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  onSubmit() {
    const body = {
      'name': 'test',
      'rfid': '123',
      'valid': '1'
    };
    this.http.post('http://localhost:8888/raspberry-backend/newuser.php', {
      'name': 'test',
      'rfid': '123',
      'valid': '1'
    })
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
