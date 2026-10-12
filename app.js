const SUPABASE_URL = "https://nodneidkiozsntpnxcfe.supabase.co";
const SUPABASE_KEY = "sb_publishable_HVQmwObvz08GG2cJzQ7Y3w_geFj-G3Z";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const discursos = [[1,"Você conhece bem a Deus?"],[2,"Você vai sobreviver aos últimos dias?"],[3,"Você está avançando com a organização unida de Jeová?"],[4,"Que provas temos de que Deus existe?"],[5,"Você pode ter uma família feliz!"],[6,"O Dilúvio dos dias de Noé e você"],[7,"Imite a misericórdia de Jeová"],[8,"Viva para fazer a vontade de Deus"],[9,"Escute e faça o que a Bíblia diz"],[10,"Seja honesto em tudo"],[11,"Imite a Jesus e não faça parte do mundo"],[12,"Deus quer que você respeite quem tem autoridade"],[13,"Qual o ponto de vista de Deus sobre o sexo e o casamento?"],[14,"Um povo puro e limpo honra a Jeová"],[15,"‘Faça o bem a todos’"],[16,"Seja cada vez mais amigo de Jeová"],[17,"Glorifique a Deus com tudo o que você tem"],[18,"Faça de Jeová a sua fortaleza"],[19,"Como você pode saber seu futuro?"],[20,"Chegou o tempo de Deus governar o mundo?"],[21,"Dê valor ao seu lugar no Reino de Deus"],[22,"Você está usando bem o que Jeová lhe dá?"],[23,"A vida tem objetivo"],[24,"Você encontrou “uma pérola de grande valor”?"],[25,"Lute contra o espírito do mundo"],[26,"Você é importante para Deus?"],[27,"Como construir um casamento feliz"],[28,"Mostre respeito e amor no seu casamento"],[29,"As responsabilidades e recompensas de ter filhos"],[30,"Como melhorar a comunicação na família"],[31,"Você tem consciência da sua necessidade espiritual?"],[32,"Como lidar com as ansiedades da vida"],[33,"Quando vai existir verdadeira justiça?"],[34,"Você vai ser marcado para sobreviver?"],[35,"É possível viver para sempre? O que você precisa fazer?"],[36,"Será que a vida é só isso?"],[37,"Obedecer a Deus é mesmo a melhor coisa a fazer?"],[38,"Como você pode sobreviver ao fim do mundo?"],[39,"Jesus Cristo vence o mundo — Como e quando?"],[40,"O que vai acontecer em breve?"],[41,"Fiquem parados e vejam como Jeová os salvará"],[42,"O amor pode vencer o ódio?"],[43,"Tudo o que Deus nos pede é para o nosso bem"],[44,"Como os ensinos de Jesus podem ajudar você?"],[45,"Continue andando no caminho que leva à vida"],[46,"Fortaleça sua confiança em Jeová"],[47,"‘Tenha fé nas boas novas’"],[48,"Seja leal a Deus mesmo quando for testado"],[49,"Será que um dia a Terra vai ser limpa?"],[50,"Como sempre tomar as melhores decisões"],[51,"Será que a verdade da Bíblia está mudando a sua vida?"],[52,"Quem é o seu Deus?"],[53,"Você pensa como Deus?"],[54,"Fortaleça sua fé em Deus e em suas promessas"],[55,"Você está fazendo um bom nome perante Deus?"],[56,"Existe um líder em quem você pode confiar?"],[57,"Como suportar perseguição"],[58,"Quem são os verdadeiros seguidores de Cristo?"],[59,"(Não use.)"],[60,"Você tem um objetivo na vida?"],[61,"Nas promessas de quem você confia?"],[62,"Onde encontrar uma esperança real para o futuro?"],[63,"É possível encontrar a verdade?"],[64,"Você ama os prazeres ou a Deus?"],[65,"Como podemos ser pacíficos num mundo cheio de ódio"],[66,"Você também vai participar na colheita?"],[67,"Medite na Bíblia e nas criações de Jeová"],[68,"‘Continuem a perdoar uns aos outros liberalmente’"],[69,"Por que mostrar amor abnegado?"],[70,"Por que Deus merece sua confiança?"],[71,"‘Mantenha-se desperto’ — Por que e como?"],[72,"O amor identifica os cristãos verdadeiros"],[73,"Você tem “um coração sábio”?"],[74,"Os olhos de Jeová estão em todo lugar"],[75,"Mostre que você apoia o direito de Jeová governar"],[76,"Princípios bíblicos — Podem nos ajudar a lidar com os problemas atuais?"],[77,"“Sempre mostrem hospitalidade”"],[78,"Sirva a Jeová com um coração alegre"],[79,"Você vai escolher ser amigo de Deus?"],[80,"Você baseia sua esperança na ciência ou na Bíblia?"],[81,"Quem está qualificado para fazer discípulos?"],[82,"(Não use.)"],[83,"Será que os cristãos precisam obedecer aos Dez Mandamentos?"],[84,"Escapará do destino deste mundo?"],[85,"Boas notícias num mundo violento"],[86,"Como orar a Deus e ser ouvido por ele?"],[87,"Qual é a sua relação com Deus?"],[88,"Por que viver de acordo com os padrões da Bíblia?"],[89,"Quem tem sede da verdade, venha!"],[90,"Faça o máximo para alcançar a verdadeira vida!"],[91,"A presença do Messias e seu domínio"],[92,"O papel da religião nos assuntos do mundo"],[93,"Desastres naturais — Quando vão acabar?"],[94,"A religião verdadeira atende às necessidades da sociedade humana"],[95,"Não seja enganado pelo ocultismo!"],[96,"O que vai acontecer com as religiões?"],[97,"Permaneçamos inculpes em meio a uma geração pervertida"],[98,"“A cena deste mundo está mudando”"],[99,"Por que podemos confiar no que a Bíblia diz?"],[100,"Como fazer amizades fortes e verdadeiras"],[101,"Jeová é o “Grandioso Criador”"],[102,"Preste atenção à “palavra profética”"],[103,"Como você pode ter a verdadeira alegria?"],[104,"Pais, vocês estão construindo com materiais à prova de fogo?"],[105,"Somos consolados em todas as nossas tribulações"],[106,"Arruinar a Terra provocará retribuição divina"],[107,"Você está treinando bem a sua consciência?"],[108,"Você pode encarar o futuro com confiança!"],[109,"O Reino de Deus está próximo"],[110,"Deus vem primeiro na vida familiar bem-sucedida"],[111,"É possível que a humanidade seja completamente curada?"],[112,"Como mostrar amor num mundo egoísta"],[113,"Jovens — Como vocês podem ter uma vida feliz?"],[114,"Apreço pelas maravilhas da criação de Deus"],[115,"Não caia nas armadilhas de Satanás"],[116,"Escolha sabiamente com quem irá associar-se!"],[117,"Como vencer o mal com o bem"],[118,"Olhemos os jovens do ponto de vista de Jeová"],[119,"Por que é benéfico que os cristãos vivam separados do mundo"],[120,"Por que se submeter à regência de Deus agora"],[121,"Uma família mundial que será salva da destruição"],[122,"(Não use.)"],[123,"(Não use.)"],[124,"Razões para crer que a Bíblia é de autoria divina"],[125,"Por que a humanidade precisa de resgate"],[126,"Quem se salvará?"],[127,"O que acontece quando morremos?"],[128,"É o inferno um lugar de tormento ardente?"],[129,"O que a Bíblia diz sobre a Trindade?"],[130,"A Terra permanecerá para sempre"],[131,"Tome posição contra o Diabo!"],[132,"Ressurreição — A vitória sobre a morte!"],[133,"Tem importância o que cremos sobre a nossa origem?"],[134,"Será que os cristãos precisam guardar o sábado?"],[135,"A santidade da vida e do sangue"],[136,"Será que Deus aprova o uso de imagens na adoração?"],[137,"Ocorreram realmente os milagres da Bíblia?"],[138,"Viva com bom juízo num mundo depravado"],[139,"Sabedoria divina num mundo científico"],[140,"Quem é realmente Jesus Cristo?"],[141,"Quando terão fim os gemidos da criação humana?"],[142,"Por que refugiar-se em Jeová"],[143,"Confie no Deus de todo consolo"],[144,"Uma congregação leal sob a liderança de Cristo"],[145,"Quem é semelhante a Jeová, nosso Deus?"],[146,"Use a educação para louvar a Jeová"],[147,"Confie que Jeová tem o poder para nos salvar"],[148,"Você tem o mesmo conceito de Deus sobre a vida?"],[149,"O que significa “andar com Deus”?"],[150,"Este mundo está condenado à destruição?"],[151,"Jeová é “uma altura protetora” para seu povo"],[152,"Armagedom — Por que e quando?"],[153,"Tenha bem em mente o “atemorizante dia”!"],[154,"O governo humano é pesado na balança"],[155,"Chegou a hora do julgamento de Babilônia?"],[156,"O Dia do Juízo — Tempo de temor ou de esperança?"],[157,"Como os verdadeiros cristãos adornam o ensino divino"],[158,"Seja corajoso e confie em Jeová"],[159,"Como encontrar segurança num mundo perigoso"],[160,"Mantenha a identidade cristã!"],[161,"Por que Jesus sofreu e morreu?"],[162,"Seja liberto deste mundo em escuridão"],[163,"Por que temer o Deus verdadeiro?"],[164,"Será que Deus ainda está no controle?"],[165,"Os valores de quem você preza?"],[166,"Verdadeira fé — O que é e como mostrar"],[167,"Ajamos sabiamente num mundo insensato"],[168,"Você pode sentir-se seguro neste mundo atribulado!"],[169,"Por que ser orientado pela Bíblia?"],[170,"Quem está qualificado para governar a humanidade?"],[171,"Poderá viver em paz agora — E para sempre!"],[172,"Que reputação você tem perante Deus?"],[173,"Existe uma religião verdadeira do ponto de vista de Deus?"],[174,"Quem se qualificará para entrar no novo mundo de Deus?"],[175,"O que prova que a Bíblia é autêntica?"],[176,"Quando haverá verdadeira paz e segurança?"],[177,"Onde encontrar ajuda em tempos de aflição?"],[178,"Ande no caminho da integridade"],[179,"Rejeite as fantasias do mundo, empenhe-se pelas realidades do Reino"],[180,"A ressurreição — Por que essa esperança deve ser real para você"],[181,"Já é mais tarde do que você imagina?"],[182,"O que o Reino de Deus está fazendo por nós agora?"],[183,"Desvie seus olhos do que é fútil"],[184,"A morte é o fim de tudo?"],[185,"Será que a verdade influencia sua vida?"],[186,"Sirva em união com o povo feliz de Deus"],[187,"Por que um Deus amoroso permite a maldade?"],[188,"Você confia em Jeová?"],[189,"Ande com Deus e receba bênçãos para sempre"],[190,"Como se cumprirá a promessa de perfeita felicidade familiar"],[191,"Como o amor e a fé vencem o mundo"],[192,"Você está no caminho para a vida eterna?"],[193,"Os problemas de hoje logo serão coisa do passado"],[194,"Como a sabedoria de Deus nos ajuda"]];
const indisponiveis = new Set([59, 82, 84, 85, 87, 92, 94, 97, 105, 106, 109, 117, 119, 120, 122, 123, 124, 126, 139, 141, 144, 145, 148, 151, 154, 155, 157, 158, 163, 164, 165, 167, 168]);
let marcacoes = {};
let usuarioAtual = null;

