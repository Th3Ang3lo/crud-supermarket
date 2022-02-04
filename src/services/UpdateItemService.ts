import { Item } from '@models/Item'
import { IItemData } from '@shared/dtos/item'

import { IItemRepository } from 'repositories/IItemRepository'

import { NotFoundException } from '@shared/exceptions/NotFoundException'

import * as itemValidator from '@shared/validations/itemValidator'

export class UpdateItemService {
  constructor (
    private readonly itemRepository: IItemRepository
  ) {}

  public async execute (itemID: number, data: IItemData): Promise<Item> {
    const { item: itemName, price } = data

    await itemValidator.validateItemID(itemID)
    await itemValidator.validateUpdateItem({ item: itemName, price })

    const item = this.itemRepository.findOne(Number(itemID))

    if (!item) throw new NotFoundException('Item não encontrado')

    item.item = itemName ?? item.item
    item.price = Number(price ?? item.price)

    this.itemRepository.save(item)

    return item
  }
}
