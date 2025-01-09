import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'], // التأكد من كتابة styleUrls بصيغة الجمع
})
export class VideoComponent {
  showVideo: boolean = false;
 
  openVideo() {
    this.showVideo = true;
    console.log('Video opened:', this.showVideo);
  }

  closeVideo() {
    this.showVideo = false;
  }
}