function mostrarErro(msg) {
  const e=document.getElementById("authErro"); e.textContent=msg; e.style.display="block";
}
function status(msg) { document.getElementById("status").textContent=msg; }

async function entrar() {
  document.getElementById("authErro").style.display="none";
  const email=document.getElementById("email").value.trim();
  const senha=document.getElementById("senha").value;
  const {data,error}=await sb.auth.signInWithPassword({email, password:senha});
  if(error) return mostrarErro(error.message);
  usuarioAtual=data.user;
}
async function criarConta() {
  document.getElementById("authErro").style.display="none";
  const email=document.getElementById("email").value.trim();
  const senha=document.getElementById("senha").value;
  const {data,error}=await sb.auth.signUp({email, password:senha});
  if(error) return mostrarErro(error.message);
  if(data.session) usuarioAtual=data.user;
  else mostrarErro("Conta criada. Verifique o e-mail se o Supabase solicitar confirmação.");
}
async function sair() {
  await sb.auth.signOut();
}
async function carregar() {
  if(!usuarioAtual) return;
  const {data,error}=await sb.from("discurso_marcacoes")
    .select("discurso_numero,status").eq("user_id",usuarioAtual.id);
  if(error) { status("Não foi possível carregar as marcações."); console.error(error); return; }
  marcacoes={};
  (data||[]).forEach(r=>{ marcacoes[r.discurso_numero]=r.status; });
  render();
  status("Marcações carregadas.");
}
async function salvar() {
  if(!usuarioAtual) return;
  const rows=Object.entries(marcacoes).map(([numero,status])=>({
    user_id:usuarioAtual.id, discurso_numero:Number(numero), status
  }));
  if(rows.length) {
    const {error}=await sb.from("discurso_marcacoes").upsert(rows,{onConflict:"user_id,discurso_numero"});
    if(error) { status("Erro ao salvar: "+error.message); return; }
  }
  status("✓ Marcações salvas na internet.");
}
async function limpar() {
  if(!usuarioAtual) return;
  if(!confirm("Deseja apagar todas as suas marcações?")) return;
  const {error}=await sb.from("discurso_marcacoes").delete().eq("user_id",usuarioAtual.id);
  if(error) { status("Erro ao limpar: "+error.message); return; }
  marcacoes={}; render(); status("Marcações apagadas.");
}
function marcar(n,valor) {
  if(indisponiveis.has(n)) return;
  marcacoes[n]=valor; render();
}
function render() {
  const termo=document.getElementById("search").value.toLowerCase().trim();
  const lista=document.getElementById("lista"); lista.innerHTML="";
  discursos.filter(([n,t])=>!termo||String(n).includes(termo)||t.toLowerCase().includes(termo))
  .forEach(([n,t])=>{
    const d=document.createElement("div");
    d.className="item"+(indisponiveis.has(n)?" indisponivel":"");
    const indis=indisponiveis.has(n);
    d.innerHTML=`
      <div class="numero">${n}</div>
      <div class="titulo">${t} ${indis?'<span class="badge">NÃO DISPONÍVEL</span>':""}</div>
      ${indis?"":`<div class="escolha">
        <button class="sim ${marcacoes[n]==="sim"?"selecionado":""}" onclick="marcar(${n},'sim')">SIM</button>
        <button class="nao ${marcacoes[n]==="nao"?"selecionado":""}" onclick="marcar(${n},'nao')">NÃO</button>
      </div>`}
    `;
    lista.appendChild(d);
  });
}
document.getElementById("search").addEventListener("input",render);

