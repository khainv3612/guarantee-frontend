import {Product} from './Product'

export class WarrantyClaimModel{
    customerName?: String ='';
    address?: String ='';
    province?: String ='';
    district?: String ='';
    ward?: String ='';
    phone?: String ='';
    phone2?: String ='';
    email?: String ='';
    serial?: String ='';
    product?: Product;
    description?: String ='';
    doneTime?: String ='';
    createTime?: String ='';
    id?: String;
    status?: String;
}
