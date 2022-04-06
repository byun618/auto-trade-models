import { Document, Schema, PopulatedDoc, model } from 'mongoose'
import { UserInterface } from './users'

interface Ticker {
  market: string
  korean_name: string
  english_name: string
}

export interface UserProgramInterface extends Document {
  user: PopulatedDoc<UserInterface>
  ticker: Ticker
  startTime: number
  timeInterval: number

  createdAt: boolean
  updatedAt: boolean
}

const schema = new Schema<UserProgramInterface>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    ticker: Object,
    startTime: Number,
    timeInterval: Number,
    createdAt: String,
    updatedAt: String,
  },
  { timestamps: true },
)

export const UserProgram = model<UserProgramInterface>('UserProgram', schema)
