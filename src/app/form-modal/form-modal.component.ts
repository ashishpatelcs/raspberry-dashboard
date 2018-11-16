import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'node_modules/ngx-toastr';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  public name: string;
  public rfid: string;
  public valid: string;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
  }

  onSubmit() {
    const body = {
      'name': this.name,
      'rfid': this.rfid,
      'valid': (this.valid === 'valid') ? '1' : '0'
    };
    this.http.post('http://localhost:8888/raspberry-backend/newuser.php', body)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.name = '';
    this.rfid = '';
    this.valid = '';
    this.toastr.success(this.name + ' added to valid rfid card users list!');
  }

}
