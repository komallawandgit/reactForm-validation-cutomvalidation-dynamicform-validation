import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Pipe({
  name: 'orderBySelectedPipe'
})
export class OrderBySelectedPipePipe implements PipeTransform {

  transform(array: FormGroup[]): any {
    array.sort((a, b) => {
      if (a.get('question').value === b.get('question').value) {
        return 0;
      } else if (a.get('question').value) {
        return -1;
      } else {
        return 1;
      }
    });
    return array;
  }

}
