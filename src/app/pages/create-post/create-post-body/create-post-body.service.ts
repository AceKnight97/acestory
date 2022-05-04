import { Injectable } from '@angular/core';
import { Toolbar } from 'ngx-editor';

const toolbar: Toolbar = [
  ['bold', 'italic'],
  ['underline', 'strike'],
  ['code', 'blockquote'],
  ['ordered_list', 'bullet_list'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['link'],
  ['text_color', 'background_color'],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
];

@Injectable({
  providedIn: 'root',
})
export class CreatePostBodyService {
  constructor() {}

  onImagesChange(file: File, images: string[]) {
    const reader = new FileReader();
    reader.onload = () => {
      images.push(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  getToolbar(){
    return toolbar;
  }
}
