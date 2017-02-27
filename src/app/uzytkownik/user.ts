export interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: number,
        lng: number
    }
}

export interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}

export class User {

    constructor(
        public id: number,
        public name: string,
        public username: string,
        public age: number,
        public address: Address,
        public company: Company,
        public avatar?: string,
        public website?: string
    ){};
}
