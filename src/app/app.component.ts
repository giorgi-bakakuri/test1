import { Component } from '@angular/core';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';

  users: User[] = [
    {brand: 'მერსედესი', age: 2022, price: 190000, favorit: false},
    {brand: 'სუბარუ', age: 2018, price: 21000, favorit: false},
    {brand: 'ჰონდა', age: 2008, price: 34000, favorit: true},
    {brand: 'ტოიოტა', age: 2021, price: 20000, favorit: false}
  ]

}
