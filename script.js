
    const TRE_STATE = {
page: 'postagens',
cargo: null,
course: null
};
const MAX_STUDENTS = 3;
const BRASILIA_TIME_ZONE = 'America/Sao_Paulo';
const TRE1_MIN_DURATION_MINUTES = {
CAS: {
standard: 4,
dropped: 2
},
CFS: {
standard: 7,
dropped: 4
}
};
const WORKER_URL = 'https://tre.brendonadsrcc.workers.dev';
const CORS_PROXY_URL = `${WORKER_URL}/proxy?url=`;
const TRE1_MACRO_URL = 'https://script.google.com/macros/s/AKfycbxhhtB4r6ec-TeN4BFy80kAh2jqGT-FvZi0bN2iHLiXoxFt1A9akpE9Crf-4q2aMKKN8A/exec';
const TRE2_MACRO_URL = 'https://script.google.com/macros/s/AKfycbyLO9ys8Xg1rMGf7BUm4Cjbr87Zo1KKuY1O8NXJMul3g5uMeAzrd2HZ871anHmiCm7t4g/exec';
const TRE3_MACRO_URL = 'https://script.google.com/macros/s/AKfycbwasb3fN6d1BtmyWsa6MjXAjsOb18rrKgWF2LDSzdtNkqA0ahSWHuaeaUEHu_aAniXbww/exec';
const GRAD_MACRO_URL = 'https://script.google.com/macros/s/AKfycbyKuK5U2ShzM41rNUPwnUD36Mmuh5VBkWDVQM_zCTsA9nlgJ5QwS2GZFhsjmPe0l2nHsA/exec';
const RECTIFICATION_MACRO_URL = 'https://script.google.com/macros/s/AKfycbx_WLE0LbnW4cXZ2XTF3LTbJjp1n7c3C17h1jOGfI0IXIMe7FZYMDggmb1jbU_k8qIe/exec';
const TRE1_SHEET_ID = '170_29UlNLgWjdQ9ptCjL6HCPHjjqvVtGNuFq-YOjzmg';
const TRE2_SHEET_ID = '1IDigSRu1_V9YB0LcL__irvQURoDa0LM1XCyEvCWcKqA';
const TRE3_SHEET_ID = '1HCZ9CdC72BvbxScLkVfhSrQTw6QFJ766-cKSJJycHK8';
const GRAD_SHEET_ID = '1EA28MkHIZ7hpszrdTxRhUIZYvtTSbdY9VDSp01pys_g';
const RECTIFICATION_SHEET_ID = '1BUGHgvvsPvwdQnotXHQBuvOzkVZRV5e-E75kqVcHzCA';
const FORUM_HOST = 'www.policiarcc.com';
const FORUM_BASE_URL = 'https://www.policiarcc.com';
var topico = 39250;
const ORIENTATION_CONTENT = {
tre1: `
<p>Utilize o seguinte formulário para realizar a postagem de suas aplicações.</p>
<p>Atente-se às <a href="https://www.policiarcc.com/t31256-tre-3-carta-de-orientacao" target="_blank" rel="noopener">normativas</a> para conclusão de função de Treinamentos Básicos.</p>
<p>Em caso de erros, lembre-se de solicitar a sua retificação no <a href="https://www.policiarcc.com/t30176-tre-3-central-de-postagens" target="_blank" rel="noopener">tópico de postagens</a> em até 48h após a aplicação do Treinamento.</p>
<ul>
<li>O prazo para postagem de conclusão no <strong>FÓRUM</strong> é de 20 minutos após a finalização do Treinamento Básico, estando sujeito à advertência verbal e, em caso de reincidência, advertência interna na companhia;</li>
<li>O prazo para postagem de conclusão no <strong>SYSTEM</strong> é de 20 minutos após a finalização do Treinamento Básico, estando sujeito à advertência interna na companhia.</li>
</ul>
<p>Ademais, atente-se às normativas abaixo para os dois tipos de alunos e, em casos de erros, retorne o formulário para correção.</p>
<p>Clique em Postar neste formulário após preencher devidamente os campos indicados nas próximas seções, para garantir a % de sua meta.</p>
<p><strong>Caso o(s) aluno(s) tenha(m) reprovado ou caído durante o treinamento:</strong> o militar foi reprovado, sendo assim, não é necessário realizar a postagem no RCCSystem.</p>
<p><strong>Caso o(s) aluno(s) tenha(m) aprovado:</strong> o militar foi aprovado na aula, sendo assim, é OBRIGATÓRIO que realize a postagem no RCCSystem, também!</p>
<p>Caso não tenha postado ainda, realize a postagem no seguinte link: <a href="https://system.policercc.com.br/companhia/treinadores" target="_blank" rel="noopener">system.policercc.com.br/companhia/treinadores</a></p>
<p>Em caso de dúvidas, contate o Ministério ou a Liderança dos Treinadores.</p>
`,
tre2: `
<p>Utilize o seguinte formulário para realizar a postagem de suas aplicações.</p>
<p>Atente-se às <a href="https://www.policiarcc.com/t31258-tre-2-carta-de-orientacao" target="_blank" rel="noopener">normativas</a> para conclusão de Treinamentos Rápidos e de Tutorias.</p>
<p>Em caso de erros, lembre-se de solicitar a sua retificação no <a href="https://www.policiarcc.com/t12255-tre-2-central-de-postagens" target="_blank" rel="noopener">tópico de postagens</a> em até 48h após a aplicação.</p>
<p>O prazo para postagem de conclusão do Treinamento Rápido é de até 30 minutos após a aplicação, e o prazo da Tutoria é de até 1h após a aplicação, estando sujeitos ao cancelamento em casos de negligência.</p>
<p>Em caso de dúvidas, contate o Ministério ou a Liderança da Companhia.</p>
`,
tre3: `
<p>Utilize o seguinte formulário para realizar a postagem de suas aplicações.</p>
<p>Atente-se às <a href="https://www.policiarcc.com/t31256-tre-3-carta-de-orientacao" target="_blank" rel="noopener">normativas</a> para conclusão de Treinamentos Convencionais Clássicos e de Capacitação de Wireds.</p>
<p>Em caso de erros, lembre-se de solicitar a sua retificação no <a href="https://www.policiarcc.com/t30176-tre-3-central-de-postagens" target="_blank" rel="noopener">tópico de postagens</a> em até 48h após a aplicação.</p>
<p>O prazo para postagem de conclusão é de 24h após a finalização do Treinamento Convencional e 1h após a finalização da Capacitação de Wireds.</p>
<p>Em caso de dúvidas, contate o Ministério ou a Liderança da Companhia.</p>
`,
graduadores: `
<p>Utilize o seguinte formulário para realizar a postagem de suas graduações.</p>
<p>Atente-se às <a href="https://www.policiarcc.com/t31673-grad-carta-de-orientacao" target="_blank" rel="noopener">normativas</a> para conclusão de função e de Graduações.</p>
<p>Em caso de erros, lembre-se de solicitar a sua retificação no <a href="https://www.policiarcc.com/t12889-grad-central-de-postagens" target="_blank" rel="noopener">tópico de postagens</a> em até 48h após a aplicação da Graduação.</p>
<ul>
<li>O prazo para postagem de conclusão é de até 2 horas após a aplicação da graduação, estando sujeito a advertência interna em casos de negligência.</li>
</ul>
<p><strong>ATENTE-SE AOS PRAZOS!</strong></p>
<p>Em caso de dúvidas, contate o Ministério ou a Liderança da Companhia.</p>
`
};
const APPLICATION_PLACES = {
casSingle: ['Centro de Instruções', 'Corredor Principal', 'Corredor dos Treinadores'],
casGroup: ['Sala de Treinos 1', 'Sala de Treinos 2', 'Sala de Treinos 3', 'Sala de Treinos 4', 'Sala de Treinos 5', 'Cubículo do Batalhão Auxiliar'],
cfs: ['Sala de Treinos 1', 'Sala de Treinos 2', 'Sala de Treinos 3', 'Sala de Treinos 4', 'Sala de Treinos 5']
};
const TRE2_TRAINING_PLACES = {
all: ['Sala de TR', 'Sala de TA', 'Base de Treinos', 'Corredor dos Treinadores', 'Corredor Principal', 'Centro de Instrução', 'Sala de Treino 01', 'Sala de Treino 02', 'Sala de Treino 03', 'Sala de Treino 04', 'Sala de Treino 05'],
baseOrRooms: ['Base de Treinos', 'Sala de Treino 01', 'Sala de Treino 02', 'Sala de Treino 03', 'Sala de Treino 04', 'Sala de Treino 05']
};
const TRE2_GROUP_REQUIRED_TRAININGS = ['TCG', 'TF', 'TA'];
const TRE2_BASE_OR_ROOM_TRAININGS = ['TCG', 'TMO', 'TS'];
const ACCESS_NOT_FOUND_MESSAGE = 'Usuário não encontrado na lista de acessos dos Treinadores.';
const ACCESS_CHECK_PENDING_MESSAGE = 'Aguarde a verificação de acesso dos Treinadores antes de postar.';
const POST_TIMEOUT_MS = 60000;
const DUPLICATE_SUBMISSION_WINDOW_MS = 10 * 1000;
const RECENT_SUBMISSIONS_STORAGE_KEY = 'tre_recent_postagens';
const SHEET_CONFIRMATION_ERROR = 'SHEET_CONFIRMATION_FAILED';
const SHEET_VERIFY_ATTEMPTS = 10;
const SHEET_VERIFY_INITIAL_DELAY_MS = 1500;
const SHEET_VERIFY_INTERVAL_MS = 2500;
const UNKNOWN_HEAD_SVG = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<text x="32" y="43" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">?</text>
</svg>
`)}`;
let reportSubmitInProgress = false;
let studentNicknameCheckTimer = null;
let studentNicknameCheckRequestId = 0;
let latestStudentNicknameCheck = { missing: [], corrections: [], failed: false };
let tre2NicknameCheckTimer = null;
let tre2NicknameCheckRequestId = 0;
let latestTre2NicknameChecks = {};
const ACCESS_STATE = {
forumUsername: '',
sheetCargo: '',
sheetNickname: '',
allowedCargos: new Set(),
canEditNickname: false,
accessBlockMessage: '',
accessLoaded: false
};
const DIRECT_LINK_TARGETS = {
'post-tre1': { page: 'postagens', cargo: 'tre1' },
'post-tre-1': { page: 'postagens', cargo: 'tre1' },
'post-tre2': { page: 'postagens', cargo: 'tre2' },
'post-tre-2': { page: 'postagens', cargo: 'tre2' },
'post-tre3': { page: 'postagens', cargo: 'tre3' },
'post-tre-3': { page: 'postagens', cargo: 'tre3' },
'post-graduadores': { page: 'postagens', cargo: 'graduadores' },
'post-graduador': { page: 'postagens', cargo: 'graduadores' },
'post-graduacoes': { page: 'postagens', cargo: 'graduadores' },
'post-graduacao': { page: 'postagens', cargo: 'graduadores' },
'post-grad': { page: 'postagens', cargo: 'graduadores' },
'retificacoes': { page: 'retificacao' },
'retificacao': { page: 'retificacao' }
};

