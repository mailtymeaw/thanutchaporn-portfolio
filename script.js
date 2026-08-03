const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();

const chatLauncher = document.querySelector('.chat-launcher');
const chatPanel = document.querySelector('.chat-panel');
const chatClose = document.querySelector('.chat-close');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('#chat-input');
const chatMessages = document.querySelector('.chat-messages');
const suggestions = document.querySelector('.chat-suggestions');

const projectFacts = [
  ['Meter Phase 5','System Analyst & Business Analyst (Project Support)','THB 59.9M'],
  ['CCTV On-Car Camera','Project Manager','THB 48M'],
  ['Biometrics Technology for Screening Persons','Project Manager','THB 42M'],
  ['Surathai2','Project Manager','THB 24M'],
  ['Zoning 1','Assistant Project Manager (Project Support)','THB 22.3M'],
  ['Zoning 2','Assistant Project Manager (Project Support)','THB 21M'],
  ['Surathai1','Assistant Project Manager (Project Support)','THB 17.5M'],
  ['130 Oil Demand Forecasting','Project Manager','THB 15M'],
  ['Mobile ID','Project Manager','THB 8.9M'],
  ['145 DOE2 Anomaly','Project Manager','THB 7.7M'],
  ['Vending Machine','Project Manager','THB 7.7M'],
  ['010 MOF Azure 300 Licenses','Project Manager','THB 5.6M'],
  ['MA Cyber Security 2023','Project Manager','THB 5.2M'],
  ['022 MOF Azure - 4 Programs & Training, 150 Licenses','Project Manager','THB 5M'],
  ['MA Cyber Security 2022','Project Manager','THB 4.4M'],
  ['E-Medical Certificate','Project Manager','THB 3M'],
  ['054 DOE MOU Anomaly','Project Manager','THB 2.6M'],
  ['MA Numbering','Project Manager','THB 2M'],
  ['PHE-Service','Project Manager','THB 1.5M'],
  ['MA Mobile ID','Project Manager','THB 1.4M'],
  ['070 Gemini Chatportal','Project Manager','THB 1.2M'],
  ['118 Gemini Chatportal','Project Manager','THB 1.2M'],
  ['119 AIM Chatportal','Project Manager','THB 1.2M'],
  ['145 Furniture Chatportal','Project Manager','THB 1.2M'],
  ['148 Travel Chatportal','Project Manager','THB 1.2M'],
  ['010 OCR Phase 1','Project Manager','Value not listed'],
  ['011 OCR Phase 2','Project Manager (Inherited Project)','Value not listed'],
  ['087 MA DWR Forecasting Dashboard','Project Manager','Value not listed'],
  ['053 Report DOE Web Application CR','Project Manager','Value not listed'],
  ['069 DWR Forecasting Dashboard','Project Manager','Value not listed'],
  ['185 Tableau Dashboard','Project Manager (Inherited Project)','Value not listed'],
  ['Oil Production Tableau Dashboard','Project Manager','Value not listed'],
  ['31131 Data Warehouse','Project Manager (Inherited Project)','Value not listed'],
  ['HR Internal Dashboard','Project Manager (Inherited Project)','Value not listed'],
  ['Cloud Internal Dashboard','Project Manager (Inherited Project)','Value not listed'],
  ['Oil Mobile Ordering','Business Analyst','Value not listed']
];

const certificationFacts = [
  ['CompTIA Project+ Certification','project lifecycle, planning, stakeholders, risk, quality, and delivery'],
  ['CompTIA Project+ CE Certification','continuing education for current project-management practice'],
  ['PMP Exam Prep - PMBOK Guide 7','PMP preparation including 35 PDUs'],
  ['Project Management Training','structured project planning, control, and delivery'],
  ['Project Investment Analysis & Management','investment-project analysis and management'],
  ['Introduction to AI & Machine Learning on Google Cloud','Vertex AI, Gemini, BigQuery ML, AutoML, and AI foundations'],
  ['AI Skill for All','artificial-intelligence foundations and practical digital skills'],
  ['AWS Academy Cloud Foundations','AWS services, cloud architecture, security, pricing, and support'],
  ['Microsoft 365 Copilot','generative AI productivity in Microsoft 365'],
  ['Business Intelligence','analytics and decision-ready information'],
  ['Power BI','data modeling, dashboards, reporting, and visualization'],
  ['Business Analysis','requirements, stakeholders, processes, and solution definition'],
  ['CCNA: Introduction to Networks','network architecture, protocols, IP, Ethernet, routers, and switches'],
  ['CCNA: Switching, Routing & Wireless Essentials','LAN switching, routing, wireless, and network operations'],
  ['CCNA: Enterprise Networking, Security & Automation','enterprise networks, security, WAN, virtualization, and automation'],
  ['MCU Programming for Internet of Things','microcontroller programming and IoT for Industry 4.0'],
  ['System Analyst','system analysis and translating needs into technology solutions'],
  ['UI Design with Figma','interface design, components, prototyping, and collaboration'],
  ['Unlock Skill UX/UI','user-experience and interface-design foundations'],
  ['Web Development Fundamental','modern web-development foundations'],
  ['Executive Training Program','leadership, management, and organizational perspective'],
  ['Safety Officer at Supervisor Level','occupational safety, health, environment, and supervision']
];

