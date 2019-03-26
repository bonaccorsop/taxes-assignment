const { round } = require('./utils');

const typeBooks = Symbol('books');
const typeFood = Symbol('food');
const typeMedical = Symbol('medical');
const typeOthers = Symbol('others');

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

module.exports = {
  Product: class Product {
    constructor(data) {
      this.data = {
        qty: 1,
        type: typeOthers,
        isImported: false,
        ...data,
      };

      // validate product qty
      if (!Number.isInteger(this.data.qty) || this.data.qty <= 0) {
        throw new InvalidProductQuantityException();
      }

      // validate product price
      if (isNaN(this.data.price) || this.data.price < 0) {
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
        taxes += round(price * 0.1, 5) * qty;
      }

      // eventually apply import taxes
      if (this.data.isImported) {
        taxes += round(price * 0.05, 5) * qty;
      }

      return round(taxes);
    }
  },
  types: {
    typeBooks,
    typeFood,
    typeMedical,
    typeOthers,
  },
};
