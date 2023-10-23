import { ProductCategory } from "./product-category";
import { ProductSubCategory } from "./product-sub-category";

export class Product {
    constructor(id: string, title: string, stock: number, price: number, pictures: string[], url: string) {
        this.id = id;
        this.title = title;
        this.stock = stock;
        this.price = price;
        this.categories = new Array();
        this.sub_categories = new Array();
        this.url = url;
        this.pictures = pictures ? pictures : new Array();
    }

    id: string;
    title: string;
    stock: number;
    price: number;
    categories: ProductCategory[];
    sub_categories: ProductSubCategory[];
    url: string;
    pictures: string[];

    AddCategories(productCategory: ProductCategory) {
        this.categories.push(productCategory);
    }
}