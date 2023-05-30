const inputContainer = document.querySelector('input');
const h1 = document.querySelector("h1")
const rootElement = document.documentElement;


console.log(h1)

const lightTheme = {
    '--background-color': '#FFF',
    '--text-color': '#1A1A1A',
    '--button-background-color': '#9B8AFB',
}

const darkTheme = {
    '--background-color': '#1A1A1A',
    '--text-color': '#FFF',
    '--button-background-color': '#5925DC',
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked;
    isChecked ? changeTextValue(isChecked) : changeTextValue(isChecked);
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);

})

function changeTheme(theme){
    // Alteração
    for (let prop in theme){
        changeProperty(prop, theme[prop]);
    }
}

function changeProperty(property, value){
    // Alteração
    rootElement.style.setProperty(property, value)
}

function changeTextValue(value){
    value ? h1.innerHTML='Penis Dark' : h1.innerHTML='Penis Light';
}