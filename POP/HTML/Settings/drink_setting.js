

window.onload = function(){
  chrome.storage.local.get(['drink_goal_amount'], function(result) {
    document.getElementById("drink_goal").value = result.drink_goal_amount
  });
 
  chrome.storage.local.get(['drink_switch'], function(result) {
    document.getElementById("drink_switch").checked = result.drink_switch
  });
  
  
  

  document.getElementById("drink_goal").addEventListener("change", update_drink_goal);
  document.getElementById("drink_switch").addEventListener("click", update_drink_switch);

  
  

  
  function update_drink_switch(){
    var drink_box =  document.querySelector('#drink_switch');
    chrome.storage.local.set({"drink_switch": drink_box.checked})
  }
  
  function update_drink_goal(){
    goal = parseInt(document.getElementById("drink_goal").value)
    chrome.storage.local.set({"drink_goal_amount": goal})
    }
}
 
  
  
  
   