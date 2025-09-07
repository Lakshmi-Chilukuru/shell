import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
const repo2Url ="http://localhost:4210/remoteEntry.js"

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'nav-list',
    loadChildren: ()=>{
      return loadRemoteModule({
        remoteName:"repo2",
        remoteEntry : repo2Url,
        exposedModule : './NavListModule'
      })
      .then(m=>m.NavListModule)
      .catch(err=>console.log(err))
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
