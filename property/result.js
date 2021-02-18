setTimeout(() => {
    
    document.querySelector('.v-operation').addEventListener('click', () => {
        let var1 = document.querySelector('.v-var-1').value
        let var2 = document.querySelector('.v-var-2').value
        let var3 = Number(var1) + Number(var2)
        let var4 = Number(var3)
        document.querySelector('.v-result').innerText = var4
        })

}, 300)