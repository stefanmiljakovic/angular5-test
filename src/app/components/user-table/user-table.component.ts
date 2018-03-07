import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';
import { SearchFilterPipe } from '../../pipes/search-filter/search-filter.pipe'
import { ModalService } from '../../service/modal-service/modal-service.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  userOrder : string;
  searchQuery: string;

  constructor(private usersService: UsersService, private broadcastService: ModalService) { }


  broadcastShow():void{
    this.broadcastService.emit("show");
  }
  ngOnInit() {
    this.userOrder = 'email'; 

    this.usersService.appendTest();
  }

  remove(elem: any):void{
    this.usersService.userList.splice(this.usersService.userList.indexOf(elem), 1);
  }

  setOrderBy(order: string):void{

    if(this.userOrder == '!' + order){
      this.userOrder = order;
    }
    else if(this.userOrder == order){
      this.userOrder = '!' + order;
    }
    else{
      this.userOrder = order;
    }
  }

}
