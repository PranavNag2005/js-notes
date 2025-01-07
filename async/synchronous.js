//synchronous line by line execution while completing one task another task will be started 
function firsttask(){
    console.log("Boiling rice")
}
function secondtask(){
    console.log("making dal");
}
function thirdtask(){
    console.log("making salad")
}
firsttask()
secondtask()
thirdtask()

function start(){
    console.log("engine started")
}
function accel(){
    console.log("accelerated ")
}
function go(){
    console.log("let's ride the bike ")
}
start()
accel()
go()