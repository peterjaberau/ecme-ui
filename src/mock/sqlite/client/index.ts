import { Sequelize } from 'sequelize'
import appConfig from '@/configs/app.config'

const sequelize: Sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: appConfig.sqliteDatabaseUrl,
})

export default sequelize
