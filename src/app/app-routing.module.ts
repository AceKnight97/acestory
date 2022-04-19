import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './pages/login/login.component';
import { TestComponent } from './pages/test/test.component';
import { CreateCVComponent } from './pages/createcv/createcv.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';

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
  ],
})
export class AppRoutingModule {}
