import initC2pa, {
  configureTelemetry,
  supportedMimeTypes,
  verify,
} from '@encypherai/c2pa';
import './style.css';

const FAILURE_ENDPOINT = 'https://api.encypher.com/api/v1/sdk-validation-failures';
const SAMPLE_ASSETS = {
  signed: {
    url: './samples/signed-test.jpg',
    mime: 'image/jpeg',
    fileName: 'signed-photo.jpg',
    name: 'Signed photo',
  },
  changed: {
    url: './samples/changed-sample.jpg',
    mime: 'image/jpeg',
    fileName: 'changed-photo.jpg',
    name: 'Changed photo',
  },
  unsigned: {
    url: './samples/unsigned-sample.svg',
    mime: 'image/svg+xml',
    fileName: 'unsigned-art.svg',
    name: 'Art with no credential',
  },
};
const MIME_BY_EXTENSION = {
  aac: 'audio/aac',
  aiff: 'audio/aiff',
  avi: 'video/x-msvideo',
  avif: 'image/avif',
  bmp: 'image/bmp',
  css: 'text/css',
  csv: 'text/csv',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  dng: 'image/x-adobe-dng',
  epub: 'application/epub+zip',
  flac: 'audio/flac',
  gif: 'image/gif',
  heic: 'image/heic',
  heif: 'image/heif',
  html: 'text/html',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  js: 'text/javascript',
  json: 'application/json',
  jxl: 'image/jxl',
  m4a: 'audio/mp4',
  m4v: 'video/mp4',
  md: 'text/markdown',
  mkv: 'video/x-matroska',
  mov: 'video/quicktime',
  mp3: 'audio/mpeg',
  mp4: 'video/mp4',
  odt: 'application/vnd.oasis.opendocument.text',
  pdf: 'application/pdf',
  png: 'image/png',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  svg: 'image/svg+xml',
  tif: 'image/tiff',
  tiff: 'image/tiff',
  toml: 'application/toml',
  ttf: 'font/ttf',
  txt: 'text/plain',
  wav: 'audio/wav',
  webm: 'video/webm',
  webp: 'image/webp',
  woff: 'font/woff',
  woff2: 'font/woff2',
  xhtml: 'application/xhtml+xml',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xml: 'application/xml',
  yaml: 'application/yaml',
  yml: 'application/yaml',
  zip: 'application/zip',
};

