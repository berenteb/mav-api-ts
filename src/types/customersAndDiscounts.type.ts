import { type Translation } from './common.type'

export interface CustomersAndDiscounts {
  customerTypes: CustomerType[]
  discounts: Discount[]
}

export interface CustomerType {
  name: string
  key: string
  maxAge: number | null
  minAge: number | null
  discountProps: DiscountProp[]
  foreignNames: Translation
  foreignDescriptions: Translation
  iconName: null | string
  secondaryIconName: null | string
}

export interface DiscountProp {
  discountID: string
  offerKind: string
}

export interface Discount {
  foreignNames: Translation
  foreignDescriptions: Translation
  name: string
  description: null | string
  key: string
  id: string
  isRegional: boolean
  discountValue: DiscountValue
  question: null | string
  isInternational: boolean
  isInternal: boolean
}

export interface DiscountValue {
  value: number | null
  name: string
  foreignNames: Translation | null
}
