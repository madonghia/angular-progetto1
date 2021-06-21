import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Il prodotto è stato condiviso!');
  }

  onNotify() {
    window.alert('Sarai avvisato quando il prodotto andrà in saldo!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
