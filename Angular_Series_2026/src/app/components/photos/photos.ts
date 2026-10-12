import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// ChangeDetectorRef
@Component({
  imports: [FormsModule],
  selector: 'app-photos',
  styleUrl: './photos.css',
  templateUrl: './photos.html',
})
export class Photos implements OnInit {
  //Dependency injection
  // constructor(private http:HttpClient){
  // }
  // New method to fetch API
  photoList: any[] = [];
  http = inject(HttpClient);

  newPhoto: any = {
    "albumId": 0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }
  // cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe({
        next: (result) => {
          console.log("API RESULT:", result);
          console.log("LENGTH:", result.length);

          this.photoList = result;
        },
        error: (err) => {
          console.error("API ERROR:", err);
        }
      });
  }

  onSavePhoto() {
    this.newPhoto.post("https://jsonplaceholder.typicode.com/photos").subscribe((response: any) => {
      alert("API CALL SUCCESS")
      debugger;
      this.getAllPhotos();
    })
  }
}
