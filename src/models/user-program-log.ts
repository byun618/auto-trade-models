import { Document, Schema, model, PopulatedDoc } from 'mongoose'
import { UserProgramInterface } from './user-program'

export interface UserProgramLogInterface extends Document {
  userProgram: PopulatedDoc<UserProgramInterface>
  message: string

  createdAt: string
  updatedAt: string
}

const schema = new Schema<UserProgramLogInterface>(
  {
    userProgram: { type: Schema.Types.ObjectId, ref: 'UserProgram' },
    message: String,
  },
  { timestamps: true },
)

export const UserProgramLog = model<UserProgramLogInterface>(
  'UserProgramLog',
  schema,
)
