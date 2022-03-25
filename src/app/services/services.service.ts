import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  
  images = [
    {imageUrl: 'https://bookit.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbookit%2Fimage%2Fupload%2Fv1618590762%2Fbookit%2Frooms%2F3_quuli7.jpg&w=3840&q=75'},
    {imageUrl: '../../assets/images/img-2.webp'},
    {imageUrl: '../../assets/images/img-3.webp'},
    {imageUrl: '../../assets/images/img-4.webp'},
    {imageUrl: '../../assets/images/img-5.webp'},
    {imageUrl: '../../assets/images/img-6.webp'}
   
  ];
  getImages() {
       if (!this.images) {
      return 'images not found';
    } else {
      return this.images;
    }
  }
}
