let timer=10;
let time = document.getElementById('display');
time.style.margin= "auto";
time.style.textAlign = "center";
time.style.border = "4px solid black"
time.style.maxWidth ="600px"
time.innerHTML="Are you Ready !"
setTimeout(() => {
    time.innerHTML = timer--;
    setTimeout(() =>{
        time.className = "badge rounded-pill bg-light text-dark";
        time.innerHTML = timer--;
        setTimeout(() =>{
            time.className = "badge rounded-pill text-bg-secondary";
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "badge rounded-pill text-bg-success";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className ="badge rounded-pill text-bg-danger";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "badge rounded-pill text-bg-warning";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "badge rounded-pill text-bg-info";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "badge rounded-pill text-bg-light";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "badge rounded-pill text-bg-dark";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "badge rounded-pill text-bg-primary";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.innerHTML = "Happy Independance Day";
                                            time.className = "badge rounded-pill text-bg-warning";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
},1000); 