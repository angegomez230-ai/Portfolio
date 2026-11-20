// Language switcher and mobile navigation. No external libraries needed.
const translations = {
  de: {
    navHome:'Start',navAbout:'Über mich',navSkills:'Skills',navProjects:'Projekte',navServices:'Beitrag',navContact:'Kontakt',
    heroEyebrow:'WIRTSCHAFTSINFORMATIK-STUDENTIN',heroTitle:'Hi, ich bin Ange.',heroHeadline:'Wo Wirtschaft auf <em>Technologie</em> trifft.',heroText:'Ich beschäftige mich mit Softwareentwicklung, Daten und digitaler Innovation – durch praktische Projekte und die Freude daran, echte Probleme zu lösen.',heroProjects:'Meine Projekte <span aria-hidden="true">↗</span>',heroContact:'Kontakt aufnehmen',heroMeta:'Offen für neue berufliche Möglichkeiten im IT-Bereich',scrollDown:'Mehr entdecken ↓',
    aboutTitle:'Der Mensch hinter dem Code.',aboutIntro:'Ein bisschen über meinen Weg, meine Denkweise und das, was mich antreibt.',storyTitle:'Meine Geschichte',storyText:'Ich studiere Wirtschaftsinformatik im 5. Semester an der Hochschule für Wirtschaft und Gesellschaft Ludwigshafen. Während meines Studiums habe ich mein Interesse an der Softwareentwicklung und der Arbeit mit Datenbanken entdeckt. Besonders gerne setze ich das Gelernte in praktischen Projekten um. So habe ich gemeinsam mit anderen Studierenden eine Webanwendung mit Java, JSP und PostgreSQL entwickelt.',mindsetTitle:'Meine Denkweise',mindsetText:'Ich möchte verstehen, wie Dinge funktionieren, Probleme in überschaubare Schritte aufteilen und mich durch Übung und Feedback weiterentwickeln.',languagesTitle:'Sprachen',french:'Französisch · Muttersprache',german:'Deutsch · C1',english:'Englisch · Gute Kenntnisse',hobbiesTitle:'Hobbys & Interessen',hobbiesText:'In meiner Freizeit gehe ich gerne spazieren, höre Radio und schaue Filme. Außerdem interessiere ich mich für neue Technologien und lerne gerne Neues dazu.',
    funTitle:'Fun Facts',
    funText:'Ich spreche Französisch, Deutsch und Englisch. Ich finde es schön, mich in verschiedenen Sprachen verständigen zu können und unterschiedliche Kulturen kennenzulernen.',
    skillsTitle:'Technologien, mit denen ich arbeite.',skillsIntro:'Technologien, die ich im Studium, in Projekten und beim Lernen eingesetzt habe.',skillWeb:'◉ Webentwicklung',skillProgramming:'⌘ Programmierung & Datenbanken',skillTools:'◇ Tools & Technologien',skillFocus:'✧ Weitere Interessen',skillSoft:'♡ So arbeite ich',aiAssisted:'KI-gestützte Entwicklung',digitalization:'Digitalisierung',process:'Prozessverbesserung',teamwork:'Teamarbeit',problemSolving:'Problemlösung',curiosity:'Neugier',learning:'Kontinuierliches Lernen.',
    projectsTitle:'Ausgewählte Arbeiten.',projectsIntro:'Projekte, in denen ich mein Wissen praktisch angewendet habe.',waxType:'HOCHSCHUL-TEAMPROJEKT',waxText:'Eine Webanwendung für Wax-Stoffe und maßgeschneiderte Kleidung, die wir gemeinsam als Hochschulteam entwickelt haben.',liveDemo:'Live-Demo ↗',debugType:'EIGENSTÄNDIGES LERNPROJEKT',debugTitle:'KI-gestütztes Python-Debugging',debugText:'Ich untersuche, wie KI-Coding-Assistenten dabei helfen können, Syntax-, Laufzeit- und Logikfehler in Python zu erkennen und zu verstehen.',documentationSoon:'Dokumentation folgt',futureType:'NÄCHSTES EIGENES PROJEKT · GEPLANT',futureTitle:'Data Insights Dashboard',futureText:'Geplantes eigenes Projekt: Einen öffentlichen Datensatz mit Python und SQL auswerten und die Ergebnisse in einem übersichtlichen Dashboard visualisieren. Das entwickeln und dokumentieren wir Schritt für Schritt.',comingSoon:'In Planung · Noch nicht entwickelt',
    servicesTitle:'So kann ich mitwirken.',servicesIntro:'Bereiche, in denen ich Teams gern unterstützen und mich gleichzeitig fachlich weiterentwickeln möchte.',service1Title:'Webanwendungen',service1Text:'Bei der Entwicklung und Verbesserung benutzerfreundlicher Webanwendungen mitarbeiten.',service2Title:'Daten & Datenbanken',service2Text:'Mit SQL, strukturierten Daten und datenbankgestützten Funktionen arbeiten.',service3Title:'Digitale Arbeitsabläufe',service3Text:'Erkunden, wie Technologien und KI-Tools alltägliche Prozesse vereinfachen können.', 
    contactTitle:'Lass uns vernetzen.',contactText:'Du interessierst dich für meine Arbeit oder siehst eine Möglichkeit zur Zusammenarbeit? Ich freue mich über eine Nachricht.',githubButton:'Mein GitHub ansehen ↗',contactCardTitle:'ONLINE FINDEN',contactEmailNote:'Füge hier vor der Veröffentlichung deine berufliche E-Mail-Adresse ein, damit Recruiter dich direkt kontaktieren können.',placeholder:'PLATZHALTER',footerText:'Mit Sorgfalt und Neugier erstellt.',backTop:'Nach oben ↑'
  }
};
const originalEnglish = {};
document.querySelectorAll('[data-i18n]').forEach(el => { originalEnglish[el.dataset.i18n] = el.innerHTML; });
function setLanguage(lang) {
  const dictionary = lang === 'de' ? translations.de : originalEnglish;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = dictionary[el.dataset.i18n]; 
    if (value !== undefined) el.innerHTML = value;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  try { localStorage.setItem('portfolio-language', lang); } catch (error) { /* works without storage */ }
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const sections = document.querySelectorAll('main section[id]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
}
document.getElementById('year').textContent = new Date().getFullYear();
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch (error) { /* no storage */ }
setLanguage(savedLanguage === 'de' ? 'de' : 'en');
