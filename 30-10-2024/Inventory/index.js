var Inventory = /** @class */ (function () {
  function Inventory() {
    this.items = new Map();
  }
  Inventory.prototype.addItem = function (item) {
    this.items.set(item.id, item);
  };
  Inventory.prototype.removeItem = function (id) {
    var item = this.items.get(id);
    if (item) this.items.delete(id);
    return item;
  };
  Inventory.prototype.findItem = function (id) {
    return this.items.get(id);
  };
  Inventory.prototype.getItems = function () {
    return Array.from(this.items.values());
  };
  return Inventory;
})();
var bookInventory = new Inventory();
bookInventory.addItem({
  id: "1",
  name: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
});
bookInventory.addItem({
  id: "2",
  name: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  pages: 352,
});
var clothingInventory = new Inventory();
clothingInventory.addItem({
  id: "1",
  name: "Leather Jacket",
  size: "M",
  material: "Leather",
});
clothingInventory.addItem({
  id: "2",
  name: "Cotton T-Shirt",
  size: "L",
  material: "Cotton",
});
var electronicsInventory = new Inventory();
electronicsInventory.addItem({
  id: "1",
  name: "Laptop",
  brand: "Dell",
  warranty: true,
});
electronicsInventory.addItem({
  id: "2",
  name: "Headphones",
  brand: "Sony",
  warranty: false,
});
console.log("Finding Book with ID '1':", bookInventory.findItem("1"));
console.log(
  "Removing Electronics with ID '2':",
  electronicsInventory.removeItem("2")
);
console.log("All Clothing Items:", clothingInventory.getItems());
