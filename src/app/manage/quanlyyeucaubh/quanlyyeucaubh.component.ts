import {Component, OnInit} from '@angular/core';
import {WarrantyClaimModel} from '../../model/WarrantyClaimModel';
import {DataService} from 'src/app/service/data-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quanlyyeucaubh',
  templateUrl: './quanlyyeucaubh.component.html',
  styleUrls: ['./quanlyyeucaubh.component.css']
})
export class QuanlyyeucaubhComponent implements OnInit {

  lstAllModel: WarrantyClaimModel[];
  lstModel: WarrantyClaimModel[];
  isMessage: boolean = false;

  formFilter: FormGroup = new FormGroup({
    txtSearch: new FormControl(),
  });

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.searchAll();
    this.lstModel = [];
  }

  searchBySerial() {
    let txtSearch = this.formFilter.controls.txtSearch.value.toUpperCase();
    this.lstModel = this.lstAllModel.filter((wc) =>
      wc.serial.toUpperCase().includes(txtSearch)
      || wc.customerName.toUpperCase().includes(txtSearch)
      || wc.phone == txtSearch || wc.phone2 == txtSearch);
  }

  searchAll() {
    this.isMessage = false;
    this.dataService.getAllWarrantyClaim().subscribe(result => {
      this.lstAllModel = this.lstModel = result;
    }, error => {
      this.router.navigate(['error']).then();
    });
  }

  acceptBtn(serial) {
    this.dataService.acceptRequestWarranty(serial).subscribe(result => {
      this.lstModel = this.lstModel.filter(p => (!p.serial.includes(serial)));
    }, error => {
      this.router.navigate(['error']).then();
    });

  }

  rejectBtn(serial) {
    this.dataService.rejectRequestWarranty(serial).subscribe(result => {
      this.lstModel = this.lstModel.filter(p => (!p.serial.includes(serial)));
    }, error => {
      this.router.navigate(['error']).then();
    });
  }
}
