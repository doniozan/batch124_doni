var vhttp = require('http');
var vurl = require('url');
var vfs = require('fs');

vhttp.createServer(function(req,res){
    var akses=vurl.parse(req.url);
    if (akses.pathname=="/") {
        res.writeHead(200, {
            "contet-type":"text/html"

        });
        alamat="./Menu/index.html"; 
        vfs.createReadStream(alamat).pipe(res);
    }
    else{
        res.writeHead(404, {"content-type":"text/plain"});
        res.write("Alamat Tidak ada \n");
        res.write("urlnya adalah "+req.url);
        res.end();
    }
}) .listen(8889);

console.log("server is running");