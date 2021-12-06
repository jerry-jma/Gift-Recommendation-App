const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  tag: {type: String, required: true},
  title: {type: String, required: true},
  likes: {type: Number, default: 0},
  dislikes: {type: Number, default: 0},
  image: {type: String, required: true},
  moreDetails: {type: String, required: true},
  reference: {type: String, required: true},
  Discussions: [
    {
      discussion_id: {type: Number, required: true},
      userName: {type: String, required: true},
      userProfile: {type: String, required: true},
      discussion_body: {type: String, required: true}
    }
  ]
});

const Option = mongoose.model('Option', OptionSchema);

module.exports = Option;
