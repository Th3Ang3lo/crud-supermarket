import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'
import { getItemServiceFactory } from '@shared/factories/ItemFactories'

export class GetItemController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { itemID } = request.params

      const getItemService = getItemServiceFactory()
      const getItem = await getItemService.execute(itemID as unknown as number)

      return response.send(getItem)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}
