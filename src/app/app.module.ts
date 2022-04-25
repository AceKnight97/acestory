import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LearningComponent } from './pages/learning/learning.component';
import { FoodTableComponent } from './components/tables/food-table/food-table.component';
import { InputCTComponent } from './components/inputs/input-ct/input-ct.component';
import { InputTitleComponent } from './components/inputs/input-title/input-title.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { ProgrammingLanguageComponent } from './components/ui/programming-language/programming-language.component';
import { OtherSkillsComponent } from './components/ui/other-skills/other-skills.component';
import { WorkingExperienceComponent } from './components/ui/working-experience/working-experience.component';
import { EducationComponent } from './components/ui/education/education.component';
import { CertificateComponent } from './components/ui/certificate/certificate.component';
import { ProjectComponent } from './components/ui/project/project.component';
import { ReferenceComponent } from './components/ui/reference/reference.component';
import { LoginComponent } from './pages/login/login.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { TestComponent } from './pages/test/test.component';
import { CreateCVComponent } from './pages/createcv/createcv.component';
import { HomeHeaderComponent } from './components/pages/home/home-header/home-header.component';
import { HomeFooterComponent } from './components/pages/home/home-footer/home-footer.component';
import { HomeBodyComponent } from './components/pages/home/home-body/home-body.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { CodeInputModule } from 'angular-code-input';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { NewsFeedHeaderComponent } from './pages/news-feed/news-feed-header/news-feed-header.component';
import { NewsFeedBodyComponent } from './pages/news-feed/news-feed-body/news-feed-body.component';
import { NewsFeedFooterComponent } from './pages/news-feed/news-feed-footer/news-feed-footer.component';
import { PostComponent } from './components/ui/post/post.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LearningComponent,
    FoodTableComponent,
    InputCTComponent,
    InputTitleComponent,
    ProgrammingLanguageComponent,
    OtherSkillsComponent,
    WorkingExperienceComponent,
    EducationComponent,
    CertificateComponent,
    ProjectComponent,
    ReferenceComponent,
    LoginComponent,
    CreateCVComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeBodyComponent,
    UserHomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    NewsFeedComponent,
    NewsFeedHeaderComponent,
    NewsFeedBodyComponent,
    NewsFeedFooterComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CodeInputModule, NgbModule, NgbPaginationModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
