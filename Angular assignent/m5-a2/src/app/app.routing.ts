
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';


const routes: Routes = [
    {path: "home",component: HomeComponent },
    {path: "contact", component: ContactComponent },
    {path: "product", component: ProductDetailComponent },
    {path: "products", component: ProductComponent },
    {path: "**", component: WildCardComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);