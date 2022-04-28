import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { CodeInputModule } from 'angular-code-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputCTComponent } from './components/inputs/input-ct/input-ct.component';
import { InputTitleComponent } from './components/inputs/input-title/input-title.component';
import { HomeBodyComponent } from './components/pages/home/home-body/home-body.component';
import { HomeFooterComponent } from './components/pages/home/home-footer/home-footer.component';
import { HomeHeaderComponent } from './components/pages/home/home-header/home-header.component';
import { FoodTableComponent } from './components/tables/food-table/food-table.component';
import { CertificateComponent } from './components/ui/certificate/certificate.component';
import { EducationComponent } from './components/ui/education/education.component';
import { InnerFooterComponent } from './components/ui/inner-footer/inner-footer.component';
import { InnerHeaderComponent } from './components/ui/inner-header/inner-header.component';
import { OtherSkillsComponent } from './components/ui/other-skills/other-skills.component';
import { PostComponent } from './components/ui/post/post.component';
import { ProgrammingLanguageComponent } from './components/ui/programming-language/programming-language.component';
import { ProjectComponent } from './components/ui/project/project.component';
import { ReferenceComponent } from './components/ui/reference/reference.component';
import { WorkingExperienceComponent } from './components/ui/working-experience/working-experience.component';
import { CreatePostBodyComponent } from './pages/create-post/create-post-body/create-post-body.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { CreateCVComponent } from './pages/createcv/createcv.component';
import { HomeComponent } from './pages/home/home.component';
import { LearningComponent } from './pages/learning/learning.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { NewsFeedBodyComponent } from './pages/news-feed/news-feed-body/news-feed-body.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { TestComponent } from './pages/test/test.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { YourPageComponent } from './pages/your-page/your-page.component';
import { reducers } from './reducers';
import { NgxEditorModule } from 'ngx-editor';

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
    NewsFeedBodyComponent,
    PostComponent,
    YourPageComponent,
    InnerHeaderComponent,
    InnerFooterComponent,
    CreatePostComponent,
    CreatePostBodyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CodeInputModule,
    NgbModule,
    NgbPaginationModule,
    AngularEditorModule,
    NgxEditorModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
