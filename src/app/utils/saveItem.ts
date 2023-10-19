import { TypeItem } from 'src/types/item.types'

export const saveItem = (item: TypeItem) => {
  const oldItems = localStorage.getItem('items')
  if (oldItems && JSON.parse(oldItems)) {
    const items = JSON.parse(oldItems)
    const itemsUpdate = [...items, item]
    localStorage.setItem('items', JSON.stringify(itemsUpdate))
  } else {
    const items = [item]
    localStorage.setItem('items', JSON.stringify(items))
  }
}
