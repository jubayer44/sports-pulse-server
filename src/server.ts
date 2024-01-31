/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './app/config'
import app from './app'
const PORT = config.port || 5000

async function main() {
  try {
    await mongoose.connect(config.dbUrl as string)
    console.log('Connected to Database')

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
