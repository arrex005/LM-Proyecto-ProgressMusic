import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalogo', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}