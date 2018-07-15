import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PlaceHolderPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'placeHolder',
})
export class PlaceHolderPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, defaultValue: string=  "Without text") {
    // if(value){
    //   return value;
    // }else {
    //   return defaultValue;
    // }
    return (value)? value:defaultValue;
  }
}
