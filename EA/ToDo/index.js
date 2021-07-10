const r = require('./route.js')
var getRawBody = require('raw-body')

module.exports.handler = function(req, resp, context) { 

    resp.setHeader('content-type', 'application/json') 



    var uri = (req.url).split('/')
    if(uri.length == 0) {
    resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request'}, null, ''))
    } else {
        var route = uri[uri.length-1] 

        switch(req.method) {
        case 'GET':
            resp.send(JSON.stringify(r.get(route)))
            break
        case 'POST':

            getRawBody(req, function (err, body) {
                var reqBody = {
                    headers: req.headers,
                    url: req.url,
                    path: req.path,
                    queries: req.queries,
                    method: req.method,
                    clientIP: req.clientIP,
                    body: body.toString()
                }

                if (err) {
                    resp.send({'code': 400, 'body': 'Body Error'})
                } else {
                    resp.send(JSON.stringify(r.post(route, body.toString())))
                }
            })

            break
        case 'PUT':

            getRawBody(req, function (err, body) {
                var reqBody = {
                    headers: req.headers,
                    url: req.url,
                    path: req.path,
                    queries: req.queries,
                    method: req.method,
                    clientIP: req.clientIP,
                    body: body.toString()
                }

                if (err) {
                    resp.send({'code': 400, 'body': 'Body Error'})
                } else {
                    resp.send(JSON.stringify(r.put(route, body.toString())))
                }
            })
            break
        case 'DELETE':
            resp.send(JSON.stringify(r.delete(route)))
            break
        }
    } 
}