import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-control-flow',
  styleUrl: './control-flow.css',
  templateUrl: './control-flow.html',
})
export class ControlFlow {

  selectedCaste: string = '';


  // isStudentactive : boolean = true;

  isStudentactive = signal<boolean>(true);

  isActive(val: boolean) {
    this.isStudentactive.set(val);
  }

  cityList = ["Betul", "Bhopal", "Bombay", "Nagpur"]

  students = [
    { Name: "Arun", Age: 22, Course: "Angular", isActive: true },
    { Name: "Rahul", Age: 22, Course: "Angular", isActive: false },
    { Name: "Sonal", Age: 22, Course: "Angular", isActive: true },
    { Name: "Yash", Age: 22, Course: "Angular", isActive: false },
  ]
}
