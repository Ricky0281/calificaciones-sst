/* ============
   Datos base
   ============ */

const EMPLEADOS = [
  { cedula: "2677364", nombre: "GONZALEZ JAMES", centro: "INTERNAS" },
  { cedula: "4524008", nombre: "ROJAS FRANCO CARLOS ARTURO", centro: "EXTERNAS" },
  { cedula: "4779820", nombre: "MONTAÑO HURTADO ENRIQUE", centro: "EXTERNAS" },
  { cedula: "5977680", nombre: "REYES PUENTES JORGE ENRIQUE", centro: "INTERNAS" },
  { cedula: "6164532", nombre: "RIVAS ARBOLEDA MAXIMO RAMON", centro: "EXTERNAS" },
  { cedula: "6318943", nombre: "CONCHA CARDENAS WILLIAM", centro: "INTERNAS" },
  { cedula: "6391456", nombre: "PERALTA GARCIA ANSELMO", centro: "EXTERNAS" },
  { cedula: "6451007", nombre: "LONDOÑO VASQUEZ JOSE ALIRIO", centro: "CONSTRUCTORA" },
  { cedula: "6461458", nombre: "URIBE ARCILA NEVER", centro: "INTERNAS" },
  { cedula: "6499922", nombre: "GONZALEZ OSORIO JHON FERNANDO", centro: "INTERNAS" },
  { cedula: "6513402", nombre: "BONILLA BENITEZ JOSE ALBEIRO", centro: "CONSTRUCTORA" },
  { cedula: "8463016", nombre: "SANCHEZ JORGE MARIO", centro: "EXTERNAS" },
  { cedula: "9760874", nombre: "JEMBUEL CHAGUENDO FROILAN MARI", centro: "EXTERNAS" },
  { cedula: "9921624", nombre: "DURANGO ACEVEDO SERGIO DUVAN", centro: "INTERNAS" },
  { cedula: "10017100", nombre: "GOMEZ HERRERA CARLOS ALBERTO", centro: "CONSTRUCTORA" },
  { cedula: "10488859", nombre: "CARABALI MURILLO JOSE ENRIQUE", centro: "EXTERNAS" },
  { cedula: "11637444", nombre: "LOPEZ CAICEDO CARLOS ONOFRE", centro: "CONSTRUCTORA" },
  { cedula: "12797225", nombre: "VIVAS RIASCOS ROVINSON", centro: "INTERNAS" },
  { cedula: "14566253", nombre: "CAMPUZANO GOMEZ JAMES", centro: "INTERNAS" },
  { cedula: "14567887", nombre: "OSPINA LOPEZ JOSE DUBAN", centro: "INTERNAS" },
  { cedula: "14585321", nombre: "MONTES GONZALEZ ELCIAS", centro: "INTERNAS" },
  { cedula: "14623858", nombre: "ALOMIA RIVAS JULIO CESAR", centro: "ASOCIADOS" },
  { cedula: "14699854", nombre: "CACERES RIVAS JOSE ELEAZAR", centro: "INTERNAS" },
  { cedula: "14795735", nombre: "RAMIREZ ORJUELA JONY ALEXIS", centro: "INTERNAS" },
  { cedula: "14801234", nombre: "USAQUEN ROJAS EDWIN", centro: "INTERNAS" },
  { cedula: "14801391", nombre: "IBARGUEN MURILLO FABIO NELSON", centro: "INTERNAS" },
  { cedula: "14802236", nombre: "RODRIGUEZ RAMIREZ DEIBI ANDRES", centro: "ASOCIADOS" },
  { cedula: "14835548", nombre: "ROJAS MARTINEZ GREGORIO", centro: "INTERNAS" },
  { cedula: "14895460", nombre: "GONZALEZ ROMAN CARLOS ALBEIRO", centro: "ASOCIADOS" },
  { cedula: "16227862", nombre: "BURITICA BETANCOURTH WILMAR", centro: "INTERNAS" },
  { cedula: "16435254", nombre: "HINCAPIE JOSE HUMBERTO", centro: "CONSTRUCTORA" },
  { cedula: "16501324", nombre: "ARAGON LOPEZ LUIS EDUARDO", centro: "INTERNAS" },
  { cedula: "16511720", nombre: "CANDELO NUÑEZ NELSON", centro: "INTERNAS" },
  { cedula: "16513797", nombre: "DURAN BONILLA JOSE HUGO", centro: "INTERNAS" },
  { cedula: "16725547", nombre: "RAMOS RIASCOS JESUS TADEO", centro: "INTERNAS" },
  { cedula: "16792409", nombre: "PINILLO ERAZO LUIS EDUARDO", centro: "ASOCIADOS" },
  { cedula: "16829662", nombre: "PONCE NUÑEZ CAMILO ENRIQUE", centro: "CONSTRUCTORA" },
  { cedula: "16866948", nombre: "CACERES RIVAS JULIO CESAR", centro: "INTERNAS" },
  { cedula: "16889909", nombre: "SANCHEZ TENORIO LUIS CARLOS", centro: "EXTERNAS" },
  { cedula: "16891585", nombre: "SANCHEZ TENORIO JOSE MARINO", centro: "CONSTRUCTORA" },
  { cedula: "16917786", nombre: "BOLAÑOS SALAZAR JORGE ELIECER", centro: "ASOCIADOS" },
  { cedula: "16919156", nombre: "RUIZ RESTREPO RICARDO", centro: "INTERNAS" },
  { cedula: "16919262", nombre: "BALANTA RAMIREZ DANIEL MAURICI", centro: "ASOCIADOS" },
  { cedula: "16938923", nombre: "MOSQUERA MORENO WALFER", centro: "ASOCIADOS" },
  { cedula: "16945531", nombre: "ARAGON CARABALI FLORENCIO", centro: "INTERNAS" },
  { cedula: "16949789", nombre: "COLMEY CORTES ALEJANDRO", centro: "INTERNAS" },
  { cedula: "16949798", nombre: "GUERRERO NUÑEZ DAGOBERTO", centro: "ASOCIADOS" },
  { cedula: "17338493", nombre: "ARBOLEDA SAMUEL", centro: "EXTERNAS" },
  { cedula: "18412229", nombre: "ERASO CORDOBA JUAN TORIBIO", centro: "INTERNAS" },
  { cedula: "18491679", nombre: "MUÑOZ ARCE MAURICIO", centro: "ASOCIADOS" },
  { cedula: "18926597", nombre: "JARAMILLO MARTINEZ CRISTOBAL", centro: "CONSTRUCTORA" },
  { cedula: "71003787", nombre: "CIRO RAMIREZ NELSON", centro: "INTERNAS" },
  { cedula: "71947253", nombre: "MOSQUERA MURILLO JUAN CARLOS", centro: "ASOCIADOS" },
  { cedula: "76227012", nombre: "CARABALI BERMUDEZ AQUILINO", centro: "EXTERNAS" },
  { cedula: "76270420", nombre: "BONILLA ZAPATA CARLOS ALBERTO", centro: "INTERNAS" },
  { cedula: "76289181", nombre: "MOSQUERA ROJAS FENER", centro: "INTERNAS" },
  { cedula: "79315420", nombre: "HERNANDEZ WILSON ANTONIO", centro: "CONSTRUCTORA" },
  { cedula: "82362057", nombre: "MOSQUERA MOSQUERA LUIS DANIEL", centro: "INTERNAS" },
  { cedula: "83242371", nombre: "ANDRADE JEREZ JAIRO", centro: "ASOCIADOS" },
  { cedula: "85156235", nombre: "SERNA PRADA EDWIN FABIAN", centro: "INTERNAS" },
  { cedula: "87471613", nombre: "ERAZO CORDOBA RAMON", centro: "INTERNAS" },
  { cedula: "91002756", nombre: "PATIÑO MOGOLLON NELSON", centro: "EXTERNAS" },
  { cedula: "91436387", nombre: "CAUSIL MARQUEZ LUIS FERNANDO", centro: "ASOCIADOS" },
  { cedula: "94040271", nombre: "CORTES MACHADO EFREN", centro: "INTERNAS" },
  { cedula: "94229771", nombre: "ARAMBURO CASQUETE ALBERTINO", centro: "EXTERNAS" },
  { cedula: "94284467", nombre: "CANO BENTANCOURTH JOSE JAMES", centro: "ASOCIADOS" },
  { cedula: "94298489", nombre: "SANTOS VALLEJO SANDRO", centro: "INTERNAS" },
  { cedula: "94301048", nombre: "NUÑEZ ALEGRIA CELIO", centro: "ASOCIADOS" },
  { cedula: "94320077", nombre: "ARCE GONZALES EDGAR MARIA", centro: "ASOCIADOS" },
  { cedula: "94365464", nombre: "CAÑAS SANCHEZ CARLOS HERNAN", centro: "INTERNAS" },
  { cedula: "94389910", nombre: "GRANJA MONTAÑO HENRY", centro: "EXTERNAS" },
  { cedula: "94391915", nombre: "ALFARO ORTEGA WILLIAM", centro: "EXTERNAS" },
  { cedula: "94453068", nombre: "PAZMIÑO ROSERO NEILER HERNANDO", centro: "EXTERNAS" },
  { cedula: "94455412", nombre: "POTES MOSQUERA LUIS ARLENE", centro: "INTERNAS" },
  { cedula: "94519065", nombre: "ROJAS MARTINEZ RODRIGO", centro: "INTERNAS" },
  { cedula: "94536788", nombre: "ATEHORTUA RIOS RONALD ALBERTO", centro: "CONSTRUCTORA" },
  { cedula: "94556555", nombre: "RUIZ CAMACHO YANSON", centro: "ASOCIADOS" },
  { cedula: "1003930776", nombre: "PALACIOS MENA CARLOS ANDRES", centro: "EXTERNAS" },
  { cedula: "1006051630", nombre: "ARENAS GOMEZ JEINS STEVEN", centro: "ASOCIADOS" },
  { cedula: "1026156432", nombre: "HERNANDEZ BAZAN LUIS EDUARDO", centro: "ASOCIADOS" },
  { cedula: "1059980620", nombre: "VALENCIA JOHN FREDY", centro: "EXTERNAS" },
  { cedula: "1077420325", nombre: "PEREA PALACIOS WILMAR ANTONIO", centro: "INTERNAS" },
  { cedula: "1082693802", nombre: "OLARTE POSADA MATEO", centro: "ASOCIADOS" },
  { cedula: "1085544519", nombre: "PALACIOS ANGULO SEIDER", centro: "ASOCIADOS" },
  { cedula: "1087784037", nombre: "BIOJO DAJOME MANUEL FRANCISCO", centro: "INTERNAS" },
  { cedula: "1107035760", nombre: "LAMILLA ESQUIVEL JULIO CESAR", centro: "CONSTRUCTORA" },
  { cedula: "1107062884", nombre: "URIBE LEON POOL ANDRES", centro: "INTERNAS" },
  { cedula: "1107068916", nombre: "GARCIA HERRERA JUAN CARLOS", centro: "INTERNAS" },
  { cedula: "1111747863", nombre: "RIASCOS ARAGON ROBINSON", centro: "EXTERNAS" },
  { cedula: "1111767089", nombre: "RENTERIA MOSQUERA CARLOS  YEFE", centro: "INTERNAS" },
  { cedula: "1112219470", nombre: "GARCES AMU YONI", centro: "EXTERNAS" },
  { cedula: "1113622905", nombre: "CHAVES GONZALEZ HECTOR FABIO", centro: "EXTERNAS" },
  { cedula: "1114002466", nombre: "ANGULO MURILLO CESAR ANDRES", centro: "ASOCIADOS" },
  { cedula: "1114121544", nombre: "OTERO SAENZ HECTOR FABIAN", centro: "ASOCIADOS" },
  { cedula: "1116243025", nombre: "SUA BOLIVAR JULIAN DAVID", centro: "EXTERNAS" },
  { cedula: "1116283884", nombre: "ESCOBAR MARIN ESTEBAN", centro: "INTERNAS" },
  { cedula: "1118295698", nombre: "RUIZ FIGUEROA JONATAN", centro: "CONSTRUCTORA" },
  { cedula: "1128845085", nombre: "HINESTROZA PEREA LUIS FERNANDO", centro: "EXTERNAS" },
  { cedula: "1129044525", nombre: "HINESTROZA PEREA ARMANDO", centro: "INTERNAS" },
  { cedula: "1129365403", nombre: "PALACIOS MENA LODWIN", centro: "EXTERNAS" },
  { cedula: "1130659326", nombre: "MURCILLO AGUIRRE CARLOS ARTURO", centro: "ASOCIADOS" },
  { cedula: "1143984685", nombre: "BOLAÑO RIVERA JHON EDWARD", centro: "ASOCIADOS" },
  { cedula: "1144079014", nombre: "PRADO RUA YOSER ESTEBAN", centro: "ASOCIADOS" },
  { cedula: "1192916557", nombre: "POVEDA GAMBOA MARLON YESID", centro: "ASOCIADOS" },
  { cedula: "1193140148", nombre: "ERAZO VIVEROS ROBINSON IVAN", centro: "INTERNAS" },
  { cedula: "1193395075", nombre: "MARTINEZ MOSQUERA JUAN DAVID", centro: "ASOCIADOS" },
];

/* ======================================================
   CONFIGURACIÓN
====================================================== */
/* ======================================================
   PREGUNTAS + STORAGE
====================================================== */

const PREGUNTAS = [
  { id: 1, texto: "Reporte validado de condición insegura", puntos: 20 },
  { id: 2, texto: "Propuestas de mejora técnica implementada", puntos: 20 },
  { id: 3, texto: "Asistencia y participación en capacitación y pausas activas.", puntos: 20 },
  { id: 4, texto: "Cero actos inseguros en inspecciones sorpresa", puntos: 30 },
  { id: 5, texto: "Capacidad de respuesta y efectiva en la subsanación de las desviaciones detectadas en campo", puntos: 10 },
];

const STORAGE_KEY = "evaluaciones_v1";

// Evidencias en IndexedDB
const EVID_DB = "evidencias_db";
const EVID_STORE = "evidencias";

let ultimaCedulaAvisada = "";

/* ======================================================
   HELPERS
====================================================== */

const $ = (sel) => document.querySelector(sel);

function nowISO() {
  return new Date().toISOString();
}

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(); // solo fecha
}

function toast(text) {
  const el = $("#msg");
  if (el) el.textContent = text || "";
}

function onlyDigits(str) {
  return (str || "").replace(/\D/g, "");
}

function getDB() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function setDB(db) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function findEmpleadoByCedula(cedula) {
  const c = String(cedula || "").trim();
  return EMPLEADOS.find(e => String(e.cedula).trim() === c) || null;
}

function puntosPosibles() {
  return PREGUNTAS.reduce((acc, p) => acc + p.puntos, 0);
}

function calcularResultados(respuestas) {
  const posibles = puntosPosibles();
  const obtenidos = PREGUNTAS.reduce((acc, p) => acc + (respuestas[p.id] === true ? p.puntos : 0), 0);
  const indicador = posibles === 0 ? 0 : Math.round((obtenidos / posibles) * 100);
  return { posibles, obtenidos, indicador };
}

/* ======================================================
   CHECKLIST
====================================================== */

function renderPreguntas() {
  const body = $("#preguntasBody");
  body.innerHTML = "";

  for (const p of PREGUNTAS) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.texto}</td>
      <td>
        <label class="badge good" style="margin-right:8px;">
          <input type="radio" name="p_${p.id}" value="si" />
          Sí
        </label>
        <label class="badge bad">
          <input type="radio" name="p_${p.id}" value="no" />
          No
        </label>
      </td>
      <td>${p.puntos}</td>
    `;
    body.appendChild(tr);
  }

  $("#puntosPosibles").textContent = String(puntosPosibles());
}

function leerRespuestasDelForm() {
  const respuestas = {};
  for (const p of PREGUNTAS) {
    const sel = document.querySelector(`input[name="p_${p.id}"]:checked`);
    respuestas[p.id] = sel ? (sel.value === "si") : null;
  }
  return respuestas;
}

function cargarRespuestasEnForm(respuestas) {
  for (const p of PREGUNTAS) {
    const val = respuestas?.[p.id];
    const name = `p_${p.id}`;
    document.querySelectorAll(`input[name="${name}"]`).forEach(r => (r.checked = false));

    if (val === true) {
      const r = document.querySelector(`input[name="${name}"][value="si"]`);
      if (r) r.checked = true;
    } else if (val === false) {
      const r = document.querySelector(`input[name="${name}"][value="no"]`);
      if (r) r.checked = true;
    }
  }
  recalcularKPIs();
}

function limpiarRespuestas() {
  for (const p of PREGUNTAS) {
    document.querySelectorAll(`input[name="p_${p.id}"]`).forEach(r => (r.checked = false));
  }
  recalcularKPIs();
}

function recalcularKPIs() {
  const respuestas = leerRespuestasDelForm();
  const { posibles, obtenidos, indicador } = calcularResultados(respuestas);
  $("#puntosPosibles").textContent = String(posibles);
  $("#puntosObtenidos").textContent = String(obtenidos);
  $("#indicador").textContent = `${indicador}%`;
}

function bindRecalcOnChange() {
  $("#formEval").addEventListener("change", (e) => {
    if (e.target && e.target.matches('input[type="radio"]')) {
      recalcularKPIs();
    }
  });
}

/* ======================================================
   EMPLEADO UI
====================================================== */

function setEmpleadoUI(emp) {
  $("#nombreEmpleado").textContent = emp ? emp.nombre : "—";
  $("#centroCosto").textContent = emp ? emp.centro : "—";
}

function getCedulaInput() {
  return onlyDigits($("#cedulaInput").value);
}

function setCedulaInput(val) {
  $("#cedulaInput").value = val || "";
}

function limpiarEmpleadoUI() {
  setCedulaInput("");
  setEmpleadoUI(null);
  renderEvidencias(""); // limpia list
}

/* ======================================================
   TABLA (con búsqueda)
====================================================== */

function renderTabla() {
  const db = getDB();
  const q = ($("#busqueda").value || "").trim().toUpperCase();
  const rows = Object.values(db);

  const filtradas = rows
    .filter(r => {
      if (!q) return true;
      return (
        String(r.cedula || "").includes(q) ||
        String(r.nombre || "").toUpperCase().includes(q) ||
        String(r.centro || "").toUpperCase().includes(q)
      );
    })
    .sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));

  const body = $("#tablaBody");
  body.innerHTML = "";

  for (const r of filtradas) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.cedula}</td>
      <td>${r.nombre}</td>
      <td>${r.centro}</td>
      <td><span class="badge">${r.obtenidos}/${r.posibles}</span></td>
      <td><span class="badge ${r.indicador >= 80 ? "good" : "bad"}">${r.indicador}%</span></td>
      <td class="muted">${r.updatedAt ? fmtDate(r.updatedAt) : "—"}</td>
      <td><button type="button" data-edit="${r.cedula}" class="secondary">Cargar</button></td>
    `;
    body.appendChild(tr);
  }
}

