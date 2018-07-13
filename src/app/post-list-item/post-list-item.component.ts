import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  
  // réception des éléments constitutifs de chaque post
  @Input() postItemTitle: string;
  @Input() postItemContent: string;
  @Input() postItemLoveIts: number;
  @Input() postItemCreated_at: string;

  constructor() { }

  ngOnInit() {
  }
  
  // calcul de la couleur affecté à chaque post
  getColor() {
    if(this.postItemLoveIts > 0) {
      return 'green';
    } else if(this.postItemLoveIts <0 ) {
      return 'red';
    }
  }
  
  // Mise à jour des loves en fonction des clics sur les boutons
  onLove() {
    this.postItemLoveIts++ ;
  }
  onDontLove() {
    this.postItemLoveIts-- ;
  }
}
