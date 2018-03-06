import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailsComponent } from './image-details/image-details.component';


const routes : Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full'},
    { path:'home', component:SearchComponent},
    { path:'images/:tag', component:ImageListComponent},
    { path:'images/details/:id', component:ImageDetailsComponent}
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }
