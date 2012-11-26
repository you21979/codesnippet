function init(ctx){
    ctx.hoge = 0;
    ctx.fuga = 0;
}
function update(ctx){
    ctx.hoge+=1;
    if(ctx.hoge%2===0){
     ctx.fuga+=1;
    }
}
return {
    init : init,
    update : update,
};
