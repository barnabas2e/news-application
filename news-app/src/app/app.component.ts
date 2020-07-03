import { NewsApiService } from './news-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'news-app';

 mArticles: Array<any>;
 mSources: Array<any>;

 constructor(private newsApi: NewsApiService) {
   console.log('app component constructor called');
 }

 ngOnInit() {
   //let's load articles
   this.newsApi.getArticles().subscribe(data => this.mArticles = data['articles']);
   
   //load news sources
   this.newsApi.getSources().subscribe(data => this.mSources = data['sources']);
  }

  //search articles by ID
  searchArticles(source) {
    console.log("selected source is:" +source);
    this.newsApi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