sb.auth.onAuthStateChange(async (_event,session)=>{
  usuarioAtual=session?.user||null;
  document.getElementById("login").classList.toggle("oculto",!!usuarioAtual);
  document.getElementById("app").classList.toggle("oculto",!usuarioAtual);
  if(usuarioAtual){
    document.getElementById("usuario").textContent="Conta: "+usuarioAtual.email;
    await carregar();
  }
});


let oradores = [];
let abaAtual = 'discursos';
let visualizacaoOradores = 'lista';

function abrirAba(aba) {
  abaAtual = aba;
  document.getElementById("abaDiscursos").classList.toggle("oculto", aba !== "discursos");
  document.getElementById("abaOradores").classList.toggle("oculto", aba !== "oradores");
  document.getElementById("tabDiscursos").className = aba === "discursos" ? "primario" : "secundario";
  document.getElementById("tabOradores").className = aba === "oradores" ? "primario" : "secundario";
  if (aba === "oradores") carregarOradores();
}

async function carregarOradores() {
  if (!usuarioAtual) return;
  const {data,error}=await sb.from("oradores")
    .select("id,nome,tema,congregacao,data_discurso,horario,periodo,created_at,convite_enviado")
    .eq("user_id",usuarioAtual.id)
    .order("nome",{ascending:true});
  if(error) {
    status("Não foi possível carregar os oradores. Confira se executou o arquivo atualizar_oradores.sql no Supabase.");
    console.error(error);
    return;
  }
  oradores=data||[];
  renderOradores();
}

