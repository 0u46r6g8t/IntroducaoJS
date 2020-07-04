function doSomething(callback){
    setTimeout(function(){
        callback('First Data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second Data');
    }, 1000);
}

function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');
            
            try{
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function(){
                            console.log(processedData, processedData2)   
                        }, 1000);
                    } catch (err) {
                        console.log(err);
                    }
                });
            }catch(err){
                console.log(err);
            }
        });
    }catch(err){
        console.log(err)
    }
}

doAll();