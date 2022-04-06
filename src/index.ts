import { connect } from 'mongoose'
import { UserProgram, UserProgramInterface } from './models/user-programs'
import { User, UserInterface } from './models/users'

if ((process.env.VERSION as string) !== 'DEV') {
  connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}/auto-trade`,
  )
  console.log('pro mongoDB connected')
} else {
  connect('mongodb://localhost:27017/auto-trade')
  console.log('dev mongoDB connected')
}

export { User, UserInterface, UserProgram, UserProgramInterface }
