import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { Product, ProductCategory, ProductSubCategory } from 'src/app/shared/models';

@Component({
  selector: 'app-b2b-product-detail',
  templateUrl: './b2b-product-detail.component.html',
  styleUrls: ['./b2b-product-detail.component.scss']
})
export class B2bProductDetailComponent implements OnInit {

  product: Product | null = null;
  productCategories: ProductCategory[] | null = null;
  productSubCategories: ProductSubCategory[] | null = null;
  quantityProductToCart: number = 0;

  shippingList: object[] = [];
  shippingCalculating: boolean = false;
  postalCode: string | null = null;
  postalCodeSaved: boolean = false;

  openPictureBox: boolean = false;
  picturePrincipalIndex: number = 0;

  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private appState: AppStateService,
  ) {
    activatedRoute.data.forEach(d => {
      console.log('d => ', d);
    });

    activatedRoute.queryParamMap.forEach(p => {
      console.log('p => ', p);
    });

    this.form = this.formBuilder.group({
      color: [],
      quantity: [0],
      size: [],
    });

    // this.postalCode = '32412216';
    // this.postalCodeSaved = true;
    // this.shippingCalculate();
  }

  ngOnInit(): void {
    this.getProduct();
    this.getProductCategories();
    this.getProductSubCategories();
  }

  generateRandomPictureUrl(width: number, height: number) {
    let random_picture_id = Math.floor(Math.random() * (500 - 1)) + 1;

    return `https://picsum.photos/id/${random_picture_id}/${width}/${height}`;
  }

  getProduct() {
    let randomUnitPrice = this.getRandomFloat(280.80, 15.99, 2);
    let product_id = String(Math.floor(Math.random() * 999999));

    let pictures = new Array(
      this.generateRandomPictureUrl(1900, 1900),
      this.generateRandomPictureUrl(1900, 1900),
      this.generateRandomPictureUrl(1900, 1900),
      this.generateRandomPictureUrl(1900, 1900),
    );

    this.product = new Product(
      product_id,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      1,
      randomUnitPrice,
      this.generateRandomPictureUrl(1900, 1900),
      pictures
    );
  }

  getProductCategories() {
    this.productCategories = [];

    this.productCategories.push(
      new ProductCategory(
        String(Math.floor(Math.random() * 999999)),
        'Lorem',
        'lorem',
      )
    );
    this.productCategories.push(
      new ProductCategory(
        String(Math.floor(Math.random() * 999999)),
        'Ipsum',
        'ipsum',
      )
    );
    this.productCategories.push(
      new ProductCategory(
        String(Math.floor(Math.random() * 999999)),
        'Dolats',
        'dolats',
      )
    );
  }

  getProductSubCategories() {
    this.productSubCategories = [];

    this.productSubCategories.push(
      new ProductSubCategory(
        String(Math.floor(Math.random() * 999999)),
        'Sustuns',
        'sustuns',
      )
    );
    this.productSubCategories.push(
      new ProductSubCategory(
        String(Math.floor(Math.random() * 999999)),
        'Ipnets',
        'ipnets',
      )
    );
  }

  getRandomFloat(min: number, max: number, decimals: number) {
    const str = (Math.random() * (max - min) + min).toFixed(
      decimals,
    );

    return parseFloat(str);
  }

  pictureUrlToSanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  increaseProduct() {
    if (this.getMaxQuantityProductToDecrease()) {
      this.quantityProductToCart++;
    }
  }

  decreaseProduct() {
    if (this.getMinQuantityProductToDecrease()) {
      this.quantityProductToCart--;
    }
  }

  getMinQuantityProductToDecrease() {
    if (this.quantityProductToCart > 0) {
      return true;
    } else {
      return false;
    }
  }

  getMaxQuantityProductToDecrease() {
    if (this.quantityProductToCart < 5) {
      return true;
    } else {
      return false;
    }
  }

  shippingCalculate() {
    if (this.validatePostalCode()) {
      this.shippingCalculating = true;
      this.shippingList = [];

      setTimeout(() => {
        this.shippingCalculating = false;
        this.postalCodeSaved = true;
        this.shippingList.push({
          id: '1'
        });

        console.log(this.shippingList);

      }, 1000);
    }
  }

  validatePostalCode(): boolean {
    console.log(this.postalCode);

    if (this.postalCode && this.postalCode.length == 8) {
      return true;
    } else {
      return false;
    }
  }

  changePostalCode() {
    this.postalCode = null;
    this.postalCodeSaved = false;
    this.shippingList = [];
  }

  onClickPrincipalPicture() {
    this.openPictureBox = true;
  }

  changePictureIndexSelected(index: number) {
    this.appState.setOnToLoading(1000);
    this.picturePrincipalIndex = index;
  }
}
