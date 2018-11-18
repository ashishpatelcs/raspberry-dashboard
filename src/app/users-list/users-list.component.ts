import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8888/raspberry-backend/users-list.php')
      .subscribe(arg => {
        this.users = arg;
        console.log(this.users[0]);
      });
  }

  ngOnInit() {
  }

}
