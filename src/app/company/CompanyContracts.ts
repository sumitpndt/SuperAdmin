import { Time } from "@angular/common";

export class RegisterRequest {
    public "company_name": string;
    public "license_no": string;
    public "address_home": string;
    public "address_office": string;
    public "country": string;
    public "pincode": number;
    public "email_id": string ;
    public "phone": string;
    //public "username": number;
    public "password": string ;
    public "company_plan_id": number;
}

export class CompanyList{
    client_company: Array<ClientCompany>;
}
export class BaseResult<T>
{
    public status_code: string;
    public data: T;
}
export class ClientCompany{
    "id": number;
    "admin_id": number;
    "company_name": string;
    "license_no":string;
    "address_home": string;
    "address_office": string;
    "country": string;
    "pincode": string;
    "email_id": string;
    "phone": string;
    "password": string;
    "no_of_login": number;
    "no_of_driver": number;
    "approve": string;
    "active": string;
    "created_at": string;
    "updated_at": string;
    "plan_name":string;
    "payment_status":string;
    "company_plan_id":number;
    "planid":number;
}
export class ActiveRequest{
    "company_id":number;
    "active":string;
}
export class DeletecompanyRequest{
    "id":number;
}

export class companyPlan {
    "id": number;
    "plan_name": string;
}
export class FilterRequest{
    "created_form":string;
    "created_to":string;
}
export class companyPlanList{
    company_plan: Array<companyPlan>;
}
export class CompanyFilterResponse{
    "id": number;
    "admin_id": number;
    "company_name": string;
    "license_no": string;
    "address_home": string;
    "address_office": string;
    "country": string;
    "pincode": string;
    "email_id": string;
    "phone": string;
    "password": string;
    "no_of_login": number;
    "company_plan_id": number;
    "payment_status": string;
    "approve": string;
    "active": string;
    "created_at": string;
    "updated_at": string;
}

export class CompanyfilterList{
    client_company:Array<CompanyFilterResponse>;
}

export class CompanyUpdateRequest{
    "id":number;
    "company_name":string;
    "license_no":string;
    "address_home":string;
    "address_office":string;
    "country":string;
    "pincode":string;
    "email_id":string;
    "phone":string;
    "password":string;
    "company_plan_id":number
}