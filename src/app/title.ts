import { TitleService } from './services/title.service';
export class Title {
    private titleService: TitleService;
    constructor(protected title: string) {
        this.titleService = new TitleService();
        this.changeTitle();
    }

    protected changeTitle() {
        this.titleService.changeTitle(this.title);
    }
}
