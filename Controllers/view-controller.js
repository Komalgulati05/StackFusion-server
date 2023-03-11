import sequelize from '../db/db.js';
import Userdetail from '../models/user-from.js';

export const view = async (req, res) => {

    try {
      sequelize.sync().then(() => {
        Userdetail.findAll().then(response => {
          res.status(200).send(response)
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
    } catch (error) {
      res.status(500).json(error);
    }
  
  
  };