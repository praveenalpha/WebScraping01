let request = require("request");
let fs = require("fs");
const getAllMatches = require("./allMatches.js");
request("https://www.espncricinfo.com/series/_/id/8039/season/2019/icc-cricket-world-cup",cb);
//success -> error = null , respose.statusCode = 200 , link = /html
//faluire -> error , response.statusCode = 404 , link = ?
function cb(error,response,html){
    if(error == null && response.statusCode == 200){
        // console.log("yes");
        parseData(html);
    }
    else if(response.statusCode == 404){
        console.log("page not found !");
    }
    else{
        console.log("error");
    }
}
function parseData(html){
    //console.log(html);
    let ch = cheerio.load(html);
    let link = ch(".widget-items.cta-link a").attr("href");
    let completeLink = "https://www.espncricinfo.com" + link;
    getAllMatches(completeLink);
}















