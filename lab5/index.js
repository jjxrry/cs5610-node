import { CustomModule } from './CustomModule.js';
import { PathParameters } from './PathParameters.js'
import { QueryParameters } from './QueryParameters.js';
import { WorkingWithObjects } from './WorkingWithObjects.js';
export const Lab5 = (app) => {
    app.get("/lab5/welcome", (req, res) => {
        res.send("Welcome to Lab 5");
    });
    PathParameters(app)
    QueryParameters(app)
    WorkingWithObjects(app)
    CustomModule(app)
};
