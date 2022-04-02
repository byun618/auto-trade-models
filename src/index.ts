import { UserTickerLog, IUserTickerLog } from './models/user-ticker-logs'
import { UserTicker, IUserTicker } from './models/user-tickers'
import { User, IUser } from './models/users'

import { connect } from 'mongoose'

if ((process.env.VERSION as string) !== 'DEV') {
  connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}/auto-trade`,
  )
  console.log('pro mongoDB connected')
} else {
  connect('mongodb://localhost:27017/auto-trade')
  console.log('dev mongoDB connected')
}

export { UserTickerLog, IUserTickerLog, UserTicker, IUserTicker, User, IUser }
