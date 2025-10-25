
// SIMPUS prototype - CRUD using localStorage
const STORAGE_KEY = 'simpus_patients_v1';

const sampleData = [{"id": "P001", "name": "Andi Saputra", "dob": "1985-02-10", "gender": "M", "visit": "Rawat Jalan", "date": "2025-10-01", "diag": "J00", "doctor": "Dr. Siti", "ward": "", "status": "Selesai"}, {"id": "P002", "name": "Siti Aminah", "dob": "1990-06-15", "gender": "F", "visit": "Rawat Jalan", "date": "2025-10-02", "diag": "K21.9", "doctor": "Dr. Budi", "ward": "", "status": "Selesai"}, {"id": "P003", "name": "Budi Santoso", "dob": "1978-11-20", "gender": "M", "visit": "Rawat Inap", "date": "2025-09-28", "diag": "I21.9", "doctor": "Dr. Amir", "ward": "Kelas 3", "status": "Dirawat"}, {"id": "P004", "name": "Nurul Hidayah", "dob": "2002-03-03", "gender": "F", "visit": "Dirujuk", "date": "2025-09-30", "diag": "N39.0", "doctor": "Dr. Sari", "ward": "", "status": "Dirujuk"}, {"id": "P005", "name": "Rizky Maulana", "dob": "2010-12-05", "gender": "M", "visit": "Rawat Jalan", "date": "2025-10-03", "diag": "J45.9", "doctor": "Dr. Siti", "ward": "", "status": "Selesai"}, {"id": "P006", "name": "Ayuni Putri", "dob": "1965-07-22", "gender": "F", "visit": "Rawat Inap", "date": "2025-10-01", "diag": "E11.9", "doctor": "Dr. Budi", "ward": "Kelas 2", "status": "Dirawat"}, {"id": "P007", "name": "Fajar Nugroho", "dob": "1988-04-11", "gender": "M", "visit": "Rawat Jalan", "date": "2025-10-04", "diag": "S72.0", "doctor": "Dr. Amir", "ward": "", "status": "Selesai"}, {"id": "P008", "name": "Maya Sari", "dob": "1995-09-09", "gender": "F", "visit": "Dirujuk", "date": "2025-10-05", "diag": "O80", "doctor": "Dr. Sari", "ward": "", "status": "Dirujuk"}, {"id": "P009", "name": "Hendra Gunawan", "dob": "1970-01-01", "gender": "M", "visit": "Rawat Inap", "date": "2025-09-25", "diag": "I50.9", "doctor": "Dr. Amir", "ward": "Kelas 1", "status": "Dirawat"}, {"id": "P010", "name": "Lina Marlina", "dob": "1982-05-18", "gender": "F", "visit": "Rawat Jalan", "date": "2025-10-06", "diag": "M54.5", "doctor": "Dr. Siti", "ward": "", "status": "Selesai"}, {"id": "P011", "name": "Anton Wijaya", "dob": "1999-08-30", "gender": "M", "visit": "Rawat Jalan", "date": "2025-10-06", "diag": "H52.4", "doctor": "Dr. Budi", "ward": "", "status": "Selesai"}, {"id": "P012", "name": "Rina Kartika", "dob": "2005-11-11", "gender": "F", "visit": "Dirujuk", "date": "2025-10-07", "diag": "A09", "doctor": "Dr. Sari", "ward": "", "status": "Dirujuk"}, {"id": "P013", "name": "Slamet Riyadi", "dob": "1960-02-02", "gender": "M", "visit": "Rawat Inap", "date": "2025-09-20", "diag": "J18.9", "doctor": "Dr. Amir", "ward": "Kelas 2", "status": "Dirawat"}, {"id": "P014", "name": "Dewi Anggraini", "dob": "1992-12-12", "gender": "F", "visit": "Rawat Jalan", "date": "2025-10-08", "diag": "L03.9", "doctor": "Dr. Siti", "ward": "", "status": "Selesai"}, {"id": "P015", "name": "Tono Prasetyo", "dob": "1983-03-14", "gender": "M", "visit": "Rawat Jalan", "date": "2025-10-08", "diag": "K35", "doctor": "Dr. Budi", "ward": "", "status": "Selesai"}, {"id": "P016", "name": "Fitri Handayani", "dob": "1975-06-30", "gender": "F", "visit": "Rawat Inap", "date": "2025-09-29", "diag": "N17.9", "doctor": "Dr. Amir", "ward": "ICU", "status": "Dirawat"}, {"id": "P017", "name": "Eko Prabowo", "dob": "2000-10-10", "gender": "M", "visit": "Dirujuk", "date": "2025-10-09", "diag": "S06.0", "doctor": "Dr. Sari", "ward": "", "status": "Dirujuk"}, {"id": "P018", "name": "Meli Kusuma", "dob": "1987-01-25", "gender": "F", "visit": "Rawat Jalan", "date": "2025-10-09", "diag": "F41.1", "doctor": "Dr. Budi", "ward": "", "status": "Selesai"}, {"id": "P019", "name": "Yusuf Iskandar", "dob": "1968-07-07", "gender": "M", "visit": "Rawat Inap", "date": "2025-09-27", "diag": "K70.3", "doctor": "Dr. Amir", "ward": "Kelas 3", "status": "Dirawat"}, {"id": "P020", "name": "Ayu Lestari", "dob": "1998-04-04", "gender": "F", "visit": "Rawat Jalan", "date": "2025-10-10", "diag": "N80.0", "doctor": "Dr. Siti", "ward": "", "status": "Selesai"}];