function byId(id) {
return document.getElementById(id);
}

function hideReportAreas() {
['posting-area', 'tre2-posting-area', 'tre3-posting-area', 'graduadores-posting-area', 'rectification-posting-area'].forEach(id => {
const area = byId(id);
if (area) area.classList.add('hidden');
});
byId('posting-return-actions')?.classList.add('hidden');
setPostActionsVisible('');
}

function setPostActionsVisible(activeKey) {
const actionIds = {
tre1: 'tre1-post-actions',
tre2: 'tre2-post-actions',
tre3: 'tre3-post-actions',
grad: 'grad-post-actions',
rectification: 'rectification-post-actions'
};

Object.entries(actionIds).forEach(([key, id]) => {
const actions = byId(id);
if (actions) actions.classList.toggle('hidden', key !== activeKey);
});
}

function getPostActionKey(data) {
if (data.cargo === 'TRE.1') return 'tre1';
if (data.cargo === 'TRE.2') return 'tre2';
if (data.cargo === 'TRE.3') return 'tre3';
if (data.cargo === 'Graduadores') return 'grad';
if (data.cargo === 'Retificação') return 'rectification';
return '';
}

function proxiedUrl(url) {
return `${CORS_PROXY_URL}${encodeURIComponent(String(url))}`;
}

function normalizeAccessText(value) {
return String(value || '')
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, '')
.replace(/[\u2010\u2011\u2012\u2013\u2014\u2015]/g, '-')
.toLowerCase()
.replace(/\s+/g, ' ')
.trim();
}

function isFullAccessCargo(cargo) {
const normalized = normalizeAccessText(cargo);
return normalized.startsWith('graduador')
|| normalized.startsWith('estagiario')
|| normalized.startsWith('ministerio')
|| normalized.startsWith('ministro')
|| normalized.startsWith('vice-lider')
|| normalized.startsWith('vice lider')
|| normalized.startsWith('lider')
|| normalized.startsWith('supremacia')
|| normalized.startsWith('acesso ilimitado');
}

function canCargoEditNickname(cargo) {
const normalized = normalizeAccessText(cargo);
return normalized.startsWith('estagiario')
|| normalized.startsWith('ministerio')
|| normalized.startsWith('ministro')
|| normalized.startsWith('vice-lider')
|| normalized.startsWith('vice lider')
|| normalized.startsWith('lider')
|| normalized.startsWith('supremacia')
|| normalized.startsWith('acesso ilimitado');
}

function getCargoAccessRank(cargo) {
const normalized = normalizeAccessText(cargo);
if (isFullAccessCargo(cargo)) return 4;
if (/^tre\.?\s*3$/.test(normalized)) return 3;
if (/^tre\.?\s*2$/.test(normalized)) return 2;
if (/^tre\.?\s*1$/.test(normalized)) return 1;
return 0;
}

function getAllowedCargosForRole(cargo) {
const rank = getCargoAccessRank(cargo);
if (rank >= 4) return new Set(['tre1', 'tre2', 'tre3', 'graduadores']);
if (rank === 3) return new Set(['tre1', 'tre2', 'tre3']);
if (rank === 2) return new Set(['tre1', 'tre2']);
if (rank === 1) return new Set(['tre1']);
return new Set();
}

function isCargoAllowed(cargo) {
return cargo === 'tre1' || ACCESS_STATE.allowedCargos.has(cargo);
}

function setAccessStatus(message) {
const status = byId('access-status');
if (status) status.textContent = message || '';
}

function hasPostingAccess() {
return ACCESS_STATE.accessLoaded && ACCESS_STATE.allowedCargos.size > 0 && !ACCESS_STATE.accessBlockMessage;
}

function getPostingAccessBlockMessage() {
return ACCESS_STATE.accessBlockMessage || ACCESS_CHECK_PENDING_MESSAGE;
}

function normalizeDirectLinkToken(value) {
let decoded = String(value || '');
try {
decoded = decodeURIComponent(decoded);
} catch (err) {
decoded = String(value || '');
}

return normalizeAccessText(decoded)
.replace(/^[#?/&]+|[#?/&]+$/g, '')
.replace(/_/g, '-')
.replace(/\./g, '');
}

function getDirectLinkToken() {
const tokens = [];
const hashToken = normalizeDirectLinkToken(window.location.hash);
if (hashToken) tokens.push(hashToken);

const params = new URLSearchParams(window.location.search);
['link', 'rota', 'route', 'pagina', 'page', 'abrir'].forEach(key => {
const value = params.get(key);
if (value) tokens.push(normalizeDirectLinkToken(value));
});

params.forEach((value, key) => {
if (!value) tokens.push(normalizeDirectLinkToken(key));
});

const pathParts = window.location.pathname.split('/').filter(Boolean);
if (pathParts.length) tokens.push(normalizeDirectLinkToken(pathParts[pathParts.length - 1]));

return tokens.find(token => DIRECT_LINK_TARGETS[token]) || '';
}

function applyDirectLinkFromUrl() {
const token = getDirectLinkToken();
if (!token) return;

const target = DIRECT_LINK_TARGETS[token];
if (target.page === 'retificacao') {
selectPage('retificacao');
return;
}

selectPage('postagens');
if (target.cargo) selectCargo(target.cargo);
}

function setPageButtonsAccess() {
const buttons = byId('page-group')?.querySelectorAll('[data-page]') || [];
buttons.forEach(btn => {
btn.disabled = false;
btn.classList.remove('locked');
btn.title = '';
});
}

async function pegarUsername() {
try {
const resposta = await fetch('/forum', {
credentials: 'same-origin',
cache: 'no-store'
});
const html = await resposta.text();
const regex = /_userdata\["username"\]\s*=\s*"([^"]+)"/;
const match = html.match(regex);
if (match && match[1]) return match[1];
} catch (err) {
console.error('Erro ao pegar username:', err);
}
return null;
}

function parseAccessRows(tsv) {
return String(tsv || '')
.split(/\r?\n/)
.map(row => row.split('\t').map(cell => cell.trim()))
.filter(cols => cols[0] && cols[1])
.map(cols => ({ cargo: cols[0], nickname: cols[1] }));
}

async function fetchAccessRows() {
const response = await fetch(`${WORKER_URL}?gid=0`, {
cache: 'no-store'
});

if (!response.ok) {
throw new Error(`Falha ao consultar permissões (status ${response.status}).`);
}

return parseAccessRows(await response.text());
}

function findBestAccessForNickname(rows, nickname) {
const key = normalizeNick(nickname);
if (!key) return null;

return rows
.filter(row => normalizeNick(row.nickname) === key)
.sort((a, b) => getCargoAccessRank(b.cargo) - getCargoAccessRank(a.cargo))[0] || null;
}

function setCargoButtonsAccess() {
const buttons = byId('cargo-group')?.querySelectorAll('[data-cargo]') || [];
buttons.forEach(btn => {
const allowed = isCargoAllowed(btn.dataset.cargo);
btn.disabled = !allowed;
btn.classList.toggle('locked', !allowed);
btn.title = allowed ? '' : 'Cargo bloqueado para o seu nível de acesso.';
if (!allowed) btn.classList.remove('active');
});
}

function applyNicknameLock() {
const input = byId('applicator-nick');
const editBtn = byId('applicator-edit-btn');
if (!input || !editBtn) return;

const hasDetectedNickname = Boolean(ACCESS_STATE.sheetNickname || ACCESS_STATE.forumUsername);
input.readOnly = hasDetectedNickname && !ACCESS_STATE.canEditNickname;
editBtn.classList.toggle('hidden', !ACCESS_STATE.canEditNickname);
editBtn.classList.remove('active');
}

function applyAccessState() {
const input = byId('applicator-nick');
if (input && ACCESS_STATE.sheetNickname) {
input.value = ACCESS_STATE.sheetNickname;
updateApplicatorHead();
}

applyNicknameLock();
setPageButtonsAccess();
setCargoButtonsAccess();

if (TRE_STATE.cargo && !isCargoAllowed(TRE_STATE.cargo)) {
TRE_STATE.cargo = null;
hideReportAreas();
byId('orientation-panel').classList.add('hidden');
byId('orientation-actions').classList.add('hidden');
byId('tre1-form').classList.add('hidden');
byId('empty-state').classList.remove('hidden');
}
}

function toggleApplicatorNickEdit() {
if (!ACCESS_STATE.canEditNickname) return;

const input = byId('applicator-nick');
const editBtn = byId('applicator-edit-btn');
const unlock = input.readOnly;
input.readOnly = !unlock;
editBtn.classList.toggle('active', unlock);
if (unlock) input.focus();
}

async function initializeAccessControl() {
ACCESS_STATE.allowedCargos = new Set();
ACCESS_STATE.accessLoaded = false;
ACCESS_STATE.accessBlockMessage = ACCESS_CHECK_PENDING_MESSAGE;
setPageButtonsAccess();
setCargoButtonsAccess();
applyNicknameLock();
setAccessStatus('Verificando usuário logado no fórum...');

const username = await pegarUsername();
ACCESS_STATE.forumUsername = username || '';
if (!username) {
ACCESS_STATE.accessBlockMessage = 'Não foi possível identificar o usuário logado no fórum.';
setAccessStatus(ACCESS_STATE.accessBlockMessage);
applyAccessState();
return;
}

const input = byId('applicator-nick');
if (input) {
input.value = username;
updateApplicatorHead();
}

try {
const rows = await fetchAccessRows();
const access = findBestAccessForNickname(rows, username);
if (!access) {
ACCESS_STATE.sheetNickname = username;
ACCESS_STATE.accessLoaded = false;
ACCESS_STATE.accessBlockMessage = ACCESS_NOT_FOUND_MESSAGE;
setAccessStatus(ACCESS_NOT_FOUND_MESSAGE);
applyAccessState();
return;
}

const allowedCargos = getAllowedCargosForRole(access.cargo);
ACCESS_STATE.sheetCargo = access.cargo;
ACCESS_STATE.sheetNickname = access.nickname;
ACCESS_STATE.allowedCargos = allowedCargos;
ACCESS_STATE.canEditNickname = canCargoEditNickname(access.cargo);
ACCESS_STATE.accessBlockMessage = allowedCargos.size ? '' : 'Seu cargo não possui permissões de postagem configuradas.';
ACCESS_STATE.accessLoaded = allowedCargos.size > 0;

setAccessStatus(allowedCargos.size ? `Acesso identificado: ${access.cargo}.` : ACCESS_STATE.accessBlockMessage);
applyAccessState();
} catch (err) {
console.error('Erro ao carregar acessos:', err);
ACCESS_STATE.sheetNickname = username;
ACCESS_STATE.accessLoaded = false;
ACCESS_STATE.accessBlockMessage = 'Não foi possível carregar a lista de acessos dos Treinadores.';
setAccessStatus(ACCESS_STATE.accessBlockMessage);
applyAccessState();
}
}

