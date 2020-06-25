import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

//Rutas

//Components
import { AppComponent } from './Root/app.component';
import { NavComponent } from './Components/Shared/Nav/Nav.component';
import { FormComponent } from './Components/Form/Form.component';
import { CardComponent } from './Components/Card/Card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
