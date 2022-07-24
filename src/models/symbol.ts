import { Document, model, Schema } from 'mongoose'

export interface SymbolInterface extends Document {
  name: string
  koreanName: string
  imageUrl: string
}

const schema = new Schema<SymbolInterface>(
  {
    name: String,
    koreanName: String,
    imageUrl: String,
  },
  { timestamps: true },
)

export const Symbol = model<SymbolInterface>('Symbol', schema)
