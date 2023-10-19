import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-zoom-picture',
  templateUrl: './zoom-picture.component.html',
  styleUrls: ['./zoom-picture.component.scss']
})
export class ZoomPictureComponent implements OnChanges {

  @Input() isOpened: boolean = false;
  @Input() pictures: string[] = [];
  @Input('indexSelected') picturePrincipalIndex: number = 0;

  @Output() openCloseChange = new EventEmitter<boolean>();
  @Output() onChangePictureSelected = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['picturePrincipalIndex']) {
      this.picturePrincipalIndex = changes['picturePrincipalIndex'].currentValue;
    }

    if (changes['isOpened'] && changes['isOpened'].currentValue == true) {
      this.openBox();
    } else if (changes['isOpened'] && changes['isOpened'].currentValue == false) {
      this.closeBox();
    }
  }

  onClickLeft() {
    if (this.picturePrincipalIndex > 0) {
      this.picturePrincipalIndex--;
      this.onChangePictureSelected.emit(this.picturePrincipalIndex);
    }
  }

  onClickRight() {
    if (this.picturePrincipalIndex < (this.pictures.length - 1)) {
      this.picturePrincipalIndex++;
      this.onChangePictureSelected.emit(this.picturePrincipalIndex);
    }
  }

  openBox() {
    let leonebox: any = document.getElementsByClassName('leonne-box')[0];

    leonebox.classList.remove('leonne-box-is-closed');
    leonebox.classList.add('leonne-box-is-opened');

    this.openCloseChange.emit(true);

  }

  closeBox() {
    let leonebox: any = document.getElementsByClassName('leonne-box')[0];

    leonebox.classList.remove('leonne-box-is-opened');
    leonebox.classList.add('leonne-box-is-closed');

    this.openCloseChange.emit(false);
  }
}
