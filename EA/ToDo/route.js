var toDoList = []
exports.get = (route) => { 
    console.log(route) 
    switch(route) {
        case "lists":
            return {'code': 200, 'status': 'OK','body': toDoList}
        default:
            return {'code': 400, 'status': 'Bad Request' }
    } 
}

exports.post = (route, body) => { 
    console.log(route) 
    switch(route) {
        case "add":
            console.log(JSON.stringify(body))
            toDoList.push(body)
            console.log(`toDoList: ${toDoList}`)
            return {'code': 200, 'status': 'OK', 'body': toDoList}
        default:
            return {'code': 400, 'status': 'Bad Request' }
    } 
}

exports.put = (route, body) => { 
    console.log(route) 
    console.log(JSON.stringify(body))
    console.log(body)
    console.log(toDoList)
    switch(route) {
        
        case "removeOne":
            const index = toDoList.findIndex((item) => item == body.toString())
            console.log(index)
            if (index > -1) {
                toDoList.splice(index, 1)
                console.log(`toDoList: ${toDoList}`)
                return {'code': 200, 'status': 'OK',  'body': toDoList}
            } else {
                return {'code': 400, 'status': 'Item Not Found' }
            }
        default:
            return {'code': 400, 'status': 'Bad Request' }
    } 
}

exports.delete = (route) => { 
    console.log(route) 
    switch(route) {
        case "delete":
            toDoList = []
            return {'code': 200, 'status': 'List Removed'}
        default:
            return {'code': 400, 'status': 'Bad Request' }
    } 
}