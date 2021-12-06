const Option = require('../../db/models/Option');

const retrieveData = (req, res) => {
  Option.find({})
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(err));
};

const addIdeas = (req, res) => {
  const {id, tag, title, image, moreDetails, reference, discussion_id, userName, userProfile, discussion_body} = req.body;
  Attendee.create({
    id: id,
    tag: tag,
    title: title,
    image: image,
    moreDetails: moreDetails,
    reference: reference,
    Discussions: [
      {
        discussion_id: discussion_id,
        userName: userName,
        userProfile: userProfile,
        discussion_body: discussion_body
      }
    ]
  }).then(result => res.status(201).send('thank you for adding'))
    .catch(err => res.status(500).send(err));
}

module.exports = {
  retrieveData,
  addIdeas
}