function getBrasiliaDateTimeLocalValue(date = new Date()) {
const parts = new Intl.DateTimeFormat('pt-BR', {
timeZone: BRASILIA_TIME_ZONE,
year: 'numeric',
month: '2-digit',
day: '2-digit',
hour: '2-digit',
minute: '2-digit',
second: '2-digit',
hour12: false,
hourCycle: 'h23'
}).formatToParts(date).reduce((acc, part) => {
if (part.type !== 'literal') acc[part.type] = part.value;
return acc;
}, {});

return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`;
}

function parseDateTimeLocalToTimestamp(value) {
const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(value || '');
if (!match) return NaN;

const [, year, month, day, hour, minute, second = '0'] = match;
const timestamp = Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
const parsed = new Date(timestamp);

if (
parsed.getUTCFullYear() !== Number(year) ||
parsed.getUTCMonth() !== Number(month) - 1 ||
parsed.getUTCDate() !== Number(day) ||
parsed.getUTCHours() !== Number(hour) ||
parsed.getUTCMinutes() !== Number(minute) ||
parsed.getUTCSeconds() !== Number(second)
) {
return NaN;
}

return timestamp;
}

function getBrasiliaElapsedMillisecondsSince(value) {
const startTimestamp = parseDateTimeLocalToTimestamp(value);
const nowTimestamp = parseDateTimeLocalToTimestamp(getBrasiliaDateTimeLocalValue());

if (!Number.isFinite(startTimestamp) || !Number.isFinite(nowTimestamp)) return NaN;

return nowTimestamp - startTimestamp;
}

function formatMinuteDuration(minutes) {
return minutes === 1 ? '1 minuto' : `${minutes} minutos`;
}

function setDateTimeInputToBrasiliaNow(inputId, overwrite = true) {
const input = byId(inputId);
if (!input || (!overwrite && input.value)) return;
input.value = getBrasiliaDateTimeLocalValue();
}

function setDefaultStartTime() {
setDateTimeInputToBrasiliaNow('start-time');
}

function updateApplicatorHead() {
const input = byId('applicator-nick');
const head = byId('applicator-head');
if (!input || !head) return;

const nickname = input.value.trim();
if (!nickname) {
head.classList.remove('show');
head.removeAttribute('src');
if (byId('posting-area') && !byId('posting-area').classList.contains('hidden')) {
renderStudents();
}
if (byId('tre2-posting-area') && !byId('tre2-posting-area').classList.contains('hidden')) {
scheduleActiveTre2NicknameCheck();
}
if (byId('tre3-posting-area') && !byId('tre3-posting-area').classList.contains('hidden')) {
scheduleActiveTre3NicknameCheck();
}
if (byId('graduadores-posting-area') && !byId('graduadores-posting-area').classList.contains('hidden')) {
scheduleActiveGradNicknameChecks();
}
return;
}

head.onerror = () => {
head.onerror = null;
head.src = UNKNOWN_HEAD_SVG;
};
head.src = getHabboHeadImageUrl(nickname);
head.classList.add('show');

if (byId('posting-area') && !byId('posting-area').classList.contains('hidden')) {
renderStudents();
}

if (byId('tre2-posting-area') && !byId('tre2-posting-area').classList.contains('hidden')) {
scheduleActiveTre2NicknameCheck();
}
if (byId('tre3-posting-area') && !byId('tre3-posting-area').classList.contains('hidden')) {
scheduleActiveTre3NicknameCheck();
}
if (byId('graduadores-posting-area') && !byId('graduadores-posting-area').classList.contains('hidden')) {
scheduleActiveGradNicknameChecks();
}
}

function getHabboHeadImageUrl(nickname) {
const url = new URL('https://habbo.com.br/habbo-imaging/avatarimage');
url.searchParams.set('user', cleanNickname(nickname));
url.searchParams.set('headonly', '1');
url.searchParams.set('head_direction', '3');
url.searchParams.set('direction', '3');
url.searchParams.set('gesture', 'sml');
url.searchParams.set('size', 'b');
return proxiedUrl(url);
}

function setOrientationContent(cargo) {
const panel = byId('orientation-panel');
if (!panel) return false;

const content = ORIENTATION_CONTENT[cargo];
if (!content) return false;

panel.innerHTML = content;
return true;
}

function selectPage(page, evt) {
const selectedPage = page === 'retificacao' ? 'retificacao' : 'postagens';

TRE_STATE.page = selectedPage;

byId('page-group').querySelectorAll('.sel-btn').forEach(btn => {
btn.classList.toggle('active', btn.dataset.page === selectedPage);
});
if (evt?.currentTarget) evt.currentTarget.classList.add('active');

byId('validation-message').classList.remove('show');
byId('cargo-placeholder').classList.add('hidden');
byId('orientation-panel').classList.add('hidden');
byId('orientation-actions').classList.add('hidden');
hideReportAreas();

if (selectedPage === 'retificacao') {
byId('cargo-section').classList.add('hidden');
byId('empty-state').classList.add('hidden');
byId('tre1-form').classList.remove('hidden');
byId('rectification-posting-area').classList.remove('hidden');
return;
}

byId('cargo-section').classList.remove('hidden');
if (TRE_STATE.cargo && !isCargoAllowed(TRE_STATE.cargo)) {
TRE_STATE.cargo = null;
}

if (!TRE_STATE.cargo) {
byId('tre1-form').classList.add('hidden');
byId('empty-state').classList.remove('hidden');
return;
}

byId('empty-state').classList.add('hidden');
if (setOrientationContent(TRE_STATE.cargo)) {
byId('tre1-form').classList.remove('hidden');
byId('orientation-panel').classList.remove('hidden');
byId('orientation-actions').classList.remove('hidden');
if (TRE_STATE.cargo === 'tre1') {
setDefaultStartTime();
renderStudents();
} else if (TRE_STATE.cargo === 'tre3') {
renderTre3Destination();
} else if (TRE_STATE.cargo === 'graduadores') {
clearInactiveGradNicknameFieldErrors();
scheduleActiveGradNicknameChecks();
} else {
renderTre2Destination();
}
return;
}

byId('tre1-form').classList.add('hidden');
byId('cargo-placeholder').classList.remove('hidden');
}

function selectCargo(cargo, evt) {
if (!isCargoAllowed(cargo)) {
showToast('Cargo bloqueado para o seu nível de acesso.', 'error');
return;
}

TRE_STATE.page = 'postagens';
TRE_STATE.cargo = cargo;
byId('page-group').querySelectorAll('.sel-btn').forEach(btn => {
btn.classList.toggle('active', btn.dataset.page === 'postagens');
});
byId('cargo-group').querySelectorAll('.sel-btn').forEach(btn => btn.classList.remove('active'));
const cargoButton = evt?.currentTarget || byId('cargo-group')?.querySelector(`[data-cargo="${cargo}"]`);
if (cargoButton) cargoButton.classList.add('active');

byId('cargo-section').classList.remove('hidden');
byId('empty-state').classList.add('hidden');
byId('validation-message').classList.remove('show');

if (setOrientationContent(cargo)) {
byId('tre1-form').classList.remove('hidden');
byId('orientation-panel').classList.remove('hidden');
hideReportAreas();
byId('orientation-actions').classList.remove('hidden');
byId('cargo-placeholder').classList.add('hidden');
if (cargo === 'tre1') {
setDefaultStartTime();
renderStudents();
} else if (cargo === 'tre3') {
renderTre3Destination();
} else if (cargo === 'graduadores') {
clearInactiveGradNicknameFieldErrors();
scheduleActiveGradNicknameChecks();
} else {
renderTre2Destination();
}
return;
}

byId('tre1-form').classList.add('hidden');
byId('orientation-panel').classList.add('hidden');
hideReportAreas();
byId('orientation-actions').classList.add('hidden');
byId('cargo-placeholder').classList.remove('hidden');
}

function showPostingArea() {
if (TRE_STATE.cargo && !isCargoAllowed(TRE_STATE.cargo)) {
showToast('Cargo bloqueado para o seu nível de acesso.', 'error');
hideReportAreas();
return;
}

byId('orientation-panel').classList.add('hidden');
byId('orientation-actions').classList.add('hidden');

hideReportAreas();
byId('posting-return-actions')?.classList.remove('hidden');

if (TRE_STATE.cargo === 'tre2') {
byId('tre2-posting-area').classList.remove('hidden');
byId('cargo-placeholder').classList.add('hidden');
renderTre2Destination();
return;
}

if (TRE_STATE.cargo === 'tre3') {
byId('tre3-posting-area').classList.remove('hidden');
byId('cargo-placeholder').classList.add('hidden');
renderTre3Destination();
return;
}

if (TRE_STATE.cargo === 'graduadores') {
byId('graduadores-posting-area').classList.remove('hidden');
byId('cargo-placeholder').classList.add('hidden');
clearInactiveGradNicknameFieldErrors();
scheduleActiveGradNicknameChecks();
byId('validation-message').classList.remove('show');
return;
}

if (TRE_STATE.cargo !== 'tre1') {
byId('posting-area').classList.add('hidden');
byId('cargo-placeholder').classList.remove('hidden');
return;
}

byId('posting-area').classList.remove('hidden');
setDefaultStartTime();
renderStudents();
}

function showOrientationArea() {
if (!TRE_STATE.cargo || !setOrientationContent(TRE_STATE.cargo)) {
hideReportAreas();
byId('cargo-placeholder').classList.remove('hidden');
return;
}

hideReportAreas();
byId('tre1-form').classList.remove('hidden');
byId('orientation-panel').classList.remove('hidden');
byId('orientation-actions').classList.remove('hidden');
byId('cargo-placeholder').classList.add('hidden');
byId('empty-state').classList.add('hidden');
byId('validation-message').classList.remove('show');
}

function renderTre2Destination() {
const destination = byId('tre2-destination')?.value || '';
document.querySelectorAll('[data-tre2-section]').forEach(section => {
section.classList.toggle('hidden', section.dataset.tre2Section !== destination);
});
updateTre2TrainingPlaceOptions();
clearInactiveTre2NicknameFieldErrors();
scheduleActiveTre2NicknameCheck();
byId('validation-message').classList.remove('show');
}

function updateTre2TrainingPlaceOptions() {
const training = byId('tre2-training')?.value || '';
const select = byId('tre2-training-place');
const hint = byId('tre2-training-place-hint');
if (!select) return;

const currentPlace = select.value;
const allowedPlaces = getAllowedTre2TrainingPlaces(training);
select.innerHTML = '<option value="">Selecione o local...</option>';

allowedPlaces.forEach(place => {
const option = document.createElement('option');
option.value = place;
option.textContent = place;
select.appendChild(option);
});

select.value = allowedPlaces.includes(currentPlace) ? currentPlace : '';
if (hint) hint.textContent = getTre2TrainingPlaceHint(training);
byId('validation-message').classList.remove('show');
}

function getAllowedTre2TrainingPlaces(training) {
if (TRE2_BASE_OR_ROOM_TRAININGS.includes(training)) return TRE2_TRAINING_PLACES.baseOrRooms;
return TRE2_TRAINING_PLACES.all;
}

function getTre2TrainingPlaceHint(training) {
if (TRE2_BASE_OR_ROOM_TRAININGS.includes(training)) {
return `${training} deve ser aplicado, obrigatoriamente, na Base de Treinos ou nas Salas de Treino 01 a 05.`;
}
return '';
}

function getTre2NicknameFieldIdForDestination(destination = byId('tre2-destination')?.value || '') {
if (destination === 'Treinamento Rápido') return 'tre2-training-participants';
if (destination === 'Tutoria') return 'tre2-tutoria-students';
if (destination === 'Mensagem Privada') return 'tre2-mp-trainers';
return '';
}

function scheduleActiveTre2NicknameCheck() {
const inputId = getTre2NicknameFieldIdForDestination();
if (!inputId) return;
scheduleTre2NicknameCheck(inputId);
}

function clearInactiveTre2NicknameFieldErrors() {
const activeInputId = getTre2NicknameFieldIdForDestination();
['tre2-training-participants', 'tre2-tutoria-students', 'tre2-mp-trainers'].forEach(inputId => {
if (inputId !== activeInputId) setTre2NicknameFieldMessages(inputId, []);
});
}

function renderTre3Destination() {
const destination = byId('tre3-destination')?.value || '';
document.querySelectorAll('[data-tre3-section]').forEach(section => {
section.classList.toggle('hidden', section.dataset.tre3Section !== destination);
});
if (destination === 'Treinamento Convencional') {
setDateTimeInputToBrasiliaNow('tre3-conventional-start', false);
}
clearInactiveTre3NicknameFieldErrors();
scheduleActiveTre3NicknameCheck();
byId('validation-message').classList.remove('show');
}

function getTre3NicknameFieldIdForDestination(destination = byId('tre3-destination')?.value || '') {
if (destination === 'Capacitação de Wireds') return 'tre3-wired-police';
return '';
}

function scheduleActiveTre3NicknameCheck() {
const inputId = getTre3NicknameFieldIdForDestination();
if (!inputId) return;
scheduleTre2NicknameCheck(inputId);
}

function clearInactiveTre3NicknameFieldErrors() {
const activeInputId = getTre3NicknameFieldIdForDestination();
['tre3-wired-police'].forEach(inputId => {
if (inputId !== activeInputId) setTre2NicknameFieldMessages(inputId, []);
});
}

function getGradNicknameFieldIds() {
return ['grad-recipients'];
}

function scheduleActiveGradNicknameChecks() {
getGradNicknameFieldIds().forEach(inputId => scheduleTre2NicknameCheck(inputId));
renderGradApprovedCards();
}

function clearInactiveGradNicknameFieldErrors() {
getGradNicknameFieldIds().forEach(inputId => setTre2NicknameFieldMessages(inputId, []));
}

function handleGradRecipientsInput() {
renderGradApprovedCards();
scheduleTre2NicknameCheck('grad-recipients');
}

function renderGradApprovedCards() {
const grid = byId('grad-approved-cards');
if (!grid) return;

const selected = new Set(collectGradApprovedTrainers().map(normalizeNick));
const trainers = parseNicknameList(byId('grad-recipients')?.value || '');
const section = byId('grad-approved-section');
if (section) section.classList.toggle('hidden', !trainers.length);

grid.innerHTML = '';
trainers.forEach((trainer, index) => {
const checkboxId = `grad-approved-${index + 1}`;
const card = document.createElement('label');
card.className = 'approval-card';
card.innerHTML = `
<input type="checkbox" id="${checkboxId}" name="grad-approved" value="${escapeHtml(trainer)}" data-grad-approved-index="${index}" ${selected.has(normalizeNick(trainer)) ? 'checked' : ''}>
<span>${escapeHtml(trainer)}</span>
`;
grid.appendChild(card);
});
}

function collectGradApprovedTrainers() {
return Array.from(document.querySelectorAll('[data-grad-approved-index]:checked'))
.map(input => input.value.trim())
.filter(Boolean);
}

function selectCourse(course, evt) {
TRE_STATE.course = course;
byId('course-group').querySelectorAll('.sel-btn').forEach(btn => btn.classList.remove('active'));
evt.currentTarget.classList.add('active');
byId('validation-message').classList.remove('show');
updateApplicationPlaceOptions();
}

function parseStudents() {
const field = byId('student-nicks');
if (!field) return [];
return parseNicknameList(field.value);
}

function parseNicknameList(value) {
return String(value || '')
.split('/')
.map(name => name.trim())
.filter(Boolean);
}

function updateApplicationPlaceOptions(students = parseStudents()) {
const select = byId('application-place');
const hint = byId('application-place-hint');
if (!select) return;

const currentPlace = select.value;
const watchedByTre2 = byId('tre2-watch')?.value || '';
const allowedPlaces = getAllowedApplicationPlaces(TRE_STATE.course, students.length, watchedByTre2);

select.innerHTML = '<option value="">Selecione o local...</option>';
allowedPlaces.forEach(place => {
const option = document.createElement('option');
option.value = place;
option.textContent = place;
select.appendChild(option);
});

select.value = allowedPlaces.includes(currentPlace) ? currentPlace : '';
if (hint) hint.textContent = getApplicationPlaceHint(TRE_STATE.course, students.length, watchedByTre2);
}

function getAllApplicationPlaces() {
return [...new Set([
...APPLICATION_PLACES.casSingle,
...APPLICATION_PLACES.casGroup
])];
}

function getAllowedApplicationPlaces(course, studentCount, watchedByTre2 = byId('tre2-watch')?.value || '') {
if (course === 'CFS') return APPLICATION_PLACES.cfs;
if (watchedByTre2 === 'Sim') return APPLICATION_PLACES.casGroup;
if (course === 'CAS' && studentCount === 1) return APPLICATION_PLACES.casSingle;
if (course === 'CAS' && studentCount >= 2) return APPLICATION_PLACES.casGroup;

return getAllApplicationPlaces();
}

function getApplicationPlaceHint(course, studentCount, watchedByTre2 = byId('tre2-watch')?.value || '') {
if (course === 'CFS') return 'CFS deve ser, obrigatoriamente, nas Salas de Treinos 1 a 5.';
if (watchedByTre2 === 'Sim') return 'Curso acompanhado por TRE.2 deve ser, obrigatoriamente, nas Salas de Treinos 1 a 5 ou no Cubículo do Batalhão Auxiliar.';
if (course === 'CAS' && studentCount === 1) return 'CAS inidividual deve ser, obrigatoriamente, no CI, Corredor Principal ou Corredor dos Treinadores.';
if (course === 'CAS' && studentCount >= 2) return 'CAS coletivo deve ser, obrigatoriamente, nas Salas de Treinos 1 a 5 ou no Cubículo do Batalhão Auxiliar.';
if (course === 'CAS') return 'Informe os alunos para liberar os locais permitidos para CAS.';

return 'Selecione a aula para ajustar os locais permitidos.';
}

function getApplicationPlaceError(course, studentCount, place, watchedByTre2 = '') {
if (!place) return '';

const allowedPlaces = getAllowedApplicationPlaces(course, studentCount, watchedByTre2);
if (allowedPlaces.includes(place)) return '';

return `${place} não é permitido para ${course || 'a aula selecionada'} com ${studentCount} aluno(s).`;
}

function renderStudents() {
const grid = byId('student-verdicts');
const verdictSection = byId('student-verdict-section');
if (!grid) return;

const existingVerdicts = {};
const existingProofs = {};
grid.querySelectorAll('[data-verdict-index]').forEach(select => {
existingVerdicts[select.dataset.verdictIndex] = select.value;
});
grid.querySelectorAll('[data-proof-index]').forEach(input => {
existingProofs[input.dataset.proofIndex] = input.value;
});

const students = parseStudents();
const visibleStudents = students.slice(0, MAX_STUDENTS);
updateApplicationPlaceOptions(students);
if (verdictSection) verdictSection.classList.toggle('hidden', !visibleStudents.length);

grid.innerHTML = '';
visibleStudents.forEach((name, index) => {
const verdictId = `student-verdict-${index + 1}`;
const proofId = `student-proof-${index + 1}`;
const row = document.createElement('div');
row.className = 'student-row';

row.innerHTML = `
<div class="student-name"><span>Aluno ${index + 1}</span>${escapeHtml(name)}</div>
<select id="${verdictId}" name="${verdictId}" class="form-control" data-verdict-index="${index}" onchange="toggleProof(this)" required>
<option value="">Selecione o veredito...</option>
<option>Aprovado</option>
<option>Reprovado</option>
<option>Caiu</option>
</select>
<div class="proof-field hidden">
<div class="field-label"><i class="fa-solid fa-link"></i> Link de comprovação</div>
<input id="${proofId}" name="${proofId}" class="form-control" type="text" data-proof-index="${index}" placeholder="Cole o link de comprovação da queda">
</div>
<div class="student-error hidden" data-student-error-index="${index}"></div>
`;
grid.appendChild(row);
const select = row.querySelector('select');
const proof = row.querySelector('input');
select.value = existingVerdicts[index] || '';
proof.value = existingProofs[index] || '';
toggleProof(select);
});

latestStudentNicknameCheck = { missing: [], corrections: [], failed: false };
applyStudentCardErrors(students, latestStudentNicknameCheck);
scheduleStudentNicknameCheck(students);

if (students.length > MAX_STUDENTS) {
showValidation([`Só é permitido registrar até ${MAX_STUDENTS} alunos por postagem.`]);
} else {
byId('validation-message').classList.remove('show');
}
}

function toggleProof(select) {
const row = select.closest('.student-row');
const proofWrap = row.querySelector('.proof-field');
const proofInput = row.querySelector('[data-proof-index]');
const needsProof = select.value === 'Caiu';

proofWrap.classList.toggle('hidden', !needsProof);
if (proofInput) proofInput.required = needsProof;
}

function getNicknameFieldIdForReport(data) {
if (data.cargo === 'TRE.2') return getTre2NicknameFieldIdForDestination(data.destination);
if (data.cargo === 'TRE.3') return getTre3NicknameFieldIdForDestination(data.destination);
return '';
}

function getNicknameFieldIdsForReport(data) {
if (data.cargo === 'Graduadores') return getGradNicknameFieldIds();
const inputId = getNicknameFieldIdForReport(data);
return inputId ? [inputId] : [];
}

async function submitReport(evt) {
evt.preventDefault();

if (reportSubmitInProgress) {
showToast('Já existe uma postagem em andamento. Aguarde a confirmação antes de tentar novamente.', 'error');
return;
}

reportSubmitInProgress = true;
setSubmitState('loading');
setPostActionsVisible('');

try {
const data = collectReportData();
const isTre1Report = data.cargo === 'TRE.1';
const isTre2Report = data.cargo === 'TRE.2';
const isTre3Report = data.cargo === 'TRE.3';
const isGradReport = data.cargo === 'Graduadores';
const isRectificationReport = data.cargo === 'Retificação';
const isPublicReport = isTre1Report || isRectificationReport;

if (!isPublicReport && !hasPostingAccess()) {
const message = getPostingAccessBlockMessage();
showValidation([message]);
setSubmitState('fail');
showToast(message, 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}

const errors = validateReport(data);
const nicknameInputIds = getNicknameFieldIdsForReport(data);
const hasLocalStudentErrors = isTre1Report
? applyStudentCardErrors(data.students, { missing: [], corrections: [], failed: false })
: false;
const hasLocalNicknameErrors = nicknameInputIds.some(inputId => applyTre2NicknameFieldErrors(inputId, { missing: [], corrections: [], failed: false }));

if (errors.length || hasLocalStudentErrors || hasLocalNicknameErrors) {
if (errors.length) {
showValidation(errors);
} else {
byId('validation-message').classList.remove('show');
}
setSubmitState('fail');
showToast('Corrija os campos destacados antes de postar.', 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}

if (isRecentlySubmittedReport(data)) {
showValidation(['Esta mesma postagem já foi enviada há poucos segundos. Aguarde antes de reenviar; os campos foram mantidos para conferência.']);
setSubmitState('fail');
showToast('Postagem duplicada bloqueada.', 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}

let sheetBaselineCount = 0;
try {
sheetBaselineCount = await getReportSheetMatchCount(data);
} catch (err) {
const feedback = getSheetPostFailureFeedback(err, isRectificationReport);
showValidation([feedback.validation]);
setSubmitState('fail');
showToast(feedback.toast, 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}

if (isTre1Report) {
try {
await postTre1ToMacro(data);
rememberRecentReportSubmission(data);
await confirmReportInSheet(data, sheetBaselineCount);
} catch (err) {
const feedback = getSheetPostFailureFeedback(err, false);
showValidation([feedback.validation]);
setSubmitState('fail');
showToast(feedback.toast, 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}
}

if (isTre2Report) {
try {
await postTre2ToMacro(data);
rememberRecentReportSubmission(data);
await confirmReportInSheet(data, sheetBaselineCount);
} catch (err) {
const feedback = getSheetPostFailureFeedback(err, false);
showValidation([feedback.validation]);
setSubmitState('fail');
showToast(feedback.toast, 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}
}

if (isTre3Report) {
try {
await postTre3ToMacro(data);
rememberRecentReportSubmission(data);
await confirmReportInSheet(data, sheetBaselineCount);
} catch (err) {
const feedback = getSheetPostFailureFeedback(err, false);
showValidation([feedback.validation]);
setSubmitState('fail');
showToast(feedback.toast, 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}
}

if (isGradReport) {
try {
await postGradToMacro(data);
rememberRecentReportSubmission(data);
await confirmReportInSheet(data, sheetBaselineCount);
} catch (err) {
const feedback = getSheetPostFailureFeedback(err, false);
showValidation([feedback.validation]);
setSubmitState('fail');
showToast(feedback.toast, 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}

if (shouldPostGradToForum(data)) {
try {
await postGradToForum(data);
} catch (err) {
showValidation(['A postagem foi enviada para a planilha, mas não foi possível postar a graduação no fórum. Verifique se você está logado no Forumeiros e tente novamente.']);
setSubmitState('fail');
showToast('Falha ao postar no fórum.', 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}
}
}

if (isRectificationReport) {
try {
await postRectificationToMacro(data);
rememberRecentReportSubmission(data);
await confirmReportInSheet(data, sheetBaselineCount);
} catch (err) {
const feedback = getSheetPostFailureFeedback(err, true);
showValidation([feedback.validation]);
setSubmitState('fail');
showToast(feedback.toast, 'error');
setTimeout(() => setSubmitState('idle'), 1800);
return;
}
}

byId('validation-message').classList.remove('show');
clearPostedReportFields(data);
setSubmitState('done');
if (isGradReport) setGradForumActionVisible(shouldPostGradToForum(data));
setPostActionsVisible(getPostActionKey(data));
showToast(isGradReport ? (shouldPostGradToForum(data) ? 'Postagem enviada para a planilha e para o fórum.' : 'Postagem enviada para a planilha.') : ((isTre1Report || isTre2Report || isTre3Report || isRectificationReport) ? 'Postagem enviada para a planilha.' : 'Postagem validada.'), 'success');
setTimeout(() => setSubmitState('idle'), 2200);
} finally {
reportSubmitInProgress = false;
}
}

async function postJsonNoCors(url, payload) {
if (!url) return;

const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
const timeoutId = controller ? setTimeout(() => controller.abort(), POST_TIMEOUT_MS) : null;

try {
await fetch(url, {
method: 'POST',
mode: 'no-cors',
headers: {
'Content-Type': 'text/plain;charset=utf-8'
},
body: JSON.stringify(payload),
signal: controller ? controller.signal : undefined
});
} catch (err) {
if (err && err.name === 'AbortError') {
throw new Error('Tempo limite ao enviar a postagem para a planilha.');
}

throw err;
} finally {
if (timeoutId) clearTimeout(timeoutId);
}
}

async function confirmReportInSheet(data, baselineCount) {
await delay(SHEET_VERIFY_INITIAL_DELAY_MS);

for (let attempt = 0; attempt < SHEET_VERIFY_ATTEMPTS; attempt++) {
const currentCount = await getReportSheetMatchCount(data);
if (currentCount > baselineCount) return;

if (attempt < SHEET_VERIFY_ATTEMPTS - 1) {
await delay(SHEET_VERIFY_INTERVAL_MS);
}
}

throw new Error(SHEET_CONFIRMATION_ERROR);
}

async function getReportSheetMatchCount(data) {
const target = getReportSheetTarget(data);
if (!target) throw new Error('Planilha de confirmação não configurada.');

const rows = await fetchSheetRows(target);
return countMatchingReportRows(rows, data);
}

function getReportSheetTarget(data) {
if (data.cargo === 'TRE.1') {
return { spreadsheetId: TRE1_SHEET_ID, sheetName: 'Respostas' };
}

if (data.cargo === 'TRE.2') {
return { spreadsheetId: TRE2_SHEET_ID, sheetName: 'Respostas' };
}

if (data.cargo === 'TRE.3') {
return { spreadsheetId: TRE3_SHEET_ID, sheetName: 'Respostas' };
}

if (data.cargo === 'Graduadores') {
return { spreadsheetId: GRAD_SHEET_ID, sheetName: 'Respostas' };
}

if (data.cargo === 'Retificação') {
return { spreadsheetId: RECTIFICATION_SHEET_ID, sheetName: 'Respostas' };
}

return null;
}

function fetchSheetRows({ spreadsheetId, sheetName }) {
return new Promise((resolve, reject) => {
const callbackName = `__treSheetCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
const timeoutId = setTimeout(() => {
cleanup();
reject(new Error('Tempo limite ao acessar a planilha.'));
}, 15000);
const script = document.createElement('script');
const query = `out:json;responseHandler:${callbackName}`;

function cleanup() {
clearTimeout(timeoutId);
delete window[callbackName];
script.remove();
}

window[callbackName] = response => {
cleanup();

if (!response || response.status !== 'ok' || !response.table) {
reject(new Error('A planilha não retornou dados para confirmação.'));
return;
}

resolve((response.table.rows || []).map(row => (row.c || []).map(getSheetCellText)));
};

script.onerror = () => {
cleanup();
reject(new Error('Não foi possível acessar a planilha para confirmação.'));
};

script.src = `https://docs.google.com/spreadsheets/d/${encodeURIComponent(spreadsheetId)}/gviz/tq?tqx=${encodeURIComponent(query)}&sheet=${encodeURIComponent(sheetName)}&_=${Date.now()}`;
document.head.appendChild(script);
});
}

