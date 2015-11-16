'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Event Schema
 */
var EventSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  featured: {
    type: Boolean
  },
});

//set updated 
EventSchema.pre('save', function(done) {
  this.updated = new Date();
  done();
});

mongoose.model('Event', EventSchema);
