import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

	// tableau des posts

    posts = [
    {
      title: 'Mon premier post',
      content: "Information : je vous conseille d'utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item.",
      loveIts:5,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: "Les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent",
      loveIts:-3,
      created_at: new Date()
    },
    {
      title: 'Un post indifférent',
      content: "Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog",
      loveIts:0,
      created_at: new Date()
    }
    ];

}
