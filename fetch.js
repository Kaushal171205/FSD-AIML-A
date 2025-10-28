const url = "https://dummyjson.com/users"
const f1 = async()=>{
    try{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}
catch(err){
    console.log(err.message)
}
}
f1()