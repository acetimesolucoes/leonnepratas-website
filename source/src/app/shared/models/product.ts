import { ProductCategory } from "./product-category";
import { ProductSubCategory } from "./product-sub-category";

export class Product {
    constructor(id: string, title: string, quantity: number, price: number, picture_url: string, pictures?: string[]) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.price = price;
        this.picture_url = picture_url;
        this.categories = new Array();
        this.sub_categories = new Array();
        this.pictures = pictures ? pictures : new Array();
    }

    id: string;
    title: string;
    quantity: number;
    price: number;
    picture_url: string;
    categories: ProductCategory[];
    sub_categories: ProductSubCategory[];

    pictures: string[];

    AddCategories(productCategory: ProductCategory) {
        this.categories.push(productCategory);
    }
}