function mudarVisualizacaoOradores(modo) {
  visualizacaoOradores = modo === 'agenda' ? 'agenda' : 'lista';
  document.getElementById('tabListaOradores').className = visualizacaoOradores === 'lista' ? 'primario' : 'secundario';
  document.getElementById('tabAgendaOradores').className = visualizacaoOradores === 'agenda' ? 'primario' : 'secundario';
  renderOradores();
}

function renderOradores() {
  const termo=(document.getElementById("buscarOrador")?.value||"").toLowerCase().trim();
  const lista=document.getElementById("listaOradores");
  const contadores=document.getElementById("contadoresOradores");
  if(!lista) return;
  const filtrados=oradores.filter(o =>
    !termo ||
    (o.nome||"").toLowerCase().includes(termo) ||
    (o.tema||"").toLowerCase().includes(termo) ||
    (o.congregacao||"").toLowerCase().includes(termo)
  );
  const enviados=filtrados.filter(o=>o.convite_enviado).length;
  if(contadores) contadores.innerHTML = `<span class="contador">Total: ${filtrados.length}</span><span class="contador">Convites enviados: ${enviados}</span><span class="contador">Pendentes: ${filtrados.length-enviados}</span>`;
  if(!filtrados.length) {
    lista.innerHTML='<div class="vazio">Nenhum orador cadastrado.</div>';
    return;
  }
  const ordenarPorNome = (a,b)=>(a.nome||'').localeCompare(b.nome||'', 'pt-BR');
  const ordenarPorData = (a,b)=>(a.data_discurso||'9999-12-31').localeCompare(b.data_discurso||'9999-12-31') || (a.horario||'').localeCompare(b.horario||'') || ordenarPorNome(a,b);
  const card = o => `
    <div class="orador-card">
      <div>
        <div class="orador-nome">${escapeHtml(o.nome)}</div>
        <div class="orador-detalhes"><strong>Tema:</strong> ${escapeHtml(o.tema)}<br><strong>Congregação:</strong> ${escapeHtml(o.congregacao)}<br><strong>Data:</strong> ${formatarData(o.data_discurso)} &nbsp; <strong>Horário:</strong> ${escapeHtml(o.horario||"")} ${escapeHtml(o.periodo||"")}</div>
        <div class="orador-status ${o.convite_enviado ? 'enviado' : 'pendente'}">${o.convite_enviado ? '✓ Convite marcado como enviado' : '⏳ Convite pendente'}</div>
      </div>
      <div class="orador-acoes">
        <button class="primario" onclick="gerarConvite('${o.id}')">🖨️ Gerar convite</button>
        <button class="${o.convite_enviado ? 'btn-desfazer' : 'btn-enviado'}" onclick="alternarConviteEnviado('${o.id}',${!o.convite_enviado})">${o.convite_enviado ? '↩ Desfazer envio' : '✓ Marcar como enviado'}</button>
        <button class="secundario" onclick="editarOrador('${o.id}')">✏️ Editar</button>
        <button class="secundario" onclick="excluirOrador('${o.id}')">🗑️ Excluir</button>
      </div>
    </div>`;
  if(visualizacaoOradores === 'lista') {
    lista.innerHTML = [...filtrados].sort(ordenarPorNome).map(card).join('');
    return;
  }
  const porData = [...filtrados].sort(ordenarPorData);
  let dataAtual = null;
  let htmlAgenda = '';
  for (const o of porData) {
    const chave = o.data_discurso || 'sem-data';
    if (chave !== dataAtual) {
      dataAtual = chave;
      htmlAgenda += `<div class="agenda-data">${chave === 'sem-data' ? 'Data não definida' : formatarData(chave)}</div>`;
    }
    htmlAgenda += card(o);
  }
  lista.innerHTML = htmlAgenda;
}

