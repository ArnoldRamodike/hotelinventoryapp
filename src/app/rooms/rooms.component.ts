import { AfterViewInit, Component, OnInit, QueryList, ViewChild, viewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './rooms.service';


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = "Mariot hotel";
  numberOfRoom = 10;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  selectedRoom!: RoomList;

  roomLists: RoomList[] = []


  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  @ViewChild(HeaderComponent) HeaderChildrenComponent!: QueryList<HeaderComponent>

  // roomService  = new RoomService();

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomLists = this.roomsService.getRooms();
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Welcome on border dick licker!"

    this.HeaderChildrenComponent.last.title = "LAnce stroll!"
  }

  hidrooms = false;
  title = "Room Lists"
  toggle() {
    this.hidrooms = !this.hidrooms;
    this.title = "Room Changed"
  }

  selectRoom(room: RoomList) {
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
      checkoutTime: new Date("21-nov-2023"),
      rating: 2.5
    };

    // this.roomLists.push(room);
    this.roomLists = [...this.roomLists, room]
  }
}