let sdkReady;
let supportedMimes = new Set();
let activeObjectUrl = null;
let currentReport = null;
let currentInputName = '';
let currentMimeType = '';

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Content Provenance home">
      <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
      <span>Content Provenance</span>
    </a>
    <div class="header-meta">
      <span>Open file checker</span>
      <a href="https://encypher.com" rel="noopener">Powered by Encypher</a>
    </div>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div>
        <div class="eyebrow"><span class="pulse-dot"></span> Private browser check</div>
        <h1 id="hero-title">See where a file came from.</h1>
      </div>
      <p class="hero-copy">Drop in a file or paste text. We check its Content Credential on this device. We do not upload it.</p>
    </section>

    <section class="verifier-shell" aria-labelledby="verify-heading">
      <div class="shell-heading">
        <div>
          <span class="step-label">01 / Check</span>
          <h2 id="verify-heading">Check a file or text</h2>
        </div>
        <span class="local-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3m-11 0h12v10H6z" /></svg> Stays on your device</span>
      </div>

      <div class="unified-input">
        <div id="file-panel">
          <input id="file-input" class="visually-hidden" type="file" />
          <label class="drop-zone" for="file-input" id="drop-zone">
            <span class="upload-icon" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 22V6m0 0-6 6m6-6 6 6M6 20v6h20v-6" /></svg></span>
            <strong>Drop a file here</strong>
            <span>or pick one from your device</span>
            <small>We do not upload it. Big files may take more time.</small>
          </label>
        </div>

        <div class="input-divider" aria-hidden="true"><span>or</span></div>

        <div id="text-panel">
          <label class="text-label" for="text-input">Paste text</label>
          <textarea id="text-input" rows="9" placeholder="Paste text to check..."></textarea>
          <button class="primary-button" id="verify-text" type="button">Check text</button>
          <small>The text stays on this device.</small>
        </div>
      </div>
      <div class="sample-strip" aria-labelledby="sample-title">
        <div class="sample-heading"><span id="sample-title">Try a sample</span><small>Click one, or drag it into the box.</small></div>
        <div class="sample-list">
          <button class="sample-card" type="button" draggable="true" data-sample="signed">
            <img src="./samples/signed-test.jpg" alt="" />
            <span><strong>Signed photo</strong><small>Has a credential</small></span>
          </button>
          <button class="sample-card" type="button" draggable="true" data-sample="changed">
            <img src="./samples/changed-sample.jpg" alt="" />
            <span><strong>Changed photo</strong><small>File was changed</small></span>
          </button>
          <button class="sample-card" type="button" draggable="true" data-sample="unsigned">
            <img src="./samples/unsigned-sample.svg" alt="" />
            <span><strong>Sample art</strong><small>No credential</small></span>
          </button>
        </div>
      </div>
    </section>

    <section class="processing" id="processing" aria-live="polite" hidden>
      <span class="processing-ring" aria-hidden="true"></span>
      <div><strong>Checking on this device</strong><span id="processing-name"></span></div>
    </section>

    <section class="result-shell" id="result-shell" aria-live="polite" hidden>
      <div id="result-content"></div>
    </section>

    <section class="how-it-works" aria-labelledby="how-title">
      <div class="section-number">02</div>
      <div>
        <span class="step-label">What we check</span>
        <h2 id="how-title">A proof check, not a truth score.</h2>
      </div>
      <div class="explain-grid">
        <article><span>1</span><h3>Find</h3><p>We look for a Content Credential in the file.</p></article>
        <article><span>2</span><h3>Check</h3><p>We check the seal, the file, and where it came from.</p></article>
        <article><span>3</span><h3>Show</h3><p>We show what passed and what failed.</p></article>
      </div>
    </section>
  </main>

  <footer>
    <div><strong>Content Provenance</strong><span>Operated by Encypher Corporation</span></div>
    <p>Independent standards-based verification. Not affiliated with or operated by the C2PA coalition.</p>
    <nav aria-label="Footer">
      <a href="https://github.com/encypherai/encypher-c2pa" rel="noopener">Open-source SDK</a>
      <a href="https://encypher.com/privacy" rel="noopener">Privacy</a>
      <a href="https://api.encypher.com/docs" rel="noopener">Developer API</a>
    </nav>
  </footer>
