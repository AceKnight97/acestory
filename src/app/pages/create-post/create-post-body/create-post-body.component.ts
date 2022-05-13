import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { CreatePostBodyService } from './create-post-body.service';

// const html = toHTML(jsonDoc, schema); // schema is optional
// const jsonDoc = toDoc(html);

@Component({
  selector: 'app-create-post-body',
  templateUrl: './create-post-body.component.html',
  styleUrls: ['./create-post-body.component.scss'],
})
export class CreatePostBodyComponent implements OnInit, OnChanges, OnDestroy {
  editor: Editor = new Editor();
  selectedFile: any;
  images: string[] = [];
  toolbar: Toolbar;
  postForm;
  titleErr = '';

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private createPostBodyService: CreatePostBodyService
  ) {
    this.toolbar = createPostBodyService.getToolbar();

    this.postForm = this.fb.group({
      title: [''],
      html: [''],
    });
  }

  ngOnInit(): void {}

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  ngOnChanges(changes: any): void {
    console.log({ changes });
  }

  onFormSubmit() {}
}
