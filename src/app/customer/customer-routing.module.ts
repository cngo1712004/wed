import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CartComponent } from './components/pages/cart/cart.component'; 
import { ProductComponent } from './components/pages/product/product.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
const routes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            { path: '', component: CustomerComponent },
            // Các tuyến đường khác của admin module
        ],
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'product', component: ProductComponent
    },
    {
        path:'product-1' , component:ProductDetailsComponent
    },
    {
        path:'contact' , component:ContactComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
