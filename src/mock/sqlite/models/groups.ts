import { DataTypes } from 'sequelize';
import sequelize from '../client';

const Groups = sequelize.define('Groups', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            defaultValue: ""
        },
        color: {
            type: DataTypes.TEXT,
            defaultValue: ""
        },
    },{
        timestamps: true,
    }
);

export default Groups
