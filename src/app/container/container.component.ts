import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})

export class ContainerComponent implements OnInit, AfterContentInit {
  constructor (){}

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empNam = "kelly"
    
  }

  @ContentChild( EmployeeComponent) employee!  : EmployeeComponent;
}
