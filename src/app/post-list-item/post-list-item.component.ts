import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postItemTitle: string;
  @Input() postItemContent: string;
  @Input() postItemLoveIts: number;
  @Input() postItemCreated_at: string;

  constructor() { }

  ngOnInit() {
  }
  
  getColor() {
    if(this.postItemLoveIts > 0) {
      return 'green';
    } else if(this.postItemLoveIts <0 ) {
      return 'red';
    }
  }
  onLove() {
    this.postItemLoveIts++ ;
  }
  onDontLove() {
    this.postItemLoveIts-- ;
  }
}