/* ======================================================
   CRUD EVALUACIONES
====================================================== */

function cargarEvaluacion(cedula) {
  const db = getDB();
  const rec = db[cedula];
  if (!rec) return null;

  setCedulaInput(rec.cedula);
  setEmpleadoUI({ nombre: rec.nombre, centro: rec.centro });
  cargarRespuestasEnForm(rec.respuestas);

  renderEvidencias(rec.cedula);
  toast(`Cargada evaluación de ${rec.nombre} (${rec.cedula}).`);
  return rec;
}

function guardarEvaluacion() {
  const cedula = getCedulaInput();
  if (!cedula) return toast("⚠️ Escribe una cédula.");

  const empleado = findEmpleadoByCedula(cedula);
  if (!empleado) {
    setEmpleadoUI(null);
    return toast("⚠️ Esa cédula no está en la base de empleados.");
  }

  const respuestas = leerRespuestasDelForm();
  const sinMarcar = Object.values(respuestas).some(v => v === null);
  if (sinMarcar) return toast("⚠️ Te falta marcar Sí/No en una o más preguntas.");

  const { posibles, obtenidos, indicador } = calcularResultados(respuestas);

  const db = getDB();
  const yaExistia = Boolean(db[cedula]);

  db[cedula] = {
    cedula,
    nombre: empleado.nombre,
    centro: empleado.centro,
    respuestas,
    posibles,
    obtenidos,
    indicador,
    updatedAt: nowISO(),
  };

  setDB(db);
  renderTabla();

  toast(
    yaExistia
      ? `✅ Actualizado: ${empleado.nombre} (${cedula}) — ${obtenidos}/${posibles} (${indicador}%).`
      : `✅ Guardado: ${empleado.nombre} (${cedula}) — ${obtenidos}/${posibles} (${indicador}%).`
  );

  // Limpia checklist + empleado
  limpiarRespuestas();
  limpiarEmpleadoUI();
}

