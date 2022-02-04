import { CreateItemService } from '@services/CreateItemService'
import { UpdateItemService } from '@services/UpdateItemService'
import { DeleteItemService } from '@services/DeleteItemService'
import { GetItemService } from '@services/GetItemService'
import { ListItemsService } from '@services/ListItemsService'

import { ItemRepositoryInMemory } from 'repositories/ItemRepositoryInMemory'

// to persist datas in memory
const itemRepository = new ItemRepositoryInMemory()

export const createItemServiceFactory = (): CreateItemService => {
  return new CreateItemService(itemRepository)
}

export const updateItemServiceFactory = (): UpdateItemService => {
  return new UpdateItemService(itemRepository)
}

export const listItemsServiceFactory = (): ListItemsService => {
  return new ListItemsService(itemRepository)
}

export const getItemServiceFactory = (): GetItemService => {
  return new GetItemService(itemRepository)
}

export const deleteItemServiceFactory = (): DeleteItemService => {
  return new DeleteItemService(itemRepository)
}
