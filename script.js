// Função para salvar a nota como um arquivo de texto
function saveNote() {
    let text = document.getElementById('note').value;
    if (text === '') {
        alert('O bloco de notas está vazio!');
        return;
    }

    let blob = new Blob([text], { type: 'text/plain' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'nota.txt';
    link.click();
}

// Função para abrir uma nota a partir de um arquivo de texto
function openNote(event) {
    const file = event.target.files[0]; // Pega o arquivo selecionado
    if (!file) {
        alert('Nenhum arquivo selecionado!');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('note').value = e.target.result; // Insere o conteúdo no textarea
    };
    reader.readAsText(file); // Lê o arquivo como texto
}