/* ======================================================
   EVIDENCIAS - IndexedDB
====================================================== */

function openEvidDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(EVID_DB, 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(EVID_STORE)) {
        db.createObjectStore(EVID_STORE, { keyPath: "id", autoIncrement: true });
      }
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function saveEvidence(cedula, file) {
  const db = await openEvidDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(EVID_STORE, "readwrite");
    const store = tx.objectStore(EVID_STORE);
    const req = store.add({
      cedula: String(cedula),
      name: file.name,
      type: file.type,
      size: file.size,
      createdAt: nowISO(),
      blob: file
    });
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
  });
}

async function getEvidencesByCedula(cedula) {
  const db = await openEvidDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(EVID_STORE, "readonly");
    const store = tx.objectStore(EVID_STORE);
    const req = store.getAll();
    req.onsuccess = () => {
      const all = req.result || [];
      resolve(all.filter(x => String(x.cedula) === String(cedula)));
    };
    req.onerror = () => reject(req.error);
  });
}

async function listAllEvidences() {
  const db = await openEvidDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(EVID_STORE, "readonly");
    const store = tx.objectStore(EVID_STORE);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function deleteEvidence(id) {
  const db = await openEvidDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(EVID_STORE, "readwrite");
    const store = tx.objectStore(EVID_STORE);
    const req = store.delete(Number(id));
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
  });
}

