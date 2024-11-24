import Database from "../database/index.js"
import model from "./model.js"

export const findModulesForCourse = (courseId) => {
    return model.find({ course: courseId })
    // const { modules } = Database
    // return modules.filter((module) => module.course === courseId)
}

export const createModule = (module) => {
    delete module._id
    return model.create(module)
    // const newModule = { ...module, _id: Date.now().toString() }
    // Database.modules = [...Database.modules, newModule]
    // return newModule
}

export const deleteModule = (moduleId) => {
    return model.deleteOne({ _id: moduleId })
    // const { modules } = Database
    // const initialLength = modules.length
    // Database.modules = modules.filter((module) => module._id !== moduleId)
    // return Database.modules.length < initialLength
}

export const updateModule = (moduleId, moduleUpdates) => {
    return model.updateOne({ _id: moduleId }, moduleUpdates)
    // const { modules } = Database
    // const module = modules.find((module) => module._id === moduleId)
    // Object.assign(module, moduleUpdates)
    // return module
}