const portfolioAnswers = [
  {
    terms: ['achievement', 'achievements', 'impact', 'numbers', 'result'],
    answer: 'Thanutchaporn has a portfolio of 36 recorded projects. Her maximum directly managed project value is THB 48M, and she supported the THB 59.9M Meter Phase 5 project. She has 14+ years in technology, led teams of up to 40 people, and trained up to 120 participants per session.'
  },
  {
    terms: ['ai', 'machine learning', 'ml', 'chatbot', 'ocr', 'anomaly', 'forecast'],
    answer: 'Her AI portfolio includes ML demand forecasting, anomaly detection, OCR, chatbots, model development, MLOps, vision sensors, and image processing. At Stelligence, she delivered AI and data initiatives including forecasting dashboards, OCR, chatbots, Power BI, and Tableau.'
  },
  {
    terms: ['experience', 'career', 'worked', 'company', 'companies', 'history'],
    answer: 'She brings over 14 years of experience spanning project management, business analysis, consulting, IT support, and helpdesk leadership. Her career includes Stelligence, Chanwanich, PTT Digital Solutions, SF Corporation, Sigma Intergroup, D.T.C. Enterprise, Billion Broker, and Jsiam Enterprise.'
  },
  {
    terms: ['project', 'projects', 'government', 'govtech', 'delivered'],
    answer: 'Her 36-project portfolio spans AI, mobile/web/Windows applications, cloud, system integration, data, BI, ERP, cybersecurity, IoT, and digital public services. Major examples include the THB 48M CCTV On-Car Camera project, THB 42M biometric screening platform, THB 24M Surathai2, THB 15M Oil Demand Forecasting, Mobile ID, anomaly detection, OCR, dashboards, and chat portals. She supported the THB 59.9M Meter Phase 5 project.'
  },
  {
    terms: ['skill', 'skills', 'expertise', 'technology', 'tools', 'stack'],
    answer: 'Her core strengths include project leadership, business and system analysis, AI/ML, cloud and infrastructure, data and visualization, ERP, cybersecurity, IoT, mobile/web/Windows applications, and system integration. Tools include Jira, ClickUp, Trello, Notion, MS Project, Microsoft 365, Google Cloud, Azure, AWS, Power BI, Tableau, Alteryx, SQL, Oracle, MySQL, SQL Server, DBeaver, Postman, Figma, Canva, Visio, Draw.io, and Photoshop.'
  },
  {
    terms: ['education', 'degree', 'university', 'study', 'gpa', 'master'],
    answer: 'She earned an M.S. in Information Technology Management from the National Institute of Development Administration (NIDA), GPA 3.70, and a B.S. in Computer and Information Science (Computer Science) from King Mongkut\'s University of Technology North Bangkok, GPA 2.37.'
  },
  {
    terms: ['certificate', 'certification', 'certified', 'comptia', 'aws', 'pmp'],
    answer: 'Her Certifications page contains 22 credentials across project management, AI and cloud, data and business analysis, networking, cybersecurity, IoT, UX/UI, web development, leadership, and safety. Highlights include CompTIA Project+, Project+ CE, PMP Exam Prep with 35 PDUs, Google Cloud AI/ML, AWS Cloud Foundations, CCNA, Power BI, Business Analysis, System Analyst, Figma, and IoT.'
  },
  {
    terms: ['hire', 'why', 'strength', 'value', 'candidate'],
    answer: 'Thanutchaporn combines hands-on technology knowledge with end-to-end project leadership. She can translate business needs into delivery plans, align stakeholders and vendors, control scope, risk, quality, and resources, and lead complex AI and digital transformation projects to measurable outcomes.'
  },
  {
    terms: ['contact', 'email', 'phone', 'reach', 'available', 'availability'],
    answer: 'Thanutchaporn is available now and based in Bangkok, Thailand. Email: thanutchapornmekkala@gmail.com. Phone: +66 87 678 9791. Line ID: mailtymeaw.'
  },
  {
    terms: ['language', 'english', 'thai'],
    answer: 'She is a native Thai speaker with intermediate working proficiency in English.'
  },
  {
    terms: ['client', 'clients', 'industry', 'industries', 'sector', 'sectors'],
    answer: 'Her industry experience spans Government & Public Sector, Energy & Oil and Gas, Banking, Insurance, Healthcare, Telecommunications, Retail & FMCG, Manufacturing & Industrial, Tourism & Travel, Technology & Software, and Defense & Security.'
  },
  {
    terms: ['process', 'delivery process', 'end to end', 'uat', 'implementation', 'presales', 'pre-sales', 'sales', 'mom', 'documentation', 'after-sales'],
    answer: 'She supports end-to-end delivery across sales, pre-sales, business analysis, system analysis, MoM and project documentation, planning, UAT, implementation, launch, training, and after-sales support. She manages scope, schedule, cost, risk, quality, resources, stakeholders, and vendors using CMMI, ISO, EA, CompTIA Project+, and PMP practices.'
  },
  {
    terms: ['role', 'roles', 'project manager', 'business analyst', 'system analyst'],
    answer: 'Her roles include Project Manager, Assistant Project Manager, Business Analyst, System Analyst & Business Analyst, consultant, IT support, and helpdesk leadership. Across projects she bridges executives, users, vendors, and technical teams.'
  }
];

