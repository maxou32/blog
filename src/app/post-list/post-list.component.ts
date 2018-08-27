import { Component, OnDestroy, Input, OnInit} from '@angular/core';
import { PostsService } from '../service/service.posts';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) {}

	ngOnInit() {
		this.postsSubscription = this.postsService.postsSubject.subscribe(
		  (posts: Post[]) => {
			this.posts = posts;
		  }
		);
		this.postsService.emitPosts();
	}

	ngOnDestroy() {
		this.postsSubscription.unsubscribe();
	}
   
}

