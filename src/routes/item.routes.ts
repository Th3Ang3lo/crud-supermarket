import { Router } from 'express'

import { CreateItemController } from '@controllers/CreateItemController'
import { ListItemsController } from '@controllers/ListItemsController'
import { GetItemController } from '@controllers/GetItemController'
import { DeleteItemController } from '@controllers/DeleteItemController'
import { UpdateItemController } from '@controllers/UpdateItemController'

export const itemRouter = Router()

const createItemController = new CreateItemController()
const updateItemController = new UpdateItemController()
const listItemsController = new ListItemsController()
const getItemController = new GetItemController()
const deleteItemController = new DeleteItemController()

// POST -> /item -> create item
itemRouter.post('/', createItemController.handle)
// PUT -> /item -> update item
itemRouter.put('/:itemID', updateItemController.handle)
// GET -> /item/list -> list all items
itemRouter.get('/list', listItemsController.handle)
// GET -> /item/:itemID -> get one item
itemRouter.get('/:itemID', getItemController.handle)
// DELETE -> /item/:itemID -> delete one item
itemRouter.delete('/:itemID', deleteItemController.handle)
