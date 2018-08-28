import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class PostService{
    postsSubject = new Subject<any[]>();
    private posts = [
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

    constructor(){}

    emitAppareilSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    addAppareil(title: string, content: string){
        const postObject = {
          title: '',
          content: '',
          loveIts: 0,
          created_at: new Date(Date.now())
        }
        postObject.title = title;
        postObject.content = content;
        this.posts.push(postObject);
    }

    upLoveIts(index: number){
      this.posts[index].loveIts++;
      this.emitAppareilSubject();
    }

    downLoveIts(index: number){
      this.posts[index].loveIts--;
      this.emitAppareilSubject();
    }

    deleteByIndex(index: number){
      this.posts.splice(index, 1);
      this.emitAppareilSubject();
      console.log(this.posts);
    }
}