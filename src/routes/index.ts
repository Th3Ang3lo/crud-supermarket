import { Router } from 'express'

import { itemRouter } from './item.routes'

export const Routes = Router()

Routes.use('/item', itemRouter)