function getSheetCellText(cell) {
if (!cell) return '';
if (cell.f !== undefined && cell.f !== null) return String(cell.f);
if (cell.v !== undefined && cell.v !== null) return String(cell.v);
return '';
}

function countMatchingReportRows(rows, data) {
const terms = getReportVerificationTerms(data)
.map(normalizeSheetVerificationText)
.filter(Boolean);

if (!terms.length) return 0;

return rows.filter(row => {
const rowText = normalizeSheetVerificationText(row.join(' '));
return terms.every(term => rowText.includes(term));
}).length;
}

function getReportVerificationTerms(data) {
const terms = [data.applicator];

if (data.cargo === 'TRE.1') {
terms.push(data.course, data.place);
addNicknameTerms(terms, data.students);
return terms;
}

if (data.cargo === 'TRE.2') {
terms.push(data.destination);

if (data.destination === 'Treinamento Rápido') {
terms.push(data.training, data.place);
addNicknameTerms(terms, data.participants);
}

if (data.destination === 'Tutoria') {
terms.push(data.course, data.tutoredTre1);
addNicknameTerms(terms, data.students);
}

if (data.destination === 'Mensagem Privada') {
addNicknameTerms(terms, data.trainers);
}

return terms;
}

if (data.cargo === 'TRE.3') {
terms.push(data.destination);

if (data.destination === 'Capacitação de Wireds') {
terms.push(data.trainedPolice, data.isTrainer, data.verdict);
}

if (data.destination === 'Treinamento Convencional') {
addNicknameTerms(terms, data.assistants);
terms.push(data.initialAttachment, data.finalAttachment);
}

return terms;
}

if (data.cargo === 'Graduadores') {
terms.push(data.graduationType);
addNicknameTerms(terms, data.recipients);
return terms;
}

if (data.cargo === 'Retificação') {
terms.push(data.sheet, data.row, data.error, data.correction);
return terms;
}

return terms;
}

