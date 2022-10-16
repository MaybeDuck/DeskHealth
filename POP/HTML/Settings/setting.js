


chrome.storage.local.get(['stand_interval_time'], function(result) {
  document.getElementById("Time_Track").value = result.stand_interval_time
  document.getElementById("inter").value = document.getElementById("Time_Track").value+ " Minutes"
});
chrome.storage.local.get(['drink_goal_amount'], function(result) {
  document.getElementById("drink_goal").value = result.drink_goal_amount
});
chrome.storage.local.get(['cute_amount_scale'], function(result) {
  document.getElementById("Cute_Track").value = result.stand_interval_time
 
});
chrome.storage.local.get(['cute_switch'], function(result) {
  document.getElementById("cute_switch").checked = result.cute_switch
});



document.getElementById("Time_Track").addEventListener("change", update_stand_Interval);
document.getElementById("drink_goal").addEventListener("change", update_drink_goal);
document.getElementById("Cuet_Track").addEventListener("change", update_cute_weight);

document.getElementById("drink_switch").addEventListener("click", update_drink_switch);
document.getElementById("cute_switch").addEventListener("click", update_cute_switch);
document.getElementById("stand_switch").addEventListener("click", update_stand_switch);


function update_stand_switch(){
  var stand_box =  document.querySelector('#stand_switch');
  chrome.storage.local.set({"stand_switch": stand_box.checked})
}

function update_drink_switch(){
  var drink_box =  document.querySelector('#drink_switch');
  chrome.storage.local.set({"drink_switch": drink_box.checked})
}

function update_cute_switch(){
  var cute_box =  document.querySelector('#cute_switch');
  console.log(cute_box.value)
  chrome.storage.local.set({"cute_switch": cute_box.checked})
}


function update_stand_Interval(){
    document.getElementById("inter").value = document.getElementById("Time_Track").value+ " Minutes"
    time = parseInt(document.getElementById("Time_Track").value)
    chrome.alarms.clear("Stand")
    chrome.alarms.create("Stand", {delayInMinutes: message.value, periodInMinutes:time});
    chrome.storage.local.set({"stand_interval_time": time})
  }

function update_drink_goal(){
  goal = parseInt(document.getElementById("drink_goal").value)
  chrome.storage.local.set({"drink_goal_amount": goal})
  }

function update_cute_weight(){
  scale = parseInt(document.getElementById("Cute_Track").value)
  chrome.storage.local.set({"cute_amount_scale": scale})
  }



 