`;

const fileInput = document.querySelector('#file-input');
const dropZone = document.querySelector('#drop-zone');
const resultShell = document.querySelector('#result-shell');
const resultContent = document.querySelector('#result-content');
const processing = document.querySelector('#processing');

sdkReady = initC2pa().then(() => {
  supportedMimes = new Set(supportedMimeTypes());
  configureTelemetry(false);
});


fileInput.addEventListener('change', () => {
  if (fileInput.files?.[0]) inspectFile(fileInput.files[0]);
});

for (const eventName of ['dragenter', 'dragover']) {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.add('is-dragging');
  });
}
for (const eventName of ['dragleave', 'drop']) {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.remove('is-dragging');
  });
}
dropZone.addEventListener('drop', (event) => {
  const sampleId = event.dataTransfer?.getData('application/x-content-provenance-sample');
  if (sampleId) {
    inspectSample(sampleId);
    return;
  }
  const file = event.dataTransfer?.files?.[0];
  if (file) inspectFile(file);
});

for (const card of document.querySelectorAll('.sample-card')) {
  card.addEventListener('click', () => inspectSample(card.dataset.sample));
  card.addEventListener('dragstart', (event) => {
    event.dataTransfer.effectAllowed = 'copy';
    event.dataTransfer.setData('application/x-content-provenance-sample', card.dataset.sample);
    card.classList.add('is-dragging');
    dropZone.classList.add('is-sample-target');
  });
  card.addEventListener('dragend', () => {
    card.classList.remove('is-dragging');
    dropZone.classList.remove('is-sample-target');
  });
}
document.querySelector('#verify-text').addEventListener('click', inspectText);

async function inspectSample(sampleId) {
  const sample = SAMPLE_ASSETS[sampleId];
  if (!sample) return;
  setBusy(true, sample.name);
  try {
    const response = await fetch(sample.url);
    if (!response.ok) throw new Error('We could not load this sample.');
    const bytes = new Uint8Array(await response.arrayBuffer());
    const file = new File([bytes], sample.fileName, { type: sample.mime });
    await runVerification(bytes, sample.mime, sample.name, file);
  } catch (error) {
    showOperationalError(error);
  } finally {
    setBusy(false);
  }
}

async function inspectText() {
  const value = document.querySelector('#text-input').value;
  if (!value.trim()) {
    showOperationalError(new Error('Paste signed text before verifying.'));
    return;
  }
  const bytes = new TextEncoder().encode(value);
  setBusy(true, 'Pasted text');
  try {
    await runVerification(bytes, 'text/plain', 'Pasted text', null);
  } catch (error) {
    showOperationalError(error);
  } finally {
    setBusy(false);
  }
}

async function inspectFile(file) {
  const mime = resolveMime(file);
  setBusy(true, file.name);
  try {
    await sdkReady;
    if (!supportedMimes.has(mime)) throw new Error(`This verifier does not support ${mime || 'this file type'}.`);
    const bytes = new Uint8Array(await file.arrayBuffer());
    await runVerification(bytes, mime, file.name, file);
  } catch (error) {
    showOperationalError(error);
  } finally {
    setBusy(false);
  }
}

async function runVerification(bytes, mime, name, file) {
  currentMimeType = mime;
  await sdkReady;
  const report = verify(bytes, mime);
  currentReport = report;
  currentInputName = name;
  renderReport(report, name, file);
}

function resolveMime(file) {
  if (file.type && supportedMimes.has(file.type.toLowerCase())) return file.type.toLowerCase();
  const extension = file.name.split('.').pop()?.toLowerCase();
  return MIME_BY_EXTENSION[extension] || file.type.toLowerCase();
}

function setBusy(busy, name = '') {
  processing.hidden = !busy;
  document.querySelector('#processing-name').textContent = name;
  document.querySelector('#file-panel').setAttribute('aria-busy', String(busy));
  if (busy) {
    resultShell.hidden = true;
    processing.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function showOperationalError(error) {
  currentReport = null;
  cleanupPreview();
  const message = String(error?.message || error || 'We could not check this item').replace(/^[a-z_]+:\s*/i, '');
  resultContent.innerHTML = `
    <div class="verdict verdict-error">
      <div class="verdict-icon" aria-hidden="true">!</div>
      <div><span>Check did not run</span><h2>${escapeHtml(message)}</h2><p>We made no result. We did not upload your file.</p></div>
    </div>
    ${failureFeedbackMarkup()}
    <button class="secondary-button reset-button" type="button">Check another item</button>
  `;
  resultShell.hidden = false;
  resultShell.querySelector('.reset-button').addEventListener('click', resetVerifier);
  wireFailureFeedback();
  resultShell.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderReport(report, name, file) {
  cleanupPreview();
  const verdict = verdictFor(report);
  const manifest = activeManifest(report);
  const manifestDetailsAvailable = Boolean(report?.manifest_report?.active_manifest);
  const signer = manifest?.signature_info?.common_name || manifest?.signature_info?.issuer || (manifestDetailsAvailable ? 'Signer not named' : 'Signer details not found');
  const assertions = Array.isArray(manifest?.assertions) ? manifest.assertions : [];
  const ingredients = assertions.filter((item) => String(item?.label || '').startsWith('c2pa.ingredient'));
  const actions = assertions
    .filter((item) => String(item?.label || '').startsWith('c2pa.actions'))
    .flatMap((item) => Array.isArray(item?.data?.actions) ? item.data.actions : []);
  const manifestCount = manifestDetailsAvailable ? Object.keys(report.manifest_report.manifests || {}).length : null;
  const preview = previewMarkup(file);

  resultContent.innerHTML = `
    <div class="result-heading">
      <div><span class="step-label">Result / ${escapeHtml(name)}</span><h2>Check result</h2></div>
      <div class="result-actions">
        <button class="text-button copy-report" type="button">Copy result</button>
        <button class="secondary-button download-report" type="button">Download data</button>
      </div>
    </div>
    <div class="verdict ${verdict.className}">
      <div class="verdict-icon" aria-hidden="true">${verdict.symbol}</div>
      <div><span>${verdict.kicker}</span><h2>${verdict.title}</h2><p>${verdict.detail}</p></div>
    </div>
    ${failureFeedbackMarkup(report)}
    <div class="result-tabs" role="tablist" aria-label="Result detail level">
      <button class="result-tab is-active" role="tab" aria-selected="true" data-result-tab="standard">Simple</button>
      <button class="result-tab" role="tab" aria-selected="false" data-result-tab="developer">For developers</button>
    </div>
    <div class="result-panel" data-result-panel="standard">
      ${preview}
      <div class="evidence-grid">
        ${evidenceCard('File match', report.present === false ? 'Not found' : humanize(report.integrity), evidenceState(report.integrity === 'valid', report.present === false || report.integrity === 'absent'), 'Does the claim still match this file?')}
        ${evidenceCard('Signature', humanize(report.signature), evidenceState(report.signature === 'valid', report.signature === 'unknown'), 'Is the digital seal valid?')}
        ${evidenceCard('Signer', trustLabel(report.trust), trustState(report.trust), 'Is the signer on our trust list?')}
        ${evidenceCard('File lock', humanize(report.hard_binding), evidenceState(report.hard_binding === 'match', report.hard_binding === 'unknown'), 'Does the file match the signed copy?')}
      </div>
      <div class="report-sections">
        <article class="report-card signer-card">
          <span class="card-kicker">Who signed it?</span>
          <h3>${escapeHtml(signer)}</h3>
          <dl>
            <div><dt>File title</dt><dd>${escapeHtml(manifest?.title || 'Not given')}</dd></div>
            <div><dt>Credential type</dt><dd>${escapeHtml(report.profile || 'Not given')}</dd></div>
            <div><dt>Certificate from</dt><dd>${escapeHtml(manifest?.signature_info?.issuer || 'Not given')}</dd></div>
          </dl>
        </article>
        <article class="report-card history-card">
          <span class="card-kicker">What happened?</span>
          <h3>${actions.length ? `${actions.length} saved action${actions.length === 1 ? '' : 's'}` : (manifestDetailsAvailable ? 'No past steps listed' : 'Past steps not found')}</h3>
          ${renderActions(actions, manifestDetailsAvailable)}
        </article>
      </div>
      <article class="report-card ingredients-card">
        <div class="card-title-row"><div><span class="card-kicker">Where did it come from?</span><h3>${manifestDetailsAvailable ? `${ingredients.length} source file${ingredients.length === 1 ? '' : 's'}` : 'Source files not found'}</h3></div>${manifestCount === null ? '' : `<span>${manifestCount} record${manifestCount === 1 ? '' : 's'} in file</span>`}</div>
        ${renderIngredients(ingredients, manifestDetailsAvailable)}
      </article>
      <p class="truth-note"><strong>What this means:</strong> A valid credential shows that the file and its signed record still match. It does not prove that every claim is true.</p>
    </div>
    <div class="result-panel developer-panel" data-result-panel="developer" hidden>
      ${renderValidation(report.validation_results)}
      <details class="json-details"><summary>Raw verification report</summary><pre></pre></details>
    </div>
    <button class="secondary-button reset-button" type="button">Check another item</button>
  `;

  const pre = resultShell.querySelector('pre');
  if (pre) pre.textContent = JSON.stringify(report, null, 2);
  wireResultControls();
  resultShell.hidden = false;
  resultShell.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function verdictFor(report) {
  if (report.present === false) {
    return { className: 'verdict-neutral', symbol: '-', kicker: 'No record found', title: 'No Content Credential found', detail: 'This file may not have one, or we may not be able to read it.' };
  }
  if (report.integrity === 'valid' && report.trust?.status === 'valid_for_supplied_material') {
    return { className: 'verdict-valid', symbol: 'OK', kicker: 'Credential is good and trusted', title: 'Valid Content Credential', detail: 'The file matches its signed record. The signer is on our trust list.' };
  }
  if (report.integrity === 'valid' && report.trust?.status === 'not_valid_for_supplied_material') {
    return { className: 'verdict-caution', symbol: 'i', kicker: 'File matches, signer not trusted', title: 'Valid signature, unknown signer', detail: 'The file has not changed. The signer is not on our trust list.' };
  }
  if (report.integrity === 'valid') {
    return { className: 'verdict-caution', symbol: 'i', kicker: 'File matches its record', title: 'Valid Content Credential', detail: 'The file has not changed. We could not confirm the signer.' };
  }
  if (report.integrity === 'absent') {
    return { className: 'verdict-neutral', symbol: '-', kicker: 'No record found', title: 'No Content Credential found', detail: 'This file may not have one, or we may not be able to read it.' };
  }
  return { className: 'verdict-invalid', symbol: 'X', kicker: 'Check failed', title: 'File or credential was changed', detail: 'One or more checks failed. Do not trust this file until you know why.' };
}

function activeManifest(report) {
  const manifestReport = report?.manifest_report;
  const label = manifestReport?.active_manifest;
  return label ? manifestReport?.manifests?.[label] : null;
}

function evidenceCard(label, value, state, explanation) {
  return `<article class="evidence-card evidence-${state}"><span>${label}</span><strong>${escapeHtml(value)}</strong><p>${explanation}</p></article>`;
}

function evidenceState(positive, unknown) {
  return positive ? 'positive' : unknown ? 'unknown' : 'negative';
}
function failureFeedbackMarkup(report = null) {
  const isReportable = supportedMimes.has(currentMimeType)
    && (report === null || (report.present !== false && report.integrity === 'invalid'));
  if (!isReportable) return '';
  return `
    <div class="failure-feedback">
      <div>
        <strong>Send us this error</strong>
        <span>Sends the file type and up to 8 error codes. It does not send the file, its name, its credential, or signer details.</span>
      </div>
      <button class="secondary-button send-failure" type="button">Send error</button>
    </div>
  `;
}

function wireFailureFeedback() {
  const button = resultShell.querySelector('.send-failure');
  if (button) button.addEventListener('click', sendFailure);
}

async function sendFailure(event) {
  const button = event.currentTarget;
  const failures = currentReport?.validation_results?.failure;
  const statusCodes = [...new Set((Array.isArray(failures) ? failures : [])
    .map((item) => String(item?.code || ''))
    .filter((code) => code && code.length <= 100 && /^[a-z0-9._-]+$/i.test(code)))]
    .sort()
    .slice(0, 8);
  const invalidProvenance = currentReport?.integrity === 'invalid';
  const payload = {
    schema_version: '1.0',
    sdk_name: 'browser',
    sdk_version: '1.0.2',
    profile: currentReport?.profile || 'c2pa-2.4',
    mime_type: currentMimeType,
    failure_kind: invalidProvenance ? 'invalid_provenance' : 'verification_error',
    status_codes: statusCodes.length ? statusCodes : [invalidProvenance ? 'invalid_provenance' : 'verification_error'],
  };

  button.disabled = true;
  button.textContent = 'Sending...';
  try {
    await fetch(FAILURE_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify(payload),
      credentials: 'omit',
      mode: 'no-cors',
    });
    button.textContent = 'Error sent';
  } catch {
    button.disabled = false;
    button.textContent = 'Could not send. Try again';
  }
}

function trustState(trust) {
  if (trust?.status === 'valid_for_supplied_material') return 'positive';
  if (trust?.status === 'not_evaluated') return 'unknown';
  return 'negative';
}

function trustLabel(trust) {
  if (trust?.status === 'valid_for_supplied_material') return 'Trusted';
  if (trust?.status === 'not_valid_for_supplied_material') return 'Not trusted';
  return 'Not evaluated';
}

function renderActions(actions, manifestDetailsAvailable) {
  if (!manifestDetailsAvailable) return '<p class="empty-copy">This SDK report did not expose the manifest payload. Integrity and validation findings remain available.</p>';
  if (!actions.length) return '<p class="empty-copy">The manifest does not include a readable actions assertion.</p>';
  return `<ol class="action-list">${actions.slice(0, 8).map((action) => `<li><span></span><div><strong>${escapeHtml(actionLabel(action.action))}</strong>${action.when ? `<small>${escapeHtml(formatDate(action.when))}</small>` : ''}</div></li>`).join('')}</ol>`;
}

function renderIngredients(ingredients, manifestDetailsAvailable) {
  if (!manifestDetailsAvailable) return '<p class="empty-copy">This SDK report did not expose the manifest payload, so ingredient names and relationships cannot be shown.</p>';
  if (!ingredients.length) return '<p class="empty-copy">No immediate ingredients are declared in the active manifest.</p>';
  return `<div class="ingredient-list">${ingredients.map((ingredient, index) => {
    const data = ingredient.data || {};
    const title = data['dc:title'] || `Ingredient ${index + 1}`;
    const relationship = data.relationship || 'relationship not reported';
    const format = data['dc:format'] || 'format not reported';
    return `<div class="ingredient"><span class="ingredient-index">${String(index + 1).padStart(2, '0')}</span><div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(format)} / ${escapeHtml(relationship)}</small></div></div>`;
  }).join('')}</div>`;
}

function renderValidation(results = {}) {
  const buckets = [
    ['failure', 'Failures'],
    ['informational', 'Information'],
    ['success', 'Passed checks'],
  ];
  return `<div class="validation-header"><span class="card-kicker">Validation</span><h3>Status codes and evidence</h3><p>Each line reports one named check. A passed signature check does not imply signer trust.</p></div>${buckets.map(([key, title]) => {
    const items = Array.isArray(results[key]) ? results[key] : [];
    return `<details class="validation-group" ${key === 'failure' && items.length ? 'open' : ''}><summary><span>${title}</span><strong>${items.length}</strong></summary><div>${items.length ? items.map((item) => `<article><code>${escapeHtml(item.code || 'unknown')}</code><p>${escapeHtml(item.explanation || 'No explanation supplied')}</p>${item.url ? `<small>${escapeHtml(item.url)}</small>` : ''}</article>`).join('') : '<p class="empty-copy">No entries.</p>'}</div></details>`;
  }).join('')}`;
}

function previewMarkup(file) {
  if (!file) return '';
  if (!/^(image|video|audio)\//.test(file.type)) return '';
  activeObjectUrl = URL.createObjectURL(file);
  if (file.type.startsWith('image/')) return `<figure class="asset-preview"><img src="${activeObjectUrl}" alt="Preview of ${escapeHtml(file.name)}" /></figure>`;
  if (file.type.startsWith('video/')) return `<figure class="asset-preview"><video src="${activeObjectUrl}" controls preload="metadata"></video></figure>`;
  return `<figure class="asset-preview asset-audio"><audio src="${activeObjectUrl}" controls preload="metadata"></audio></figure>`;
}

function wireResultControls() {
  for (const tab of resultShell.querySelectorAll('.result-tab')) {
    tab.addEventListener('click', () => {
      const target = tab.dataset.resultTab;
      for (const button of resultShell.querySelectorAll('.result-tab')) {
        const active = button === tab;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
      }
      for (const panel of resultShell.querySelectorAll('[data-result-panel]')) panel.hidden = panel.dataset.resultPanel !== target;
    });
  }
  resultShell.querySelector('.download-report').addEventListener('click', downloadReport);
  resultShell.querySelector('.copy-report').addEventListener('click', copyReport);
  resultShell.querySelector('.reset-button').addEventListener('click', resetVerifier);
  wireFailureFeedback();
}

function downloadReport() {
  if (!currentReport) return;
  const blob = new Blob([JSON.stringify(currentReport, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${safeBaseName(currentInputName)}-verification.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function copyReport(event) {
  if (!currentReport) return;
  await navigator.clipboard.writeText(JSON.stringify(currentReport, null, 2));
  event.currentTarget.textContent = 'Copied';
  setTimeout(() => { event.currentTarget.textContent = 'Copy report'; }, 1600);
}

function resetVerifier() {
  cleanupPreview();
  currentReport = null;
  currentMimeType = '';
  resultShell.hidden = true;
  fileInput.value = '';
  dropZone.focus();
}

function cleanupPreview() {
  if (activeObjectUrl) URL.revokeObjectURL(activeObjectUrl);
  activeObjectUrl = null;
}

function humanize(value) {
  if (!value) return 'Not reported';
  return String(value).replaceAll('_', ' ').replace(/^./, (character) => character.toUpperCase());
}

function actionLabel(value) {
  const name = String(value || 'Unknown action').replace(/^c2pa\./, '').replaceAll('_', ' ').replaceAll('.', ' ');
  return name.replace(/^./, (character) => character.toUpperCase());
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString();
}

function safeBaseName(value) {
  return String(value || 'content').replace(/\.[^.]+$/, '').replace(/[^a-z0-9_-]+/gi, '-').replace(/^-|-$/g, '') || 'content';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
