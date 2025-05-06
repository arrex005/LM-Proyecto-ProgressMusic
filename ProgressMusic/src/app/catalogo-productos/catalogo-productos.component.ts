import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  verProducto(id: number): void {
    this.router.navigate(['/producto', id]);
  }
}
