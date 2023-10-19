import { Inject } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { TypeItem } from 'src/types/item.types'

@Inject({
  providedIn: 'root',
})
export class ItemsService {
  private itemsSubject = new BehaviorSubject<TypeItem[]>([])
  items$ = this.itemsSubject.asObservable()

  setItems(items: TypeItem[]) {
    this.itemsSubject.next(items)
  }

  getItems() {
    return this.itemsSubject.getValue()
  }
}
