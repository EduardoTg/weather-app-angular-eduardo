import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { citysComponent } from '../app/citys/citys.component'

export const routes: Routes = [
/*     {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'

    }, */
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'

    },
    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {
                path: 'search',
                component : citysComponent
            }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }