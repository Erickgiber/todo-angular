import { Component } from '@angular/core'
import { ItemsService } from 'src/app/shared/Items.service'
import { saveItem } from 'src/app/utils/saveItem'
import { TypeItem } from 'src/types/item.types'
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent {
  constructor(private itemsShared: ItemsService) {}

  submit(event: SubmitEvent) {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    // ? Getting Values
    const nameInput = form.elements.namedItem('name') as HTMLInputElement
    const descInput = form.elements.namedItem('description') as HTMLInputElement
    const name = nameInput.value
    const description = descInput.value

    // ? Creating item
    const item: TypeItem = {
      id: uuid(),
      name,
      description,
    }

    // * Saving item on local storage
    saveItem(item)

    // * Updating observable items
    this.itemsShared.setItems([...this.itemsShared.getItems(), item])

    // Cleaning form
    form.reset()
  }
}
