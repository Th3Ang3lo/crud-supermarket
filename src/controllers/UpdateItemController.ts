import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'
import { updateItemServiceFactory } from '@shared/factories/ItemFactories'

export class UpdateItemController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { itemID } = request.params
      const { item, price } = request.body

      const updateItemService = updateItemServiceFactory()
      const updateItem = await updateItemService.execute(itemID as unknown as number, { item, price })

      return response.send(updateItem)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error',
        params: error.params
      })
    }
  }
}
