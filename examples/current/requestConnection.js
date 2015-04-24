/**
 * Created by osamaalghanmi on 4/24/15.
 */
var requestConnection = function(request){

    return request.headers.connection;

}
module.exports = requestConnection;