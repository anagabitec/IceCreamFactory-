numItems = 0;
var items = [];
var size = "";
var type = "";
var orders = []
function addItem(item) {
    items.push(item);
    console.log("item is added");
}

function generateQueryStr(baseurl) {
    var query = "";
    for(var i = 0; i < orders.length; i++) {
        var order = orders[i];
        query = query + order["Type"] + "," + order["Size"] + ",";
        for(var j = 0; j < order["flavors"].length; j++) {
            var flavor = order["flavors"][j];
            query = query + flavor + ",";
        }
        query = query + ";";
    }
    return baseurl + "?orders=" + query;
}

function readInfo() { 
    String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
    };
    var url = window.location.href;
    url = url.replaceAll("%20", " ");
    url = url.trim();
    console.log(url);
    var n = url.indexOf("?orders=");
    if(n >= 0) {
        console.log(n);
        n = n + 8;
        var newstr = url.substring(n);
        console.log(newstr);
        var itemsarr = newstr.split(";");
        console.log(itemsarr);
        for(var i = 0; i < itemsarr.length; i++) {
            if(itemsarr[i].length > 0) {
                orderarr = itemsarr[i].split(",");
                kind = orderarr[0];
                size = orderarr[1];
                flavors = [];
                for(var j = 2; j < orderarr.length; j++) {
                    flavor = orderarr[j];
                    flavors.push(flavor);
                }
                orders.push({"Type" : kind, "Size" : size, "flavors" : flavors});
            }
        }
        console.log(orders);
        var resultStr = "<ol>";
        for(var i =0; i < orders.length; i++) {
            var order = orders[i];
            var orderStr = order["Size"] + " " + order["Type"] + " with ";
            for(var j = 0; j < order["flavors"].length; j++) {
                orderStr = orderStr + order["flavors"][j] + ",";
            }
            console.log(orderStr);
            resultStr = resultStr + "<li>" + orderStr + "</li>";
        }
        resultStr = resultStr + "</ol>";
        console.log(resultStr);
        document.getElementById("shoppingResults").innerHTML = resultStr;
    
    }
    
    
    
}

readInfo();