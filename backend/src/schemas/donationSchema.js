const mongoose = require('mongoose');


// donorId: {
//     type: Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true
//   },

// acceptedBy: {
//     type: Schema.Types.ObjectId,
//     ref: 'User' // Reference to the User model
//   },
// updatedAt: {
//     type: Date,
//     default: Date.now
//   }
const donationSchema = new mongoose.Schema({
 
  foodName: {
    type: String,
    required: true
  },
  feedsCount: {
    type: Number,
    required: true
  },
  donorAddress: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  
  
  createdAt: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('donations', donationSchema);