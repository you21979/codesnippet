function toUnixTime(){
    var dateObj = new Date();
    return dateObj / 1000 | 0;
}
function fromUnixTime(t){
    return new Date( t * 1000 );
}
function main(){
    var t = toUnixTime();
    console.log(t);
    var d = fromUnixTime(t);
    console.log(d);
}
main();
