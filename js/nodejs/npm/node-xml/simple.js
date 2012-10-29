var xml = require("node-xml");


function init_xmlnode(name, parent){
    this.name = name;
    this.parent = parent;
    this.childs = [];
    this.params = [];
    this.string = '';
}
var data = null;

var parser = new xml.SaxParser(function(cb) {
    var parent = null;
    var current = null;
    cb.onStartDocument(function() {
        console.log("BEGIN =========");
        data = new init_xmlnode('root',null);
        parent = data;
    });
    cb.onEndDocument(function() {
        console.log("END ===========");
        console.log(data);
    });
    cb.onStartElementNS(function(elem, attrs, prefix, uri, namespaces) {
        if(elem === null){ return; }
        //console.log("=> Started: " + elem + " uri="+uri +" (Attributes: " + JSON.stringify(attrs) + " )");
        current = new init_xmlnode(elem, parent);
        current.params = attrs;
        parent.childs.push(current);
        parent = current;
    });
    cb.onEndElementNS(function(elem, prefix, uri) {
        //console.log("<= End: " + elem + " uri="+uri + "\n");
        if(current === null){ return; }
        parent = current.parent;
        current = null;
    });
    cb.onCharacters(function(chars) {
        //console.log('<CHARS>'+chars+"</CHARS>");
        if(current === null){ return; }
        current.string = chars;
    });
    cb.onCdata(function(cdata) {
        console.log('<CDATA>'+cdata+"</CDATA>");
    });
    cb.onComment(function(msg) {
        console.log('<COMMENT>'+msg+"</COMMENT>");
    });
    cb.onWarning(function(msg) {
        console.log('<WARNING>'+msg+"</WARNING>");
    });
    cb.onError(function(msg) {
        console.log('<ERROR>'+JSON.stringify(msg)+"</ERROR>");
    });
});
parser.parseFile('./data.xml');
