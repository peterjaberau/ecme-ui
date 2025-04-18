import sequelize from '../src/mock/sqlite/client'
import Groups from '../src/mock/sqlite/models/groups'
import Flows from '../src/mock/sqlite/models/flows'

const initializeDatabase = async () => {
    try {
        await sequelize.sync({ force: true })
    } catch (error) {
        console.error('Unable to initialize the database:', error)
    } finally {
        await sequelize.close()
    }
}

initializeDatabase()
