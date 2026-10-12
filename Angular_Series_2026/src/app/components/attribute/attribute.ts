import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  imports: [NgClass, NgStyle],
  selector: 'app-attribute',
  styleUrl: './attribute.css',
  templateUrl: './attribute.html',
})
export class Attribute {
  textClass: string = "bg-success"
  textColor: string = "blue"

  myCss: any = {
    background: 'purple',
    color: 'white',
    "text-size": '20px',
    'font-weight': 'bold'
  }

  students = [
    { Name: "Arun", Age: 22, Course: "Angular", isActive: true },
    { Name: "Rahul", Age: 22, Course: "Angular", isActive: false },
    { Name: "Sonal", Age: 22, Course: "Angular", isActive: true },
    { Name: "Yash", Age: 22, Course: "Angular", isActive: false },
  ]
}
