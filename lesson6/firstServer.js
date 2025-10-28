let http = require("http")
let server = http.createServer(function(req, res){
    let path = req.url
    if(path === '/')
        res.write("home page")
    else if(path === '/products')
        res.write("Products")
    else if(path === '/shmonses' )
        res.write("shmonses")
    res.end()
})

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001/');

})
