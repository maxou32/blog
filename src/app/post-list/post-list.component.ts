import { Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  // réception du tableau  de posts	
  @Input() postArray : Post [];


  constructor() { }

 
  ngOnInit() {
  }
   
}

