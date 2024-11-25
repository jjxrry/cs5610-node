import model from "./model.js"

export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz)
};

// export const findAllUsers = () => model.find();
// export const findUsersByRole = (role) => model.find({ role: role })
// export const findUserByPartialName = (partialName) => {
//     const regex = new RegExp(partialName, "i")
//     return model.find({
//         $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }]
//     })
// }
// export const findUserById = (userId) => model.findById(userId)
// export const findUserByUsername = (username) => model.findOne({ username: username })
// export const findUserByCredentials = (username, password) => model.findOne({ username, password })
// export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user })
// export const deleteUser = (userId) => model.deleteOne({ _id: userId })
