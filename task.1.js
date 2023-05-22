const nums={a:5,b:10,c:20}
const result= Object.create(nums)
result.ownnums=100;
for (let key in result){
    if (result.hasOwnProperty(key)){
        console.log(key);
    }
}