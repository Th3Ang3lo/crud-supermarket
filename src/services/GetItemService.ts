import { Item } from '@models/Item'

import { IItemRepository } from '@repositories/IItemRepository'
import { NotFoundException } from '@shared/exceptions/NotFoundException'

import * as createItemValidator from '@shared/validations/itemValidator'

export class GetItemService {
  constructor (
    private readonly itemRepository: IItemRepository
  ) {}

  public async execute (itemID: number): Promise<Item> {
    await createItemValidator.validateItemID(itemID)
    const item = this.itemRepository.findOne(Number(itemID))

    if (!item) throw new NotFoundException('Item não encontrado')

    return item
  }
}
