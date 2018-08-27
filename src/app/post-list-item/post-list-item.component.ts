import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../service/service.posts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  
  // réception des éléments constitutifs de chaque post
  @Input() post: Post;
  @Input() index: number;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }
  
  // calcul de la couleur affecté à chaque post
  getColor() {
    if(this.post.loveIts > 0) {
      return 'green';
    } else if(this.post.loveIts <0 ) {
      return 'red';
    }
  }
  
  // Mise à jour des loves en fonction des clics sur les boutons
  onLove() {
    this.post.loveIts++ ;
	this.postsService.updatePost();
  }
  onDontLove() {
    this.post.loveIts-- ;
	this.postsService.updatePost();
  }
  
  onDelete(id : number) {
    this.postsService.removePost(id);
  }

}
