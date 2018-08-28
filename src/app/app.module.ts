import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PostComponent },
  { path: 'not-found', component: PostComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
