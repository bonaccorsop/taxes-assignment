
const { isEmpty } = require('lodash');

const typeBooks = Symbol('books');
const typeFood = Symbol('food');
const typeMedical = Symbol('medical');
const typeOthers = Symbol('others');

class EmptyProductNameException extends Error {
  constructor() {
    super();
    this.message = 'Product name cannot be empty!';
  }
}

class InvalidProductQuantityException extends Error {
  constructor() {
    super();
    this.message = 'Invalid product quantity!';
  }
}

class InvalidProductPriceException extends Error {
  constructor() {
    super();
    this.message = 'Invalid product price!';
  }
}

function round(value, roundUp = 1) {
  let rounded = Math.round(value * 100);
  const mod = rounded % roundUp;
  if (mod !== 0) {
    rounded += roundUp - mod;
  }
  return rounded / 100;
}

module.exports = {
  Product: class Product {
    constructor(data) {
      this.data = {
        qty: 1,
        type: typeOthers,
        isImported: false,
        ...data,
      };

      // validate product name
      if (isEmpty(this.data.name)) {
        throw new EmptyProductNameException();
      }

      // validate product qty
      if (!Number.isInteger(this.data.qty) && this.data.qty <= 0) {
        throw new InvalidProductQuantityException();
      }

      // validate product price
      if (Number.isNaN(this.data.price) && this.data.price <= 0) {
        throw new InvalidProductPriceException();
      }
    }

    resolveTaxFreeTotal() {
      return this.data.price * this.data.qty;
    }

    resolveSalesTaxes() {
      const { price, qty } = this.data;
      let taxes = 0;

      // eventually apply basic taxes
      if (![typeMedical, typeBooks, typeFood].includes(this.data.type)) {
        taxes += round((price * 10) / 100, 5) * qty;
      }

      // eventually apply import taxes
      if (this.data.isImported) {
        taxes += round((price * 5) / 100, 5) * qty;
      }

      return round(taxes);
    }
  },
  typeBooks,
  typeFood,
  typeMedical,
  typeOthers,
  round,
};
