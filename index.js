document.getElementById("btn").addEventListener('click',getAPI)

        function getAPI(){
            fetch("https://randomuser.me/api/?results=20")
               .then((res)=>res.json()).then((data)=>{
                let array=data.results;
                array.sort((a,b)=>{
                    const nameA = a.name.first;
                    const nameB = b.name.first;
                    if(nameA < nameB){return -1;}
                    if(nameA > nameB){return 1;}
                    return 0;
                });
                let output="<h1>Names</h1><br>";
                array.forEach(function(user){
                   output+=`<ul>
                              ${user.name.title} ${user.name.first} ${user.name.last}
                            </ul><br>`;
                });
                document.getElementById('main').innerHTML=output;
            })
         .catch((err)=>console.log(err));
        }