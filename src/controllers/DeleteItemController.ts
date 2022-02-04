import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'
import { deleteItemServiceFactory } from '@shared/factories/ItemFactories'

export class DeleteItemController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { itemID } = request.params

      const deleteItemService = deleteItemServiceFactory()
      await deleteItemService.execute(itemID as unknown as number)

      return response.sendStatus(204)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}
