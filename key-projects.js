const projects = [
  {company:'D.T.C. Enterprise PCL',sector:'government',role:'System Analyst & Business Analyst',ownership:'Project Support',client:'Excise Department',name:'Meter Phase 5',value:'THB 59.9M',support:true},
  {company:'D.T.C. Enterprise PCL',sector:'private',role:'Project Manager',client:'KTBGS',name:'CCTV On-Car Camera',value:'THB 48M'},
  {company:'Chanwanich Co., Ltd.',sector:'government',role:'Project Manager',client:'Immigration Bureau',name:'Biometrics Technology for Screening Persons',value:'THB 42M'},
  {company:'D.T.C. Enterprise PCL',sector:'government',role:'Project Manager',client:'Excise Department',name:'Surathai2',value:'THB 24M'},
  {company:'D.T.C. Enterprise PCL',sector:'government',role:'Assistant Project Manager',ownership:'Project Support',client:'Excise Department',name:'Zoning 1',value:'THB 22.3M',support:true},
  {company:'D.T.C. Enterprise PCL',sector:'government',role:'Assistant Project Manager',ownership:'Project Support',client:'Excise Department',name:'Zoning 2',value:'THB 21M',support:true},
  {company:'D.T.C. Enterprise PCL',sector:'government',role:'Assistant Project Manager',ownership:'Project Support',client:'Excise Department',name:'Surathai1',value:'THB 17.5M',support:true},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',partner:'MKV',client:'PTT GSP',name:'130 Oil Demand Forecasting',value:'THB 15M'},
  {company:'Chanwanich Co., Ltd.',sector:'government',role:'Project Manager',client:'Office of the NBTC',name:'Mobile ID',value:'THB 8.9M'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',partner:'JVFS',client:'Department of Employment',name:'145 DOE2 Anomaly',value:'THB 7.7M'},
  {company:'D.T.C. Enterprise PCL',sector:'private',role:'Project Manager',client:'ThaiNamthip',name:'Vending Machine',value:'THB 7.7M'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',client:'Ministry of Finance',name:'010 MOF Azure 300 Licenses',value:'THB 5.6M'},
  {company:'Chanwanich Co., Ltd.',sector:'government',role:'Project Manager',client:'Royal Thai Army',name:'MA Cyber Security 2023',value:'THB 5.2M'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',client:'Ministry of Finance',name:'022 MOF Azure - 4 Programs & Training, 150 Licenses',value:'THB 5M'},
  {company:'Chanwanich Co., Ltd.',sector:'government',role:'Project Manager',client:'Royal Thai Army',name:'MA Cyber Security 2022',value:'THB 4.4M'},
  {company:'Chanwanich Co., Ltd.',sector:'government',role:'Project Manager',client:'Ministry of Public Health',name:'E-Medical Certificate',value:'THB 3M'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',partner:'JVFS',client:'Department of Employment',name:'054 DOE MOU Anomaly',value:'THB 2.6M'},
  {company:'Chanwanich Co., Ltd.',sector:'government',role:'Project Manager',client:'Office of the NBTC',name:'MA Numbering',value:'THB 2M'},
  {company:'Chanwanich Co., Ltd.',sector:'government',role:'Project Manager',client:'MHESI',name:'PHE-Service',value:'THB 1.5M'},
  {company:'Chanwanich Co., Ltd.',sector:'government',role:'Project Manager',client:'Office of the NBTC',name:'MA Mobile ID',value:'THB 1.4M'},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',client:'J-dea',name:'070 Gemini Chatportal',value:'THB 1.2M'},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',client:'Unixdev',name:'118 Gemini Chatportal',value:'THB 1.2M'},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',client:'Unixdev',name:'119 AIM Chatportal',value:'THB 1.2M'},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',client:'i-Mobel',name:'145 Furniture Chatportal',value:'THB 1.2M'},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',client:'J-Dea',name:'148 Travel Chatportal',value:'THB 1.2M'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',partner:'B2K',client:'Older Persons Fund',name:'010 OCR Phase 1'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',ownership:'Inherited Project',client:'Older Persons Fund',name:'011 OCR Phase 2',support:true},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',partner:'SCP',client:'Department of Water Resources',name:'087 MA DWR Forecasting Dashboard'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',client:'Department of Employment',name:'053 Report DOE Web Application CR'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',partner:'SCP',client:'Department of Water Resources',name:'069 DWR Forecasting Dashboard'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',ownership:'Inherited Project',partner:'IDEN',client:'Department of Employment',name:'185 Tableau Dashboard',support:true},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',client:'IRPC',name:'Oil Production Tableau Dashboard'},
  {company:'Stelligence Co., Ltd.',sector:'government',role:'Project Manager',ownership:'Inherited Project',client:'Office of Insurance Commission',name:'31131 Data Warehouse',support:true},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',ownership:'Inherited Project',client:'Stelligence Internal',name:'HR Internal Dashboard',support:true},
  {company:'Stelligence Co., Ltd.',sector:'private',role:'Project Manager',ownership:'Inherited Project',client:'Stelligence Internal',name:'Cloud Internal Dashboard',support:true},
  {company:'Not specified',sector:'private',role:'Business Analyst',client:'Private Sector',name:'Oil Mobile Ordering'}
];

const list=document.querySelector('#projectsList');
const search=document.querySelector('#projectSearch');
const buttons=[...document.querySelectorAll('[data-filter]')];
const count=document.querySelector('#visibleCount');
const empty=document.querySelector('.empty-state');
let active='all';

function card(project,index){
  return `<article class="project-row" data-sector="${project.sector}" data-role="${project.role}" data-support="${project.support?'true':'false'}" data-valued="${project.value?'true':'false'}">
    <span class="project-index">${String(index+1).padStart(2,'0')}</span>
    <div class="project-meta"><span class="${project.sector}">${project.sector==='government'?'Government':'Private Sector'}</span>${project.support?'<span class="support-badge">Support Role</span>':''}</div>
    <h3>${project.name}</h3>
    <div class="project-details"><div><small>ROLE</small><strong>${project.role}</strong>${project.ownership?`<small>${project.ownership}</small>`:''}</div><div class="project-value"><small>PROJECT VALUE</small><strong>${project.value||'Not disclosed'}</strong></div></div>
  </article>`;
}
list.innerHTML=projects.map(card).join('');
const cards=[...document.querySelectorAll('.project-row')];

function applyFilters(){
  const term=search.value.trim().toLowerCase();let visible=0;
  cards.forEach((item)=>{
    const filterMatch=active==='all'||item.dataset.sector===active||(active==='managed'&&item.dataset.role==='Project Manager')||(active==='support'&&item.dataset.support==='true')||(active==='valued'&&item.dataset.valued==='true');
    const text=item.textContent.toLowerCase();item.hidden=!(filterMatch&&(!term||text.includes(term)));if(!item.hidden)visible++;
  });count.textContent=visible;empty.hidden=visible!==0;
}
buttons.forEach((button)=>button.addEventListener('click',()=>{buttons.forEach((item)=>item.classList.remove('active'));button.classList.add('active');active=button.dataset.filter;applyFilters()}));
search.addEventListener('input',applyFilters);
