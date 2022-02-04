import * as yup from 'yup'

import { BadRequestException } from '@shared/exceptions/BadRequestException'
import { IItemData } from '@shared/dtos/item'

export const validateCreateItem = async (itemData: IItemData): Promise<void> => {
  try {
    const schema = yup.object({
      item: yup.string()
        .min(1, 'O campo item não pode ser vazio.')
        .max(255, 'Máximo de 255 caracteres.')
        .required('Campo item obrigatorio.'),
      price: yup.number()
        .typeError('O campo preço deve conter um valor numérico')
        .required('Campo preço obrigatorio.')
    })
    await schema.validate(itemData)
  } catch (err) {
    throw new BadRequestException(err.message, {
      [err.path]: err.message
    })
  }
}

export const validateItemID = async (itemID: number): Promise<void> => {
  try {
    const schema = yup.object({
      itemID: yup.number()
        .typeError('O campo id deve conter um valor numérico')
        .required('Campo id obrigatorio.')
    })
    await schema.validate({ itemID })
  } catch (err) {
    throw new BadRequestException(err.message, {
      [err.path]: err.message
    })
  }
}
