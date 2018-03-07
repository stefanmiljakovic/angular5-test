import { Component, OnInit } from '@angular/core';
import { ModalService } from './service/modal-service/modal-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(private broadcastService: ModalService){

    broadcastService.listen().subscribe((msg: string) => {
      if(msg == "hide")
        this.hideModal();
      if(msg == "show")
        this.showModal();
    });
  }

  hideModal(): void{
    let modalContainer = document.getElementById('modal');
    modalContainer.style.display = "none";
  }

  showModal(): void{
    let modalContainer = document.getElementById('modal');
    this.broadcastService.emit('clear');

    modalContainer.style.display = 'block';
  }
}
