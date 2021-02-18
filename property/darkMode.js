if (document.querySelector('v-dark-mode')) {
    s = 0;
    document.querySelector('tgl-mode').addEventListener('click', () => {
        s += 1;
        if (s % 2 == 0) {
                document.querySelector('.toggle-mode').classList.remove('v-dark-mode-on');
                document.querySelector('parentDarkMode').classList.remove('modeDark');
        } else {
                document.querySelector('.toggle-mode').classList.add('v-dark-mode-on');
                document.querySelector('parentDarkMode').classList.add('modeDark');
        }
    })
}