let tableBody = document.querySelector('.t-body');

fetch('http://localhost:3000/materiais').then(async (response) => {
  const data = await response.json()
  
  //console.log(data)
  resolvendoPublicacoes(data)
}).catch(err => {
  console.log(err)
})

function resolvendoPublicacoes(data) {
  data.map(s => {
    return tableBody.innerHTML += `<tr><td>${s.nome}</td><td>${s.descricao}</td><td>${s.duracao}</td></t`
  })
}

// Otimizado... eu acho
