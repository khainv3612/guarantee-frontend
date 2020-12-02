import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WarrantyCardService} from '../../service/warranty-card-service';
import {WarrantyCard} from '../../model/WarrantyCard';

@Component({
  selector: 'app-ket-qua-tra-cuu-han-bao-hanh',
  templateUrl: './ket-qua-tra-cuu-han-bao-hanh.component.html',
  styleUrls: ['./ket-qua-tra-cuu-han-bao-hanh.component.css']
})
export class KetQuaTraCuuHanBaoHanhComponent implements OnInit {

  warrantyCard: WarrantyCard;
  isWrongSerialNumber = false;
  constructor(private route: ActivatedRoute,
              private warrantyCardService: WarrantyCardService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      let serialNumber = params.get('serialNumber');
      this.searchWarranty(serialNumber);
    });
  }

  searchWarranty(serialNumber: string) {
    this.warrantyCardService.searchWarranty(serialNumber).subscribe(result => {
      this.warrantyCard = result;
      console.log(this.warrantyCard);
    }, error => {
      this.isWrongSerialNumber = true;
    });
  }

}
