import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.getProductos().subscribe((productos) => {
      this.producto = productos.find((p) => p.id === id);
    });
  }

  volver(): void {
    this.router.navigate(['/catalogo']);
  }
}