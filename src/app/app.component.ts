import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'hotelinventryapp';
  role = 'Admin';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Polly hotels";
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr! : ViewContainerRef;

  // ngAfterViewInit(): void { 
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRoom = 50;
  //  }
}
