export interface HTTPResponse<T> {
    IsSuccess:boolean;
    Message:string;
    result:any;
    ErrorMessages:string[];
}
