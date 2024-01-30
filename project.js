// document.addEventListener('DOMContentLoaded', function () {

    // const but = document.querySelector("button")
    // console.log(but)
    const form = document.querySelector("form")
    // console.log("ghjk")

    // function handleFormSubmit(event)
    form.addEventListener("submit", function(event)
{
    
    event.preventDefault();

    
    const amount = document.querySelector("#amount").value;
    const des = document.querySelector("#des").value;
    const cat = document.querySelector("#cat").value;

   const obj={
    amount,
    des,
    cat
    };

    const st = JSON.stringify(obj);
    localStorage.setItem(des,st)
    console.log(st)


    // const form = document.querySelector("form") 
    const list = document.createElement('ul');
    const para = document.createElement('li')
    const addNode = document.createTextNode(`${amount} - ${des} - ${cat}`)
    // para.appendChild(addNode);
    // form.appendChild(para);



    

    para.appendChild(addNode);

    const btmd = document.createElement("button");
    const btmdpara = document.createTextNode("Delete")
    btmd.appendChild(btmdpara);
    btmd.style.background = "rgb(255, 102, 102)";

    const btme = document.createElement("button");
    const btmepara = document.createTextNode("Edit");
    btme.appendChild(btmepara);
    btme.style.background = "hsl(240, 100%, 65%)";
    btme.style.color = "white";

    list.appendChild(para);
    list.appendChild(btmd);
    list.appendChild(btme);
    form.appendChild(list)

    btmd.addEventListener('click', function (){
        // console.log(1)
        list.remove();
        localStorage.removeItem(email);
    });

    btme.addEventListener('click',function ()
    {
        document.querySelector("#amount").value = amount;
        document.querySelector("#des").value = des;
        document.querySelector("#cat").value = cat;
        list.remove();
        localStorage.removeItem(email);
    })

    
})

    // form.handleFormSubmit("submit", function(event)
    // {
        // event.preventDefault();
        // console.log(1)

        // const uname = document.querySelector("#uname")
        // const mail = document.querySelector("#mail");
        // const phone = document.querySelector("#phone");
    
        // console.log(uname.value)
    
        // localStorage.setItem("name",uname.value)
        // localStorage.setItem("mail",mail.value)
        // localStorage.setItem("phone",phone.value)
    
        // console.log(uname.value)
        // console.log(1)
    // })
    
    // })