import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  hotelName = "Mariot hotel";
  numberOfRoom = 10;

  rooms : Room ={
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  selectedRoom! : RoomList;

  roomLists : RoomList[] = [

 ]

 constructor () {

 }

  ngOnInit() : void {
    this.roomLists = [
      {
        roomNumber: 2,
      roomType: "delux",
      ameneties: "luncjh",
      price: 200,
      photos: "https://images.unsplash.com/photo-1722232581651-d87e4099561b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      checkinTime: new Date("23-apr-2024"),
      checkoutTime: new Date( "11-nov-2023"),
        rating: 4.5
    },
      {
        roomNumber: 5,
      roomType: "plain",
      ameneties: "nne",
      price: 200,
      photos: "https://plus.unsplash.com/premium_photo-1722170080353-5b68cd7b16ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      checkinTime: new Date("27-apr-2024"),
      checkoutTime: new Date( "11-may-2023"),
        rating: 5.0
    },
      {
        roomNumber: 10,
      roomType: "Good",
      ameneties: "wifi",
      price: 120,
      photos: "https://plus.unsplash.com/premium_photo-1722170080353-5b68cd7b16ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      checkinTime: new Date("27-jan-2024"),
      checkoutTime: new Date( "11-dec-2025"),
        rating: 3.5
    },
    ]
  }

  hidrooms =false;
  title = "Room Lists"
  toggle(){
    this.hidrooms = !this.hidrooms;
    this.title = "Room Changed"
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 7,
      roomType: "mountain",
      ameneties: "pets",
      price: 200,
      photos: "https://images.unsplash.com/photo-1722232581651-d87e4099561b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      checkinTime: new Date("26-aug-2024"),
      checkoutTime: new Date( "21-nov-2023"),
        rating: 2.5
    };

    // this.roomLists.push(room);
    this.roomLists = [...this.roomLists, room]
  }
}
