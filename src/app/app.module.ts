import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Import for page routing handle
import { RouterModule } from '@angular/router';

//import for hadle http methods with API data request and response
import { HttpClientModule } from '@angular/common/http';

//import angular material
import { MatSliderModule } from  '@angular/material/slider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComComponent } from './login-com/login-com.component';
import { DispalyRegistedComComponent } from './dispaly-registed-com/dispaly-registed-com.component';
import { LearningAngularComponent } from './learning-angular/learning-angular.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormFeildComponent } from './form-feild/form-feild.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComComponent } from './home-com/home-com.component';
import { UserListTableComponent } from './user-list-table/user-list-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComComponent,
    DispalyRegistedComComponent,
    LearningAngularComponent,
    NavigationComponent,
    FormFeildComponent,
    HomeComComponent,
    UserListTableComponent,
    UpdateComponent,
    DeleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComComponent},
      {path: 'login', component: LoginComComponent},
      {path: 'create', component: CreateComponent},
      {path: 'view', component: DispalyRegistedComComponent},
      {path: 'update', component: UpdateComponent},
      {path: 'delete', component: DeleteComponent},
    ]),

    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
