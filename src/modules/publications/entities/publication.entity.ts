export class Publication {

  constructor(
    private _title: string,
    private _text: string,
    private _dateToPublish: Date,
    private _published: boolean,
    private _socialMedia: string,
    private _createdAt: Date,
    private readonly userId: number,
  ) {}

  public get socialMedia(): string {
    return this._socialMedia;
  }
  public set socialMedia(value: string) {
    this._socialMedia = value;
  }
  public get published(): boolean {
    return this._published;
  }
  public set published(value: boolean) {
    this._published = value;
  }
  public get dateToPublish(): Date {
    return this._dateToPublish;
  }
  public set dateToPublish(value: Date) {
    this._dateToPublish = value;
  }
  public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this._text = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }
}
