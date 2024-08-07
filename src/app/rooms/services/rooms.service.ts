import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppCOnfig } from '../../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomLists: RoomList[] = [

  ]
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppCOnfig, private http: HttpClient) {
    console.log('Room service initialized..');
    console.log(config.apiEndpoint);

  }

  getRooms() {
    return this.http.get('/api/rooms')
  }
}


// {
//   {
//     roomNumber: 2,
//     roomType: "delux",
//     ameneties: "luncjh",
//     price: 200,
//     photos: "https://images.unsplash.com/photo-1722232581651-d87e4099561b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
//     checkinTime: new Date("23-apr-2024"),
//     checkoutTime: new Date("11-nov-2023"),
//     rating: 4.5
//   },
//   {
//     roomNumber: 5,
//     roomType: "plain",
//     ameneties: "nne",
//     price: 200,
//     photos: "https://plus.unsplash.com/premium_photo-1722170080353-5b68cd7b16ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
//     checkinTime: new Date("27-apr-2024"),
//     checkoutTime: new Date("11-may-2023"),
//     rating: 5.0
//   },
//   {
//     roomNumber: 10,
//     roomType: "Good",
//     ameneties: "wifi",
//     price: 120,
//     photos: "https://plus.unsplash.com/premium_photo-1722170080353-5b68cd7b16ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
//     checkinTime: new Date("27-jan-2024"),
//     checkoutTime: new Date("11-dec-2025"),
//     rating: 3.5
//   },
// }