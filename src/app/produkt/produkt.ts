export class Produkt {
    // name: string;
    // description?: string;
    // id: number;
    // category: string;

    // constructor(id, name, category, description){
    //     this.id = id;
    //     this.name = name;
    //     this.category = category;
    //     this.description = description;
    // }

    constructor(
        public id: number,
        public name: string,
        public category: string,
        public description?: string,
    ){}
}