// JAVASCRIPTの擬似列挙型
var FRUITS_TYPE = {
    UNKNOWN : 0,
    BANANA : 1,
    APPLE : 2,
    ORANGE : 3,
    WATERMELON : 4,
};
FRUITS_TYPE.SIZEOF = 5;

function init(l){
    for(var i=0;i<FRUITS_TYPE.SIZEOF;++i){
        switch(i){
        case FRUITS_TYPE.BANANA:
            l[i] = 'BAD';
            break;
        case FRUITS_TYPE.APPLE:
            l[i] = 'GOOD';
            break;
        case FRUITS_TYPE.ORANGE:
            l[i] = 'GOOD';
            break;
        case FRUITS_TYPE.WATERMELON:
            l[i] = 'GOOD';
            break;
        default :
            l[i] = 'UNKOWN';
            break;
        }
    }
}
var list = new Array(FRUITS_TYPE.SIZEOF);
init(list);
console.log('FAVORITE BANANA?');
console.log('BANANA is '+list[FRUITS_TYPE.BANANA]);
