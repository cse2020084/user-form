export class User{
    public username:string=''
    public mail:string=''
    public password:string=''
    constructor(
     init?:Partial<User>   
    ){
        Object.assign(this,init);
    }
}