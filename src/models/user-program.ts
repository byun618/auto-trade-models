import { Document, Schema, PopulatedDoc, model } from 'mongoose'
import { UserInterface } from './users'

interface Ticker {
  market: string
  korean_name: string
  english_name: string
}

export interface UserProgramInterface extends Document {
  user: PopulatedDoc<UserInterface>
  no: number
  ticker: Ticker
  startTime: number
  timeInterval: number
  buyTime: string
  sellTime: string
  started: boolean
  targetPrice: number
  isHold: boolean
  isSell: boolean

  createdAt: string
  updatedAt: string
}

const schema = new Schema<UserProgramInterface>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    ticker: Object,
    no: Number,
    startTime: Number,
    timeInterval: Number,
    buyTime: String,
    sellTime: String,
    started: Boolean,
    targetPrice: Number,
    isHold: Boolean,
    isSell: Boolean,
  },
  { timestamps: true },
)

export const UserProgram = model<UserProgramInterface>('UserProgram', schema)
