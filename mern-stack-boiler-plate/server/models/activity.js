const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const activitySchema = new Schema({
  activityId: {
    type: String,
    required: true,
    unique: true,
  },
  activityName: {
    type: String,
    required: true,
  },
  spaceName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  cancellationPolicy: {
    type: String,
    required: true,
  },
  hostRules: {
    type: String,
    required: true,
  },
  covidRules: {
    type: String,
    required: true,
  },
  operatingHours: {
    type: String,
    required: true,
  },
  parking: {
    type: String,
    required: true,
  },
  rates: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
  },
  thumbnailUrl: {
    type: String,
    default: '/defaultbookthumbnail.png',
  },
  avgRating: {
    type: Number,
    default: 0,
    required: true,
  },
  reviewCount: {
    type: Number,
    default: 0,
    required: true,
  },
  ratingCount: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
