(() => {
  'use strict';
  const d = window.PORTFOLIO;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const e = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = value => { const u = (value || '').trim(); return /^https:\/\//i.test(u) || (/^assets\/[a-zA-Z0-9_./-]+$/.test(u) && !u.includes('..')) ? u : ''; };
  const page = document.body.dataset.page || 'home';
  const nav = [ ['home', 'index.html', 'Home'], ['about', 'about.html', 'About'], ['projects', 'projects.html', 'Projects'], ['blogs', 'blogs.html', 'Journal'], ['links', 'links.html', 'Connect'] ];
  const arrow = '<svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>';
  const arrowUp = '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const iconMoon = '<svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.8 8.8 0 1 0 10.8 10.8Z"/></svg>';
  const iconSun = '<svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>';
  function linkOrNote(url, label, className = 'text-link', fallback = 'Link to be added') {
    const link = safeUrl(url);
    return link ? `<a class="${className}" href="${e(link)}" target="_blank" rel="noopener noreferrer">${label} ${arrowUp}</a>` : `<span class="missing-link">${e(fallback)}</span>`;
  }
  function buttonLink(url, label, kind = 'primary') {
    const href = safeUrl(url);
    return href ? `<a class="btn btn-${kind}" href="${e(href)}" target="_blank" rel="noopener noreferrer">${e(label)} ${arrowUp}</a>` : '';
  }
  const initials = e(d.initials || d.name.split(' ').map(x => x[0]).join('').slice(0,2));
  function header() {
    return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header" id="top"><div class="header-inner container">
      <a href="index.html" class="brand" aria-label="${e(d.name)} home"><span class="brand-mark">${initials}<i></i></span><span class="brand-name">${e(d.name)}<small>PERSONAL PORTFOLIO</small></span></a>
      <nav class="desktop-nav" aria-label="Main navigation">${nav.map(([key, href, label]) => `<a ${key===page?'aria-current="page"':''} href="${href}">${label}</a>`).join('')}</nav>
      <div class="nav-tools"><button class="theme-toggle" id="theme-toggle" aria-label="Switch theme" title="Switch theme">${iconMoon}</button><button class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span></button></div>
    </div><nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" hidden>${nav.map(([key, href, label]) => `<a ${key===page?'aria-current="page"':''} href="${href}">${label} ${arrow}</a>`).join('')}</nav></header>`;
  }
  function footer() {
    return `<footer class="footer"><div class="container footer-grid"><div><a href="index.html" class="footer-brand">${e(d.name)}<span class="gold-dot">.</span></a><p>Curiosity, engineered into reality.</p></div><div class="footer-right"><nav aria-label="Footer navigation"><a href="about.html">About</a><a href="projects.html">Projects</a><a href="blogs.html">Journal</a><a href="links.html">Connect</a></nav><span>© ${new Date().getFullYear()} ${e(d.name)} · Built with intention.</span></div></div></footer>`;
  }
  function topEyebrow(text) {return `<div class="eyebrow"><span class="eyebrow-line"></span>${e(text)}</div>`;}
  function sectionHeading(eyebrow, title, description = '') {return `<div class="section-heading reveal">${topEyebrow(eyebrow)}<h2>${title}</h2>${description?`<p>${e(description)}</p>`:''}</div>`;}
  function visual(project, large = false) {
    const imageUrl = safeUrl(project.image);
    const cls = `project-art art-${project.category}${large?' art-large':''}`;
    return `<div class="${cls}">${imageUrl?`<img src="${e(imageUrl)}" loading="lazy" alt="${e(project.title)} project photo"/>`:`<div class="art-grid"></div><span class="art-code">${e(project.number)} / ${e(project.categoryLabel)}</span><span class="art-symbol" aria-hidden="true">${project.category==='automation'?'◈':project.category==='research'?'◎':'⌘'}</span><span class="art-coordinate">BUILD · TEST · REFINE</span>`}</div>`;
  }
  function projectCard(project) {
    return `<article class="project-card reveal" data-category="${e(project.category)}">${visual(project)}<div class="project-card-content"><div class="card-topline"><span>${e(project.categoryLabel)}</span><span>${e(project.number)} / 04</span></div><h3>${e(project.title)}</h3><p class="project-subtitle">${e(project.subtitle)}</p><p>${e(project.short)}</p><div class="pill-row">${project.stack.slice(0,3).map(tag=>`<span class="pill">${e(tag)}</span>`).join('')}</div><button class="card-action" data-project="${e(project.id)}" aria-label="View ${e(project.title)} case study">Explore case study <span>${arrowUp}</span></button></div></article>`;
  }
  function blogCard(post) {return `<a class="blog-preview reveal" href="blogs.html#${e(post.id)}"><span class="blog-preview-meta">${e(post.category)} <span>·</span> ${e(post.readTime)}</span><h3>${e(post.title)}</h3><p>${e(post.excerpt)}</p><span class="card-action">Read the article <span>${arrowUp}</span></span></a>`;}
  function home() {
    const mainProjects = d.projects.slice(0,3), posts = d.blogs.slice(0,2);
    return `<main id="main"><section class="hero container"><div class="hero-copy reveal is-visible">${topEyebrow(d.eyebrow)}<h1>Turning ideas into<br/><em>things that work<span class="gold-dot">.</span></em></h1><p class="hero-lead">${e(d.intro)}</p><div class="hero-actions"><a class="btn btn-primary" href="projects.html">Explore my work ${arrow}</a><a class="btn btn-outline" href="about.html">More about me ${arrowUp}</a></div><div class="hero-caption"><span class="status-pulse"></span>${e(d.availability)}</div></div>
      <div class="hero-visual reveal is-visible" aria-hidden="true"><div class="hero-orbit orbit-a"></div><div class="hero-orbit orbit-b"></div><div class="hero-orbit orbit-c"></div><div class="hero-glow"></div><div class="hero-core"><span class="core-inner">${initials}</span><span class="core-rule"></span><span class="core-label">MADE WITH CURIOSITY</span></div><div class="orbit-note note-top">01 <span>IDEATE</span></div><div class="orbit-note note-right">02 <span>DESIGN</span></div><div class="orbit-note note-bottom">03 <span>BUILD</span></div><div class="visual-corner">PORTFOLIO / ${new Date().getFullYear()}</div></div>
    </section><div class="container"><div class="hero-bottom"><span>SCROLL TO EXPLORE <span class="down-arrow">↓</span></span><span>EMBEDDED SYSTEMS — AUTOMATION — ELECTRONICS</span></div></div>
    <section class="section-intro"><div class="container intro-grid reveal"><span class="subtle-label">01 / THE APPROACH</span><p>I'm interested in the space where <strong>curiosity meets real engineering</strong>—where a circuit, a line of code, or a carefully designed mechanism can solve a practical problem.</p><span class="signature">Think. Prototype. Improve.</span></div></section>
    <section class="section-pad container" id="featured">${sectionHeading('SELECTED WORK / 2026','Built to solve real problems.','A few projects and engineering investigations that shaped the way I work.')}<div class="project-grid">${mainProjects.map(projectCard).join('')}</div><div class="section-end reveal"><a href="projects.html" class="btn btn-outline">All projects ${arrow}</a></div></section>
    <section class="specialty-wrap"><div class="container specialty-grid"><div class="reveal">${topEyebrow('WHAT I WORK WITH')}<h2>Ideas are interesting.<br/><em>Execution matters.</em></h2><p>My toolkit combines hardware, embedded software, and automation—different disciplines working together toward one reliable result.</p><a href="about.html" class="inline-arrow">Explore my capabilities ${arrow}</a></div><div class="specialty-list reveal">${d.skillGroups.map((g,i)=>`<div class="specialty-item"><span>0${i+1}</span><div><h3>${e(g.title)}</h3><p>${e(g.skills.slice(0,4).join(' · '))}</p></div>${arrowUp}</div>`).join('')}</div></div></section>
    <section class="section-pad container">${sectionHeading('THE JOURNAL','Notes from the process.','Thoughts, lessons, and observations from building and learning.')}<div class="blog-preview-grid">${posts.map(blogCard).join('')}</div><div class="section-end reveal"><a class="btn btn-outline" href="blogs.html">Visit the journal ${arrow}</a></div></section>
    ${contactStrip()}</main>`;
  }
  function contactStrip() {return `<section class="contact-strip"><div class="container contact-strip-inner reveal"><div>${topEyebrow('LET’S CONNECT')}<h2>Have something<br/><em>worth building?</em></h2></div><div><p>Whether it's a technical challenge, a collaboration, or simply an interesting idea, I'd love to hear about it.</p><a class="btn btn-light" href="links.html">Get in touch ${arrowUp}</a></div></div></section>`;}
  function innerHero(n, eyebrow, title, desc) {return `<section class="page-hero container reveal is-visible"><div class="page-hero-index">${e(n)} / 04</div>${topEyebrow(eyebrow)}<h1>${title}</h1><p>${e(desc)}</p><div class="page-hero-rule"></div></section>`;}
  function about() {
    const avatar = safeUrl(d.avatar);
    return `<main id="main">${innerHero('01','ABOUT / THE PERSON BEHIND THE WORK','Driven by curiosity.<br/><em>Grounded in making.</em>', d.aboutIntro)}
      <section class="container about-layout section-pad-sm"><div class="about-portrait reveal">${avatar?`<img src="${e(avatar)}" alt="Portrait of ${e(d.name)}"/>`:`<div class="portrait-ring"><span>${initials}</span></div>`}<span class="portrait-caption">${e(d.name)} / ENGINEER & MAKER</span></div><div class="about-story reveal">${topEyebrow('IN A FEW WORDS')}<h2>Learning by taking things apart. Growing by putting them together.</h2><p>${e(d.aboutIntro)}</p><p>My interests extend across electronics, sensing, motor control, and the software that brings hardware to life. Every project is an opportunity to make a system clearer, simpler, and more useful.</p><blockquote>“${e(d.philosophy)}”</blockquote><div class="mini-meta"><span>BASED IN <b>${e(d.location)}</b></span><span>FOCUS <b>Embedded · Automation · Products</b></span></div></div></section>
      <section class="surface-section section-pad"><div class="container">${sectionHeading('EXPERIENCE & LEARNING','The path so far.','Education and focused technical training.')}
      <div class="timeline">${d.education.map((item,i)=>`<div class="timeline-row reveal"><span class="timeline-index">0${i+1}</span><div><h3>${e(item.degree)}</h3><p>${e(item.school)}</p></div><span class="timeline-note">${e(item.note)}</span></div>`).join('')}</div></div></section>
      <section class="container section-pad">${sectionHeading('TECHNICAL TOOLKIT','The tools behind the work.','A practical mix of electronics, code, and control systems.')}<div class="skill-grid">${d.skillGroups.map((g,i)=>`<div class="skill-card reveal"><span class="skill-num">0${i+1} /</span><h3>${e(g.title)}</h3><div class="skill-tags">${g.skills.map(s=>`<span>${e(s)}</span>`).join('')}</div></div>`).join('')}</div>
      <div class="resume-bar reveal"><div><h3>Résumé & background</h3><p>Looking for a quick overview? Open my résumé.</p></div>${buttonLink(d.resume,'View résumé','primary') || '<span class="missing-link">Add résumé URL in assets/js/data.js</span>'}</div></section>${contactStrip()}</main>`;
  }
  function projects() {
    return `<main id="main">${innerHero('02','PROJECT ARCHIVE','Proof is in<br/><em>the building.</em>','Projects are where questions become systems. Explore the problems, technical approaches, and ideas behind my work.')}
    <section class="container section-pad-sm"><div class="filter-row reveal" role="group" aria-label="Filter projects"><button class="filter-chip active" data-filter="all" aria-pressed="true">All projects <span>0${d.projects.length}</span></button><button class="filter-chip" data-filter="embedded" aria-pressed="false">Embedded</button><button class="filter-chip" data-filter="automation" aria-pressed="false">Automation</button><button class="filter-chip" data-filter="research" aria-pressed="false">Research</button></div><div class="project-grid project-grid-page">${d.projects.map(projectCard).join('')}</div><p class="empty-filter" hidden>No projects in this category yet.</p></section>
    <section class="container note-block reveal"><span class="note-mark">✳</span><div><h3>Engineering is an ongoing process.</h3><p>Some entries describe prototypes, research, or work in development rather than finished commercial products. Project repositories and real photographs can be added as they become available.</p></div></section>${contactStrip()}
    <dialog class="project-dialog" id="project-dialog" aria-labelledby="dialog-title"><div class="dialog-body"></div></dialog></main>`;
  }
  function blogs() {
    return `<main id="main">${innerHero('03','JOURNAL / REFLECTIONS','A little more<br/><em>behind the build.</em>','Notes on engineering, problem-solving, learning, and the lessons that stay with me.')}
    <section class="container journal-list section-pad-sm"><div class="journal-info reveal"><div class="info-badge">A NOTE ON THESE ARTICLES</div><p>These are editable draft reflections based on technical topics. Personalize the experiences, add your own photos, and confirm the details before submitting them as original coursework.</p></div>${d.blogs.map((b,i)=>`<article class="journal-article reveal" id="${e(b.id)}"><div class="journal-heading"><span>0${i+1} / ${e(b.category)}</span><span>${e(b.readTime)}</span></div><div class="journal-art journal-art-${i+1}" aria-label="Decorative technical illustration"><span class="journal-art-grid"></span><span class="journal-art-word">${i?'OBSERVE / QUESTION / LEARN':'THINK / TEST / REFINE'}</span><span class="journal-art-glyph">${i?'◎':'⌘'}</span></div><div class="journal-body"><div class="blog-date">${e(b.date)}</div><h2>${e(b.title)}</h2><p class="journal-excerpt">${e(b.excerpt)}</p><div class="article-prose">${b.paragraphs.map(p=>`<p>${e(p)}</p>`).join('')}</div><div class="photo-reminder">For your assignment: replace the illustration with an original photo relevant to this article.</div></div></article>`).join('')}</section>${contactStrip()}</main>`;
  }
  function contactCard(name, desc, value, url, symbol) {
    const valid = safeUrl(url);
    return `<div class="connect-card reveal"><div class="connect-icon">${symbol}</div><div><span>${e(name)}</span><h3>${e(desc)}</h3><p>${e(value)}</p></div>${valid?`<a href="${e(valid)}" aria-label="Visit ${e(name)}" target="_blank" rel="noopener noreferrer">${arrowUp}</a>`:`<span class="unlinked" title="Add URL in data.js">+</span>`}</div>`;
  }
  function links() {
    const emailMarkup = d.email ? `<a class="btn btn-primary" href="mailto:${e(d.email)}">Send an email ${arrowUp}</a>`:'<span class="missing-link">Add your professional email in assets/js/data.js</span>';
    return `<main id="main">${innerHero('04','CONNECT / ELSEWHERE','Good work starts<br/><em>with a conversation.</em>','Want to talk engineering, discuss a project, or collaborate on something new? Find the right channel below.')}
    <section class="container section-pad-sm"><div class="connect-feature reveal"><div>${topEyebrow('DIRECT CONTACT')}<h2>Say hello<span class="gold-dot">.</span></h2><p>${e(d.availability)}</p></div>${emailMarkup}</div><div class="connect-grid">
      ${contactCard('GITHUB','Code & technical projects',d.github||'Profile URL not added',d.github,'⌘')}
      ${contactCard('LINKEDIN','Professional updates',d.linkedin||'Profile URL not added',d.linkedin,'in')}
      ${contactCard('YOUTUBE','Self-introduction video',d.youtubeVideo||'2–5 minute video link not added',d.youtubeVideo,'▶')}
      ${contactCard('RÉSUMÉ','My résumé PDF',d.resume||'Résumé link not added',d.resume,'↗')}
    </div></section><section class="surface-section section-pad"><div class="container video-layout reveal"><div>${topEyebrow('A SHORT INTRODUCTION')}<h2>More than a<br/><em>project list.</em></h2><p>A short self-introduction helps people learn who I am, the work that excites me, and what I want to explore next.</p><p class="smaller-copy">For the coursework, add your own 2–5 minute video to YouTube and paste the link in the data file.</p></div><div class="video-panel"><span class="video-play">▶</span><h3>Meet the person behind the work</h3><p>${d.youtubeVideo?'Watch my introduction':'Video coming soon · add your YouTube link'}</p>${buttonLink(d.youtubeVideo,'Watch introduction','outline')}</div></div></section>${contactStrip()}</main>`;
  }
  const pages = {home, about, projects, blogs, links};
  document.title = `${page === 'home' ? 'Portfolio' : ({about:'About',projects:'Projects',blogs:'Journal',links:'Connect'})[page]} | ${d.name}`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${d.name} — ${d.role}. Explore projects, technical skills, journal and ways to connect.`);
  $('#app').innerHTML = header() + (pages[page]||home)() + footer() + '<a class="back-to-top" href="#top" aria-label="Back to top">↑</a>';
  // Theme persistence and accessible menu
  const themeBtn = $('#theme-toggle');
  function setTheme(t) { document.documentElement.dataset.theme = t; themeBtn.innerHTML = t==='light'?iconSun:iconMoon; themeBtn.setAttribute('aria-label', t==='light'?'Use dark theme':'Use light theme'); }
  let storedTheme = null;
  try { storedTheme = localStorage.getItem('portfolio-theme'); } catch (_) { /* blocked storage: use default */ }
  setTheme(storedTheme === 'light' ? 'light' : 'dark');
  themeBtn.addEventListener('click', ()=>{const t = document.documentElement.dataset.theme==='light'?'dark':'light';setTheme(t);try { localStorage.setItem('portfolio-theme',t); } catch (_) { /* no persistent storage available */ }});
  const menuBtn = $('#menu-toggle'), mobileNav = $('#mobile-nav');
  function closeMenu(){mobileNav.hidden=true;menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Open menu');}
  menuBtn.addEventListener('click',()=>{const willOpen=mobileNav.hidden;mobileNav.hidden=!willOpen;menuBtn.setAttribute('aria-expanded',String(willOpen));menuBtn.setAttribute('aria-label',willOpen?'Close menu':'Open menu');});
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape') closeMenu();});
  document.addEventListener('click',ev=>{if(!ev.target.closest('.site-header')) closeMenu();});
  // Intersection-based entrance animations (honours reduced-motion preferences)
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
    $$('.reveal').forEach(el=>observer.observe(el));
  } else { $$('.reveal').forEach(el=>el.classList.add('is-visible')); }
  // Project filtering
  $$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.filter-chip').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});
    let count=0;$$('.project-card').forEach(card=>{const show=btn.dataset.filter==='all'||card.dataset.category===btn.dataset.filter;card.hidden=!show;if(show)count++;});
    const empty=$('.empty-filter'); if(empty)empty.hidden=count>0;
  }));
  // Accessible modal project details
  const dialog=$('#project-dialog');
  $$('[data-project]').forEach(btn=>btn.addEventListener('click',()=>{
    const p=d.projects.find(item=>item.id===btn.dataset.project);if(!p||!dialog)return;
    $('.dialog-body',dialog).innerHTML = `<button class="dialog-close" aria-label="Close project details">✕</button>${visual(p,true)}<div class="dialog-main"><span class="dialog-category">${e(p.categoryLabel)} / ${e(p.number)}</span><h2 id="dialog-title">${e(p.title)}</h2><p class="dialog-subtitle">${e(p.subtitle)}</p><div class="dialog-section"><h3>THE CHALLENGE</h3><p>${e(p.problem)}</p></div><div class="dialog-section"><h3>THE APPROACH</h3><p>${e(p.solution)}</p></div><div class="dialog-section"><h3>PROJECT NOTE</h3><p>${e(p.outcome)}</p></div><div class="pill-row">${p.stack.map(tag=>`<span class="pill">${e(tag)}</span>`).join('')}</div><div class="dialog-links">${linkOrNote(p.github,'Source code & README','text-link','Add your own GitHub repository link in data.js')}</div></div>`;
    $('.dialog-close',dialog).addEventListener('click',()=>dialog.close());dialog.showModal();
  }));
  dialog?.addEventListener('click',ev=>{if(ev.target===dialog)dialog.close();});
  // Fix anchored blog positions after content insertion
  if(location.hash && $(location.hash.replace(/[^a-zA-Z0-9#_-]/g,''))) requestAnimationFrame(()=>$(location.hash).scrollIntoView({block:'start'}));
})();
