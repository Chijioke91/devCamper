const { model, Schema } = require('mongoose');
const { ObjectId } = Schema.Types;

const BootcampSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please Add A Name'],
    trim: true,
    unique: true,
    maxlength: [50, 'Name cannot be longer than 50 Characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please Add A Description'],
    maxlength: [500, 'Description cannot be more than 500 Characters'],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone Number cannot be more than 20 characters'],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },

    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
    ],
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating must can not be more than 10'],
  },

  averageCost: Number,

  photo: {
    type: String,
    default: 'no-photo.jpg',
  },

  housing: {
    type: Boolean,
    default: false,
  },

  jobAssistance: {
    type: Boolean,
    default: false,
  },

  jobGuarantee: {
    type: Boolean,
    default: false,
  },

  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Bootcamp', BootcampSchema);
