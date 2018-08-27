import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

//composant ajouté
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

//service ajouté
import { PostsService } from './service/service.posts';

//modules ajoutés
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

//route sans controle utilisateur
const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent }, 
  { path: 'posts/new',  component: PostFormComponent},
  { path: '', component: PostListComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
	PostFormComponent,
	FourOhFourComponent,
	HeaderComponent
  ],
  imports: [
    BrowserModule,
 	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
