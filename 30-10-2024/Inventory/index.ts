interface InventoryItem {
    id: string;
    name: string;
}

interface Book extends InventoryItem {
    author: string;
    pages: number;
}

interface Clothing extends InventoryItem {
    size: string;
    material: string;
}

interface Electronics extends InventoryItem {
    brand: string;
    warranty: boolean;
}


class Inventory<T extends InventoryItem> {
    private items: Map<string, T>;
    constructor() {
        this.items = new Map();
    }
    addItem(item: T): void {
        this.items.set(item.id, item);
    }
    removeItem(id: string): T | undefined {
        const item = this.items.get(id);
        if (item) this.items.delete(id);
        return item;
    }
    findItem(id: string): T | undefined {
        return this.items.get(id);
    }
    getItems(): T[] {
        return Array.from(this.items.values());
    }
}

const bookInventory = new Inventory<Book>();
bookInventory.addItem({ id: "1", name: "Clean Code", author: "Robert C. Martin", pages: 464 });
bookInventory.addItem({ id: "2", name: "The Pragmatic Programmer", author: "Andrew Hunt", pages: 352 });


const clothingInventory = new Inventory<Clothing>();
clothingInventory.addItem({ id: "1", name: "Leather Jacket", size: "M", material: "Leather" });
clothingInventory.addItem({ id: "2", name: "Cotton T-Shirt", size: "L", material: "Cotton" });


const electronicsInventory = new Inventory<Electronics>();
electronicsInventory.addItem({ id: "1", name: "Laptop", brand: "Dell", warranty: true });
electronicsInventory.addItem({ id: "2", name: "Headphones", brand: "Sony", warranty: false });


console.log("Finding Book with ID '1':", bookInventory.findItem("1"));
console.log("Removing Electronics with ID '2':", electronicsInventory.removeItem("2"));
console.log("All Clothing Items:", clothingInventory.getItems());

