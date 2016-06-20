import event from "./event";
/**
 *用于document对象左右||上下滑动的事件触发
*/

//用于各方向存放事件列表
let slideList ={
  left: [],
  right: [],
  up: [],
  down: []
}


var docSlide = {
  slideLeft: function (fn){
    if(typeof fn !== "function") return;
    this.push("left", fn)
  },
  slideRight: function (fn){
    if(typeof fn !== "function") return;
    this.push("right", fn)
  },
  slideUp: function (fn){
    if(typeof fn !== "function") return;
    this.push("up", fn)
  },
  slideDown: function (fn){
    if(typeof fn !== "function") return;
    this.push("down", fn)
  },


  push: (direction, fn)=>{
    if(fn.name !== ""){
      let obj= {};
      obj[fn.name]= fn;
      slideList[direction].push(obj)
    }else{
      slideList[direction].push(fn);
    }
  },
  pop: (direction, fn)=>{
    if(typeof fn !== "function") return;

    if(fn.name !== ""){
      var fnIndex;
      slideList[direction].forEach(function(item, index){
        if(item instanceof Object){
          fnIndex = index;
          return;
        }
      });

      if(!isNaN(fnIndex)){
        slideList[direction].slice(fnIndex,1);
      }
    }

    return;
  },
  run: (direction, e)=>{
    slideList[direction].forEach(function(item){
      if(typeof item === "function"){
        item(e);
      }else if(item instanceof Object){
        for(let fnName in item){
          item[fnName](e);
        }
      }
    })
  }
}

let getTouches = (e)=> {
  let touches= e.touches || e.targetTouches;
  if(!touches) return e;
  if(touches.length) return touches[0];
};

let startX, startY;
let lastX, lastY;
let [isLock, isLockX, isLockY]= [false, false, false];

//touchstart
event.on(document, "touchstart mousedown", function(e){
  let touch= getTouches(e);
  startX= touch.clientX;
  startY= touch.clientY;
  isLock= true;
}, false);

event.on(document, "touchmove mousemove", function(e){
  let touch= getTouches(e);
  e.stopPropagation();
  e.preventDefault();
  lastX= touch.clientX;
  lastY= touch.clientY;

  // let gapX= math.abs(startX- clientX);
  // let gapY= math.abs(startY- clientY);

  /**
   * 获取手势的角度
   * 1.知道对边X，临边Y
   * 2.利用反三角函数，反正切计算弧度radian
   * 3.利用公司angel= randian*180/Math.PI计算出角度angle
   */

  // let angle= Math.atan(0.5)*180/Math.PI;

  // if(angle< 45){
  //   isLockX = true;
  // }else{
  //   isLockY = true;
  // }

}, false)

event.on(document, "touchend mouseup", function(e){

  if(!isLock) return;

  if(startX - lastX > 30){
    docSlide.run("left");

  }else{
    docSlide.run("right");
  }
  isLock= false;
})

export default docSlide;
