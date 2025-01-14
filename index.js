document.addEventListener('DOMContentLoaded', () => { 
    /*for whack a mole project*/
    const image = document.getElementById("whackImage");
    image.addEventListener('click', () => {
        window.open('https://github.com/TheGrisleyBear123/WhackAmole', '_blank');
    }); 

    image.addEventListener('mouseenter', () => {
        image.classList.add('zoom-animation'); 
    });

    image.addEventListener('mouseleave', () => {
        image.classList.remove('zoom-animation'); 
    }); 

    /*for chatapp project*/
    const image2 = document.getElementById("chatImage"); 
    image2.addEventListener('click', () => { 
        window.open('https://github.com/TheGrisleyBear123/ChatAppImproved', '_blank'); 
    }); 

    image2.addEventListener('mouseenter', () => {
        image2.classList.add('zoom-animation'); 
    });

    image2.addEventListener('mouseleave', () => {
        image2.classList.remove('zoom-animation'); 
    });
    
    /* for dark mode */
    const darkModeToggle = document.getElementById("checkbox");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.checked = true; 
    }

    darkModeToggle.addEventListener("change", () => {
        if (darkModeToggle.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled"); 
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled"); 
        }
    });
    
    /* for custom cursor */
    document.body.addEventListener('mousedown', () => { 
        document.body.style.cursor = "url('images/clickcustomcursor.png'), auto";
    }); 

    document.body.addEventListener('mouseup', () => { 
        document.body.style.cursor = "url('images/swordcursor.png'), auto";
    });

    
    
}); 