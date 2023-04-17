const express = require('express');
const router = express.Router();
const db = require('../helper/db');

//Routes
router.post('/addContacts', addContacts)
router.put('/updateContacts', updateContacts)
router.get('/getAllContact', getAllContact)
router.delete('/deleteContact', deleteContact)

//export router
module.exports = router;

async function addContacts(req,res){
    try {
        let data = {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            phoneNumber : req.body.phoneNumber,
            city : req.body.city,
            state : req.body.state,
            country : req.body.country,
            postalCode : req.body.postalCode,
        }

        let sqlQuery = "INSERT INTO contact_list SET ?";
        let query = db.query(sqlQuery, data,(err, result) => {
            if(err) throw err;
            return res.send({ "status": "true", "message": "Successfully added the data", "result": result })
          });
    } catch (error) {
        return res.send({ "status": "false", "error": error })
    }
}

async function updateContacts(req,res){
    try {
            let contact_id = req.body.contact_id
            let firstName = req.body.FirstName
            let lastName = req.body.LastName
            let email  = req.body.email
            let phoneNumber = req.body.PhoneNumber
            let city = req.body.City
            let state = req.body.State
            let country = req.body.Country
            let postalCode = req.body.PostalCode

            let sql = "UPDATE contact_list SET firstName = ? ,lastName = ?, email = ?, phoneNumber = ? , city = ?,state=?, country = ?, postalCode = ? WHERE contact_id = ? ";
            db.query(sql, [firstName, lastName, email, phoneNumber, city, state, country, postalCode, contact_id], function (err, data) {
                if(err) throw err;
                return res.send({ "status": "true", "message": "Successfully updated the data", "result": data })
            })
    } catch (error) {
        console.log(error)
        return res.send({ "status": "false", "error": error })
    }
}

async function getAllContact(req,res){
    try {
        let sql = "SELECT * FROM contact_list ORDER BY updated_date DESC"
        db.query(sql, function(err,data){
            if(err) throw err;
                return res.send({ "status": "true", "message": "Fetched all the data", "result": data })
        })
    } catch (error) {
        console.log(error)
        return res.send({ "status": "false", "error": error })
    }
}

async function deleteContact(req,res){

    try {
        let contact_id = req.query.contact_id;
        let sql = 'DELETE FROM contact_list WHERE contact_id = ?';
        db.query(sql, [contact_id], function (err, data) {
            if (err) throw err;
            return res.send({ "status": "true", "message": "Data successfully deleted", "result": data })
        })
    } catch (error) {
        console.log(error)
        return res.send({ "status": "false", "error": error })
    }
}