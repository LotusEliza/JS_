import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareService } from './services/share.service';

const appRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent }]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
