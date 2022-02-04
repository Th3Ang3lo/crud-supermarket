import { IItemRepository } from '@repositories/IItemRepository'
import { NotFoundException } from '@shared/exceptions/NotFoundException'

import * as itemValidator from '@shared/validations/itemValidator'

export class DeleteItemService {
  constructor (
    private readonly itemRepository: IItemRepository
  ) {}

  public async execute (itemID: number): Promise<void> {
    await itemValidator.validateItemID(itemID)
    const item = this.itemRepository.findOne(Number(itemID))

    if (!item) throw new NotFoundException('Item não encontrado')

    this.itemRepository.deleteOne(Number(itemID))
  }
}
