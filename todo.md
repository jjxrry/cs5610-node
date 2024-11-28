NOTE:
WE FIXED THE DEPLOYMENT ISSUE, IT WAS BECAUSE OF MONGODB TEST.USERS BECAUSE THE ENV URI INFERRED THAT INSTEAD OF KANBAS.USERS
THANK GOD, JUST KEEP GOING.

modules weren't populated right so the modules that exist for the previous serverside courses aren't connected, they need the new added modules and they work fine

async db CRUD calls need to refresh the page for the data to persist before trying another operation during development

courses aren't showing enrollments from mongo
enroll works, but it doesn't refetch and give the right enrollment status, then unenrolls break

Unenroll works but still breaks the server
unenroll is now giving this error:
node:_http_server:351
    throw new ERR_HTTP_INVALID_STATUS_CODE(originalStatusCode);
          ^

RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: { acknowledged: true, deletedCount: 1 }
    at ServerResponse.writeHead (node:_http_server:351:11)
    at ServerResponse.writeHead (/Users/jerrygao/School/cs5610/kanbas-node-server-app/node_modules/on-headers/index.js:44:26)
    at ServerResponse._implicitHeader (node:_http_server:337:8)
    at writetop (/Users/jerrygao/School/cs5610/kanbas-node-server-app/node_modules/express-session/index.js:284:15)
    at ServerResponse.end (/Users/jerrygao/School/cs5610/kanbas-node-server-app/node_modules/express-session/index.js:364:16)
    at ServerResponse.send (/Users/jerrygao/School/cs5610/kanbas-node-server-app/node_modules/express/lib/response.js:232:10)
    at ServerResponse.sendStatus (/Users/jerrygao/School/cs5610/kanbas-node-server-app/node_modules/express/lib/response.js:375:15)
    at unenrollUserFromCourse (file:///Users/jerrygao/School/cs5610/kanbas-node-server-app/kanbas/users/routes.js:23:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
  code: 'ERR_HTTP_INVALID_STATUS_CODE'
}node:_http_server:351
