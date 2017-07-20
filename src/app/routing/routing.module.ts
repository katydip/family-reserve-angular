import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SigninComponent }   from '../signin/signin.component';
import { HomeComponent }   from '../home/home.component';
import { PhotosComponent }   from '../photos/photos.component';
import { RegisterComponent }   from '../register/register.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'signin',  component: SigninComponent },
  { path: 'register',  component: RegisterComponent },

  { path: 'photos',  component: PhotosComponent },
//   { path: 'student/edit/:id', component: StudentFormComponent },
//   { path: 'student/add', component: StudentFormComponent },

//   { path: 'grade',  component: GradeComponent },
//   { path: 'grade/edit/:id', component: GradeFormComponent },
//   { path: 'grade/add', component: GradeFormComponent },

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

