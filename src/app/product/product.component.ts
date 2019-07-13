import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products : any

  constructor() { 

	this.products=[
{
		"id" : 1241,
		"name":"shirt",
		"brand":"Guchi",
		"price":10000

},
{
		"id":1242,
		"name":"watch",
		"brand":"Guchi",
		"price":20000

},
{
		"id":1243,
		"name":"pant",
		"brand":"armani",
		"price":46000

},
{
		"id":1244,
		"name":"Cartoon",
		"brand":"singhi",
		"price":750

},
{
		"id":1245,
		"name":"cake",
		"brand":"cherry",
		"price":5550000

},
	]
  }

  ngOnInit() {
  }

}
