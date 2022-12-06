const {Cart} = require('../models')


// C ......
// R ......
// U ......
// D ......
// Completed 





const getAllCarts = async (req, res) => {
  try{
    const cart = await Cart.findAll()
    res.send(cart)
  } catch (error) {
    throw error
  }
}

const GetCartDetails = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.user_id)
    res.send(cart)
  } catch (error) {
    throw error
  }
}

const AddCart = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let cartId = parseInt(req.params.cart_id)
    let cartBody = {userId, cartId, ...req.body}
    let cart = await Cart.create(cartBody)
    res.send(cart)
  } catch (error) {
    throw error
  }
}

const UpdateCart = async (req, res) => {
  try {
    let cartId = parseInt(req.params.cartt_id)
    let updatedCart = await Cart.update(req.body, {
      where: {id: cartId},
      returning: true 
    })
    res.send(updatedCart)
  } catch (error) {
    throw error
  }
}

const DeleteCart = async (req, res) => {
  try {
    let cartId = parseInt(req.params.cart_id)
    await Cart.destroy({where: {id: cartId} })
    res.send({message: `Deleted cart with an id of ${cartId}`})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCartDetails,
  // getAllCarts,
  // AddCart,
// UpdateCart,
//   DeleteCart
}