import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'
import { listItemsServiceFactory } from '@shared/factories/ItemFactories'

export class ListItemsController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const listItemsService = listItemsServiceFactory()
      const listItems = await listItemsService.execute()

      return response.send(listItems)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}
