import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CreateCVComponent } from './pages/createcv/createcv.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { TestComponent } from './pages/test/test.component';
import { YourPageComponent } from './pages/your-page/your-page.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';

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
    NzButtonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
})
export class AppRoutingModule {}
