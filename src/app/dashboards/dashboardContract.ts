export class BaseResult<T>
{
    public status_code: string;
    public data: T;
}

export class CompanyCountResult{
    "client_company":number;
}