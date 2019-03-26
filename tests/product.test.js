/* eslint-disable */

const {
  Product,
  typeBooks,
  typeFood,
  typeMedical,
  typeOthers,
} = require('../src/Product');


test('Test Imported chocolate', () => {
  const prod = new Product({
    name: 'imported box of chocolates',
    price: 10.00,
    type: typeFood,
    isImported: true,
  });
  expect(prod.resolveSalesTaxes()).toBe(0.50);
});


test('Test imported bottle of perfume', () => {
  const prod = new Product({
    name: 'imported bottle of perfume',
    price: 47.50,
    type: typeOthers,
    isImported: true,
  });
  expect(prod.resolveSalesTaxes()).toBe(7.15);
});


test('Test imported bottle of vodka', () => {
  const prod = new Product({
    name: 'imported bottle of vodka',
    price: 27.99,
    type: typeOthers,
    isImported: true,
  });
  expect(prod.resolveSalesTaxes()).toBe(4.2);
});

test('Test bottle of vodka NOT IMPORTED', () => {
  const prod = new Product({
    name: 'imported bottle of perfume',
    price: 18.99,
    type: typeOthers,
    isImported: false,
  });
  expect(prod.resolveSalesTaxes()).toBe(1.9);
});

test('Test packet of headache pills', () => {
  const prod = new Product({
    name: 'imported bottle of perfume',
    price: 9.75,
    type: typeMedical,
    isImported: false,
  });
  expect(prod.resolveSalesTaxes()).toBe(0);
});

test('Test 3 imported box of chocolates', () => {
  const prod = new Product({
    name: 'imported box of chocolates',
    price: 11.25,
    qty: 3,
    type: typeFood,
    isImported: true,
  });
  expect(prod.resolveSalesTaxes()).toBe(1.80);
});
