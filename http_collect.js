var url = process.argv[2];
var http = require('http');
var bl = require('bl');

//   Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Collect all data from the server (not  
//   just the first "data" event) and then write two lines to the console  
//   (stdout).  
   
//   The first line you write should just be an integer representing the number  
//   of characters received from the server. The second line should contain the  
//   complete String of characters sent by the server. 

// http.get(url, function(response){
//     response.setEncoding('utf8');
//     var responses = [];
//     var num_chars = 0;
//     response.on('data', function(bit){
//         num_chars = num_chars + bit.length;
//         responses.push(bit);
//     });
//     response.on('end', function(){
//         console.log(num_chars);
//         console.log(responses.join(''));
//     })
//     response.on('error', console.error);
// });

//  Both bl and concat-stream can have a stream piped in to them and they will  
//  collect the data for you. Once the stream has ended, a callback will be  
//  fired with the data:  

http.get(url, function(response){
   response.pipe(bl(function (err, data){
       if (err)
            return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
   }));
});