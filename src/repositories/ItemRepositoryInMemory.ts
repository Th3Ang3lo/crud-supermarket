import { Item } from '@models/Item'
import { IItemData } from '@shared/dtos/item'

import { IItemRepository } from './IItemRepository'

export class ItemRepositoryInMemory implements IItemRepository {
  public items: Item[] = []
  public itemsCurrentCount: number = 0

  public create ({ item: itemName, price }: IItemData): Item {
    this.itemsCurrentCount++

    const item = new Item()

    item.id = this.itemsCurrentCount
    item.item = itemName
    item.price = Number(price)

    this.items.push(item)
    return item
  }

  public findAll (): Item[] {
    return this.items
  }

  public findOne (id: number): Item {
    return this.items.find(item => item.id === id)
  }
}
