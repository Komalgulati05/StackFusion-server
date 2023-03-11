import sequelize from '../db/db.js';
import DataTypes from 'sequelize';
const Userdetail = sequelize.define("Userdetail", {
    FirstName: {
      type: DataTypes.STRING,
    //   allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
      //   allowNull: false
      },
    dob: {
      type: DataTypes.DATE,
    //   allowNull: false
    },
    email: {
      type: DataTypes.STRING,
    },
    PhoneNo: {
      type: DataTypes.BIGINT,
    }
 });
 
 sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
 export default Userdetail;