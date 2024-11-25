import model from "./model.js"

export const findAssignmentsForCourse = (courseId) => {
    return model.find({ course: courseId })
}

export const createAssignment = (assignment) => {
    delete assignment._id
    return model.create(assignment)
}

export const deleteAssignment = (assignmentId) => {
    return model.deleteOne({ _id: assignmentId })
}

export const updateAssignment = (assignmentId, assignmentUpdates) => {
    return model.updateOne({ _id: assignmentId }, assignmentUpdates)
}

export const findAssignmentById = (courseId, assignmentId) => {
    return model.findOne({ _id: assignmentId, course: courseId })
}
