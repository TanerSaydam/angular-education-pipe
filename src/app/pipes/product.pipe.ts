import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPipe'
})
export class ProductPipe implements PipeTransform {

  transform(
    value: any[],
    search: string ) {

    if(search == "")
      return value;

      //bir parametreli
    //return value.filter(p=> p.name.includes(search));

    //birden fazla parametre
    return value.filter(p=> {
      const name = p.name.includes(search);
      const category = p.category.includes(search);
      const quantity = p.quantity.toString() == search

      return name+category+quantity
    })
  }

}
