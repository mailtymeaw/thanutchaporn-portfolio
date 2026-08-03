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

const portfolioAnswers = [
  {
    terms: ['achievement', 'achievements', 'impact', 'numbers', 'result'],
    answer: 'Thanutchaporn has managed 35 projects with a maximum value of THB 48M, delivered work across 11 government and 11 private-sector organizations, led cross-functional teams of up to 40 people, and trained up to 120 participants per session.'
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
    answer: 'Her delivery portfolio spans AI, software, infrastructure, cloud, system integration, data, BI, ERP, and digital transformation. Examples include ML demand forecasting, anomaly detection, OCR, chatbots, biometric screening, digital medical certification, Mobile ID3, cybersecurity infrastructure, CCTV on-car cameras, vending systems, GIS analytics, IoT monitoring, and e-service platforms. She also supported the THB 59M Meter Phase 5 project, separately from the projects she directly managed.'
  },
  {
    terms: ['skill', 'skills', 'expertise', 'technology', 'tools', 'stack'],
    answer: 'Her core strengths are project leadership, AI/ML, cloud and infrastructure, data and visualization, ERP, and system integration. Her toolkit includes Jira, ClickUp, Trello, Notion, Microsoft 365, Azure, AWS, Power BI, Tableau, SQL, Oracle, Postman, and Figma.'
  },
  {
    terms: ['education', 'degree', 'university', 'study', 'gpa', 'master'],
    answer: 'She earned an M.S. in Information Technology Management from NIDA with a GPA of 3.70, a B.S. in Computer Science from KMUTNB, and a High Vocational qualification in Business and Information Technology from RMUTTO.'
  },
  {
    terms: ['certificate', 'certification', 'certified', 'comptia', 'aws', 'pmp'],
    answer: 'She is CompTIA Project+ certified and has completed training in project management, advanced AI engineering, AWS Cloud Foundations, AI and Machine Learning on Google Cloud, project investment, and systems analysis.'
  },
  {
    terms: ['hire', 'why', 'strength', 'value', 'candidate'],
    answer: 'Thanutchaporn combines hands-on technology knowledge with end-to-end project leadership. She can translate business needs into delivery plans, align stakeholders and vendors, control scope, risk, quality, and resources, and lead complex AI and digital transformation projects to measurable outcomes.'
  },
  {
    terms: ['contact', 'email', 'phone', 'reach', 'available', 'availability'],
    answer: 'Thanutchaporn is available now. You can reach her at thanutchapornmekkala@gmail.com or call +66 87 678 9791. She is based in Bangkok, Thailand.'
  },
  {
    terms: ['language', 'english', 'thai'],
    answer: 'She is a native Thai speaker with intermediate working proficiency in English.'
  },
  {
    terms: ['client', 'clients', 'industry', 'industries', 'sector', 'sectors'],
    answer: 'Her client portfolio spans government, state enterprise, energy and utilities, banking and finance, healthcare, retail and consumer services, insurance, tourism, and technology/software organizations.'
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

function getAnswer(question) {
  const normalized = question.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;
  portfolioAnswers.forEach((item) => {
    const score = item.terms.reduce((total, term) => total + (normalized.includes(term) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; bestMatch = item; }
  });
  return bestMatch?.answer || 'I can answer questions about Thanutchaporn\'s career, projects, AI and technical skills, education, certifications, achievements, availability, or contact details. Try asking about one of those topics.';
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
