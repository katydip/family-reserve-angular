import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SigninComponent }   from '../signin/signin.component';
import { HomeComponent }   from '../home/home.component';
import { PhotosComponent }   from '../photos/photos.component';
import { RegisterComponent }   from '../register/register.component';
import { MapsComponent }   from '../maps/maps.component';
import { UploadphotosComponent }   from '../uploadphotos/uploadphotos.component';
// import { NewuserComponent }   from '../newuser/newuser.component';
import { ProfileComponent } from '../profile/profile.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { CreateFamilyComponent } from '../create-family/create-family.component';
import { JoinfamilyComponent } from '../joinfamily/joinfamily.component';
import { MyfamilyComponent } from '../myfamily/myfamily.component';
import { AddAddressFormComponent }   from '../add-address-form/add-address-form.component';
import { DeleteConfirmComponent }   from '../delete-confirm/delete-confirm.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { ViewrecipesComponent } from '../viewrecipes/viewrecipes.component';



const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'signin',  component: SigninComponent },
  { path: 'signin/post',  component: SigninComponent },

  { path: 'register',  component: RegisterComponent },
  { path: 'register/add', component: RegisterComponent },

  { path: 'photos',  component: PhotosComponent },
  { path: 'maps',  component: MapsComponent },
  { path: 'register/add', component: RegisterComponent },
  { path: 'add-address-form', component: AddAddressFormComponent },
  { path: 'delete-confirm', component: DeleteConfirmComponent },
  { path: 'uploadphotos',  component: UploadphotosComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: EditprofileComponent },
  { path: 'create-family', component: CreateFamilyComponent },
  { path: 'joinfamily', component: JoinfamilyComponent },
  { path: 'myfamily', component: MyfamilyComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'viewrecipes', component: ViewrecipesComponent },


 
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

