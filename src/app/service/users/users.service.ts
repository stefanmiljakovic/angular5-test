import { Injectable } from '@angular/core';

export class User{

  public email: string;

  private password: string;
  private davcnaStevilka: string;
  private mobile: string;


  public naziv: string;
  public naslov: string;
  public pravna: boolean;
  public datum: Date;

  constructor(email: string, naziv: string, naslov: string, pravna: boolean, datum: Date,
  password: string, mobile:string, davcnaStevilka: string){
      this.email = email;
      this.naziv = naziv;
      this.naslov = naslov;
      this.pravna = pravna;
      this.datum = datum;
  }

}

@Injectable()
export class UsersService {

  public userList: Array<User> = [];

  constructor() { }

  appendTest(): void{
    this.appendUser(new User('a@a.com', 'a', 'f', true, new Date(), 'a', 'a', 'a'));
    this.appendUser(new User('b@a.com', 'd', 'h', true, new Date(), 'a', 'a', 'a'));
    this.appendUser(new User('c@a.com', 'e', 'j', true, new Date(), 'a', 'a', 'a'));
  }
  appendUser(user: User): void{
    this.userList.push(user);
  }


}