async function alternarConviteEnviado(id, enviado) {
  if(!usuarioAtual) return;
  const orador = oradores.find(o => o.id === id);
  if(!orador) return;
  const {error} = await sb.from('oradores')
    .update({convite_enviado: enviado})
    .eq('id', id)
    .eq('user_id', usuarioAtual.id);
  if(error) {
    status('Não foi possível atualizar o convite. Confira se executou atualizar_oradores.sql no Supabase.');
    console.error(error);
    return;
  }
  orador.convite_enviado = enviado;
  status(enviado ? '✓ Convite marcado como enviado.' : 'Envio desfeito; o convite voltou para pendente.');
  renderOradores();
}

function formatarData(valor) {
  if(!valor) return "";
  const [a,m,d]=valor.split("-");
  return a&&m&&d ? `${d}/${m}/${a.slice(-2)}` : valor;
}

function escapeHtml(valor) {
  return String(valor??"").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

async function salvarOrador(event) {
  event.preventDefault();
  if(!usuarioAtual) return;
  const id=document.getElementById("oradorId").value;
  const payload={
    user_id:usuarioAtual.id,
    nome:document.getElementById("oradorNome").value.trim(),
    tema:document.getElementById("oradorTema").value.trim(),
    congregacao:document.getElementById("oradorCongregacao").value.trim(),
    data_discurso:document.getElementById("oradorData").value,
    horario:document.getElementById("oradorHorario").value,
    periodo:document.getElementById("oradorPeriodo").value
  };
  if(!payload.nome || !payload.tema || !payload.congregacao) return;
  let result;
  if(id) result=await sb.from("oradores").update(payload).eq("id",id).eq("user_id",usuarioAtual.id);
  else result=await sb.from("oradores").insert(payload);
  if(result.error) {
    status("Erro ao salvar orador: "+result.error.message);
    console.error(result.error);
    return;
  }
  status(id ? "✓ Orador atualizado." : "✓ Orador salvo na internet.");
  limparFormularioOrador();
  await carregarOradores();
}

function editarOrador(id) {
  const o=oradores.find(x=>x.id===id);
  if(!o) return;
  document.getElementById("oradorId").value=o.id;
  document.getElementById("oradorNome").value=o.nome||"";
  document.getElementById("oradorTema").value=o.tema||"";
  document.getElementById("oradorCongregacao").value=o.congregacao||"";
  document.getElementById("oradorData").value=o.data_discurso||"";
  document.getElementById("oradorHorario").value=o.horario||"09:00";
  document.getElementById("oradorPeriodo").value=o.periodo||"Manhã";
  document.getElementById("btnSalvarOrador").textContent="💾 Atualizar orador";
  document.getElementById("btnCancelarEdicao").classList.remove("oculto");
  document.getElementById("oradorNome").focus();
}

function cancelarEdicao() { limparFormularioOrador(); }

function limparFormularioOrador() {
  document.getElementById("formOrador").reset();
  document.getElementById("oradorId").value="";
  document.getElementById("btnSalvarOrador").textContent="💾 Salvar orador";
  document.getElementById("btnCancelarEdicao").classList.add("oculto");
}

async function excluirOrador(id) {
  const o=oradores.find(x=>x.id===id);
  if(!o || !confirm(`Excluir o orador "${o.nome}"?`)) return;
  const {error}=await sb.from("oradores").delete().eq("id",id).eq("user_id",usuarioAtual.id);
  if(error) { status("Erro ao excluir: "+error.message); return; }
  status("Orador excluído.");
  await carregarOradores();
}

function gerarConvite(id) {
  const o=oradores.find(x=>x.id===id);
  if(!o) return;
  const janela=window.open("","_blank","width=900,height=1100");
  if(!janela) {
    alert("O navegador bloqueou a janela do convite. Permita pop-ups para este site.");
    return;
  }

  const nome=escapeHtml(o.nome||"");
  const tema=escapeHtml(o.tema||"");
  const horario=escapeHtml(o.horario||"09:00");
  const periodo=escapeHtml((o.periodo||"Manhã").replace("ã","a"));
  const dataObj=o.data_discurso ? new Date(o.data_discurso+"T12:00:00") : null;
  const data=dataObj ? String(dataObj.getDate()).padStart(2,"0")+"/"+String(dataObj.getMonth()+1).padStart(2,"0")+"/"+String(dataObj.getFullYear()).slice(-2) : "";
  const dia=dataObj ? dataObj.toLocaleDateString("pt-BR",{weekday:"long"}).replace(/^./,c=>c.toUpperCase()) : "";
  const modeloUrl=new URL("assets/convite-modelo-base.png",window.location.href).href;

  janela.document.write(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Convite de Orador - ${nome}</title>
  <style>
    @page{size:A4;margin:0}
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:#ddd}
    body{font-family:Georgia,'Times New Roman',serif;color:#111;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .pagina{width:210mm;min-height:297mm;margin:0 auto;position:relative;background:#fff;overflow:hidden}
    .modelo{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:fill}
    .cobertura{position:absolute;z-index:2}.cobertura.tema{left:18.0%;top:52.55%;width:74.0%;height:4.4%;background:#afbfd4}.cobertura.data{left:26.6%;top:57.55%;width:16.0%;height:7.0%;background:#fff}.cobertura.hora{left:68.6%;top:57.8%;width:12.0%;height:7.0%;background:#fff}.cobertura.orador{left:24.0%;top:66.45%;width:52.0%;height:4.0%;background:#afbfd4}.campo{position:absolute;z-index:3;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;font-family:Georgia,'Times New Roman',serif;font-weight:700;color:#111;text-align:center}
    .tema{left:18.45%;top:52.55%;width:71.8%;height:4.4%;font-size:16px;line-height:1.08;white-space:normal;overflow-wrap:anywhere;padding:0 2px}
    .data{left:27.7%;top:58.0%;width:13.0%;height:2.6%;font-size:17px}
    .dia{left:27.5%;top:61.55%;width:14.0%;height:2.6%;font-size:17px}
    .hora{left:69.5%;top:58.35%;width:9.0%;height:2.6%;font-size:17px}
    .periodo{left:69.5%;top:61.75%;width:10.5%;height:2.6%;font-size:17px}
    .orador{left:24.55%;top:66.9%;width:49%;height:3.0%;font-size:17px}
    .acoes{text-align:center;padding:10px;background:#eee;font-family:Arial,sans-serif}
    .acoes button{border:0;border-radius:8px;background:#1769aa;color:#fff;padding:11px 20px;font-weight:bold;cursor:pointer}
    @media print{html,body{background:#fff}.pagina{margin:0}.acoes{display:none}}
    @media(max-width:760px){body{background:#fff}.pagina{width:100vw;height:141.4286vw;min-height:0}.acoes{position:sticky;bottom:0}}
  </style></head><body>
  <div class="pagina">
    <img class="modelo" src="${modeloUrl}" alt="Modelo de convite">
    <div class="cobertura tema"></div><div class="cobertura data"></div><div class="cobertura hora"></div><div class="cobertura orador"></div>
    <div class="campo tema">${tema}</div>
    <div class="campo data">${data}</div>
    <div class="campo dia">${escapeHtml(dia)}</div>
    <div class="campo hora">${horario}</div>
    <div class="campo periodo">${periodo}</div>
    <div class="campo orador">${nome}</div>
  </div>
  <div class="acoes"><button onclick="window.print()">🖨️ Imprimir / Salvar como PDF</button></div>
  </body></html>`);
  janela.document.close();
  janela.onload = () => {
    const el = janela.document.querySelector(".campo.tema");
    if (!el) return;
    let size = 16;
    el.style.fontSize = size + "px";
    while (el.scrollHeight > el.clientHeight && size > 11) {
      size -= 0.5;
      el.style.fontSize = size + "px";
    }
  };
  janela.focus();
}
