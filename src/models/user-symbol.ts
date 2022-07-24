import { Document, Schema, PopulatedDoc, model } from 'mongoose'
import { SymbolInterface } from './symbol'
import { UserInterface } from './users'

export interface UserSymbolInterface extends Document {
  user: PopulatedDoc<UserInterface>
  symbol: PopulatedDoc<SymbolInterface>
  leverage: number
  orderSize: number
  profit: number
  low: number
  high: number
  started: boolean
  longTarget: number
  shortTarget: number

  createdAt: string
  updatedAt: string
}

const schema = new Schema<UserSymbolInterface>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    symbol: { type: Schema.Types.ObjectId, ref: 'Symbol' },
    leverage: Number,
    orderSize: Number,
    profit: Number,
    low: Number,
    high: Number,
    started: Boolean,
    longTarget: Number,
    shortTarget: Number,
  },
  { timestamps: true },
)

export const UserSymbol = model<UserSymbolInterface>('UserSymbol', schema)
