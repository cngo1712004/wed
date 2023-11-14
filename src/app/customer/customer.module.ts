import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { CustomerComponent } from './customer.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductComponent } from './components/pages/product/product.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CustomerComponent,
    CartComponent,
    ProductComponent,
    ProductDetailsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
