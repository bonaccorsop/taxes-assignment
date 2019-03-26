/* eslint-disable */

const {
  Product,
  types: {
    typeBooks,
    typeFood,
    typeMedical,
    typeOthers,
  }
} = require('../src/Product');

test('Test InvalidProductQuantityException on not numeric quantity', () => {
  const call = () => new Product({ price: 1.25, qty: 'myQuantity' });
  expect(call).toThrow('Invalid product quantity!');
});

test('Test InvalidProductQuantityException on not integer quantity', () => {
  const call = () => new Product({ price: 1.25, qty: 1.23 });
  expect(call).toThrow('Invalid product quantity!');
});

test('Test InvalidProductQuantityException on negative quantity', () => {
  const call = () => new Product({ price: 1.45, qty: -1 });
  expect(call).toThrow('Invalid product quantity!');
});

test('Test InvalidProductPriceException on not numeric price', () => {
  const call = () => new Product({ price: 'tooExpansive' });
  expect(call).toThrow('Invalid product price!');
});

test('Test InvalidProductPriceException on negative price', () => {
  const call = () => new Product({ price: -18.34 });
  expect(call).toThrow('Invalid product price!');
});


test('Test taxes for "Imported chocolate"', () => {
  const prod = new Product({
    name: 'imported box of chocolates',
    price: 10.00,
    type: typeFood,
    isImported: true,
  });
  expect(prod.resolveSalesTaxes()).toBe(0.50);
});


test('Test taxes for "imported bottle of perfume"', () => {
  const prod = new Product({
    name: 'imported bottle of perfume',
    price: 47.50,
    type: typeOthers,
    isImported: true,
  });
  expect(prod.resolveSalesTaxes()).toBe(7.15);
});


test('Test taxes for "imported bottle of vodka"', () => {
  const prod = new Product({
    name: 'imported bottle of vodka',
    price: 27.99,
    type: typeOthers,
    isImported: true,
  });
  expect(prod.resolveSalesTaxes()).toBe(4.2);
});

test('Test taxes for "bottle of vodka NOT IMPORTED"', () => {
  const prod = new Product({
    name: 'imported bottle of perfume',
    price: 18.99,
    type: typeOthers,
    isImported: false,
  });
  expect(prod.resolveSalesTaxes()).toBe(1.9);
});

test('Test taxes for "packet of headache pills"', () => {
  const prod = new Product({
    name: 'imported bottle of perfume',
    price: 9.75,
    type: typeMedical,
    isImported: false,
  });
  expect(prod.resolveSalesTaxes()).toBe(0);
});

test('Test taxes for "3 imported box of chocolates"', () => {
  const prod = new Product({
    name: 'imported box of chocolates',
    price: 11.25,
    qty: 3,
    type: typeFood,
    isImported: true,
  });
  expect(prod.resolveSalesTaxes()).toBe(1.80);
});
