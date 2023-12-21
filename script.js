function calcularResultado() {
    const respostas = document.forms["vocationalTest"].elements;
    let pontuacao = 0;

    for (const resposta of respostas) {
        if (resposta.type === "radio" && resposta.checked) {
            pontuacao += parseInt(resposta.value);
        }
    }

    let resultado = "Seu resultado: ";
    if (pontuacao >=0 && pontuacao <6) {
        resultado = "Você pode gostar de uma carreira na área de Mecânica.";
    }

    if (pontuacao === 6) {
        resultado = "Você pode gostar de uma carreira na área de Saúde e Segurança.";
    } 

    if (pontuacao >6 && pontuacao <12) {
        resultado = "Você pode gostar de uma carreira na área de Mecânica ou na área de Saúde e Segurança.";
    } 

    if (pontuacao === 12) {
        resultado = "Você pode gostar de uma carreira na área de Informática.";
    } 

    if (pontuacao >12 && pontuacao <18) {
        resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática.";
    } 

    if (pontuacao === 18) {
        resultado = "Você pode gostar de uma carreira na área de Meio Ambiente.";
    } 

    if (pontuacao >18 && pontuacao <24) {
        resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente.";
    } 

    if (pontuacao === 24) {
        resultado = "Você pode gostar de uma carreira na área Administrativa.";
    }
    
    if (pontuacao >24 && pontuacao <30) {
        resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente;\nAdministrativa.";
    } 

    if (pontuacao === 30) {
        resultado = "Você pode gostar de uma carreira na área de Automação.";
    } 

    if (pontuacao >30 && pontuacao <36) {
        resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente; \nAutomação.";
    } 

    if (pontuacao === 36) {
        resultado = "Você pode gostar de uma carreira na área de elétrica.";
    } 
    /*
    else {
        resultado = "Pedimos que procure nossa secretaria para maiores informações sobre os cursos";
    }
   */

    // Abrir uma nova guia com o resultado
    const novaGuia = window.open();
    novaGuia.document.write('<html><head><title>Resultado</title>');
    novaGuia.document.write('<style>');
    // Estilos CSS para a página de resultado
    novaGuia.document.write(`
        body {
            font-family: Arial, sans-serif;
            text-align: right;
            background-image: url("mundosenai5.png");
            background-size: 100% 100%;
            background-repeat: no-repeat, repeat-x;
            
        }
        h1 {
            color: #000000;
            border: 50px 50px solid black; border-radius: 20px; box-shadow: 10px 10px 10px 0px black;
            border-height: 100%;
            border-left: 40%;
            margin: 40px;
            padding: 10px;

        }
        h3 {
            color: black`);
    novaGuia.document.write('</style>');
    novaGuia.document.write('</head><body>');
    novaGuia.document.write('<h1>Resultado do Teste Vocacional</h1>');
    novaGuia.document.write(`<p><h3>${resultado}</h3></p>`);
    novaGuia.document.write('</body></html>');
    novaGuia.document.close();
}