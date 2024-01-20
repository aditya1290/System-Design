let MAX_ALLOWED_CAPACITY = 4;
let TIME_PERIOD = 60*1000;
let bucket = {};

setTimeout(()=>{
    for(let key of bucket)      bucket[key] = MAX_ALLOWED_CAPACITY;
    console.log("Renewing capapcity : ", bucket)
},TIME_PERIOD);


const rateLimter = (email) => {
    if(bucket[email] == null)     bucket[email] = MAX_ALLOWED_CAPACITY;
    if(bucket[email] == 0)        return false;
    bucket[email]--;
    console.log("Current capapcity : ", bucket)
    return true;
}

module.exports = {rateLimter};