import { Routes } from '@angular/router';
import { MainComponent } from "../view/main/main.component"
import { LoginComponent } from "../view/login/login.component"
import { RegisterComponent } from "../view/register/register.component"
import { HomeComponent } from "../feature/home/home.component"
import { ProductsComponent } from "../feature/products/products.component"
export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'product', component: ProductsComponent },
        ]
    },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
];

