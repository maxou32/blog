import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  @Input() postItemTitle: string;
  @Input() postItemContent: string;
  @Input() postItemLoveIts: number;
  @Input() postItemCreated_at: string;



  constructor() { }

 
  ngOnInit() {
  }
    


}

