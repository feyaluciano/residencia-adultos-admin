export interface HTTPResponse<T> {
    isSuccess:boolean;
    Message:string;
    result:any;
    ErrorMessages:string[];
}