function safeFileName(name) {
  return String(name || "evidencia")
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim();
}

/* ======================================================
   RENDER EVIDENCIAS
====================================================== */

async function renderEvidencias(cedula) {
  const el = $("#evidenciasList");
  if (!el) return;

  if (!cedula) {
    el.textContent = "—";
    return;
  }

  const list = await getEvidencesByCedula(String(cedula));
  if (!list.length) {
    el.textContent = "Sin evidencias";
    return;
  }

  // Orden por fecha (más nueva arriba)
  list.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));

  const wrap = document.createElement("div");
  wrap.className = "evidList";

  for (const ev of list) {
    const item = document.createElement("div");
    item.className = "evidItem";

    const url = URL.createObjectURL(ev.blob);

    item.innerHTML = `
      <div class="evidMeta">
        <div class="evidName">${ev.name}</div>
        <div class="evidSub">${fmtDate(ev.createdAt)} • ${(Math.round((ev.size || 0) / 1024))} KB</div>
      </div>
      <div class="evidBtns">
        <a class="evidLink" href="${url}" target="_blank" rel="noopener">Abrir</a>
        <button type="button" class="evidDel" data-id="${ev.id}">Eliminar</button>
      </div>
    `;

    wrap.appendChild(item);
  }

  el.innerHTML = "";
  el.appendChild(wrap);
}

/* ======================================================
   EXPORTAR EXCEL (CSV)
====================================================== */

