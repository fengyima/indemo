var event={
  on : (dom, eventName, targetSelector, listener, capture) => {
    function handleLiveEvent(e){
      var target= e.target;
    }

    let events = eventName.split(" ");
    let targets = dom.length ? dom : [dom];

    //普通绑定（非事件委托）
    if(typeof targetSelector === "function"){
      let listenerFn = targetSelector;
      let bCapture= listener|| false;

      events.forEach(function(item){
        targets.forEach(function (target) {
          target.addEventListener(item, listenerFn, bCapture)
        })
      })
    }else{

      //事件委托

    }
  }

};

export default event;
