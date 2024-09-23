const navslide = () =>{
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links');
    const nav = document.querySelector('.navbar');

    burger.addEventListener('pointerdown', e =>{
        
       links.classList.toggle("links-active");
       burger.classList.toggle("active");
             
    });

       
   
}

navslide();