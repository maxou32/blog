import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';
import { PostsService } from '../../service/service.posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string; 
  fileUploaded = false;
  
  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: 0
    });
  }
  
  onSavePost() {
	const title = this.postForm.get('title').value;
	const content = this.postForm.get('content').value;
	const loveIts = 0;
	const created_at = Date.now();
	const newPost= new Post(title, content, loveIts, created_at);

	this.postsService.createNewPost(newPost);
	this.router.navigate(['/posts']);
  }

}

