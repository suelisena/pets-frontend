import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


})
export class HomeComponent {

  ngOnInit(): void{


  }

  images = [
    {src: "assets/images/24911.jpg"},
    {src: "assets/images/25588.jpg"},
    {src: "assets/images/35096.jpg"}
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

}
