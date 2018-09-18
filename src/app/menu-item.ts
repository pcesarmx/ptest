export class MenuItem {
    private label;
    private link;

    public constructor() {
        this.label = '';
        this.link = '';
    }

    public getLabel() {
        return this.label;
    }

    public getLink() {
        return this.link;
    }
}