function addNicknameTerms(terms, value) {
if (Array.isArray(value)) {
value.forEach(item => terms.push(item));
return;
}

parseNicknameList(value).forEach(item => terms.push(item));
}

function normalizeSheetVerificationText(value) {
return String(value || '')
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, '')
.replace(/\s+/g, ' ')
.trim()
.toLowerCase();
}

function getSheetPostFailureFeedback(err, isRectification) {
const item = isRectification ? 'retificação' : 'postagem';

if (err && err.message === SHEET_CONFIRMATION_ERROR) {
return {
validation: `A ${item} foi enviada, mas a linha ainda não apareceu na planilha. Por segurança, os campos foram mantidos. Confira a planilha antes de reenviar.`,
toast: isRectification ? 'Retificação não confirmada na planilha.' : 'Postagem não confirmada na planilha.'
};
}

return {
validation: `Não foi possível confirmar a ${item} na planilha. Por segurança, os campos foram mantidos. Confira sua conexão e tente novamente.`,
toast: isRectification ? 'Falha ao confirmar a retificação.' : 'Falha ao confirmar a postagem.'
};
}

function isRecentlySubmittedReport(data) {
const recent = getRecentReportSubmissions();
const now = Date.now();
pruneRecentReportSubmissions(recent, now);

const lastSubmittedAt = Number(recent[getReportFingerprint(data)] || 0);
return lastSubmittedAt && now - lastSubmittedAt <= DUPLICATE_SUBMISSION_WINDOW_MS;
}

