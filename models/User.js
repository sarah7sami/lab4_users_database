const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  },
  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      match: /^[a-zA-Z ]+$/
    },
    zipcode: {
      type: String,
      required: true,
      match: /^\d{5}-\d{4}$/
    },
    geo: {
      lat: {
        type: String,
        required: true
      },
      lng: {
        type: String,
        required: true
      }
    }
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{1}-\d{3}-\d{3}-\d{4}$/
  },
  website: {
    type: String,
    required: true,
    match: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
  },
  company: {
    name: {
      type: String,
      required: true
    },
    catchPhrase: {
      type: String,
      required: true
    },
    bs: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model("User", userSchema);