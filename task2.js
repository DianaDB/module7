const obj={
    name:"Ivan",
    position:"manager"
}
function activity(obj,job){
    if(obj[job])
        console.log (true)
    else console.log (false)
}
activity(obj,"name")
activity(obj,"surname")