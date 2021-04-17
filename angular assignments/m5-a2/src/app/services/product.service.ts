import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : any[];

  constructor() {
    this.products = [
      {"id":1,"name":"realme C20","price":"6799","image":"https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/w/h/q/c20-rmx3063-realme-original-imagfxfzay72jqvh.jpeg?q=70","description":"The realme C20 is a mobile phone that will keep you entertained and productive at the same time. Its 16.5 cm (6.5) Large HD+ Display ensures that you get an expansive view of movies, games, and even work-related docs for a more immersive experience. Thanks to the Helio G35 Powerful Processor, you can enjoy a high clock speed that will make it almost effortless for you to multitask and game. And, with the AI Selfie Camera, you can take stunning selfies that will be a hit on social media."},
      {"id":2,"name":"SAMSUNG Galaxy F02s","price":"8999","image":"https://rukminim1.flixcart.com/image/416/416/kn22m4w0/mobile/n/u/a/galaxy-f02s-sm-e025fawfins-samsung-original-imagfthzsy3btzkj.jpeg?q=70","description":"Get ready to be impressed with the aesthetic build and powerful performance of the Samsung Galaxy F02s. Featuring a massive 16.55 cm (6.5) HD+ Infinity-V display, this smartphone makes sure you stay hooked to the content you’re watching, be it videos or TV shows. Its 13 MP Triple Camera setup helps you capture stunning and detailed images, making sure that you don’t miss out on any important moment. What’s more, with its 5000 mAh battery, you can use this smartphone for calls, entertainment, and more for an entire day without having to constantly recharge it."},
      {"id":3,"name":"realme Narzo 30A","price":"8499","image":"https://rukminim1.flixcart.com/image/416/416/klgx0280/mobile/z/b/z/narzo-30a-rmx3171-realme-original-imagyhbgzcyfwzfz.jpeg?q=70","description":"The Realme Narzo 30A is not just a sight to behold but also comes equipped with innovative features that will keep you productive and entertained. Its Helio G85 Gaming Processor ensures that you stay on top of the leaderboard while gaming. Its 16.5 cm (6.5) Mini-drop Fullscreen ensures an immersive experience while gaming, streaming content, and more. And, its 13 MP Primary Camera will help you take high-resolution photos in clear detail. This way, you can capture the beauty all around you."},
      {"id":4,"name":"APPLE iPhone 11","price":"46999","image":"https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/3/x/e/apple-iphone-11-mhdc3hn-a-original-imafwqepx5yxwctc.jpeg?q=70","description":"NA"},
    ]
   }

   getProduct(id: number){
     return this.products.filter((element)=> element.id == id)[0];
   }
}