function exportarExcel() {
  const db = getDB();
  const registros = Object.values(db);

  if (registros.length === 0) {
    toast("ℹ️ No hay evaluaciones para exportar.");
    return;
  }

  const headers = [
    "Cedula",
    "Nombre",
    "Centro",
    "UltimaActualizacion",
    "Condicion insegura",
    "Mejora tecnica implementada",
    "Capacitaciones y pausa activa",
    "Cero actos inseguros",
    "Subsanacion de desviaciones",
    "Sumatoria (5 items)",
    "Indicador (%)"
  ];

  const rows = registros.map(r => {
    const valores = PREGUNTAS.map(p => (r.respuestas?.[p.id] === true ? p.puntos : 0));
    const sumatoria = valores.reduce((a, b) => a + b, 0);
    const indicadorTxt = `${Number(r.indicador ?? 0)}%`;

    return [
      r.cedula,
      r.nombre,
      r.centro,
      r.updatedAt ? fmtDate(r.updatedAt) : "",
      ...valores,
      sumatoria,
      indicadorTxt
    ];
  });

  const csv = [
    headers.join(";"),
    ...rows.map(row =>
      row.map(x => `"${String(x ?? "").replace(/"/g, '""')}"`).join(";")
    )
  ].join("\n");

  const bom = "\uFEFF";
  const blob = new Blob([bom + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `evaluaciones_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();

  URL.revokeObjectURL(url);
  toast("✅ Exportado a Excel (CSV).");
}

/* ======================================================
   EXPORTAR ZIP (CSV + Evidencias)
====================================================== */

async function exportarZipTodo() {
  const db = getDB();
  const registros = Object.values(db);

  if (!registros.length) {
    alert("No hay evaluaciones para exportar.");
    return;
  }

  if (typeof JSZip === "undefined") {
    alert("❌ No encontré JSZip. Revisa que cargue libs/jszip.min.js");
    return;
  }

  // 1) Generar CSV en texto
  const headers = [
    "Cedula",
    "Nombre",
    "Centro",
    "UltimaActualizacion",
    "Condicion insegura",
    "Mejora tecnica implementada",
    "Capacitaciones y pausa activa",
    "Cero actos inseguros",
    "Subsanacion de desviaciones",
    "Sumatoria (5 items)",
    "Indicador (%)"
  ];

  const rows = registros.map(r => {
    const valores = PREGUNTAS.map(p => (r.respuestas?.[p.id] === true ? p.puntos : 0));
    const sumatoria = valores.reduce((a, b) => a + b, 0);
    const indicadorTxt = `${Number(r.indicador ?? 0)}%`;

    return [
      r.cedula,
      r.nombre,
      r.centro,
      r.updatedAt ? fmtDate(r.updatedAt) : "",
      ...valores,
      sumatoria,
      indicadorTxt
    ];
  });

  const csv = [
    headers.join(";"),
    ...rows.map(row =>
      row.map(x => `"${String(x ?? "").replace(/"/g, '""')}"`).join(";")
    )
  ].join("\n");

  const zip = new JSZip();

  // ✅ Siempre mete el CSV dentro del zip
  const today = new Date().toISOString().slice(0, 10);
  zip.file(`evaluaciones_${today}.csv`, "\uFEFF" + csv);

  // 2) Evidencias por cédula (si hay)
  const evidFolder = zip.folder("evidencias");
  let totalEvid = 0;

  for (const r of registros) {
    const ced = String(r.cedula);
    const evids = await getEvidencesByCedula(ced);

    if (evids && evids.length) {
      const folder = evidFolder.folder(ced);
      const used = new Map();

      for (const ev of evids) {
        let name = safeFileName(ev.name);
        const key = name.toLowerCase();

        if (used.has(key)) {
          const n = used.get(key) + 1;
          used.set(key, n);
          const dot = name.lastIndexOf(".");
          name = dot > 0 ? `${name.slice(0, dot)} (${n})${name.slice(dot)}` : `${name} (${n})`;
        } else {
          used.set(key, 1);
        }

        const ab = await ev.blob.arrayBuffer();
        folder.file(name, ab);
        totalEvid++;
      }
    }
  }

  // 3) Descargar ZIP
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `evaluaciones_y_evidencias_${today}.zip`;
  a.click();
  URL.revokeObjectURL(url);

  alert(`ZIP exportado ✅\nIncluye: CSV + ${totalEvid} evidencias.`);
}

