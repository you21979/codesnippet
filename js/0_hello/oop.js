var w = [
// プロトタイプを使わない版
function (){
    var Vec3 = function Vec3(vec_){
        var w = {
            get : function(){
                return vec_;
            },
            set : function(obj){
                for(var key in obj){
                    switch(key){
                    case 'x':
                        vec_.x = obj.x;
                        break;
                    case 'y':
                        vec_.y = obj.y;
                        break;
                    case 'z':
                        vec_.z = obj.z;
                        break;
                    }
                }
            },
            clone : function(){
                return {
                    x:vec_.x,
                    y:vec_.y,
                    z:vec_.z,
                };
            },
            length : function(){
                return Math.sqrt( (vec_.x*vec_.x) + (vec_.y*vec_.y) + (vec_.z*vec_.z))
            },
            normalize : function(){
                var len = w.length();
                return {
                    x:vec_.x/len,
                    y:vec_.y/len,
                    z:vec_.z/len,
                };
            },
            add : function(v){
                return {
                    x:vec_.x + v.x,
                    y:vec_.y + v.y,
                    z:vec_.z + v.z,
                };
            },
            sub : function(v){
                return {
                    x:vec_.x - v.x,
                    y:vec_.y - v.y,
                    z:vec_.z - v.z,
                };
            },
        };
        return w;
    }
    var v1 = Vec3({x:-10,y:30,z:-1});
    var v2 = Vec3({x:1,y:1,z:100});
    console.log(v1.get());
    console.log(v1.length());
    console.log(v2.length());
    console.log(v1.normalize());
    console.log(v1.add(v2.get()));
    console.log(v1.sub(v2.get()));
},
function(){
    console.log("---------------------");
},
// プロトタイプ使う版
function(){
    var Vec3 = function Vec3(obj){
        this.x = 0;
        this.y = 0;
        this.z = 0;
        if(obj !== undefined){
            this.x = obj.x;
            this.y = obj.y;
            this.z = obj.z;
        }
    }
    Vec3.prototype = {
        get : function(){
            return this;
        },
        set : function(obj){
            for(var key in obj){
                switch(key){
                case 'x':
                    this.x = obj.x;
                    break;
                case 'y':
                    this.y = obj.y;
                    break;
                case 'z':
                    this.z = obj.z;
                    break;
                }
            }
        },
        clone : function(){
            return {
                x:this.x,
                y:this.y,
                z:this.z,
            };
        },
        length : function(){
            return Math.sqrt( (this.x*this.x) + (this.y*this.y) + (this.z*this.z))
        },
        normalize : function(){
            var len = this.length();
            return {
                x:this.x/len,
                y:this.y/len,
                z:this.z/len,
            };
        },
        add : function(v){
            return {
                x:this.x + v.x,
                y:this.y + v.y,
                z:this.z + v.z,
            };
        },
        sub : function(v){
            return {
                x:this.x - v.x,
                y:this.y - v.y,
                z:this.z - v.z,
            };
        },
    };
    var v1 = new Vec3({x:-10,y:30,z:-1});
    var v2 = new Vec3({x:1,y:1,z:100});
    console.log(v1.get());
    console.log(v1.length());
    console.log(v2.length());
    console.log(v1.normalize());
    console.log(v1.add(v2.get()));
    console.log(v1.sub(v2.get()));
}
];
w.forEach(function(f){
    f();
});
