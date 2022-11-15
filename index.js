function shout(string) {
    return string.toUpperCase("hello");
}

function whisper(string){
    return string.toLowerCase("HELLO")
}
function logWhisper(string){
    console.log(string.toLowerCase("HELLO"))
}
function logShout(string){
    console.log(string.toUpperCase("hello"))
}
function sayHiToHeadphonedRoommate(string){
    if(string == string.toLowerCase()){
        return("I can't hear you!")
    }
    return string
}
function sayHiToHeadphonedRoommate(string){
    if(string == string.toUpperCase()){
        return("YES INDEED!")
    }
    return string
}