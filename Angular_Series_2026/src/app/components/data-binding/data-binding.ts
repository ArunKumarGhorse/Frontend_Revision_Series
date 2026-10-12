import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  courseName: string = "System Design";
  coursePrice: number = 1234;
  isActive: boolean = true;
  classname = 'secondary';
  // signal variable
  courseDuration = signal<string>('3 months');

  // signal array of city
  cityList = signal<string[]>(["Nagpur", "Mumbai", "Pune", "Delhi"])

  // signal obj
  student = signal<any>({
    name: "Arun",
    age: 22,
    isIndian: true,
    city: "Nagpur"
  })

  constructor() {
    console.log(this.courseName);
    this.courseName = "Full Stack";
    console.log(this.courseName);
    console.log(this.coursePrice);
    console.log(this.isActive);
  }

  changeCourseName(para: string): void {
    this.courseName = para;
    alert("Course Name Changed: " + this.courseName)
  }
  onCityChange(): void {
    console.log("City Changed");
  }

  AddCity(para: string): void {
    // this will update entire array by new 
    // this.cityList.set(["para"]);

    // using update method
    this.cityList.update((old: string[]) => [para, ...old])

    console.log(this.cityList)
  }

  ChangeCity() {
    this.student.set((old: any) => ({ ...old, city: "Indore" }))
  }
}

