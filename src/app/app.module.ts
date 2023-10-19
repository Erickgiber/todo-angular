import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/ui/header/header.component'
import { RouterModule, Route } from '@angular/router' // Importa Route en lugar de Routes
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component'
import { HomeComponent } from './pages/home/home.component'
import { FormCreateComponent } from './components/form/create/form-create.component'
import { ItemsService } from './shared/Items.service'
import { TaskView } from './pages/task/task.component'

const routes: Route[] = [
  // Utiliza Route en lugar de Routes
  { path: '', component: HomeComponent },
  { path: ':task', component: TaskView },
  // otras rutas de tu aplicación
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    FormCreateComponent,
    TaskView,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)], // Utiliza routes en lugar de [routes]
  providers: [ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