function rememberRecentReportSubmission(data) {
const recent = getRecentReportSubmissions();
const now = Date.now();
pruneRecentReportSubmissions(recent, now);
recent[getReportFingerprint(data)] = now;

try {
localStorage.setItem(RECENT_SUBMISSIONS_STORAGE_KEY, JSON.stringify(recent));
} catch (err) {}
}

function getRecentReportSubmissions() {
try {
const parsed = JSON.parse(localStorage.getItem(RECENT_SUBMISSIONS_STORAGE_KEY) || '{}');
return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
} catch (err) {
return {};
}
}

function pruneRecentReportSubmissions(recent, now) {
Object.keys(recent).forEach(key => {
if (now - Number(recent[key] || 0) > DUPLICATE_SUBMISSION_WINDOW_MS) {
delete recent[key];
}
});
}

function getReportFingerprint(data) {
return `${data.cargo}:${hashString(JSON.stringify(data))}`;
}

function hashString(value) {
let hash = 5381;

for (let index = 0; index < value.length; index++) {
hash = ((hash << 5) + hash) ^ value.charCodeAt(index);
}

return (hash >>> 0).toString(36);
}

async function postTre1ToMacro(data) {
await postJsonNoCors(TRE1_MACRO_URL, createTre1MacroPayload(data));
}

function createTre1MacroPayload(data) {
return {
postedAt: getBrasiliaDateTimeLocalValue(),
applicator: data.applicator,
course: data.course,
startTime: data.startTime,
place: data.place,
students: data.students,
verdicts: data.verdicts,
watchedByTre2: data.watchedByTre2,
comments: data.comments
};
}

async function postTre2ToMacro(data) {
await postJsonNoCors(TRE2_MACRO_URL, createTre2MacroPayload(data));
}

function createTre2MacroPayload(data) {
const payload = {
postedAt: getBrasiliaDateTimeLocalValue(),
destination: data.destination,
applicator: data.applicator,
attachments: data.attachments || '',
comments: data.comments || ''
};

if (data.destination === 'Treinamento Rápido') {
payload.training = data.training;
payload.participants = data.participants;
payload.place = data.place;
}

if (data.destination === 'Tutoria') {
payload.course = data.course;
payload.tutoredTre1 = data.tutoredTre1;
payload.students = data.students;
}

if (data.destination === 'Mensagem Privada') {
payload.trainers = data.trainers;
}

return payload;
}

async function postTre3ToMacro(data) {
await postJsonNoCors(TRE3_MACRO_URL, createTre3MacroPayload(data));
}

function createTre3MacroPayload(data) {
const payload = {
postedAt: getBrasiliaDateTimeLocalValue(),
destination: data.destination,
applicator: data.applicator,
comments: data.comments || ''
};

if (data.destination === 'Capacitação de Wireds') {
payload.trainedPolice = data.trainedPolice;
payload.isTrainer = data.isTrainer;
payload.verdict = data.verdict;
payload.attachments = data.attachments || '';
}

if (data.destination === 'Treinamento Convencional') {
payload.startTime = data.startTime;
payload.assistants = data.assistants;
payload.initialAttachment = data.initialAttachment;
payload.finalAttachment = data.finalAttachment;
}

return payload;
}

async function postGradToMacro(data) {
await postJsonNoCors(GRAD_MACRO_URL, createGradMacroPayload(data));
}

function createGradMacroPayload(data) {
return {
postedAt: getBrasiliaDateTimeLocalValue(),
applicator: data.applicator,
graduationType: data.graduationType,
recipients: data.recipients,
approved: data.approved,
comments: data.comments || ''
};
}

function shouldPostGradToForum(data) {
return data.cargo === 'Graduadores' && data.approved.length > 0;
}

function setGradForumActionVisible(visible) {
const forumAction = byId('grad-forum-action');
if (forumAction) forumAction.classList.toggle('hidden', !visible);

const actions = byId('grad-post-actions');
if (actions) actions.classList.toggle('two-actions', !visible);
}

function createGradForumBbcode(data) {
return '[font=Trebuchet MS][b][color=#b30000]APROVAÇÃO EM GRADUAÇÃO[/color][/b]\n\n' +
'[b]Nickname do Graduador:[/b] ' + data.applicator + '\n' +
'[b]Membro Graduado:[/b] ' + data.approved.join(' / ') + '\n' +
'[b]Tipo de Graduação:[/b] ' + data.graduationType + '[/font]';
}

if (typeof window.animarAssinatura !== 'function') {
window.animarAssinatura = function() {};
}

if (typeof window.abrirModal !== 'function') {
window.abrirModal = function(titulo, mensagem) {
showToast(mensagem || titulo, 'success');
};
}

if (typeof window.modalSucesso !== 'function') {
window.modalSucesso = function(mensagem) {
showToast(mensagem, 'success');
};
}

function isForumOrigin() {
return location.hostname === FORUM_HOST;
}

function forumPostResponseHasError(responseText = '') {
const text = String(responseText).toLowerCase();
return text.includes('você deve estar registrado')
|| text.includes('voce deve estar registrado')
|| text.includes('você precisa estar conectado')
|| text.includes('voce precisa estar conectado')
|| text.includes('you must be registered')
|| text.includes('you need to be logged')
|| text.includes('modo selecionado não existe')
|| text.includes('modo selecionado nao existe');
}

function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

function newestUrl(topicId) {
const origin = isForumOrigin() ? location.origin : FORUM_BASE_URL;
return `${origin}/t${topicId}-?view=newest`;
}

async function postToForumTopic(topicId, bbcodeMessage) {
if (!isForumOrigin()) {
throw new Error(`Abra a ferramenta em ${FORUM_BASE_URL} para postar no fórum.`);
}

const replyUrl = `/post?mode=reply&t=${encodeURIComponent(topicId)}&_t=${Date.now()}`;
const replyPage = await fetch(replyUrl, {
credentials: 'same-origin',
headers: { 'Cache-Control': 'no-store, no-cache' },
cache: 'no-store'
});

if (!replyPage.ok) {
throw new Error(`Falha ao abrir resposta (status ${replyPage.status}).`);
}

const html = await replyPage.text();
const dom = new DOMParser().parseFromString(html, 'text/html');
const form = dom.querySelector('form textarea[name="message"]')?.closest('form');

if (!form) {
const errorMsg = dom.body?.innerText || '';
const lowerError = errorMsg.toLowerCase();
if (lowerError.includes('flood') || lowerError.includes('mensagens')) {
throw new Error('Flood Control detectado: aguarde.');
}
if (lowerError.includes('conectado') || lowerError.includes('registrado') || lowerError.includes('login')) {
throw new Error('Sessão do fórum não encontrada. Faça login no Forumeiros e tente novamente.');
}
throw new Error('Formulário de resposta do Forumeiros não encontrado.');
}

const formData = new FormData();
form.querySelectorAll('input, textarea, select').forEach(el => {
const name = el.getAttribute('name');
if (!name) return;
if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
if (el.tagName.toLowerCase() === 'textarea' && name === 'message') return;

if (el.tagName.toLowerCase() === 'select' && el.multiple) {
Array.from(el.selectedOptions).forEach(option => formData.append(name, option.value || ''));
return;
}

formData.append(name, el.value || '');
});

formData.set('message', bbcodeMessage);
formData.set('post', '1');
formData.set('mode', 'reply');
formData.set('t', String(topicId));

const action = form.getAttribute('action') || '/post';
const actionUrl = new URL(action, location.origin);
const postResp = await fetch(actionUrl.pathname + actionUrl.search, {
method: 'POST',
body: formData,
credentials: 'same-origin'
});

if (!postResp.ok) {
throw new Error(`Erro no servidor (status ${postResp.status}).`);
}

const responseText = await postResp.text();
if (forumPostResponseHasError(responseText)) {
throw new Error('O Forumeiros retornou uma página de login/erro.');
}

return responseText;
}