/* ======================================================
   IMPORTAR JSON
====================================================== */

function importarJSON(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const incoming = JSON.parse(reader.result);
      if (typeof incoming !== "object" || incoming === null) throw new Error("JSON inválido");

      const db = getDB();
      const merged = { ...db, ...incoming };
      setDB(merged);

      renderTabla();
      toast("✅ Importación lista (se mezcló con lo existente).");
    } catch (e) {
      toast("❌ No pude importar. Verifica que sea un JSON válido.");
    }
  };
  reader.readAsText(file);
}

/* ======================================================
   INIT
====================================================== */

function init() {
  renderPreguntas();
  bindRecalcOnChange();
  renderTabla();
  recalcularKPIs();
  renderEvidencias("");

  // Cédula input
  $("#cedulaInput").addEventListener("input", async () => {
    const cedula = getCedulaInput();
    const emp = findEmpleadoByCedula(cedula);
    setEmpleadoUI(emp);

    const db = getDB();
    if (cedula && db[cedula]) {
      if (ultimaCedulaAvisada !== cedula) {
        ultimaCedulaAvisada = cedula;
        alert("⚠️ Esta cédula ya existe en la base. Puedes darle en Cargar para ver y modificar.");
      }
    } else {
      ultimaCedulaAvisada = "";
    }

    await renderEvidencias(cedula);
  });

  // Nueva evaluación
  $("#btnNueva").addEventListener("click", () => {
    limpiarRespuestas();
    limpiarEmpleadoUI();
    toast("Listo: nueva evaluación.");
  });

  // Cargar evaluación
  $("#btnCargar").addEventListener("click", () => {
    const cedula = getCedulaInput();
    if (!cedula) return toast("⚠️ Escribe una cédula para cargar.");
    const rec = cargarEvaluacion(cedula);
    if (!rec) toast("ℹ️ No hay evaluación guardada para esa cédula.");
  });

  // Guardar
  $("#formEval").addEventListener("submit", (e) => {
    e.preventDefault();
    guardarEvaluacion();
  });

  // Limpiar respuestas
  $("#btnLimpiar").addEventListener("click", () => {
    limpiarRespuestas();
    toast("Respuestas limpias.");
  });

  // Click en tabla -> cargar
  $("#tablaBody").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-edit]");
    if (!btn) return;
    cargarEvaluacion(btn.getAttribute("data-edit"));
  });

  // Búsqueda
  $("#busqueda").addEventListener("input", renderTabla);

  // Exportar
  $("#btnExportar").addEventListener("click", exportarExcel);
  $("#btnExportarTodo").addEventListener("click", exportarZipTodo);

  // Importar JSON
  $("#importFile").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (file) importarJSON(file);
    e.target.value = "";
  });

  // Borrar todo
  $("#btnBorrarTodo").addEventListener("click", () => {
    const ok = confirm("¿Seguro que deseas borrar TODO? Esto elimina todas las evaluaciones guardadas en este navegador.");
    if (!ok) return;

    localStorage.removeItem(STORAGE_KEY);
    renderTabla();
    toast("🗑️ Base borrada.");
  });

  // Evidencias: subir
  $("#evidenciaInput").addEventListener("change", async (e) => {
    const cedula = getCedulaInput();
    if (!cedula) {
      alert("⚠️ Primero escribe la cédula.");
      e.target.value = "";
      return;
    }

    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    for (const f of files) {
      await saveEvidence(cedula, f);
    }

    await renderEvidencias(cedula);
    e.target.value = "";
    toast("✅ Evidencia(s) guardada(s).");
  });

  // Evidencias: borrar individual
  $("#evidenciasList").addEventListener("click", async (e) => {
    const btn = e.target.closest("button.evidDel");
    if (!btn) return;

    const id = btn.getAttribute("data-id");
    const ok = confirm("¿Eliminar esta evidencia?");
    if (!ok) return;

    await deleteEvidence(id);
    await renderEvidencias(getCedulaInput());
    toast("🗑️ Evidencia eliminada.");
  });
}

init();
