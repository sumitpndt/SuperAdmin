


export class companyPlan {
    "id": number;
    "plan_name": string;
}

export class companyPlanList{
    company_plan: Array<companyPlan>;
}

export class BaseResult<T>
{
    public status_code: string;
    public data: T;
}
export class DeletePlanRequest{
    "id":number;
}

export class AddPlanRequest{
    "plan_name":string;
    "noofuser":number;
    "noofapp":number;
    "price":string;
}
export class EditPlanRequest{
    "id":number;
    "plan_name":string;
    "noofuser":number;
    "noofapp":number;
    "price":string;
}
export class Result{
    "StatusCode": Number;
    "StatusMessage": string;
}
export class EditProfileRequest{
    "id":number;
    "name":string;
    "phone_number":string;
    "email":string;
    "password":string;
}
export class UserProfile{
                "id": number;
                "name": string;
                "email": string;
                "password": string;
                "address": string;
                "image": string
                "phonenumber": string;
                "facebook": string;
                "twitter": string;
                "youtube": string;
                "remember_token": string;
                "client_login": number;
                "created_at": string;
                "updated_at": string;
}

export class UserProfilelist{
    profile_show: Array<UserProfile>;
    profile_image: string;
}

export class profileImageresponse{
    "StatusCode": number;
    "StatusMessage": string;
    "profile_Image": string;
}

