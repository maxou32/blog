import { Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  
  // réception des éléments constitutifs de chaque post
  @Input() post: Post;
  
  constructor() { }

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
  }
  onDontLove() {
    this.post.loveIts-- ;
  }
}
