import { Document, Schema, model, PopulatedDoc } from 'mongoose'
import { UserProgramInterface } from './user-program'

export interface UserProgramTradeInterface extends Document {
  userProgram: PopulatedDoc<UserProgramInterface>
  type: string
  price: number
  volume: number
  funds: number
  fee: number

  createdAt: string
  updatedAt: string
}

const schema = new Schema<UserProgramTradeInterface>(
  {
    userProgram: { type: Schema.Types.ObjectId, ref: 'UserProgram' },
    type: String,
    price: Number,
    volume: Number,
    funds: Number,
    fee: Number,
  },
  { timestamps: true },
)

export const UserProgramTrade = model<UserProgramTradeInterface>(
  'UserProgramTrade',
  schema,
)