// 1. Função de postagem no fórum (Forumeiros)
async function postar(bbcode, sufixo) {
byId('fa-generated-message').value = bbcode;
animarAssinatura(sufixo);
abrirModal('Enviando', 'Aguarde, postando o requerimento...');

await delay(500);
console.debug('[TRE Grad Fórum] BBCode gerado:', bbcode);
await postToForumTopic(topico, byId('fa-generated-message').value.trim());
modalSucesso('Requerimento postado com sucesso!');
}

async function postGradToForum(data) {
if (!shouldPostGradToForum(data)) return;
await postar(createGradForumBbcode(data), 'grad_aprovado');
}

function goToGradForumPost() {
location.href = newestUrl(topico);
}

async function postRectificationToMacro(data) {
await postJsonNoCors(RECTIFICATION_MACRO_URL, createRectificationMacroPayload(data));
}

function createRectificationMacroPayload(data) {
return {
postedAt: getBrasiliaDateTimeLocalValue(),
applicator: data.applicator,
sheet: data.sheet,
row: data.row,
error: data.error,
correction: data.correction
};
}

function collectReportData() {
if (TRE_STATE.page === 'retificacao') return collectRectificationReportData();
if (TRE_STATE.cargo === 'tre2') return collectTre2ReportData();
if (TRE_STATE.cargo === 'tre3') return collectTre3ReportData();
if (TRE_STATE.cargo === 'graduadores') return collectGradReportData();
return collectTre1ReportData();
}

function collectRectificationReportData() {
return {
cargo: 'Retificação',
applicator: byId('applicator-nick').value.trim(),
sheet: byId('rectification-sheet').value,
row: byId('rectification-row').value.trim(),
error: byId('rectification-error').value.trim(),
correction: byId('rectification-correction').value.trim()
};
}

function collectTre1ReportData() {
const students = parseStudents();
const verdicts = [];

for (let index = 0; index < MAX_STUDENTS; index++) {
const verdict = document.querySelector(`[data-verdict-index="${index}"]`);
const proof = document.querySelector(`[data-proof-index="${index}"]`);
verdicts.push({
name: students[index] || '',
verdict: verdict ? verdict.value : 'Não houve',
proof: proof ? proof.value.trim() : ''
});
}

return {
cargo: 'TRE.1',
applicator: byId('applicator-nick').value.trim(),
course: TRE_STATE.course,
startTime: byId('start-time').value,
place: byId('application-place').value,
students,
verdicts,
watchedByTre2: byId('tre2-watch').value,
comments: byId('comments').value.trim()
};
}

function validateReport(data) {
if (data.cargo === 'Retificação') return validateRectificationReport(data);
if (data.cargo === 'TRE.2') return validateTre2Report(data);
if (data.cargo === 'TRE.3') return validateTre3Report(data);
if (data.cargo === 'Graduadores') return validateGradReport(data);
return validateTre1Report(data);
}

function validateRectificationReport(data) {
const errors = [];
if (!data.applicator) errors.push('Informe o seu nickname.');
if (!data.sheet) errors.push('Selecione a planilha/página que precisa ser corrigida.');
if (!data.row) errors.push('Informe a linha da planilha.');
if (!data.error) errors.push('Descreva o erro que precisa ser corrigido.');
if (!data.correction) errors.push('Descreva a correção necessária.');
return errors;
}

function getTre1MinimumDurationRule(data) {
const courseRules = TRE1_MIN_DURATION_MINUTES[data.course];
if (!courseRules) return null;

const selectedVerdicts = data.verdicts
.filter(student => student.name)
.map(student => student.verdict)
.filter(Boolean);

if (!selectedVerdicts.length || selectedVerdicts.length !== data.students.length) return null;

const allDropped = selectedVerdicts.every(verdict => verdict === 'Caiu');

return {
minutes: allDropped ? courseRules.dropped : courseRules.standard,
label: allDropped ? 'com queda' : 'com aprovado/reprovado'
};
}

function getTre1DurationError(data) {
if (!data.course || !data.startTime) return '';

const durationRule = getTre1MinimumDurationRule(data);
if (!durationRule) return '';

const elapsedMilliseconds = getBrasiliaElapsedMillisecondsSince(data.startTime);
if (!Number.isFinite(elapsedMilliseconds)) return 'Informe uma data/horário de início válido.';
if (elapsedMilliseconds < 0) return 'A data/horário de início não pode estar no futuro.';

const minimumMilliseconds = durationRule.minutes * 60 * 1000;
if (elapsedMilliseconds >= minimumMilliseconds) return '';

const remainingMinutes = Math.max(1, Math.ceil((minimumMilliseconds - elapsedMilliseconds) / (60 * 1000)));
return `${data.course} ${durationRule.label} deve ter no mínimo ${formatMinuteDuration(durationRule.minutes)} de duração. Aguarde mais ${formatMinuteDuration(remainingMinutes)} antes de postar.`;
}

function validateTre1Report(data) {
const errors = [];
if (!data.applicator) errors.push('Informe o seu nickname.');
if (!data.course) errors.push('Selecione a aula CAS ou CFS.');
if (!data.startTime) errors.push('Informe a data/horário de início.');
if (!data.place) errors.push('Selecione o local de aplicação.');
if (!data.students.length) errors.push('Informe o nickname de pelo menos um aluno.');
if (data.students.length > MAX_STUDENTS) errors.push(`Só é permitido registrar até ${MAX_STUDENTS} alunos.`);
if (!data.watchedByTre2) errors.push('Informe se o curso foi acompanhado por um TRE.2.');
const placeError = getApplicationPlaceError(data.course, data.students.length, data.place, data.watchedByTre2);
if (placeError) errors.push(placeError);

data.verdicts.forEach((student, index) => {
if (!student.name) return;
if (!student.verdict) errors.push(`Selecione o veredito do Aluno ${index + 1}.`);
if (student.verdict === 'Caiu' && !student.proof) {
errors.push(`Insira o link de comprovação do Aluno ${index + 1}.`);
}
});

const durationError = getTre1DurationError(data);
if (durationError) errors.push(durationError);

return errors;
}

function collectTre2ReportData() {
const destination = byId('tre2-destination').value;
const data = {
cargo: 'TRE.2',
applicator: byId('applicator-nick').value.trim(),
destination
};

if (destination === 'Treinamento Rápido') {
return {
...data,
training: byId('tre2-training').value,
participants: byId('tre2-training-participants').value.trim(),
attachments: byId('tre2-training-attachments').value.trim(),
place: byId('tre2-training-place').value,
comments: byId('tre2-training-comments').value.trim()
};
}

if (destination === 'Tutoria') {
return {
...data,
tutoredTre1: byId('tre2-tutored-tre1').value.trim(),
course: byId('tre2-tutoria-course').value,
students: byId('tre2-tutoria-students').value.trim(),
attachments: byId('tre2-tutoria-attachments').value.trim(),
comments: byId('tre2-tutoria-comments').value.trim()
};
}

if (destination === 'Mensagem Privada') {
return {
...data,
trainers: byId('tre2-mp-trainers').value.trim(),
attachments: byId('tre2-mp-attachments').value.trim(),
comments: byId('tre2-mp-comments').value.trim()
};
}

return data;
}

function validateTre2Report(data) {
const errors = [];
if (!data.applicator) errors.push('Informe o seu nickname.');
if (!data.destination) errors.push('Selecione o destino do registro.');

if (data.destination === 'Treinamento Rápido') {
const participants = parseNicknameList(data.participants);
if (!data.training) errors.push('Selecione o treinamento.');
if (!data.participants) errors.push('Informe os policiais participantes.');
if (data.training && TRE2_GROUP_REQUIRED_TRAININGS.includes(data.training) && participants.length < 2) {
errors.push(`${data.training} não permite aplicação individual; informe pelo menos dois policiais participantes.`);
}
if (!data.attachments) errors.push('Insira os anexos do treinamento.');
if (!data.place) errors.push('Selecione o local de aplicação.');
if (data.training && data.place && !getAllowedTre2TrainingPlaces(data.training).includes(data.place)) {
errors.push(`${data.training} deve ser aplicado na Base de Treinos ou nas Salas de Treino 01 a 05.`);
}
}

if (data.destination === 'Tutoria') {
if (!data.tutoredTre1) errors.push('Informe o TRE.1 tutorado.');
if (!data.course) errors.push('Selecione o curso da tutoria.');
if (!data.students) errors.push('Informe o nickname do(s) aluno(s).');
if (!data.attachments) errors.push('Insira os anexos de confirmação.');
}

if (data.destination === 'Mensagem Privada') {
if (!data.trainers) errors.push('Informe o nickname do(s) treinador(es).');
if (!data.attachments) errors.push('Insira o(s) anexo(s).');
}

return errors;
}

function collectTre3ReportData() {
const destination = byId('tre3-destination').value;
const data = {
cargo: 'TRE.3',
applicator: byId('applicator-nick').value.trim(),
destination
};

if (destination === 'Capacitação de Wireds') {
return {
...data,
trainedPolice: byId('tre3-wired-police').value.trim(),
isTrainer: byId('tre3-wired-is-trainer').value,
verdict: byId('tre3-wired-verdict').value,
attachments: byId('tre3-wired-attachments').value.trim(),
comments: byId('tre3-wired-comments').value.trim()
};
}

if (destination === 'Treinamento Convencional') {
return {
...data,
assistants: byId('tre3-conventional-assistants').value.trim(),
initialAttachment: byId('tre3-conventional-initial-attachment').value.trim(),
finalAttachment: byId('tre3-conventional-final-attachment').value.trim(),
startTime: byId('tre3-conventional-start').value,
comments: byId('tre3-conventional-comments').value.trim()
};
}

return data;
}

function validateTre3Report(data) {
const errors = [];
if (!data.applicator) errors.push('Informe o seu nickname.');
if (!data.destination) errors.push('Selecione o destino do registro.');

if (data.destination === 'Capacitação de Wireds') {
if (!data.trainedPolice) errors.push('Informe o policial capacitado.');
if (!data.isTrainer) errors.push('Informe se é treinador.');
if (!data.verdict) errors.push('Selecione o veredito.');
if (!data.attachments) errors.push('Insira os anexos de confirmação.');
}

if (data.destination === 'Treinamento Convencional') {
if (!data.assistants) errors.push('Informe o nickname dos auxiliares.');
if (!data.initialAttachment) errors.push('Insira o anexo inicial.');
if (!data.finalAttachment) errors.push('Insira o anexo final.');
if (!data.startTime) errors.push('Informe o início do treinamento.');
}

return errors;
}

function collectGradReportData() {
return {
cargo: 'Graduadores',
applicator: byId('applicator-nick').value.trim(),
graduationType: byId('grad-type').value,
recipients: byId('grad-recipients').value.trim(),
approved: collectGradApprovedTrainers(),
comments: byId('grad-comments').value.trim()
};
}

