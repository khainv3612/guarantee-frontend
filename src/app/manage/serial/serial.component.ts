import {Component, OnInit} from '@angular/core';
import {WarrantyCardService} from "../../service/warranty-card-service";
import {WarrantyCard} from "../../model/WarrantyCard";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {WarrantyCardDTO} from "../../model/WarrantyCardDTO";

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {
  lstWarrantyCardDTO: WarrantyCardDTO[];
  lstWarrantyCard: WarrantyCard[];
  menuTabPrevious: any = null;
  formFilter: FormGroup = new FormGroup({
    txtSearch: new FormControl(),
  });
  isNonActive: boolean;

  constructor(private warrantyCardService: WarrantyCardService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllNonActive();
  }

  getAllByStatus(status: number) {
    this.isNonActive = false;
    this.warrantyCardService.getAllByStatus(status).subscribe(result => {
      this.lstWarrantyCard = result;
      this.setColorMenu('menu-tab', status);
    }, error => {
      this.router.navigate(['error'], {
        state: {
          errorMessage: error,
        }
      }).then();
    });
  }

  getAllNonActive() {
    this.isNonActive = true;
    this.warrantyCardService.getAll().subscribe(result => {
      this.lstWarrantyCardDTO = result;
      this.setColorMenu('menu-tab', 0);
    }, error => {
      this.router.navigate(['error'], {
        state: {
          errorMessage: error,
        }
      }).then();
    });
  }

  setColorMenu(name: string, stt: number) {
    if (null != this.menuTabPrevious) {
      this.menuTabPrevious.style.color = "";
    }
    const ele = document.getElementsByName(name)[stt];
    ele.style.color = "orange";
    this.menuTabPrevious = ele;
  }

  filter() {
    let txtSearch = this.formFilter.controls.txtSearch.value.toUpperCase();
    this.lstWarrantyCard = this.lstWarrantyCard.filter((w) => w.serialNumber.toUpperCase() == txtSearch
        || w.customer?.fullName.toUpperCase().includes(txtSearch)
        || w.customer?.phone == txtSearch);
  }
  filterNon() {
    let txtSearch = this.formFilter.controls.txtSearch.value.toUpperCase();
    this.lstWarrantyCardDTO = this.lstWarrantyCardDTO.filter((w) => w.serialNumber.toUpperCase() == txtSearch
        || w.productCode.toUpperCase().includes(txtSearch));
  }
}
