import sequelize from '../db/db.js';
import { sendemail } from '../email/email.js';
import Userdetail from '../models/user-from.js';
import fetch from "node-fetch";

export const form = async (req, response) => {
  

  try {

    var email = req.body.email;
  var mobile = req.body.mobileNumber;
  var countrycode = req.body.countrycode;
  var phonenumber = countrycode + mobile;
  // var myHeaders = new Headers();
  // var myHeaders = new fetch.Headers();
  // myHeaders.append("apikey", "9CxUWGheancBin3835yzTIIUPilUiNhN");
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      "apikey":"9CxUWGheancBin3835yzTIIUPilUiNhN"
    }
  };
  
  const result= fetch("https://api.apilayer.com/number_verification/validate?number="+phonenumber, requestOptions)
    .then(response => response.json())
    .then(result =>{
      if(result.valid){
        sequelize.sync().then(() => {
          console.log('Book table created successfully!');
          Userdetail.create({
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            dob: req.body.dateOfBirth,
            email: email,
            PhoneNo: phonenumber
          }).then(res => {
          
            sendemail(email);
            response.status(200).send("Success");
          }).catch((error) => {
            console.error('Failed to create a new record : ', error);
          });
        
    
        }).catch((error) => {
          console.error('Unable to create table : ', error);
        });
      }else{
        response.status(400).send("Invalid mobile number");
      }
    })
    .catch(error => console.log('error', error));

  
 
    // response.status(200).send("success");
  } catch (error) {
    response.status(500).json(error);
  }


};