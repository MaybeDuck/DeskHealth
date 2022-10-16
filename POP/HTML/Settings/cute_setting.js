

window.onload = function(){
  chrome.storage.local.get(['cute_amount_scale'], function(result) {
    document.getElementById("Cute_Track").value = result.cute_amount_scale
    document.getElementById("cute_meter").value = "Level " + document.getElementById("Cute_Track").value
   
  });
  chrome.storage.local.get(['cute_switch'], function(result) {
    document.getElementById("cute_switch").checked = result.cute_switch
  });
  
  
  

  document.getElementById("Cute_Track").addEventListener("change", update_cute_weight);
  document.getElementById("cute_switch").addEventListener("change", update_cute_switch);
 
  
  
  function update_cute_weight(){
    scale = parseInt(document.getElementById("Cute_Track").value)
    chrome.storage.local.set({"cute_amount_scale": scale})
    document.getElementById("cute_meter").value = "Level " + document.getElementById("Cute_Track").value
    }
    function update_cute_switch(){
        var cute_box =  document.querySelector('#cute_switch');
        console.log(cute_box.value)
        chrome.storage.local.set({"cute_switch": cute_box.checked})
      }
}
  
   