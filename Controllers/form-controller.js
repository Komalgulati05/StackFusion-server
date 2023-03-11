import sequelize from '../db/db.js';
import { sendemail } from '../email/email.js';
import Userdetail from '../models/user-from.js';
import validatePhoneNumber from 'validate-phone-number-node-js';
export const form = async (req, response) => {

  try {
    var email=req.body.email;
    const result = validatePhoneNumber.validate(req.body.mobileNumber);
    console.log(result);
    if(!result){
      response.status(400).send("Invalid mobile number");
    }
    sequelize.sync().then(() => {
      console.log('Book table created successfully!');
      Userdetail.create({
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        dob: req.body.dateOfBirth,
        email :email,
        PhoneNo:req.body.mobileNumber
    }).then(res => {
       // console.log(res);
        sendemail(email);
       response.status(200).send("Success");
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

   
   }).catch((error) => {
      console.error('Unable to create table : ', error);
   });
      
    console.log(req.body);
    // response.status(200).send("success");
  } catch (error) {
    res.status(500).json(error);
  }


};