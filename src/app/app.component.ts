import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

	// tableau des posts

    posts =  [
    new Post (
      'Mon first post',
      "Information : je vous conseille d'utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item.",
      5
    ),
    new Post (
      'Mon deuxième post',
      "Les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent",
      -3
    ),
    new Post (
      'Un post indifférent',
      "Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog",
      0
	)
    ];

}
