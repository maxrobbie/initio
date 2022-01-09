import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts = [];
  constructor(private http: HttpClient, private apiService: ApiService){}
  ngOnInit(): void{
    this.robbieBlog();
  }
  robbieBlog(){
    this.apiService.blogPost().subscribe(
      data => {console.log('------',data)},
      error => { console.log(error)})
  }
}
 