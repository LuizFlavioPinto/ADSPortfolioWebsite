const hamburguer = document.querySelector('.hamburguer')
const headerNavUl = document.querySelector('.headerNavUl')

headerNavUl.addEventListener('click', () => {
    headerNavUl.classList.toggle('active')
    document.querySelectorAll('.headerNavUl li').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');

    hamburguer.classList.toggle('active')
    hamburguer.textContent = hamburguer.textContent == '☰' ? 'X' : '☰'
})

hamburguer.addEventListener('click', () => {
    headerNavUl.classList.toggle('active')
    hamburguer.classList.toggle('active')
    hamburguer.textContent = hamburguer.textContent == '☰' ? 'X' : '☰'
})

function downloadFile (button) {
    const codeDiv = button.parentNode.parentNode.parentNode
    const codeTitle = codeDiv.querySelector('h2').textContent
    .trim()
    .replace(/\s+/g, '-') 
    .toLowerCase()

    const code = codeDiv.querySelector('code').textContent
    const blob = new Blob([code], { type : 'text/x-python'})
    const url = URL.createObjectURL(blob)
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${codeTitle}.py`; 
    downloadLink.click()

    button.innerHTML = '<i class="fas fa-check"></i>';
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-file-download"></i>';
    }, 2000);
    
    URL.revokeObjectURL(url);

}

function copyText (button) {
    const code = button.parentNode.parentNode.parentNode.querySelector('code').textContent
    navigator.clipboard.writeText(code)
    
    button.innerHTML = '<i class="fas fa-check"></i>';
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-copy"></i>';
    }, 2000);
  
}