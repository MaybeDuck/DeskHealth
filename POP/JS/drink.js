

chrome.storage.local.get(['drink_goal_amount'], function(result) {
    time = new Date()
    time = time.getHours() - 8 
    goal = result.drink_goal_amount
    point = Math.round(goal * (time/12))
    document.getElementById("goal_reader").innerHTML = "Goal: " + point +"/"+ goal + " OZs"
});