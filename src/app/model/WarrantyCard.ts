
import {Customer} from './Customer';
import {Product} from './Product';

export class WarrantyCard {
  id?: number;
  serialNumber: string;
  customer?: Customer;
  product: Product;
  startTime?: any;
  endTime?: any;
  soldDate?: any;
  storeAddr: string;
  storePhone: string;

}
