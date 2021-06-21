export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Un grande telefono con uno degli schermi migliori'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 700,
    description: 'Un telefono fantastico con una delle migliori telecamere'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 4,
    name: 'Phone S20',
    price: 899,
    description: 'Il nuovo Samsung S20'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
