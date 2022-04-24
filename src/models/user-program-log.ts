import { Document, Schema, model, PopulatedDoc } from 'mongoose'

export interface UserProgramLogInterface extends Document {
  userProgram: PopulatedDoc<UserProgramLogInterface>
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
