import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SigninComponent }   from '../signin/signin.component';
import { HomeComponent }   from '../home/home.component';
import { PhotosComponent }   from '../photos/photos.component';
import { RegisterComponent }   from '../register/register.component';
import { MapsComponent }   from '../maps/maps.component';
import { UploadphotosComponent }   from '../uploadphotos/uploadphotos.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'signin',  component: SigninComponent },
  { path: 'register',  component: RegisterComponent },

  { path: 'photos',  component: PhotosComponent },
  { path: 'maps',  component: MapsComponent },
//   { path: 'student/edit/:id', component: StudentFormComponent },
  { path: 'register/add', component: RegisterComponent },
    { path: 'uploadphotos',  component: UploadphotosComponent },


//   { path: 'grade',  component: GradeComponent },
//   { path: 'grade/edit/:id', component: GradeFormComponent },
//   { path: 'grade/add', component: GradeFormComponent },

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

