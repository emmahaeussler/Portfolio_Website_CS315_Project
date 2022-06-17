
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    //const storedText = localStorage.getItem('text');
    //if something exsist in sotrage set the the style sheet to that theme
    if (storedTheme) {
        themeStylesheet.href = storedTheme;
    }
    // if (storedText) {
    //     themeToggle.innerText = storedText;
    // }
    const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'css/dark-theme.css';
            //themeToggle.innerText = 'Light Mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'css/light-theme.css';
            //themeToggle.innerText = 'Dark Mode';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)
        //localStorage.setItem('text', themeToggle.innerText);  
    })
})


    
