// async function GetData(){
    
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("resolve")
            
//         }, 3000);
//     })
// }


async function GetData(){
    let method= {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
      let url='https://jsonplaceholder.typicodei.com/posts'

   let data= await fetch(url,method)
   console.log(data.ok);
   
        return await data.json();
}
async function main() {
    
console.log("script running");
let data= await GetData();
console.log(data);
console.log("The end");

}

main();
