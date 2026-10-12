import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {
  constructor() {
    console.log("Constructor Called")
  }

  ngOnInit() {
    console.log("ngOnInit Called")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Called")
  }
}
