const {Review} = require('../models')


// C ......
// R ......
// U ......
// D ......
// Completed 




const getAllReviews = async (req, res) => {
  try{
    const review = await Review.findAll()
    res.send(review)
  } catch (error) {
    throw error
  }
}

// const GetCommentDetails = async (req, res) => {
//   try {
//     const comment = await Comment.findByPk(req.params.comment_id)
//     res.send(comment)
//   } catch (error) {
//     throw error
//   }
// }

// const AddComment = async (req, res) => {
//   try {
//     let userId = parseInt(req.params.user_id)
//     let postId = parseInt(req.params.user_id)
//     let commentBody = {userId, postId, ...req.body}
//     let comment = await Comment.create(commentBody)
//     res.send(comment)
//   } catch (error) {
//     throw error
//   }
// }

// const UpdateComment = async (req, res) => {
//   try {
//     let commentId = parseInt(req.params.comment_id)
//     let updatedComment = await Comment.update(req.body, {
//       where: {id: commentId},
//       returning: true 
//     })
//     res.send(updatedComment)
//   } catch (error) {
//     throw error
//   }
// }

// const DeleteComment = async (req, res) => {
//   try {
//     let commentId = parseInt(req.params.comment_id)
//     await Comment.destroy({where: {id: commentId} })
//     res.send({message: `Deleted review with an id of ${commentId}`})
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
//   GetCommentDetails,
  getAllReviews,
//   AddComment,
//   UpdateComment,
//   DeleteComment
}