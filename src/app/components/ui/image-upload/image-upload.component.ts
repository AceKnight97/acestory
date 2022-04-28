import { Component, OnInit } from '@angular/core';
import { FileHandle } from 'src/app/interfaces/directives/file-handle';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  uploadedFiles: FileHandle[] = [];
  constructor() {}
  ngOnInit(): void {}
  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
  }
}
