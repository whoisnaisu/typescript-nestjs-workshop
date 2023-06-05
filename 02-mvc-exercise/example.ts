// request(...) => {
//     if(error){
//         return ...
//     }
// }

// const result = await request(...)

// return res.send(result)


const event = await Event.findById(...)

if(!event){
    return ...
}

return ...