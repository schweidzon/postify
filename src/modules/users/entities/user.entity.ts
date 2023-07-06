import { HttpException, HttpStatus } from "@nestjs/common";

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _avatar: string,
  ) {}

  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    if(name.length < 2) throw new HttpException("Invalid Name", HttpStatus.BAD_REQUEST)
    this._name = name;
  }

  public get avatar(): string {
    return this._avatar;
  }
  public set avatar(avatar: string) {
    this._avatar = avatar;
  }
  public get password(): string {
    return this._password;
  }
  public set password(password: string) {
    this._password = password;
  }
  public get email(): string {
    return this._email;
  }
  public set email(email: string) {
    this._email = email;
  }
}
