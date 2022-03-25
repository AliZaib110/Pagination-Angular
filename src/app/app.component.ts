import { Component } from '@angular/core';
import { ServicesService } from '../app/services/services.service';
import  data1 from '../assets/ProductData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SearchProduct';
  imgs: any;
  data1:any=data1;
  p:any

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.getImages();
    console.log(data1);
  }

  getImages() {
    this.imgs = this.service.getImages();
    console.log(this.imgs);
  }
}
