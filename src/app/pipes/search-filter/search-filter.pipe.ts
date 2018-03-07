import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(array: Array<any>, args: string): any {

    if(args == null || args == '')
      return array;

    let searchTerm = args.toLowerCase();
    let returnArray = new Array<any>();

    // needs to be recursive
    // array first layer of elements is what we are searching through
    // can have multiple layers, regardless any match would make it append to returnArray
    // Object.getOwnPropertyNames(element)

    for(let element of array){
      if(this.isContainedWithin(element, searchTerm))
        returnArray.push(element);
    }

    return returnArray;
  }

  isContainedWithin(element: any, searchTerm: string):boolean{

    if(typeof searchTerm == typeof element && element.toLowerCase().indexOf(searchTerm) != -1)
      return true;

    if(element.length == 1) // assume that last element is length and therefore return false
      return false;
    
    for(let property of Object.getOwnPropertyNames(element)){

      if(property == 'length') // skip length property in case of another array
        break;
    
      if(this.isContainedWithin(element[property], searchTerm))
        return true;
    }

    return false;
  }
}
