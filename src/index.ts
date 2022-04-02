import { connect } from 'mongoose'

if ((process.env.VERSION as string) !== 'DEV') {
  connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}/auto-trade`,
  )
} else {
  connect('mongodb://localhost:27017/auto-trade')
}
console.log('mongoDB connected')
