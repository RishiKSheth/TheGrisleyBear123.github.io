document.addEventListener('DOMContentLoaded', () => { 
    /*for whack a mole project*/
    const image = document.getElementById("whackImage");
    image.addEventListener('click', () => {
        window.open('https://github.com/TheGrisleyBear123/WhackAmole', '_blank');
    }); 
    
    /*for animations */
    image.addEventListener('mouseenter', () => {
        image.classList.add('zoom-animation'); 
    });

    image.addEventListener('mouseleave', () => {
        image.classList.remove('zoom-animation'); 
    }); 

    /* for custom cursor */
    document.body.addEventListener('mousedown', () => { 
        document.body.style.cursor = "url('images/clickcustomcursor.png'), auto";
    }); 

    document.body.addEventListener('mouseup', () => { 
        document.body.style.cursor = "url('images/swordcursor.png'), auto";
    });
}); 