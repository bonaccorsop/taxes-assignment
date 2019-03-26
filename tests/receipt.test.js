/* eslint-disable */

const Receipt = require('../src/Receipt');

const {
  types: {
    typeBooks,
    typeFood,
    typeMedical,
    typeOthers,
  },
} = require('../src/Product');

function receiptMacro(products, salesTaxes, total) {
  const receipt = new Receipt();
  products.forEach((prod) => { receipt.addProduct(prod); });
  expect(receipt.getSalesTaxes()).toBe(salesTaxes);
  expect(receipt.getTotal()).toBe(total);
}

test('Test Receipt 1', () => receiptMacro([
  {
    qty: 2,
    name: 'book',
    price: 12.49,
    type: typeBooks,
  },
  {
    name: 'music CD',
    price: 14.99,
    type: typeOthers,
  },
  {
    name: 'chocolate bar',
    price: 0.85,
    type: typeFood,
  },
], 1.50, 42.32));


test('Test Receipt 2', () => receiptMacro([
  {
    name: 'imported box of chocolates',
    price: 10.00,
    type: typeFood,
    isImported: true,
  },
  {
    name: 'imported bottle of perfume',
    price: 47.50,
    type: typeOthers,
    isImported: true,
  },
], 7.65, 65.15));


test('Test Receipt 3', () => receiptMacro([
  {
    name: 'imported bottle of perfume',
    price: 27.99,
    type: typeOthers,
    isImported: true,
  },
  {
    name: 'bottle of perfume',
    price: 18.99,
    type: typeOthers,
  },
  {
    name: 'packet of headache pills',
    price: 9.75,
    type: typeMedical,
  },
  {
    name: 'box of imported chocolates at 11.25',
    price: 11.25,
    type: typeFood,
    qty: 3,
    isImported: true,
  },
], 7.90, 98.38));
