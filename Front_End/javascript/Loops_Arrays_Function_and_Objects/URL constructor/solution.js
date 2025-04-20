
    function URLconstructor(queryParameters,domain,path){
        let finalurl = "";
        finalurl += "https://";
        finalurl += domain;
        finalurl += path;
        for( let key in queryParameters){
            finalurl += '?';
            finalurl += key;
            finalurl += '=';
            finalurl += queryParameters[key];
        }
        return finalurl; 
    }
 
 console.log(URLconstructor({name:"John",age:30},"example.com","/path/to/resource"));