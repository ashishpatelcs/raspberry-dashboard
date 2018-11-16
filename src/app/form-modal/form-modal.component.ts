import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  public name: string;
  public rfid: string;
  public valid: boolean;

  constructor() {}

  ngOnInit() {
  }

}
