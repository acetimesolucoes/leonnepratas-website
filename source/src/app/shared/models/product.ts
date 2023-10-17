import { ProductCategory } from "./product-category";
import { ProductSubCategory } from "./product-sub-category";

export class Product {
    constructor(id: string, title: string, quantity: number, price: number, picture_url: string,) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.price = price;
        this.picture_url = picture_url;
        this.categories = [];
        this.sub_categories = [];
    }

    id: string;
    title: string;
    quantity: number;
    price: number;
    picture_url: string;
    categories: ProductCategory[];
    sub_categories: ProductSubCategory[];

    AddCategories(productCategory: ProductCategory) {
        this.categories.push(productCategory);
    }
}