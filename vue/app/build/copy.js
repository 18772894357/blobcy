var fs = require('fs');
var stat=fs.stat;
fs.readFile('./dist/index.html', 'utf-8', function(err, data) {
	if(err) {
	  return console.log(err)
	}else{
	  fs.writeFile('../../views/index.html', data, (err, data) => {
        console.log(err);
      });
	  console.log("已经迁移至middleware/views下面");
	}
})
var copy = function(src,dst){
    //读取目录
    fs.readdir(src,function(err,paths){
        if(err){
            throw err;
        }
        paths.forEach(function(path){
            var _src=src+'/'+path;
            var _dst=dst+'/'+path;
            var readable;
            var writable;
            stat(_src,function(err,st){
                if(err){
                    throw err;
                }
                if(st.isFile()){
                    readable=fs.createReadStream(_src);//创建读取流
                    writable=fs.createWriteStream(_dst);//创建写入流
                    readable.pipe(writable);
                }else if(st.isDirectory()){
                    exists(_src,_dst,copy);
                }
            });
        });
    });
}

var exists=function(src,dst,callback){
    //测试某个路径下文件是否存在
    fs.exists(dst,function(exists){
        if(exists){//不存在
            callback(src,dst);
        }else{//存在
            fs.mkdir(dst,function(){//创建目录
                callback(src,dst)
            }) 
        }
    })
}

function deleteall(path) {
    var files = []; 
    if(fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse         
                deleteall(curPath);         
            } else { // delete file
                console.log(11111111);      
                fs.unlinkSync(curPath);
                console.log(22222222); 
            }
        });
        exists('./dist/static','../../public/static',copy);
    }  
};

deleteall('../../public/static');