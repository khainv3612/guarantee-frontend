import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Policy} from '../../model/Policy';
import {AdminService} from '../../service/admin-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chinhsachhd',
  templateUrl: './chinhsachhd.component.html',
  styleUrls: ['./chinhsachhd.component.css'],
})
export class ChinhsachhdComponent implements OnInit {
  firstPage = 1;
  policy: Policy;
  policyForm: FormGroup;
  body = new FormControl('', {
    validators: Validators.required,
  });
  editorConfig: any = {
    // theme: 'modern',
    height: '600',
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
      ' emoticons template paste textcolor colorpicker textpattern paste export'
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
      input.onchange = function (): void {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
          callback(e.target.result, {
            alt: file.name
          });
        };
        reader.readAsDataURL(file);
      };
    }
  };

  constructor(private routerActive: ActivatedRoute, private adminService: AdminService) {
    this.policyForm = new FormGroup({
      body: this.body
    });
    // this.policy = {
    //   id: null,
    //   content: '',
    //   type: ''
    // }

    // this.policyForm.get('body').value = this.policy.content;

  }

  ngOnInit(): void {
    this.getPolicy(this.firstPage)
  }

  getPolicy(id: number) {
    this.adminService.getPolicy(id).subscribe(result => {
      this.policy = result;
      console.log(this.policy);
      this.policyForm.get('body').setValue(this.policy.content);
    }, error => {
      console.log(error);
    });
  }

  savePolicy(): void {

  }

  test(): void {
    console.log(this.policyForm.get('body').value);
  }

}
