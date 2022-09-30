import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { citysComponent } from '../app/citys/citys.component'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'citys',
        pathMatch: 'full'

    },
    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {
                path: 'citys',
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