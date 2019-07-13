import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	user : User ={
		"id":112,
		"name":"deena",
		"email":"deena@gmail.com",
		"mobile":88670808
	}

  constructor() { }

  ngOnInit() {
  }

}
