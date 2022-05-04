import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { CreateCVComponent } from './pages/createcv/createcv.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { TestComponent } from './pages/test/test.component';
import { YourPageComponent } from './pages/your-page/your-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // children:[
    //   {
    //     path: 'sign-in', // child route path
    //     component: SignInComponent, // child route component that the router renders
    //   },
    // ]
  },
  { path: 'news-feed', component: NewsFeedComponent },
  { path: 'createcv', component: CreateCVComponent },
  { path: 'test', component: TestComponent },
  { path: 'home', component: HomeComponent },
  { path: 'your-page', component: YourPageComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: '**', redirectTo: '/news-feed', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
