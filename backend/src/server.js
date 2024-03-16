// put this mongodb server url and API key in dotenv before deployment
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(express.json()); 
app.use(cors());

(async () => {
  try {
      await mongoose.connect('mongodb+srv://imaginaryworld15:GlfKlZvQ9NLI39EJ@cluster0.txcnlvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
          useNewUrlParser: true,
      });
      console.log('MongoDB Connected');
  } catch (err) {
      console.error('MongoDB Connection Error:', err.message);
  }
})();;

const db = mongoose.connection

const Donations = require('./schemas/donationSchema')
const functions = require("firebase-functions")


// getting all the donations
app.get('/getdonations' , async (req , res) =>{
    try{
     
        const dbdonations = await Donations.find()
        res.json(dbdonations)
    }catch (err) {
    res.status(500).json({message: err.message})    
    }
})

// getting one donation
app.get('/getdonation/:id' ,getDonor, (req , res) =>{
    res.send(res.donor)
})

// creating a donations 
app.post('/postdonation', async (req, res) => {
    console.log(req.body); // Add this line to log the request body
  
    const donation = new Donations({
      foodName: req.body.foodName,
      feedsCount: req.body.feedsCount,
      donorAddress: {
        latitude: req.body.donorAddress.latitude,
        longitude: req.body.donorAddress.longitude
      }
    });
  
    try {
      const newDonor = await donation.save();
      res.status(201).json(newDonor);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

// delete a donation
app.delete('/deletedonation/:id', getDonor, async (req, res) => {
    try {
        await res.donor.deleteOne();
        res.json({ message: "Deleted the donation" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



async function getDonor(req, res, next) {
    let donor;
    try {
      donor = await Donations.findById(req.params.id);
      if (donor == null) {
        return res.status(404).json({ message: 'Cannot find the donor' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.donor = donor; // Now, res.donor is a MongoDB document object
    next();
  }

exports.api = functions.https.onRequest(app);
