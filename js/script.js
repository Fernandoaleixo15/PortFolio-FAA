function enviarWhats(event){
  event.preventDefault()

  const nome = document.getElementById('nome');
  const mensagem= document.getElementById('mensagem');
  const telefone = '5518996638956'
  
  const texto = 'Olá! Me chamo ${nome}, ${mensagem}'
  const msgFormatada = encodeURIComponent(texto)
  
  const url = 'https://api.whatsapp.com/send?phone=5518996638956&text={msgFormatada}'
  
  console.log(url)
  
  window.open(url, '_blank')
}




