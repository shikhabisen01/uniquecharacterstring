

const str = 'aabb';
const example3 = (str = '') => {
   let obj = {};
   for(let i = 0; i < str.length; i++){
      if(str[i] in obj){
         let temp = obj[str[i]];
         let x = parseInt(temp[0]);
         x += 1;
         temp[0] = x;
         obj[str[i]] = temp;
      } else {
         obj[str[i]] = [1, i]
      }
   }
   let arr = Object.keys(obj);
   for(let i = 0; i < arr.length; i++){
      let z = obj[arr[i]]
      if(z[0] === 1){
         return z[1];
      }
   }
   return -1;
};
console.log(example3(str));