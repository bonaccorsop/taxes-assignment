const {
  Product,
  round,
} = require('./Product');

module.exports = class Receipt {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addProduct(productData) {
    this.products.push(new Product(productData));
  }

  getSalesTaxes() {
    return round(this.products.reduce(
      (total, product) => total + product.resolveSalesTaxes(),
      0,
    ));
  }

  getTotal() {
    const taxFreeTotal = this.products.reduce(
      (total, product) => total + product.resolveTaxFreeTotal(),
      0,
    );
    return round(taxFreeTotal + this.getSalesTaxes());
  }
};
