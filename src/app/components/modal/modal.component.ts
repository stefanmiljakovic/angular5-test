import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UsersService } from '../../service/users/users.service'
import { ModalService } from '../../service/modal-service/modal-service.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalForm') modalForm: NgForm;

  pravnaCheck: boolean; // pravna checkbox
  email: string;
  password: string;

  davcnaStevilka: string;

  ime: string;
  mobil: string;

  post: string;
  kraj: string;

  strinjamSe: boolean;

  davcniStevilRadio: boolean;
  namePlaceholder: string;


  constructor(private usersService: UsersService, private broadcastService: ModalService) { 
    
    broadcastService.listen().subscribe((msg: string) => {
      if(msg == "clear")
        this.resetInputs();
    });
  }


  broadcastCloseClick():void{
    this.broadcastService.emit("hide");
  }

  changeRadio(radioName: string):void{
    let radioYes = <HTMLInputElement> document.getElementById("regRadioDA");
    let radioNo = <HTMLInputElement> document.getElementById("regRadioNE");

    if(radioName == radioYes.id){
      radioYes.checked = true;
      radioNo.checked = false;
    }
    else{
      radioNo.checked = true;
      radioYes.checked = false;
    }

    this.bindDisplaysDavcniRadio(radioNo.checked);
    console.log(radioName);
  }


  bindDisplaysDavcniRadio(check: boolean):void{
    let davcnaStevilka = document.getElementById("davcnaStevilka");
    console.log("Change");

    if(check && this.pravnaCheck){
      davcnaStevilka.style.display = "none";
    }
    else{
      davcnaStevilka.style.display = "inline-block";
    }
  }

  bindDisplaysPravnaCheck():void{

    let davcniRadioGroup = document.getElementById("davcniRadioGroup");

    if(!this.pravnaCheck){
      this.namePlaceholder = "Ime in priimek";  
      davcniRadioGroup.style.display = "none";
    }
    else{
      this.namePlaceholder = "Naziv pravne osebe";
      davcniRadioGroup.style.display = "flex";
    }

    this.bindDisplaysDavcniRadio((<HTMLInputElement> document.getElementById("regRadioNE")).checked);
  }

  addUser():void{
    if(this.strinjamSe){
    this.usersService.appendUser(
      new User(this.email, this.ime, this.post + ", " + this.kraj, this.pravnaCheck,
    new Date(), this.password, this.mobil, this.davcnaStevilka)
    );

    this.broadcastService.emit('hide');}
  }

  ngOnInit() {
      this.bindDisplaysPravnaCheck();
  }

  resetInputs(): void{
    console.log(this.modalForm.controls);

    this.modalForm.resetForm();
  }

}
