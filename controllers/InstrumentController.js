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
    const instrument = await Instrument.findByPk(req.params.instrument_id)
    res.send(instrument)
  } catch (error) {
    throw error
  }
}

const AddInstrument = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let instrumentId = parseInt(req.params.instrument_id)
    let instrumentBody = {userId, instrumentId, ...req.body}
    let instrument = await Instrument.create(instrumentBody)
    res.send(instrument)
  } catch (error) {
    throw error
  }
}

const UpdateInstrument = async (req, res) => {
  try {
    let instrumentId = parseInt(req.params.instrument_id)
    let updatedInstrument = await Review.update(req.body, {
      where: {id: instrumentId},
      returning: true 
    })
    res.send(updatedInstrument)
  } catch (error) {
    throw error
  }
}

const DeleteInstrument = async (req, res) => {
  try {
    let instrumentId = parseInt(req.params.instrument_id)
    await Instrument.destroy({where: {id: instrumentId} })
    res.send({message: `Deleted instrument with an id of ${instrumentId}`})
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