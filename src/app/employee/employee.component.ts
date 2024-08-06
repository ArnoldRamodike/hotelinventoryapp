import { CommonModule } from '@angular/common';
import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  empNam: string = "Polly";

  constructor(@Self() private roomServic: RoomsService) { }
  ngOnInit(): void {

  }
}
