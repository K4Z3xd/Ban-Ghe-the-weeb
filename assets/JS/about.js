(function() {

  var img = document.getElementById('img').firstChild;
  img.onload = function() {
      if(img.height > img.width) {
          img.height = '100%';
          img.width = 'auto';
      }
  };
  
  }());