// load/save
function loadData(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw){ localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData)); return sampleData.slice(); }
  try{ return JSON.parse(raw); }catch(e){ localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData)); return sampleData.slice(); }
}

function saveData(data){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

let patients = loadData();

// DOM refs
const tbody = document.querySelector('#patientsTable tbody');
const btnAdd = document.getElementById('btnAdd');
const formSection = document.getElementById('formSection');
const listSection = document.getElementById('listSection');
const form = document.getElementById('patientForm');
const btnCancel = document.getElementById('btnCancel');
const formTitle = document.getElementById('formTitle');
const searchInput = document.getElementById('search');
const filterVisit = document.getElementById('filterVisit');
const btnReset = document.getElementById('btnReset');
const btnExport = document.getElementById('btnExport');

function renderList(filterText=''){
  const filter = filterVisit.value;
  tbody.innerHTML = '';
  const text = filterText.trim().toLowerCase();
  patients.forEach(p=>{
    if(filter && p.visit !== filter) return;
    if(text){
      const hay = (p.id+' '+p.name+' '+p.diag).toLowerCase();
      if(!hay.includes(text)) return;
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.visit}</td>
      <td>${p.date}</td>
      <td>${p.diag}</td>
      <td>${p.doctor}</td>
      <td>${p.status}</td>
      <td>
        <button class="action-link" data-id="${p.id}" data-action="edit">Edit</button>
        <button class="action-link" data-id="${p.id}" data-action="delete" style="margin-left:6px">Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Event delegation for edit/delete
tbody.addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  if(action==='edit') openEdit(id);
  if(action==='delete') doDelete(id);
});

function openAdd(){
  formTitle.textContent = 'Tambah Pasien';
  form.reset();
  formSection.classList.remove('hidden');
  listSection.classList.add('hidden');
  form.elements['id'].disabled = false;
}

function openEdit(id){
  const p = patients.find(x=>x.id===id);
  if(!p) return alert('Pasien tidak ditemukan');
  formTitle.textContent = 'Edit Pasien';
  form.elements['id'].value = p.id;
  form.elements['name'].value = p.name;
  form.elements['dob'].value = p.dob;
  form.elements['gender'].value = p.gender;
  form.elements['visit'].value = p.visit;
  form.elements['date'].value = p.date;
  form.elements['diag'].value = p.diag;
  form.elements['doctor'].value = p.doctor;
  form.elements['ward'].value = p.ward;
  form.elements['status'].value = p.status;
  formSection.classList.remove('hidden');
  listSection.classList.add('hidden');
  form.elements['id'].disabled = true;
}

function doDelete(id){
  if(!confirm('Hapus pasien ID '+id+'?')) return;
  patients = patients.filter(p=>p.id!==id);
  saveData(patients);
  renderList(searchInput.value);
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const f = new FormData(form);
  const obj = Object.fromEntries(f.entries());
  if(!obj.id) return alert('ID diperlukan');
  const exists = patients.find(p=>p.id===obj.id);
  if(exists){
    for(const k in obj){ exists[k]=obj[k]; }
  } else {
    patients.unshift(obj);
  }
  saveData(patients);
  formSection.classList.add('hidden');
  listSection.classList.remove('hidden');
  renderList(searchInput.value);
});

btnCancel.addEventListener('click', ()=>{ formSection.classList.add('hidden'); listSection.classList.remove('hidden'); });

btnAdd.addEventListener('click', openAdd);

searchInput.addEventListener('input',(e)=> renderList(e.target.value));
filterVisit.addEventListener('change', ()=> renderList(searchInput.value));

btnReset.addEventListener('click', ()=>{
  if(!confirm('Reset data ke contoh awal? Semua perubahan akan hilang.')) return;
  patients = sampleData.slice();
  saveData(patients);
  renderList();
});

btnExport.addEventListener('click', ()=>{
  const header = ['id','name','dob','gender','visit','date','diag','doctor','ward','status'];
  const csv = [header.join(',')].concat(patients.map(p=>header.map(h=>('"'+(p[h]||'')+'"')).join(','))).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'simpus_patients_export.csv'; document.body.appendChild(a); a.click();
  a.remove(); URL.revokeObjectURL(url);
});

// initial render
renderList();