function validateGradReport(data) {
const errors = [];
if (!data.applicator) errors.push('Informe o seu nickname.');
if (!data.graduationType) errors.push('Selecione o tipo de graduação.');
if (!data.recipients) errors.push('Informe os treinadores que receberam a graduação.');
return errors;
}

function getMatchingApplicatorStudents(applicator, students) {
const applicatorKey = normalizeNick(applicator);
if (!applicatorKey) return [];

return students.filter(student => normalizeNick(student) === applicatorKey);
}

function getTre2NicknameFieldNames(inputId) {
return parseNicknameList(byId(inputId)?.value || '');
}

function scheduleTre2NicknameCheck(inputId) {
clearTimeout(tre2NicknameCheckTimer);
tre2NicknameCheckRequestId++;
latestTre2NicknameChecks[inputId] = { missing: [], corrections: [], failed: false };
applyTre2NicknameFieldErrors(inputId, latestTre2NicknameChecks[inputId]);
}

function applyTre2NicknameFieldErrors(inputId, nicknameCheck = latestTre2NicknameChecks[inputId] || { missing: [], corrections: [], failed: false }) {
const nicknames = getTre2NicknameFieldNames(inputId);
const messages = [];

nicknames.forEach(name => {
messages.push(...getTre2NicknameMessages(name, nicknameCheck));
});

setTre2NicknameFieldMessages(inputId, messages);
return messages.length > 0;
}

function getTre2NicknameMessages(name, nicknameCheck = { missing: [], corrections: [], failed: false }) {
const messages = [];
const applicator = byId('applicator-nick').value || '';

if (getMatchingApplicatorStudents(applicator, [name]).length) {
messages.push(`O nickname não pode ser o mesmo do aplicador: ${name}`);
}

return messages;
}

function setTre2NicknameFieldMessages(inputId, messages) {
const box = document.querySelector(`[data-tre2-nick-error-for="${inputId}"]`);
if (!box) return;

box.innerHTML = messages.map(message => `<div>${escapeHtml(message)}</div>`).join('');
box.classList.toggle('hidden', !messages.length);
}

function scheduleStudentNicknameCheck(students = parseStudents()) {
clearTimeout(studentNicknameCheckTimer);
studentNicknameCheckRequestId++;
latestStudentNicknameCheck = { missing: [], corrections: [], failed: false };
applyStudentCardErrors(students, latestStudentNicknameCheck);
}

function applyStudentCardErrors(students, nicknameCheck = latestStudentNicknameCheck) {
let hasErrors = false;
const visibleStudents = students.slice(0, MAX_STUDENTS);

visibleStudents.forEach((name, index) => {
const messages = getStudentCardMessages(name, nicknameCheck);
setStudentCardMessages(index, messages);
if (messages.length) hasErrors = true;
});

return hasErrors;
}

function getStudentCardMessages(name, nicknameCheck = latestStudentNicknameCheck) {
const messages = [];
const applicator = byId('applicator-nick').value || '';

if (getMatchingApplicatorStudents(applicator, [name]).length) {
messages.push('Você não pode postar treinos/graduações em seu nome.');
}

return messages;
}

function setStudentCardMessages(index, messages) {
const box = document.querySelector(`[data-student-error-index="${index}"]`);
if (!box) return;

const row = box.closest('.student-row');
const verdictSelect = row.querySelector('[data-verdict-index]');
const shouldBlockVerdict = messages.some(message => message.includes('mesmo nickname do aplicador'));

if (verdictSelect) {
verdictSelect.disabled = shouldBlockVerdict;
if (shouldBlockVerdict) verdictSelect.value = '';
}

box.innerHTML = messages.map(message => `<div>${escapeHtml(message)}</div>`).join('');
box.classList.toggle('hidden', !messages.length);
row.classList.toggle('has-error', messages.length > 0);
row.classList.toggle('block-verdict', shouldBlockVerdict);
}

function cleanNickname(nickname) {
return String(nickname || '')
.normalize('NFKC')
.replace(/[\u200B-\u200D\uFEFF]/g, '')
.trim();
}

function normalizeNick(nickname) {
return cleanNickname(nickname)
.replace(/\s+/g, '')
.toLowerCase();
}

function showValidation(errors) {
const box = byId('validation-message');
box.innerHTML = errors.map(error => `<div>${escapeHtml(error)}</div>`).join('');
box.classList.add('show');
}

function setSubmitState(state) {
const shouldLock = state === 'loading' || state === 'done';
[byId('btn_submit'), byId('btn_submit_tre2'), byId('btn_submit_tre3'), byId('btn_submit_grad'), byId('btn_submit_rectification')].filter(Boolean).forEach(btn => {
btn.classList.remove('loading', 'done', 'fail');
btn.disabled = shouldLock;
if (state !== 'idle') btn.classList.add(state);
});
setReportFieldsDisabled(shouldLock);
}

function setReportFieldsDisabled(disabled) {
if (!disabled) {
document.querySelectorAll('[data-submit-locked="true"]').forEach(control => {
const shouldStayDisabled = control.matches('[data-verdict-index]') && control.closest('.block-verdict');
control.disabled = shouldStayDisabled || control.dataset.submitWasDisabled === 'true';
delete control.dataset.submitLocked;
delete control.dataset.submitWasDisabled;
});
return;
}

const activeArea = getActivePostingArea();
if (!activeArea) return;

activeArea.querySelectorAll('input, select, textarea, button').forEach(control => {
if (control.classList.contains('btn-send') || control.dataset.submitLocked === 'true') return;
control.dataset.submitLocked = 'true';
control.dataset.submitWasDisabled = control.disabled ? 'true' : 'false';
control.disabled = true;
});
}

function getActivePostingArea() {
return ['posting-area', 'tre2-posting-area', 'tre3-posting-area', 'graduadores-posting-area', 'rectification-posting-area']
.map(id => byId(id))
.find(area => area && !area.classList.contains('hidden'));
}

function clearFields(ids) {
ids.forEach(id => {
const field = byId(id);
if (field) field.value = '';
});
}

function clearPostedReportFields(data) {
if (data.cargo === 'TRE.1') clearTre1PostingFields();
if (data.cargo === 'TRE.2') clearTre2PostingFields();
if (data.cargo === 'TRE.3') clearTre3PostingFields();
if (data.cargo === 'Graduadores') clearGradPostingFields();
if (data.cargo === 'Retificação') clearRectificationPostingFields();
}

function clearTre1PostingFields() {
TRE_STATE.course = null;
latestStudentNicknameCheck = { missing: [], corrections: [], failed: false };
clearTimeout(studentNicknameCheckTimer);
studentNicknameCheckRequestId++;

byId('course-group').querySelectorAll('.sel-btn').forEach(btn => btn.classList.remove('active'));
['student-nicks', 'application-place', 'tre2-watch', 'comments'].forEach(id => {
const field = byId(id);
if (field) field.value = '';
});

setDefaultStartTime();
updateApplicationPlaceOptions([]);
renderStudents();
}

function resetTre1Posting() {
clearTre1PostingFields();
setPostActionsVisible('');
byId('validation-message').classList.remove('show');
setSubmitState('idle');
}

function clearTre2PostingFields() {
latestTre2NicknameChecks = {};
clearTimeout(tre2NicknameCheckTimer);
tre2NicknameCheckRequestId++;

clearFields([
'tre2-destination',
'tre2-training',
'tre2-training-participants',
'tre2-training-attachments',
'tre2-training-place',
'tre2-training-comments',
'tre2-tutored-tre1',
'tre2-tutoria-course',
'tre2-tutoria-students',
'tre2-tutoria-attachments',
'tre2-tutoria-comments',
'tre2-mp-trainers',
'tre2-mp-attachments',
'tre2-mp-comments'
]);

clearInactiveTre2NicknameFieldErrors();
renderTre2Destination();
}

function resetTre2Posting() {
clearTre2PostingFields();
setPostActionsVisible('');
byId('validation-message').classList.remove('show');
setSubmitState('idle');
}

function clearTre3PostingFields() {
latestTre2NicknameChecks = {};
clearTimeout(tre2NicknameCheckTimer);
tre2NicknameCheckRequestId++;

clearFields([
'tre3-destination',
'tre3-wired-police',
'tre3-wired-is-trainer',
'tre3-wired-verdict',
'tre3-wired-attachments',
'tre3-wired-comments',
'tre3-conventional-assistants',
'tre3-conventional-start',
'tre3-conventional-initial-attachment',
'tre3-conventional-final-attachment',
'tre3-conventional-comments'
]);

clearInactiveTre3NicknameFieldErrors();
renderTre3Destination();
}

function resetTre3Posting() {
clearTre3PostingFields();
setPostActionsVisible('');
byId('validation-message').classList.remove('show');
setSubmitState('idle');
}

function clearGradPostingFields() {
latestTre2NicknameChecks = {};
clearTimeout(tre2NicknameCheckTimer);
tre2NicknameCheckRequestId++;

clearFields(['grad-type', 'grad-recipients', 'grad-comments']);
clearInactiveGradNicknameFieldErrors();
renderGradApprovedCards();
}

function resetGradPosting() {
clearGradPostingFields();
setPostActionsVisible('');
byId('validation-message').classList.remove('show');
setSubmitState('idle');
}

function clearRectificationPostingFields() {
clearFields(['rectification-sheet', 'rectification-row', 'rectification-error', 'rectification-correction']);
}

function resetRectificationPosting() {
clearRectificationPostingFields();
setPostActionsVisible('');
byId('validation-message').classList.remove('show');
setSubmitState('idle');
}

function showToast(message, type) {
const toast = byId('toast');
const icon = toast.querySelector('i');
byId('toast-text').textContent = message;
toast.classList.remove('toast-error', 'toast-success', 'show');
toast.classList.add(type === 'success' ? 'toast-success' : 'toast-error');
icon.className = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
requestAnimationFrame(() => toast.classList.add('show'));
setTimeout(() => toast.classList.remove('show'), 3600);
}

function escapeHtml(value) {
return String(value)
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '&quot;')
.replace(/'/g, '&#039;');
}

async function initializeApp() {
document.getElementById('ano').textContent = new Date().getFullYear();
updateApplicatorHead();
setDefaultStartTime();
renderStudents();
renderTre2Destination();
renderTre3Destination();
await initializeAccessControl();
applyDirectLinkFromUrl();
window.addEventListener('hashchange', applyDirectLinkFromUrl);
}

initializeApp();
