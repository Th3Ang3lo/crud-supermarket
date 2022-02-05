import { Item } from '@models/Item'

import { IItemRepository } from '@repositories/IItemRepository'

export class ListItemsService {
  constructor (
    private readonly itemRepository: IItemRepository
  ) {}

  public async execute (): Promise<Item[]> {
    const items = this.itemRepository.findAll()

    return items
  }
}
