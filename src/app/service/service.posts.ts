import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post';
import * as  firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {
  
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();
  
  constructor() {
    this.getPosts();
  }
     
  emitPosts() {
    this.postsSubject.next(this.posts);
  }
  
  savePosts() {
    console.log(this.posts);
    firebase.database().ref('/Posts').set(this.posts);
  }
  
  getPosts() {
    firebase.database().ref('/Posts')
      .on('value', (data: Datasnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }
  
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(id : number) {
    this.posts.splice(id, 1);
    this.savePosts();
    this.emitPosts();
  }
 
  updatePost(){
     this.savePosts();
     this.emitPosts(); 
  }
  
}