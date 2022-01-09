import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){}
  blogPost(){
    return this.http.get('http://localhost/wordpress/wp-json/wp/v2/posts?page=1&per_page=6');
  }
}
