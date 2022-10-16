
window.onload = function(){
    chrome.storage.local.get(['stand_interval_time'], function(result) {
        document.getElementById("Time_Track").value = result.stand_interval_time
        document.getElementById("inter").value = document.getElementById("Time_Track").value+ " Minutes"
        });
        chrome.storage.local.get(['stand_switch'], function(result) {
            
        document.getElementById("stand_switch").checked = result.stand_switch
        });
        
        
        document.getElementById("Time_Track").addEventListener("change", update_stand_Interval);
        document.getElementById("stand_switch").addEventListener("change", update_stand_switch);
        
        function update_stand_switch(){
        var stand_box =  document.querySelector('#stand_switch');
        chrome.storage.local.set({"stand_switch": stand_box.checked})
        }
        function update_stand_Interval(){
        document.getElementById("inter").value = document.getElementById("Time_Track").value+ " Minutes"
        time = parseInt(document.getElementById("Time_Track").value)
        chrome.alarms.clear("Stand")
        chrome.alarms.create("Stand", {delayInMinutes: time, periodInMinutes:time});
        chrome.storage.local.set({"stand_interval_time": time})
        }
}





