import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TrCurrencyPipe } from 'tr-currency';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductPipe } from './pipes/product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    TrCurrencyPipe,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
