import { IItemData } from '@shared/dtos/item'

import { Item } from '@models/Item'

export interface IItemRepository {
  create: (itemData: IItemData) => Item
  findAll: () => Item[]
  findOne: (itemID: number) => Item
}
