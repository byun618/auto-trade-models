import { Document, Schema, model } from 'mongoose'

export interface UserInterface extends Document {
  name: string
  email: string
  password: string

  createdAt: string
  updatedAt: string
}

const schema = new Schema<UserInterface>(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true },
)

export const User = model<UserInterface>('User', schema)
