import { Router } from 'express'

import { CreateItemController } from '@controllers/CreateItemController'
import { ListItemsController } from '@controllers/ListItemsController'
import { GetItemController } from '@controllers/GetItemController'

export const itemRouter = Router()

const createItemController = new CreateItemController()
const listItemsController = new ListItemsController()
const getItemController = new GetItemController()

itemRouter.post('/', createItemController.handle)
itemRouter.get('/list', listItemsController.handle)
itemRouter.get('/:itemID', getItemController.handle)
