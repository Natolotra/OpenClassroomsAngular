import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Post';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labone et dolore manga aliqua. Ut enim ad minim veniam, quis',
      loveIts: 1,
      created_at: new Date(2017, 10, 24, 11, 0, 0, 0)
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labone et dolore manga aliqua. Ut enim ad minim veniam, quis',
      loveIts: -1,
      created_at: new Date(2017, 10, 24, 11, 0, 0, 0)
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labone et dolore manga aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: new Date(2017, 10, 24, 11, 0, 0, 0)
    } 
  ];
}
