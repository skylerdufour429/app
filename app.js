let apps=[];
const $=s=>document.querySelector(s);
function render(){
  const q=$("#search").value.trim().toLowerCase(), p=$("#platform").value;
  const filtered=apps.filter(a=>(!q||[a.name,a.bundleId,a.version,a.minimumOS,a.platform].join(" ").toLowerCase().includes(q))&&(!p||a.platform===p));
  $("#count").textContent=`${filtered.length} of ${apps.length}`;
  $("#empty").hidden=filtered.length!==0;
  $("#app-grid").innerHTML=filtered.map(a=>`<article class="card">
    <span class="badge">${a.platform}</span><h3>${esc(a.name)}</h3><div class="meta">${esc(a.bundleId)}</div>
    <div class="rows"><div class="row"><span>Version</span><strong>${esc(a.version)}</strong></div>
    <div class="row"><span>Minimum OS</span><strong>${esc(a.minimumOS)}</strong></div>
    <div class="row"><span>Binary Size</span><strong>${a.binarySizeMB} MB</strong></div></div>
  </article>`).join("");
}
function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}
fetch("data/apps.json").then(r=>r.json()).then(d=>{apps=d;$("#stats").innerHTML=`<div class="stat"><b>${apps.length}</b>Applications</div><div class="stat"><b>${apps.reduce((s,a)=>s+a.binarySizeMB,0).toFixed(1)} MB</b>Total listed size</div><div class="stat"><b>iOS</b>Platform</div>`;render();});
$("#search").addEventListener("input",render);$("#platform").addEventListener("change",render);
