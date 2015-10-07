  var step1  = true;
  var step2a = false;
  var step2b = false;
  var step3a = false;
  var step3b = false;
  var step4a = false;
  var step4b = false;
  var step5a = false;
  var step5b = false;
  var step6a = false;
  var step6b = false;
  var step7  = false;

function bottom() {
    document.getElementById( 'tutorial' ).scrollIntoView();
    //window.setTimeout( function () { top(); }, 2000 );
};

function flattenBread(callback) {
  $("#rollingpin").animate({
    "top":"50%"
  }, 500, "linear").
  animate({
    "top":"70%"
  }, 500, "linear"); 
  if (callback && typeof(callback) === "function") {
    callback();
  }         
}

function cutCheese(callback) {
  $("#knife").animate({
    "top":"50%",
    "left":"33%"
  }, 500, "linear").
  animate({
    "top":"70%",
    "left":"53%"
  }, 500, "linear"); 
  if (callback && typeof(callback) === "function") {
    callback();
  }         
}

function smearCheese(callback) {
  $("#cheese").animate({
    "top":"50%"
  }, 500, "linear").
  animate({
  	"top":"60%",
    "left":"33%"
  }, 500, "linear").
  animate({
    "top":"70%",
    "left":"43%"
  }, 500, "linear").
  animate({
  	"top":"60%",
    "left":"53%"
  }, 500, "linear").
  animate({
  	"top":"50%",
    "left":"43%"
  }, 500, "linear"); 
  if (callback && typeof(callback) === "function") {
    callback();
  }         
}

function wrapBacon(callback) {
  $("#bacon img").animate({
    "width":"400px"
  }, 2000, "linear").
  animate({
  	"width":"250px"
  }, 2000, "linear");

   if (callback && typeof(callback) === "function") {
    callback();
  }   
}

function useToothpick(callback) {
  $("#toothpick img").animate({
    "height":"300px"
  }, 2000, "linear");

   if (callback && typeof(callback) === "function") {
    callback();
  }   
}

function selectHint()
{  
//    var newTitle;
    var newContent;
    if(step1 == true){
      newContent = "Click the bag";
 //     newTitle = "Step 1";
    }
    else if(step2a == true){
    	newContent = "Click the Loaf of Bread";
//      newTitle = "Step 2a";
    }
    else if(step2b == true){
      newContent = "Click the Rolling Pin";
 //     newTitle = "Step 2b";
    }
    else if(step3a == true){
      newContent = "Click the Block of Cheese";
 //     newTitle = "Step 3a";
    }
    else if(step3b == true){
      newContent = "Click the Knife";
 //     newTitle = "Step 3b";
    }
    else if(step4a == true){
      newContent = "Click the Bread";
 //     newTitle = "Step 4a";
    }
    else if(step4b == true){
      newContent = "Click the Cheese";
 //     newTitle = "Step 4b";
    }
    else if(step5a == true){
      newContent = "Click the Cheese Bread";
//      newTitle = "Step 5a";
    }
    else if(step5b == true){
      newContent = "Click the Bacon";
//      newTitle = "Step 5b";
    }
    else if(step6a == true){
      newContent = "Click the Bacon Cheese Bread";
 //     newTitle = "Step 6a";
    }
    else if(step6b == true){
      newContent = "Click the toothpick";
 //     newTitle = "Step 6b";
    }
    else if(step7 == true){
      newContent = "You did it! Great job!";
    }
    else{
      return $('#popover_content_wrapper').html();
    }
    document.getElementById('popover_content_wrapper').innerHTML = newContent;
//    $('#hint').attr('data-original-title', newTitle);
    return $('#popover_content_wrapper').html();
}
