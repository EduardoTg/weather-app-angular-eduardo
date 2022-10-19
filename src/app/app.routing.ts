import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { CitysComponent } from '../app/citys/citys.component'

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home/search',
        pathMatch: 'full'

    },
    {
        path: 'home',
        component: FullLayoutComponent,
        children: [
            {
                path: 'search',
                component : CitysComponent
            }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }