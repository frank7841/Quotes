import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Pipe({
  name: 'datePassed'
})
export class DatePassedPipe implements PipeTransform {

  transform(value: any): any{
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(todayWithNoTime - value)
    const secondsInADay= 86400;

    var dateDifferenceSeconds=dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/secondsInADay;
    var datePassed = Math.trunc(dateCounter)

    if (dateCounter >= 1 && todayWithNoTime > value){
        return datePassed;
    }else{
        return 0;
    }
  }

}



