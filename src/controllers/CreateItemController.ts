import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'
import { createItemServiceFactory } from '@shared/factories/ItemFactories'

export class CreateItemController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { item, price } = request.body

      const createItemService = createItemServiceFactory()
      const createItem = await createItemService.execute({ item, price })

      return response.send(createItem)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error',
        params: error.params
      })
    }
  }
}
