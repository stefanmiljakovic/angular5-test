import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ModalService {

  private listener = new Subject<any>();

  listen(): Observable<any>{
    return this.listener.asObservable();
  }

  emit(event: string): void{
    this.listener.next(event);
  }


  constructor() { }



}
