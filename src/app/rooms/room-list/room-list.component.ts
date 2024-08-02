import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit {

  @Input() rooms: RoomList[]  = [];

  constructor() {}

  ngOnInit(): void {
    
  }
}
