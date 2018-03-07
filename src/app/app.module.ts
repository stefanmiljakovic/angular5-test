import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ModalComponent } from './components/modal/modal.component';

import { UsersService} from './service/users/users.service';

import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { SearchFilterPipe } from './pipes/search-filter/search-filter.pipe'
import { ModalService } from './service/modal-service/modal-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    ModalComponent,
    OrderByPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
