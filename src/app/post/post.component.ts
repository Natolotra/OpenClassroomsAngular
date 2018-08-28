import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitAppareilSubject();
  }

  upLoveIt(index: number){
    this.postService.upLoveIts(index);
  }

  downLoveIt(index: number){
    this.postService.downLoveIts(index);
  }

  deletePost(index: number){
    this.postService.deleteByIndex(index);
  }
}
