;(function(win, doc){
  const isSupportTouch= function(){
    try {
      doc.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }();

})(window, document);