function toggleChat(open) {
  chatPanel.classList.toggle('open', open);
  chatPanel.setAttribute('aria-hidden', String(!open));
  chatLauncher.setAttribute('aria-expanded', String(open));
  if (open) window.setTimeout(() => chatInput.focus(), 220);
}

function addMessage(text, sender) {
  const message = document.createElement('div');
  message.className = `chat-message ${sender}`;
  if (sender === 'bot') {
    const avatar = document.createElement('span');
    avatar.className = 'message-avatar';
    avatar.textContent = '✦';
    message.appendChild(avatar);
  }
  const content = document.createElement('div');
  const paragraph = document.createElement('p');
  const time = document.createElement('time');
  paragraph.textContent = text;
  time.textContent = sender === 'bot' ? 'Portfolio AI' : 'You';
  content.append(paragraph, time);
  message.appendChild(content);
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9+&.\-\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function findNamedFact(question, facts, type) {
  const normalized = normalizeText(question);
  const matches = facts
    .map((fact) => ({ fact, key: normalizeText(fact[0]) }))
    .filter(({ key }) => key.length > 3 && normalized.includes(key))
    .sort((a, b) => b.key.length - a.key.length);
  if (!matches.length) return null;
  const [name, detail, value] = matches[0].fact;
  return type === 'project'
    ? `${name}: Thanutchaporn's role was ${detail}. ${value === 'Value not listed' ? 'The project value is not listed in the public portfolio.' : `The recorded project value is ${value}.`}`
    : `${name}: This credential covers ${detail}. It is included in her 22-item Certifications portfolio.`;
}

function scoreKnowledgeItem(question, item) {
  const normalized = normalizeText(question);
  const words = new Set(normalized.split(' '));
  return item.terms.reduce((score, rawTerm) => {
    const term = normalizeText(rawTerm);
    if (normalized.includes(term)) return score + 4 + term.split(' ').length * 2;
    const termWords = term.split(' ');
    const overlap = termWords.filter((word) => word.length > 2 && words.has(word)).length;
    return score + overlap;
  }, 0);
}

function getAnswer(question) {
  const projectAnswer = findNamedFact(question, projectFacts, 'project');
  if (projectAnswer) return projectAnswer;
  const certificationAnswer = findNamedFact(question, certificationFacts, 'certification');
  if (certificationAnswer) return certificationAnswer;

  const ranked = portfolioAnswers
    .map((item) => ({ item, score: scoreKnowledgeItem(question, item) }))
    .sort((a, b) => b.score - a.score);
  if (ranked[0]?.score >= 4) return ranked[0].item.answer;

  return 'I use the combined information from the Portfolio, Key Projects, and Certifications pages. Ask me about a project name or value, career history, roles, AI and technical skills, education, credentials, industries, delivery process, achievements, availability, or contact details.';
}

function submitQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  addMessage(cleanQuestion, 'user');
  chatInput.value = '';
  suggestions.hidden = true;
  const typing = document.createElement('div');
  typing.className = 'chat-message bot chat-typing';
  typing.innerHTML = '<span class="message-avatar">✦</span><div><p><i></i><i></i><i></i></p></div>';
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  window.setTimeout(() => {
    typing.remove();
    addMessage(getAnswer(cleanQuestion), 'bot');
  }, 550);
}

chatLauncher.addEventListener('click', () => toggleChat(true));
chatClose.addEventListener('click', () => toggleChat(false));
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  submitQuestion(chatInput.value);
});
suggestions.addEventListener('click', (event) => {
  if (event.target.matches('button')) submitQuestion(event.target.textContent);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && chatPanel.classList.contains('open')) toggleChat(false);
});
