


export class User {
    public username: string = '';
    public mail: string = '';
    public password: string = '';
    public gender:string='';
    public country:string='';

    constructor(
        init?: Partial<User>
    ) {
        Object.assign(this, init)
    }
}