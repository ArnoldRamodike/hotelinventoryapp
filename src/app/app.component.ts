import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventryapp';
  role = 'Admin';

  @ViewChild('user', {read: ViewContainerRef}) vcr! : ViewContainerRef;

  ngAfterViewInit(): void { 
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRoom = 50;
   }
}
