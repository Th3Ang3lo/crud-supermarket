import { Item } from '@models/Item'
import { IItemData } from '@shared/dtos/item'

import { IItemRepository } from 'repositories/IItemRepository'

import * as itemValidator from '@shared/validations/itemValidator'

export class CreateItemService {
  constructor (
    private readonly itemRepository: IItemRepository
  ) {}

  public async execute (data: IItemData): Promise<Item> {
    const { item, price } = data
    await itemValidator.validateCreateItem({ item, price })

    const createItem = this.itemRepository.create({
      item,
      price
    })

    return createItem
  }
}
