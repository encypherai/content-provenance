(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const K="encypher-c2pa.telemetry-enabled";function J(e,t){try{fetch(e,{method:"POST",headers:{"content-type":"text/plain;charset=UTF-8"},body:t,credentials:"omit",keepalive:!0}).catch(()=>{})}catch{}}function X(){try{const e=globalThis.localStorage?.getItem(K);return e==="true"?!0:e==="false"?!1:null}catch{return null}}function D(e){try{globalThis.localStorage?.setItem(K,e?"true":"false")}catch{}}function ae(){const e=X();if(e!==null)return e;const t=typeof globalThis.confirm=="function"?globalThis.confirm("Help improve Encypher C2PA verification? Send anonymous failure codes when validation fails. No asset, manifest, path, key, certificate, trust material, or account data is sent."):!1;return D(t),t}const z=Object.freeze(Object.defineProperty({__proto__:null,postValidationFailure:J,resolveTelemetryPreference:ae,saveTelemetryPreference:D,savedTelemetryPreference:X},Symbol.toStringTag,{value:"Module"}));function se(e){o.configureTelemetry(e)}function oe(){const e=o.supportedMimeTypes();if(e[2])throw N(e[1]);return N(e[0])}function ce(e,t,n){const r=ue(e,o.__wbindgen_malloc),i=g,a=A(t,o.__wbindgen_malloc,o.__wbindgen_realloc),s=g,c=o.verify(r,i,a,s,b(n)?0:Y(n));if(c[2])throw N(c[1]);return N(c[0])}function le(){return{__proto__:null,"./encypher_c2pa_wasm_bg.js":{__proto__:null,__wbg_Error_92b29b0548f8b746:function(t,n){return Error(S(t,n))},__wbg_String_8564e559799eccda:function(t,n){const r=String(n),i=A(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=g;u().setInt32(t+4,a,!0),u().setInt32(t+0,i,!0)},__wbg___wbindgen_bigint_get_as_i64_d968e41184ae354f:function(t,n){const r=n,i=typeof r=="bigint"?r:void 0;u().setBigInt64(t+8,b(i)?BigInt(0):i,!0),u().setInt32(t+0,!b(i),!0)},__wbg___wbindgen_boolean_get_fa956cfa2d1bd751:function(t){const n=t,r=typeof n=="boolean"?n:void 0;return b(r)?16777215:r?1:0},__wbg___wbindgen_debug_string_c25d447a39f5578f:function(t,n){const r=W(n),i=A(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=g;u().setInt32(t+4,a,!0),u().setInt32(t+0,i,!0)},__wbg___wbindgen_in_aca499c5de7ff5e5:function(t,n){return t in n},__wbg___wbindgen_is_bigint_2f76dc55065b4273:function(t){return typeof t=="bigint"},__wbg___wbindgen_is_function_1ff95bcc5517c252:function(t){return typeof t=="function"},__wbg___wbindgen_is_null_ea9085d691f535d3:function(t){return t===null},__wbg___wbindgen_is_object_a27215656b807791:function(t){const n=t;return typeof n=="object"&&n!==null},__wbg___wbindgen_is_string_ea5e6cc2e4141dfe:function(t){return typeof t=="string"},__wbg___wbindgen_is_undefined_c05833b95a3cf397:function(t){return t===void 0},__wbg___wbindgen_jsval_eq_e659fcf7b0e32763:function(t,n){return t===n},__wbg___wbindgen_jsval_loose_eq_db4c3b15f63fc170:function(t,n){return t==n},__wbg___wbindgen_number_get_394265ed1e1b84ee:function(t,n){const r=n,i=typeof r=="number"?r:void 0;u().setFloat64(t+8,b(i)?0:i,!0),u().setInt32(t+0,!b(i),!0)},__wbg___wbindgen_string_get_b0ca35b86a603356:function(t,n){const r=n,i=typeof r=="string"?r:void 0;var a=b(i)?0:A(i,o.__wbindgen_malloc,o.__wbindgen_realloc),s=g;u().setInt32(t+4,s,!0),u().setInt32(t+0,a,!0)},__wbg___wbindgen_throw_344f42d3211c4765:function(t,n){throw new Error(S(t,n))},__wbg_call_8a2dd23819f8a60a:function(){return F(function(t,n){return t.call(n)},arguments)},__wbg_done_89b2b13e91a60321:function(t){return t.done},__wbg_entries_015dc610cd81ede0:function(t){return Object.entries(t)},__wbg_get_507a50627bffa49b:function(t,n){return t[n>>>0]},__wbg_get_c7eb1f358a7654df:function(){return F(function(t,n){return Reflect.get(t,n)},arguments)},__wbg_get_unchecked_6e0ad6d2a41b06f6:function(t,n){return t[n>>>0]},__wbg_get_with_ref_key_6412cf3094599694:function(t,n){return t[n]},__wbg_instanceof_ArrayBuffer_4480b9e0068a8adb:function(t){let n;try{n=t instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_Map_e5b5e3db98422fcc:function(t){let n;try{n=t instanceof Map}catch{n=!1}return n},__wbg_instanceof_Uint8Array_309b927aaf7a3fc7:function(t){let n;try{n=t instanceof Uint8Array}catch{n=!1}return n},__wbg_isArray_0677c962b281d01a:function(t){return Array.isArray(t)},__wbg_isSafeInteger_04f36e4056f1b851:function(t){return Number.isSafeInteger(t)},__wbg_iterator_6f722e4a93058b71:function(){return Symbol.iterator},__wbg_length_1f0964f4a5e2c6d8:function(t){return t.length},__wbg_length_370319915dc99107:function(t){return t.length},__wbg_new_0_3da9e97f24fc69be:function(){return new Date},__wbg_new_32b398fb48b6d94a:function(){return new Array},__wbg_new_7796ffc7ed656783:function(){return new Map},__wbg_new_cd45aabdf6073e84:function(t){return new Uint8Array(t)},__wbg_new_da52cf8fe3429cb2:function(){return new Object},__wbg_next_6dbf2c0ac8cde20f:function(t){return t.next},__wbg_next_71f2aa1cb3d1e37e:function(){return F(function(t){return t.next()},arguments)},__wbg_postValidationFailure_3a7f148537351b60:function(t,n,r,i){J(S(t,n),S(r,i))},__wbg_prototypesetcall_4770620bbe4688a0:function(t,n,r){Uint8Array.prototype.set.call(de(t,n),r)},__wbg_saveTelemetryPreference_4a506d43761cfb8d:function(t){D(t!==0)},__wbg_set_575dd786d51585f8:function(t,n,r){return t.set(n,r)},__wbg_set_6be42768c690e380:function(t,n,r){t[n]=r},__wbg_set_8a16b38e4805b298:function(t,n,r){t[n>>>0]=r},__wbg_toISOString_706fbe321055ee58:function(t){return t.toISOString()},__wbg_value_a5d5488a9589444a:function(t){return t.value},__wbindgen_cast_0000000000000001:function(t){return t},__wbindgen_cast_0000000000000002:function(t){return t},__wbindgen_cast_0000000000000003:function(t,n){return S(t,n)},__wbindgen_cast_0000000000000004:function(t){return BigInt.asUintN(64,t)},__wbindgen_init_externref_table:function(){const t=o.__wbindgen_externrefs,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)}},"./snippets/encypher-c2pa-wasm-af3848f5d588a391/inline0.js":z,"./snippets/encypher-c2pa-wasm-af3848f5d588a391/inline0.js":z}}function Y(e){const t=o.__externref_table_alloc();return o.__wbindgen_externrefs.set(t,e),t}function W(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const i=e.description;return i==null?"Symbol":`Symbol(${i})`}if(t=="function"){const i=e.name;return typeof i=="string"&&i.length>0?`Function(${i})`:"Function"}if(Array.isArray(e)){const i=e.length;let a="[";i>0&&(a+=W(e[0]));for(let s=1;s<i;s++)a+=", "+W(e[s]);return a+="]",a}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(n&&n.length>1)r=n[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}function de(e,t){return e=e>>>0,y().subarray(e/1,e/1+t)}let m=null;function u(){return(m===null||m.buffer.detached===!0||m.buffer.detached===void 0&&m.buffer!==o.memory.buffer)&&(m=new DataView(o.memory.buffer)),m}function S(e,t){return pe(e>>>0,t)}let k=null;function y(){return(k===null||k.byteLength===0)&&(k=new Uint8Array(o.memory.buffer)),k}function F(e,t){try{return e.apply(this,t)}catch(n){const r=Y(n);o.__wbindgen_exn_store(r)}}function b(e){return e==null}function ue(e,t){const n=t(e.length*1,1)>>>0;return y().set(e,n/1),g=e.length,n}function A(e,t,n){if(n===void 0){const c=x.encode(e),p=t(c.length,1)>>>0;return y().subarray(p,p+c.length).set(c),g=c.length,p}let r=e.length,i=t(r,1)>>>0;const a=y();let s=0;for(;s<r;s++){const c=e.charCodeAt(s);if(c>127)break;a[i+s]=c}if(s!==r){s!==0&&(e=e.slice(s)),i=n(i,r,r=s+e.length*3,1)>>>0;const c=y().subarray(i+s,i+r),p=x.encodeInto(e,c);s+=p.written,i=n(i,r,s,1)>>>0}return g=s,i}function N(e){const t=o.__wbindgen_externrefs.get(e);return o.__externref_table_dealloc(e),t}let C=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});C.decode();const fe=2146435072;let R=0;function pe(e,t){return R+=t,R>=fe&&(C=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),C.decode(),R=t),C.decode(y().subarray(e,e+t))}const x=new TextEncoder;"encodeInto"in x||(x.encodeInto=function(e,t){const n=x.encode(e);return t.set(n),{read:e.length,written:n.length}});let g=0,o;function ge(e,t){return o=e.exports,m=null,k=null,o.__wbindgen_start(),o}async function _e(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(i){if(e.ok&&n(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}else{const r=await WebAssembly.instantiate(e,t);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function me(e){if(o!==void 0)return o;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL(""+new URL("encypher_c2pa_wasm_bg-DqZD5TbC.wasm",import.meta.url).href,import.meta.url));const t=le();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await _e(await e,t);return ge(n)}const be="https://api.encypher.com/api/v1/sdk-validation-failures",he={signed:{url:"./samples/signed-test.jpg",mime:"image/jpeg",fileName:"signed-photo.jpg",name:"Signed photo"},changed:{url:"./samples/changed-sample.jpg",mime:"image/jpeg",fileName:"changed-photo.jpg",name:"Changed photo"},unsigned:{url:"./samples/unsigned-sample.svg",mime:"image/svg+xml",fileName:"unsigned-art.svg",name:"Art with no credential"}},ve={aac:"audio/aac",aiff:"audio/aiff",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/bmp",css:"text/css",csv:"text/csv",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",dng:"image/x-adobe-dng",epub:"application/epub+zip",flac:"audio/flac",gif:"image/gif",heic:"image/heic",heif:"image/heif",html:"text/html",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jxl:"image/jxl",m4a:"audio/mp4",m4v:"video/mp4",md:"text/markdown",mkv:"video/x-matroska",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",odt:"application/vnd.oasis.opendocument.text",pdf:"application/pdf",png:"image/png",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",toml:"application/toml",ttf:"font/ttf",txt:"text/plain",wav:"audio/wav",webm:"video/webm",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",xml:"application/xml",yaml:"application/yaml",yml:"application/yaml",zip:"application/zip"};let U,E=new Set,h=null,f=null,Z="",I="";const ye=document.querySelector("#app");ye.innerHTML=`
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
`;const L=document.querySelector("#file-input"),_=document.querySelector("#drop-zone"),d=document.querySelector("#result-shell"),G=document.querySelector("#result-content"),H=document.querySelector("#processing");U=me().then(()=>{E=new Set(oe()),se(!1)});L.addEventListener("change",()=>{L.files?.[0]&&ee(L.files[0])});for(const e of["dragenter","dragover"])_.addEventListener(e,t=>{t.preventDefault(),_.classList.add("is-dragging")});for(const e of["dragleave","drop"])_.addEventListener(e,t=>{t.preventDefault(),_.classList.remove("is-dragging")});_.addEventListener("drop",e=>{const t=e.dataTransfer?.getData("application/x-content-provenance-sample");if(t){Q(t);return}const n=e.dataTransfer?.files?.[0];n&&ee(n)});for(const e of document.querySelectorAll(".sample-card"))e.addEventListener("click",()=>Q(e.dataset.sample)),e.addEventListener("dragstart",t=>{t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("application/x-content-provenance-sample",e.dataset.sample),e.classList.add("is-dragging"),_.classList.add("is-sample-target")}),e.addEventListener("dragend",()=>{e.classList.remove("is-dragging"),_.classList.remove("is-sample-target")});document.querySelector("#verify-text").addEventListener("click",we);async function Q(e){const t=he[e];if(t){w(!0,t.name);try{const n=await fetch(t.url);if(!n.ok)throw new Error("We could not load this sample.");const r=new Uint8Array(await n.arrayBuffer()),i=new File([r],t.fileName,{type:t.mime});await q(r,t.mime,t.name,i)}catch(n){j(n)}finally{w(!1)}}}async function we(){const e=document.querySelector("#text-input").value;if(!e.trim()){j(new Error("Paste signed text before verifying."));return}const t=new TextEncoder().encode(e);w(!0,"Pasted text");try{await q(t,"text/plain","Pasted text",null)}catch(n){j(n)}finally{w(!1)}}async function ee(e){const t=Se(e);w(!0,e.name);try{if(await U,!E.has(t))throw new Error(`This verifier does not support ${t||"this file type"}.`);const n=new Uint8Array(await e.arrayBuffer());await q(n,t,e.name,e)}catch(n){j(n)}finally{w(!1)}}async function q(e,t,n,r){I=t,await U;const i=ce(e,t);f=i,Z=n,ke(i,n,r)}function Se(e){if(e.type&&E.has(e.type.toLowerCase()))return e.type.toLowerCase();const t=e.name.split(".").pop()?.toLowerCase();return ve[t]||e.type.toLowerCase()}function w(e,t=""){H.hidden=!e,document.querySelector("#processing-name").textContent=t,document.querySelector("#file-panel").setAttribute("aria-busy",String(e)),e&&(d.hidden=!0,H.scrollIntoView({behavior:"smooth",block:"center"}))}function j(e){f=null,B();const t=String(e?.message||e||"We could not check this item").replace(/^[a-z_]+:\s*/i,"");G.innerHTML=`
    <div class="verdict verdict-error">
      <div class="verdict-icon" aria-hidden="true">!</div>
      <div><span>Check did not run</span><h2>${l(t)}</h2><p>We made no result. We did not upload your file.</p></div>
    </div>
    ${te()}
    <button class="secondary-button reset-button" type="button">Check another item</button>
  `,d.hidden=!1,d.querySelector(".reset-button").addEventListener("click",re),ne(),d.scrollIntoView({behavior:"smooth",block:"start"})}function ke(e,t,n){B();const r=xe(e),i=$e(e),a=!!e?.manifest_report?.active_manifest,s=i?.signature_info?.common_name||i?.signature_info?.issuer||(a?"Signer not named":"Signer details not found"),c=Array.isArray(i?.assertions)?i.assertions:[],p=c.filter(v=>String(v?.label||"").startsWith("c2pa.ingredient")),$=c.filter(v=>String(v?.label||"").startsWith("c2pa.actions")).flatMap(v=>Array.isArray(v?.data?.actions)?v.data.actions:[]),O=a?Object.keys(e.manifest_report.manifests||{}).length:null,ie=Ee(n);G.innerHTML=`
    <div class="result-heading">
      <div><span class="step-label">Result / ${l(t)}</span><h2>Check result</h2></div>
      <div class="result-actions">
        <button class="text-button copy-report" type="button">Copy result</button>
        <button class="secondary-button download-report" type="button">Download data</button>
      </div>
    </div>
    <div class="verdict ${r.className}">
      <div class="verdict-icon" aria-hidden="true">${r.symbol}</div>
      <div><span>${r.kicker}</span><h2>${r.title}</h2><p>${r.detail}</p></div>
    </div>
    ${te(e)}
    <div class="result-tabs" role="tablist" aria-label="Result detail level">
      <button class="result-tab is-active" role="tab" aria-selected="true" data-result-tab="standard">Simple</button>
      <button class="result-tab" role="tab" aria-selected="false" data-result-tab="developer">For developers</button>
    </div>
    <div class="result-panel" data-result-panel="standard">
      ${ie}
      <div class="evidence-grid">
        ${T("File match",e.present===!1?"Not found":P(e.integrity),M(e.integrity==="valid",e.present===!1||e.integrity==="absent"),"Does the claim still match this file?")}
        ${T("Signature",P(e.signature),M(e.signature==="valid",e.signature==="unknown"),"Is the digital seal valid?")}
        ${T("Signer",Ce(e.trust),Ae(e.trust),"Is the signer on our trust list?")}
        ${T("File lock",P(e.hard_binding),M(e.hard_binding==="match",e.hard_binding==="unknown"),"Does the file match the signed copy?")}
      </div>
      <div class="report-sections">
        <article class="report-card signer-card">
          <span class="card-kicker">Who signed it?</span>
          <h3>${l(s)}</h3>
          <dl>
            <div><dt>File title</dt><dd>${l(i?.title||"Not given")}</dd></div>
            <div><dt>Credential type</dt><dd>${l(e.profile||"Not given")}</dd></div>
            <div><dt>Certificate from</dt><dd>${l(i?.signature_info?.issuer||"Not given")}</dd></div>
          </dl>
        </article>
        <article class="report-card history-card">
          <span class="card-kicker">What happened?</span>
          <h3>${$.length?`${$.length} saved action${$.length===1?"":"s"}`:a?"No past steps listed":"Past steps not found"}</h3>
          ${Le($,a)}
        </article>
      </div>
      <article class="report-card ingredients-card">
        <div class="card-title-row"><div><span class="card-kicker">Where did it come from?</span><h3>${a?`${p.length} source file${p.length===1?"":"s"}`:"Source files not found"}</h3></div>${O===null?"":`<span>${O} record${O===1?"":"s"} in file</span>`}</div>
        ${Ne(p,a)}
      </article>
      <p class="truth-note"><strong>What this means:</strong> A valid credential shows that the file and its signed record still match. It does not prove that every claim is true.</p>
    </div>
    <div class="result-panel developer-panel" data-result-panel="developer" hidden>
      ${je(e.validation_results)}
      <details class="json-details"><summary>Raw verification report</summary><pre></pre></details>
    </div>
    <button class="secondary-button reset-button" type="button">Check another item</button>
  `;const V=d.querySelector("pre");V&&(V.textContent=JSON.stringify(e,null,2)),Ie(),d.hidden=!1,d.scrollIntoView({behavior:"smooth",block:"start"})}function xe(e){return e.present===!1?{className:"verdict-neutral",symbol:"-",kicker:"No record found",title:"No Content Credential found",detail:"This file may not have one, or we may not be able to read it."}:e.integrity==="valid"&&e.trust?.status==="valid_for_supplied_material"?{className:"verdict-valid",symbol:"OK",kicker:"Credential is good and trusted",title:"Valid Content Credential",detail:"The file matches its signed record. The signer is on our trust list."}:e.integrity==="valid"&&e.trust?.status==="not_valid_for_supplied_material"?{className:"verdict-caution",symbol:"i",kicker:"File matches, signer not trusted",title:"Valid signature, unknown signer",detail:"The file has not changed. The signer is not on our trust list."}:e.integrity==="valid"?{className:"verdict-caution",symbol:"i",kicker:"File matches its record",title:"Valid Content Credential",detail:"The file has not changed. We could not confirm the signer."}:e.integrity==="absent"?{className:"verdict-neutral",symbol:"-",kicker:"No record found",title:"No Content Credential found",detail:"This file may not have one, or we may not be able to read it."}:{className:"verdict-invalid",symbol:"X",kicker:"Check failed",title:"File or credential was changed",detail:"One or more checks failed. Do not trust this file until you know why."}}function $e(e){const t=e?.manifest_report,n=t?.active_manifest;return n?t?.manifests?.[n]:null}function T(e,t,n,r){return`<article class="evidence-card evidence-${n}"><span>${e}</span><strong>${l(t)}</strong><p>${r}</p></article>`}function M(e,t){return e?"positive":t?"unknown":"negative"}function te(e=null){return E.has(I)&&(e===null||e.present!==!1&&e.integrity==="invalid")?`
    <div class="failure-feedback">
      <div>
        <strong>Send us this error</strong>
        <span>Sends the file type and up to 8 error codes. It does not send the file, its name, its credential, or signer details.</span>
      </div>
      <button class="secondary-button send-failure" type="button">Send error</button>
    </div>
  `:""}function ne(){const e=d.querySelector(".send-failure");e&&e.addEventListener("click",Te)}async function Te(e){const t=e.currentTarget,n=f?.validation_results?.failure,r=[...new Set((Array.isArray(n)?n:[]).map(s=>String(s?.code||"")).filter(s=>s&&s.length<=100&&/^[a-z0-9._-]+$/i.test(s)))].sort().slice(0,8),i=f?.integrity==="invalid",a={schema_version:"1.0",sdk_name:"browser",sdk_version:"1.0.2",profile:f?.profile||"c2pa-2.4",mime_type:I,failure_kind:i?"invalid_provenance":"verification_error",status_codes:r.length?r:[i?"invalid_provenance":"verification_error"]};t.disabled=!0,t.textContent="Sending...";try{await fetch(be,{method:"POST",headers:{"content-type":"text/plain;charset=UTF-8"},body:JSON.stringify(a),credentials:"omit",mode:"no-cors"}),t.textContent="Error sent"}catch{t.disabled=!1,t.textContent="Could not send. Try again"}}function Ae(e){return e?.status==="valid_for_supplied_material"?"positive":e?.status==="not_evaluated"?"unknown":"negative"}function Ce(e){return e?.status==="valid_for_supplied_material"?"Trusted":e?.status==="not_valid_for_supplied_material"?"Not trusted":"Not evaluated"}function Le(e,t){return t?e.length?`<ol class="action-list">${e.slice(0,8).map(n=>`<li><span></span><div><strong>${l(Re(n.action))}</strong>${n.when?`<small>${l(Me(n.when))}</small>`:""}</div></li>`).join("")}</ol>`:'<p class="empty-copy">The manifest does not include a readable actions assertion.</p>':'<p class="empty-copy">This SDK report did not expose the manifest payload. Integrity and validation findings remain available.</p>'}function Ne(e,t){return t?e.length?`<div class="ingredient-list">${e.map((n,r)=>{const i=n.data||{},a=i["dc:title"]||`Ingredient ${r+1}`,s=i.relationship||"relationship not reported",c=i["dc:format"]||"format not reported";return`<div class="ingredient"><span class="ingredient-index">${String(r+1).padStart(2,"0")}</span><div><strong>${l(a)}</strong><small>${l(c)} / ${l(s)}</small></div></div>`}).join("")}</div>`:'<p class="empty-copy">No immediate ingredients are declared in the active manifest.</p>':'<p class="empty-copy">This SDK report did not expose the manifest payload, so ingredient names and relationships cannot be shown.</p>'}function je(e={}){return`<div class="validation-header"><span class="card-kicker">Validation</span><h3>Status codes and evidence</h3><p>Each line reports one named check. A passed signature check does not imply signer trust.</p></div>${[["failure","Failures"],["informational","Information"],["success","Passed checks"]].map(([n,r])=>{const i=Array.isArray(e[n])?e[n]:[];return`<details class="validation-group" ${n==="failure"&&i.length?"open":""}><summary><span>${r}</span><strong>${i.length}</strong></summary><div>${i.length?i.map(a=>`<article><code>${l(a.code||"unknown")}</code><p>${l(a.explanation||"No explanation supplied")}</p>${a.url?`<small>${l(a.url)}</small>`:""}</article>`).join(""):'<p class="empty-copy">No entries.</p>'}</div></details>`}).join("")}`}function Ee(e){return!e||!/^(image|video|audio)\//.test(e.type)?"":(h=URL.createObjectURL(e),e.type.startsWith("image/")?`<figure class="asset-preview"><img src="${h}" alt="Preview of ${l(e.name)}" /></figure>`:e.type.startsWith("video/")?`<figure class="asset-preview"><video src="${h}" controls preload="metadata"></video></figure>`:`<figure class="asset-preview asset-audio"><audio src="${h}" controls preload="metadata"></audio></figure>`)}function Ie(){for(const e of d.querySelectorAll(".result-tab"))e.addEventListener("click",()=>{const t=e.dataset.resultTab;for(const n of d.querySelectorAll(".result-tab")){const r=n===e;n.classList.toggle("is-active",r),n.setAttribute("aria-selected",String(r))}for(const n of d.querySelectorAll("[data-result-panel]"))n.hidden=n.dataset.resultPanel!==t});d.querySelector(".download-report").addEventListener("click",Oe),d.querySelector(".copy-report").addEventListener("click",Fe),d.querySelector(".reset-button").addEventListener("click",re),ne()}function Oe(){if(!f)return;const e=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`${Pe(Z)}-verification.json`,n.click(),URL.revokeObjectURL(t)}async function Fe(e){f&&(await navigator.clipboard.writeText(JSON.stringify(f,null,2)),e.currentTarget.textContent="Copied",setTimeout(()=>{e.currentTarget.textContent="Copy report"},1600))}function re(){B(),f=null,I="",d.hidden=!0,L.value="",_.focus()}function B(){h&&URL.revokeObjectURL(h),h=null}function P(e){return e?String(e).replaceAll("_"," ").replace(/^./,t=>t.toUpperCase()):"Not reported"}function Re(e){return String(e||"Unknown action").replace(/^c2pa\./,"").replaceAll("_"," ").replaceAll("."," ").replace(/^./,n=>n.toUpperCase())}function Me(e){const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function Pe(e){return String(e||"content").replace(/\.[^.]+$/,"").replace(/[^a-z0-9_-]+/gi,"-").replace(/^-|-$/g,"")||"content"}function l(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
