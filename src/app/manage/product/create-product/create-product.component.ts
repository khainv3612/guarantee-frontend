import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product-service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    productCode: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    image: new FormControl(''),
    description: new FormControl(''),
    periodMonthWarranty: new FormControl(1, [Validators.required]),
  });
  routeState: any;
  product: Product;
  isValidFormSubmitted = null;

  editorConfig: any = {
    // theme: 'modern',
    height: '500',
    image_title: true,
    automatic_uploads: true,
    paste_data_images: true,
    file_picker_types: 'file image media audio',
    media_live_embeds: true,
    branding: false,
    plugins:
      'advlist autolink lists link image charmap print preview hr anchor pagebreak ' +
      'searchreplace wordcount visualblocks visualchars code fullscreen' +
      ' insertdatetime media nonbreaking save table contextmenu directionality' +
      ' emoticons template textcolor colorpicker textpattern export powerpaste'
    ,
    // tslint:disable-next-line:max-line-length
    toolbar1: 'insertfile undo redo | styleselect | fontselect  | bold italic underline | alignleft aligncenter alignright alignjustify |' +
      ' bullist numlist outdent indent | link image | ' +
      'print preview media | forecolor backcolor emoticons imageupload export',
    image_advtab: true,

    file_picker_callback(callback: any, value: any, meta: any): void {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'file/*');
      input.click();
      input.onchange = function(): void {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
          callback(e.target.result, {
            alt: file.name
          });
        };
        reader.readAsDataURL(file);
      };
    }
  };
  isUpdateMode = false;

  constructor(private router: Router,
              private productService: ProductService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeState = this.router.getCurrentNavigation().extras.state;
      if (this.routeState) {
        this.isUpdateMode = true;
        let product = this.routeState.product ? JSON.parse(this.routeState.product) : new Product();
        this.productForm.setValue(product);
      }
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isValidFormSubmitted = false;
    if (!confirm('ARE YOU SURE ?') || this.productForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    let product = this.productForm.value;
    this.productService.createOrUpdate(product).subscribe(value => {
      alert("Lưu sản phẩm thành công !")
      this.productForm.setValue(value);
      this.isValidFormSubmitted = null;
    }, error => {
      this.router.navigate(['error']).then();
    });
  }
}
