class Hello {
    /**
     * コンストラクタ
     */
    constructor(public message: string) {}
    /**
     * ヘロー
     */
    hello():string {
        return this.message;
    }
};

class Main {
    main(){
        var h:Hello = new Hello("Hello, world!");
        var str:string = h.hello();
        console.log(str);
    }
};

var m:Main = new Main();
m.main();
