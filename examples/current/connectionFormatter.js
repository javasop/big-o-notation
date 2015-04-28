/**
 * Created by osamaalghanmi on 4/24/15.
 */

var myObject = {
    "name":"modulename",
    "connectionFormatter":function(){


    }
}
var connectionFormatter = function(req){

    return req.headers.connection;

}

module.exports = connectionFormatter;
