const {Instrument} = require('../models')


// C ......
// R ......
// U ......
// D ......
// Completed 





const getAllInstruments = async (req, res) => {
  try{
    const instrument = await Instrument.findAll()
    res.send(instrument)
  } catch (error) {
    throw error
  }
}

const GetInstrumentDetails = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.review_id)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const AddInstrument = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let reviewId = parseInt(req.params.review_id)
    let reviewBody = {userId, reviewId, ...req.body}
    let review = await Review.create(reviewBody)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateInstrument = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let updatedReview = await Review.update(req.body, {
      where: {id: reviewId},
      returning: true 
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const DeleteInstrument = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await Review.destroy({where: {id: reviewId} })
    res.send({message: `Deleted review with an id of ${reviewId}`})
  } catch (error) {
    throw error
  }
}

module.exports = {
  // GetInstrumentDetails,
  getAllInstruments,
//   AddInstrument,
  // UpdateInstrument,
//   DeleteInstrument
}