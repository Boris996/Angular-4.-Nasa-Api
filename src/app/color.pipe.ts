import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(value:string, args?: any): any {
    let el = document.getElementById('#hazardousAst') ;
    if(value === 'Yes'){
   let elstyle =  el.style ;
   elstyle.color = 'blue'
 } else {
     console.log('consol')
 }
   }
}
