import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  isConnected = false;

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() date: string;
  @Input() author: string;

  constructor() {
    setTimeout(
      () => {
        this.isConnected = true;
      }, 3000
    );
   }

  ngOnInit() {
  }

  removeOneLike() {
    this.loveIts--;
  }

  addOneLike() {
    this.loveIts++;
  }

}
