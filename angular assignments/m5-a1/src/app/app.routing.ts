
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';



const routes: Routes = [
    { 
        path: "home", 
        component: HomeComponent ,
    },
    { 
        path: "contact", 
        component: ContactComponent, 
        // children: [
        //     { path: "offers", component: OffersComponent },
        // ] 
    },
    { path: "product", component: ProductComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);