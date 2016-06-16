let utils={
  hasClass: (dom, className)=>{
    if(typeof className === "undifined") return;
    if(!dom.classList.length) return false;

    return dom.classList.contains(className);
  },

  addClass: (dom, className) => {
    if(typeof className === "undifined") return;
    let classes= className.split(" ");
    classes.forEach(function(item){
      dom.classList.add(item);
    })

  },

  removeClass: (dom, className) => {
    if(typeof className === "undifined") return;
    let classes= [];
    if(Array.isArray(className)){
      classes= className;
    }else{
      classes= className.split(" ");
    }
    classes.forEach(function(item){
      dom.classList.remove(item);
    })
  },

  toggleClass: (dom, className) => {
    if(typeof className === "undifined") return;
    let classes= [];
    if(Array.isArray(className)){
      classes= className;
    }else{
      classes= className.split(" ");
    }
    classes.forEach(function(item){
      dom.classList.toggle(item);
    })
  }

}

export default utils;
