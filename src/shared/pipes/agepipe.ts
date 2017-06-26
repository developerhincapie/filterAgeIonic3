import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'AgePipe'
})
export class AgePipe {


/*Pipe personalizado para el filto por edad */
  transform(value, args?) {
    let minAge = args;
    return value.filter(person => {
      if (person.Age) {
        return person.Age < +minAge;
      } else {
        return person.Age
      }
    });
  }
}