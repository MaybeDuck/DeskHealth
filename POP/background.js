var random_popup_count = 200
chrome.runtime.onInstalled.addListener(function(){
   
    chrome.storage.local.set({"stand_interval_time": 60})
    chrome.storage.local.set({"drink_goal_amount": 110})
    chrome.storage.local.set({"cute_amount_scale": 2})
    chrome.storage.local.set({"stand_switch": true})
    chrome.storage.local.set({"drink_switch": true})
    chrome.storage.local.set({"cute_switch": true})
}
  )


chrome.alarms.onAlarm.addListener(function( alarm ) {
    console.log("Alarm Went Off")
    console.log(alarm.name)
    if(alarm.name == "Stand"){
        console.log("Stand")
        Stand()
    }
    
    if(alarm.name =="Drink" || alarm.name =="Drink1"|| alarm.name =="Drink2"|| alarm.name =="Drink3"
    || alarm.name =="Drink4"|| alarm.name =="Drink5"|| alarm.name =="Drink6"){
        console.log("Drink")
        Drink()
    }
});

function Stand() {    
    chrome.storage.local.get(['stand_switch'], function(result) {
        if(result.stand_switch){
            chrome.windows.create({
                focused: true,
                type: 'popup',
                url: 'HTML/stand.html',
               
                state:"maximized"
            },SaveWindowID);
        }
      });
}

function Drink() {   
    chrome.storage.local.get(['drink_switch'], function(result) {
        if(result.drink_switch){
            chrome.windows.create({
                focused: true,
                type: 'popup',
                url: 'HTML/drink.html',
               width:300,
               height: 400
            },SaveWindowID);
        }
      });


    
    
}
function Cute() {
    chrome.storage.local.get(['cute_switch'], function(result) {
        console.log(result.cute_switch)
        if(result.cute_switch == true){
            chrome.windows.create({
                focused: true,
                type: 'popup',
                url: 'HTML/dog.html',
               width:600
               
            },SaveWindowID);
        }
      });
}


chrome.tabs.onActivated.addListener(function(){
    
    chrome.storage.local.get(['cute_amount_scale'], function(result) {
        random_popup_count -= result.cute_amount_scale 
        if(random_popup_count <= 0){    
            random_popup_count = 200
           
            Cute()
        }
      });
    
    
})
chrome.tabs.onUpdated.addListener(function(){
    chrome.storage.local.get(['cute_amount_scale'], function(result) {
        random_popup_count -= result.cute_amount_scale 
        if(random_popup_count <= 0){    
            random_popup_count = 200
            Cute()
        }
      });
})






function SaveWindowID(window){
    setTimeout(function(){
        chrome.windows.remove(window.id)
    },900000)
    
}

min = 0
piM = 1440
function startAtTime(hour){
    current_time = new Date

    if(current_time.getHours() < hour){
        current_time.setHours(hour)
        current_time.setMinutes(min)
        current_time.setSeconds(0)
       
        return current_time.getTime()
       }
    else{
        current_time.setDate(current_time.getDate()+1)
        current_time.setHours(hour)
        current_time.setMinutes(min)
        current_time.setSeconds(0)
   
        return current_time.getTime()
    }
}

chrome.alarms.getAll(function(AlarmList){
    if(AlarmList == 0){
        chrome.alarms.create("Drink", {when:startAtTime(8), periodInMinutes: 1440});
        chrome.alarms.create("Drink1", {when:startAtTime(10), periodInMinutes: 1440});
        chrome.alarms.create("Drink2", {when:startAtTime(12), periodInMinutes: 1440});
        chrome.alarms.create("Drink3", {when:startAtTime(14), periodInMinutes: 1440});
        chrome.alarms.create("Drink4", {when:startAtTime(16), periodInMinutes: 1440});
        chrome.alarms.create("Drink5", {when:startAtTime(18), periodInMinutes: 1440});
        chrome.alarms.create("Drink6", {when:startAtTime(20), periodInMinutes: 1440});
        chrome.alarms.create("Stand", {delayInMinutes: 60, periodInMinutes: 60});
        console.log("Alarms, Created")
    }
}
    
  )