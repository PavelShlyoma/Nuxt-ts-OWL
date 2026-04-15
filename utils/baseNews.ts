import type {resData, Tag} from '~/types/newsTypes'

export class CurrentNews {
    public title: string;
    public date: string;
    public tags: Tag[];
    public src: string;
    constructor(data: resData) {
        this.title = data.meta.elementPageTitle;
        this.date = data.date
        this.tags =  data.tags
        this.src = data.meta.elementOgImage.src
    }

    getFormattedDate(): string {
        return this.date.slice(0, 2) + '.' + this.date.slice(3, 5) +'.' + this.date.slice(6);
    }
}

export class NewNews {
    public title: string;
    public date: string;
    public tags: Tag[];
    public src: string;
    public code: string;
    constructor(data: resData) {
        this.code = data.next.code;
        this.title = data.next.title;
        this.date = data.next.date;
        this.tags =  data.next.tags;
        this.src = data.next.picture
    }

    getFormattedDate(): string {
        return this.date.slice(0, 2) + '.' + this.date.slice(3, 5) +'.' + this.date.slice(6);
    }

}