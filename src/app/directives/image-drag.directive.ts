import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../interfaces/directives/file-handle';

@Directive({
  selector: '[appImageDrag]',
})
export class ImageDragDirective {
  @Output('files') files: EventEmitter<FileHandle[]> = new EventEmitter();
  @HostBinding('style.background') public background = '#eee';
  constructor(private sanitizer: DomSanitizer) {}
  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }
  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    let files: FileHandle[] = [];
    const {dataTransfer} = evt;
    if (dataTransfer) {
      for (let i = 0; i < dataTransfer.files.length; i++) {
        const file = dataTransfer.files[i];
        const url = this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        );
        files.push({
          file,
          url,
        });
      }
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
}
