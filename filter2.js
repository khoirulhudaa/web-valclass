const searchWrapper = document.querySelector('search-input');
const inputBox = document.querySelector('input');
const suggbox = document.querySelector('.modal-body ul');
const suggboxS = document.querySelector('.modal');

let suggestions = [
    'active',
    'alert',
    'alignContent',
    'alignItems',
    'alignSelf',
    'animation',
    'backgroundAttach..',
    'backgroundClip',
    'backgroundColor',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'backToTop',
    'blur',
    'btn',
    'border',
    'borderCollapse',
    'borderColor',
    'borderRadius',
    'borderStyle',
    'boxShadow',
    'boxSizing',
    'brightness',
    'column',
    'contrast',
    'cursor',
    'darkMode',
    'display',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexShrink',
    'flexWrap',
    'floats',
    'focus',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'grayscale',
    'height',
    'hover',
    'increment',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'letterSpacing',
    'lineHeight',
    'margin',
    'navbar',
    'office',
    'opacity',
    'outline',
    'outlineColor',
    'outlineStyle',
    'overflow',
    'padding',
    'perspective',
    'position',
    'reload',
    'result',
    'rotate',
    'row',
    'saturate',
    'scale',
    'skew',
    'sosmed',
    'table',
    'textAlign',
    'textColor',
    'textDecoration',
    'textShadow',
    'textTransform',
    'time',
    'tlrb',
    'transition',
    'translate',
    'visibility',
    'width',
    'wordBreak',
    'z-index'
]

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if(userData) {
        emptyArray = suggestions.filter((data) => {
           return data.toLocaleUpperCase().startsWith(userData.toLocaleUpperCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<a href="./${data}.html"><li><i class="la la-circle-o-notch"></i> ${data}</li></a>`;
        })
        console.log(emptyArray)
        suggboxS.classList.add('activex')
        suggboxS.classList.add('show')
    }else {
        suggboxS.classList.remove('activex')
        suggboxS.classList.remove('show')
    }

    document.querySelector('.btn-close').addEventListener('click', () => {
        suggboxS.classList.remove('activex')
        suggboxS.classList.remove('show')
        inputBox.value = ''
    })

    document.getElementById('btx').addEventListener('click', () => {
        suggboxS.classList.remove('activex')
        suggboxS.classList.remove('show')
        inputBox.value = ''
    })

    
    showSuggestions(emptyArray)
}

function showSuggestions (list) {
    let listData;
    if(!list.length) {

    }else {
        listData = list.join('')
    }
    suggbox.innerHTML = listData;
}