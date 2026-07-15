/* ═══════════════════════════════════════════════════════
   ENVIO DE DOCUMENTOS — script.js
═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // URL DO WEBHOOK N8N
    const WEBHOOK_URL = 'https://n8n.srv1352561.hstgr.cloud/webhook-test/atestados';

    // ELEMENTOS
    const form = document.getElementById('formCarregaDocumentos');
    const btnEnviar = document.getElementById('btnEnviar');
    const inputArquivos = document.getElementById('documentos');
    const listaArquivos = document.getElementById('listaArquivos');
    const successBox = document.getElementById('successAgenda');
    const selectEscola = document.getElementById('nome_escola');
    const emailEscola = document.getElementById('emailEscola');

    
   const emailsEscolas = {
    "ACHILLES ALMEIDA BARRETO (E. M. Prof.)": "empachillesbarreto@semecabofrio.rj.gov.br",
    "AGRISA (E. M.)": "emagrisa@semecabofrio.rj.gov.br",
    "ALFREDINA OLIVEIRA FRANCESCONI (E. M. Prof.ª)": "empalfredinafrancesconi@semecabofrio.rj.gov.br",
    "ALFREDO CASTRO (E. M.)": "emalfredocastro@semecabofrio.rj.gov.br",
    "ALITTA MARIA DO VALLE (E. M. Prof.ª)": "empalittadovalle@semecabofrio.rj.gov.br",
    "AMÉLIA FERREIRA (E. M. Prof.ª)": "empameliaferreira@semecabofrio.rj.gov.br",
    "AMENA MAYALL (E.M. Prof.ª)": "empamenamayall@semecabofrio.rj.gov.br",
    "AMÉRICA DOS ANJOS MONICA (E. M.)": "emamericadosanjos@semecabofrio.rj.gov.br",
    "ANA PEREIRA GONÇALVES (E. M. E. I. Prof.ª)": "empanapereira@semecabofrio.rj.gov.br",
    "ANGELIM (E. E. Mz.)": "eemangelim@semecabofrio.rj.gov.br",
    "ANITA TEIXEIRA DA SILVA (E.M. E.I. Prof.ª)": "emeipanitateixeira@semecabofrio.rj.gov.br",
    "ANTONIO DA CUNHA AZEVEDO (E. M.)": "emantoniodacunha@semecabofrio.rj.gov.br",
    "ARAÇÁ (E. M.)": "emaraca@semecabofrio.rj.gov.br",
    "ARLETE ROSA CASTANHO (E. M.)": "emarleterosa@semecabofrio.rj.gov.br",
    "Associação de Pais e Amigos dos Excepcionais (APAE)": "apae@semecabofrio.rj.gov.br",
    "CARLOS ALBERTO GOMES DE CARVALHO (E. M. Prof.)": "empcarlosalberto@semecabofrio.rj.gov.br",
    "CATHARINA DA SILVEIRA CORDEIRO (E. M . Prof.ª)": "empcatharinadasilveira@semecabofrio.rj.gov.br",
    "CECILIA NOGUEIRA MACHADO GUIA (E. M. Prof.ª)": "empcecilianogueira@semecabofrio.rj.gov.br",
    "CILÉA MARIA BARRETO (E. M. Prof.ª)": "empcileabarreto@semecabofrio.rj.gov.br",
    "CLADYR DA ROCHA MENDES (E. M.E.I.)": "emeicladyrmendes@semecabofrio.rj.gov.br",
    "CLÁUDIA MUZIO FREITAS DE OLIVEIRA (E. M. Prof.ª)": "empclaudiamuzio@semecabofrio.rj.gov.br",
    "CLEUSA GUIMARÃES FARIA BRAGA (E.M. E. I. Prof.ª)": "emeipcleusaguimaraes@semecabofrio.rj.gov.br",
    "DALCY BARROSO PILLAR (E. M. E. I. Prof.ª)": "emeipdalcypillar@semecabofrio.rj.gov.br",
    "DEMERVAL ALVES RANGEL (E. M.)": "emeidemervalrangel@semecabofrio.rj.gov.br",
    "DEODORO AZEVEDO (E. M.)": "emdeodoroazevedo@semecabofrio.rj.gov.br",
    "DOMINGOS GOUVÊA (E. M.)": "emdomingosgouvea@semecabofrio.rj.gov.br",
    "EDILSON DUARTE (E. M. Prof.)": "empedilsonduarte@semecabofrio.rj.gov.br",
    "EDITH CASTRO DOS SANTOS (E. M.)": "emedithcastro@semecabofrio.rj.gov.br",
    "ELENICE MARTINS (Creche E. M. Prof.ª)": "cempelenicemartins@semecabofrio.rj.gov.br",
    "ELENITA FERREIRA DOS SANTOS ABREU (E. M. E.I. Prof.ª)": "emeipelenitaferreira@semecabofrio.rj.gov.br",
    "ELICÉA DA SILVEIRA (E. M. Prof.ª)": "empeliceadasilveira@semecabofrio.rj.gov.br",
    "ELZA MARIA SANTA ROSA BERNARDO (Colégio M. Prof.ª)": "cmpelzabernardo@semecabofrio.rj.gov.br",
    "ETELVINA SANTANA DA FONSECA (E. M.)": "emetelvinafonseca@semecabofrio.rj.gov.br",
    "EVALDO SALLES (E. M.)": "emevaldosalles@semecabofrio.rj.gov.br",
    "FRANCISCA NAZARETH DE SOUZA (E. E. Mz.)": "eemfranciscanazareth@semecabofrio.rj.gov.br",
    "FRANCISCO FRANCO (E.M.)": "emfranciscofranco@semecabofrio.rj.gov.br",
    "Educação Especial": "educacaoespecial@semecabofrio.rj.gov.br",
    "Engenharia SEME": "engenharia@semecabofrio.rj.gov.br",
    "ESTRUTURAL SEME": "estrutural@semecabofrio.rj.gov.br",
    "Formação Continuada": "formacaocontinuada@semecabofrio.rj.gov.br",
    "Gabinete Educação": "gabinete@semecabofrio.rj.gov.br",
    "Gestão Administrativa": "administrativo.gp@semecabofrio.rj.gov.br",
    "Gestão de Folha - FOPAG - SEME - Cabo Frio": "folha@semecabofrio.rj.gov.br",
    "Inspeção Escolar": "inspecaoescolar@semecabofrio.rj.gov.br",      
    "IZABEL DOS SANTOS MACHADO (E.M.Prof.ª)": "empizabelmachado@semecabofrio.rj.gov.br",
    "JANAÍNA TELES MARTINS (E.M.E.I. Profª)": "emjanainateles@semecabofrio.rj.gov.br",
    "JOÃO BESSA TEIXEIRA (E. M.)": "emjoaobessa@semecabofrio.rj.gov.br",
    "JOÃO EVANGELISTA DOS SANTOS (E. M.)": "emjoaoevangelista@semecabofrio.rj.gov.br",
    "JOÃO ROCHA (E. M.)": "emjoaorocha@semecabofrio.rj.gov.br",
    "JOÃO TRAJANO BANDEIRA CAIXEIRO (E. M. E. I. Prof.)": "emeipjoaotrajano@semecabofrio.rj.gov.br",
    "JOSÉ BONIFÁCIO FERREIRA NOVELLINO (E. M.)": "emjosebonifacio@semecabofrio.rj.gov.br",
    "JOSÉ FRANCISCO DA SILVEIRA JÚNIOR (E. M. Prof.)": "empjosefrancisco@semecabofrio.rj.gov.br",
    "JUSTINIANO DE SOUZA (E. M.)": "emjustinianodesouza@semecabofrio.rj.gov.br",
    "LAIR DIAS GAGO PEREIRA (E. M. Prof.ª)": "emplairgago@semecabofrio.rj.gov.br",
    "LEAQUIM SCHUINDT (E. M. Vereador)": "emvleaquimschuindt@semecabofrio.rj.gov.br",
    "LEOMARI GARCIA BARRETO (E. M. Prof.ª)": "empleomaribarreto@semecabofrio.rj.gov.br",
    "LERINÉA FIGUEIREDO (E. M. Prof.ª)": "emplerineafigueiredo@semecabofrio.rj.gov.br",
    "LUCELÉA RODRIGUES DA COSTA (E. M. Prof.ª)": "emplucelearodrigues@semecabofrio.rj.gov.br",
    "MANOEL MENDES DE SOUZA (E. M.)": "emmanoelmendes@semecabofrio.rj.gov.br",
    "MÁRCIA FRANCESCONI PEREIRA (E. M. Prof.ª)": "empmarciafrancesconi@semecabofrio.rj.gov.br",
    "MARIA AMÁLIA DOS SANTOS SILVEIRA (C. E. M. Prof.ª)": "cempmariaamalia@semecabofrio.rj.gov.br",
    "MARIA APARECIDA DE AZEVEDO GALVÃO (CENAP Profª)": "cenapemariaaparecida@semecabofrio.rj.gov.br",
    "MARIA DARIA SALDANHA (E. M.)": "emmariadaria@semecabofrio.rj.gov.br",
    "MARIA DUTRA DA SILVEIRA (E.M.E.I)": "emeimariadutra@semecabofrio.rj.gov.br",
    "MARIA EMILIA DOS SANTOS CASTRO (Creche E. M.)": "cemmariaemilia@semecabofrio.rj.gov.br",
    "MARIA HELENA BELLO DA COSTA (E.M.)": "emmariahelenabello@semecabofrio.rj.gov.br",
    "MARIA JOSÉ BARROSO (E. M. Prof.ª)": "empmariajosebarroso@semecabofrio.rj.gov.br",
    "MARIA LEONÍDIA PARENTES FORTES MARTINS PINHEIRO (Creche Municipal)": "cmmarialeonidia@semecabofrio.rj.gov.br",
    "MARIA QUITÉRIA DA COSTA RIBEIRO (Creche M. Prof.ª)": "cmpmariaquiteria@semecabofrio.rj.gov.br",
    "MARIA SALVADORA SILVA (E. M. Prof.ª)": "empmariasalvadora@semecabofrio.rj.gov.br",
    "MARÍLIA DE TEVES MORENO (Creche E. M. Prof.ª)": "cempmariliadeteves@semecabofrio.rj.gov.br",
    "MARÍLIA PLAISANT (E. M. Prof.ª)": "empmariliaplaisant@semecabofrio.rj.gov.br",
    "Matrícula SUPED": "matricula@semecabofrio.rj.gov.br",      
    "MARLI CAPP (Centro Educacional M. Prof.ª)": "cempmarlicapp@semecabofrio.rj.gov.br",
    "NEUSA AGUALUSA DA COSTA (E.M.E.I)": "emeineusaagualuza@semecabofrio.rj.gov.br",
    "NILO BATISTA (Escola Agrícola Municipal)": "eamnilobatista@semecabofrio.rj.gov.br",
    "OSWALDO SANTA ROSA (E. M. Prof.)": "emposwaldosantarosa@semecabofrio.rj.gov.br",
    "Nutrição Seme - Cabo Frio": "nutricaoescolar@semecabofrio.rj.gov.br",
    "Orientação Educacional": "orientacaoeducacional@semecabofrio.rj.gov.br",      
    "PALMIRA BESSA DE FIGUEIREDO (E. M.)": "empalmirabessa@semecabofrio.rj.gov.br",
    "PATRÍCIA AZEVEDO DE ALMEIDA (E. M. Profª.)": "emppatriciaazevedo@semecabofrio.rj.gov.br",
    "PAULO BURLE (E. M.)": "empauloburle@semecabofrio.rj.gov.br",
    "PEDRO JOTHA (E. M.)": "empedrojotha@semecabofrio.rj.gov.br",
    "POMAR (E.M.E. I. do)": "emeidopomar@semecabofrio.rj.gov.br",
    "RENATO AZEVEDO (E. M. Prof.)": "emrenatoazevedo@semecabofrio.rj.gov.br",
    "Superintendência de Transportes": "transportes@semecabofrio.rj.gov.br",
    "Superintendência Financeira": "sufin@semecabofrio.rj.gov.br",
    "Supervisão Escolar": "supervisaoescolar@semecabofrio.rj.gov.br",      
    "ROBINSON CARVALHO DE AZEVEDO (E. M.)": "emrobinsoncarvalho@semecabofrio.rj.gov.br",
    "RUI BARBOSA (Colégio Municipal)": "cmruibarbosa@semecabofrio.rj.gov.br",
    "RUI CAPDEVILLE (E. M. Maestro)": "emmruicapdeville@semecabofrio.rj.gov.br",
    "TALITA HERNANDES PERELLÓ (E. M.)": "emtalitaperello@semecabofrio.rj.gov.br",
    "TEIXEIRA E SOUZA (E. E. Mz.)": "eemteixeiraesouza@semecabofrio.rj.gov.br",
    "THEMIRA PALMER (E. M.)": "emthemirapalmer@semecabofrio.rj.gov.br",
    "TIO COTIAS (E. M. E.I.)": "emtiocotias@semecabofrio.rj.gov.br",
    "TOSANA (E. E. Mz.)": "eemtosana@semecabofrio.rj.gov.br",
    "VOVO CINHA (E. M.E.I)": "emeivovocinha@semecabofrio.rj.gov.br",
    "VOVO OLIVIA (E. M.E. I.)": "emeivovoolivia@semecabofrio.rj.gov.br",
    "WALDEMIRA TERESA DE JESUS (E. M.)": "emwaldemirateresadejesus@semecabofrio.rj.gov.br",
    "WANDA M.ª NOGUEIRA GONÇALVES (Creche E. M. Prof.ª)": "cempwandagoncalves@semecabofrio.rj.gov.br",
    "WANDA PEREIRA ROQUE (E. M. Prof.ª)": "empwandaroque@semecabofrio.rj.gov.br",
    "WARLEY STUDART (CENAP)": "cmiswarlystudart@semecabofrio.rj.gov.br",
    "YONE NOGUEIRA (E. M.E. I. Prof.ª)": "emeipyonenogueira@semecabofrio.rj.gov.br",
    "ZÉLIO JOTHA (E. M. Prof.)": "empzeliojotha@semecabofrio.rj.gov.br"
};

selectEscola.addEventListener('change', () => {
    emailEscola.value = emailsEscolas[selectEscola.value] || '';
    //validarFormularioAgenda();
});

   
   
   
   
   
   // LISTAR ARQUIVOS SELECIONADOS
    inputArquivos.addEventListener('change', () => {

        listaArquivos.innerHTML = '';

        const arquivos = Array.from(inputArquivos.files);

        if (arquivos.length === 0) {
            return;
        }

        arquivos.forEach((arquivo, index) => {

            const item = document.createElement('div');
            item.className = 'arquivo-item';

            item.innerHTML = `
                <strong>${index + 1}.</strong>
                ${arquivo.name}
                <span>(${formatarTamanho(arquivo.size)})</span>
            `;

            listaArquivos.appendChild(item);
        });
    });

    // ENVIO DO FORMULÁRIO
    form.addEventListener('submit', async (e) => {

        e.preventDefault();

         const dias = Number(document.getElementById("qtdeDias").value);
         const processo = document.getElementById("numprocesso").value.trim();
         
         if (dias > 3 && processo === "") {
         
             alert("Para afastamentos superiores a 3 dias é obrigatório informar o número do processo.");
         
             document.getElementById("numprocesso").focus();
         
             return;
         
         }       
       
        const arquivos = Array.from(inputArquivos.files);

        if (arquivos.length === 0) {
            alert('Selecione pelo menos um arquivo PDF.');
            return;
        }

        // VALIDAÇÃO DE PDFs
        const arquivosInvalidos = arquivos.filter(file => file.type !== 'application/pdf');

        if (arquivosInvalidos.length > 0) {
            alert('Todos os arquivos devem estar em formato PDF.');
            return;
        }

        btnEnviar.disabled = true;
        btnEnviar.innerHTML = 'Enviando documentos...';

        try {

            const formData = new FormData();

            // CAMPOS DO FORMULÁRIO
            formData.append('nome_escola', document.getElementById('nome_escola').value);
            formData.append('emailEscola', document.getElementById('emailEscola').value);
            
            formData.append('qtdeDias', document.getElementById('qtdeDias').value);
            formData.append('numprocesso', document.getElementById('numprocesso').value);
            
            formData.append('nome', document.getElementById('nome').value);
            formData.append('celular', document.getElementById('celular').value);
            formData.append('cpf', document.getElementById('cpf').value);
            formData.append('emailServidor', document.getElementById('emailServidor').value);

           
            // ARQUIVOS
            arquivos.forEach(file => {
                formData.append('documentos', file);
            });

            // ENVIO PARA O N8N
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Erro no envio');
            }

            form.style.display = 'none';
            successBox.classList.remove('hidden');

        } catch (error) {

            console.error(error);
            alert('Erro ao enviar os documentos. Tente novamente.');

        } finally {

            btnEnviar.disabled = false;
            btnEnviar.innerHTML = 'Enviar Documentos';
        }
    });

    // RESET
    window.resetFormulario = function () {

        form.reset();
        form.style.display = 'block';

        listaArquivos.innerHTML = '';

        successBox.classList.add('hidden');
    };

    // FORMATAR TAMANHO
    function formatarTamanho(bytes) {

        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;

        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }

});

// =====================================
// Nº do processo obrigatório (>3 dias)
// =====================================

const campoDias = document.getElementById("qtdeDias");
const campoProcesso = document.getElementById("numprocesso");

function validarProcesso() {

    const dias = Number(campoDias.value);

    if (dias > 3) {

        campoProcesso.required = true;

    } else {

        campoProcesso.required = false;
        campoProcesso.setCustomValidity("");
    }

}

campoDias.addEventListener("input", validarProcesso);
campoDias.addEventListener("change", validarProcesso);

validarProcesso();
