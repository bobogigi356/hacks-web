'use strict';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector('#header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-links');
const navLinks = [...nav.querySelectorAll('a')];
const sections = [...document.querySelectorAll('main section[id]')];
const progress = document.querySelector('.scroll-progress span');
const backTop = document.querySelector('.back-top');
document.querySelector('#year').textContent = new Date().getFullYear();

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = '菜单';
  nav.classList.remove('open');
}
menu.addEventListener('click', () => {
  const opened = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(opened));
  menu.textContent = opened ? '关闭' : '菜单';
  nav.classList.toggle('open', opened);
});
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!header.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});

let scrollPending = false;
function updateScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 35);
  backTop.classList.toggle('visible', y > 650);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? Math.min(100, y / scrollable * 100) : 0}%`;
  let current = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 150) current = section.id;
  }
  navLinks.forEach(link => {
    const active = link.hash === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateScroll);
  }
}, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

const reveals = document.querySelectorAll('.reveal');
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.04 });
  reveals.forEach(element => {
    element.classList.add('will-reveal');
    observer.observe(element);
  });
}

const seasons = [
  { year: '2021', title: '一场互不情愿的开始', text: '演艺生涯遭遇瓶颈的 Deborah，遇上急需工作的 Ava。她们从互不服气的雇佣关系开始，在打磨新段子的过程中逐渐看见对方，也触及各自不愿被碰到的旧伤。' },
  { year: '2022', title: '离开熟悉的舞台，重新试一次', text: '两人带着新素材踏上巡演，在不同城市与不同观众面前测试笑话。路途把创作、旧日矛盾和生活揉在一起，也让她们的合作有了新的可能。' },
  { year: '2024', title: '更大的机会，更复杂的关系', text: '各自的事业向前走了一段，两人再次靠近。Deborah 向深夜脱口秀的梦想发起冲击，Ava 则逐渐想清楚自己要什么；当机会来临，认可与权力的分配成为新的考验。' },
  { year: '2025', title: '梦想成为一份真正的工作', text: '当深夜节目从目标变成每天必须交出的作品，两人需要面对新的写手团队、行业压力和积累的矛盾。她们一边交锋，一边试着把节目做好。' },
  { year: '2026', title: '回到拉斯维加斯，留下自己的声音', text: '一则失实的死亡消息之后，Deborah 与 Ava 回到拉斯维加斯，更坚定地思考她要为喜剧留下什么。关于事业、陪伴与彼此影响的故事，在最后一季继续展开。' }
];
const seasonTabs = [...document.querySelectorAll('[data-season]')];
const panel = document.querySelector('#season-panel');
function selectSeason(index, moveFocus = false) {
  const season = seasons[index];
  seasonTabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', seasonTabs[index].id);
  panel.querySelector('.season-meta').textContent = `SEASON ${String(index + 1).padStart(2, '0')} · ${season.year}`;
  panel.querySelector('h3').textContent = season.title;
  panel.querySelector('h3 + p').textContent = season.text;
  if (moveFocus) seasonTabs[index].focus();
}
seasonTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectSeason(index));
  tab.addEventListener('keydown', event => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % seasons.length;
    else if (event.key === 'ArrowLeft') next = (index + seasons.length - 1) % seasons.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = seasons.length - 1;
    else return;
    event.preventDefault();
    selectSeason(next, true);
  });
});

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
let lastImageButton;
document.querySelectorAll('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    lastImageButton = button;
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = button.querySelector('img').alt;
    lightboxCaption.textContent = button.dataset.caption;
    lightbox.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('#close-lightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
  }
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (lastImageButton) lastImageButton.focus({ preventScroll: true });
});

// Keep progress and active navigation correct when folded article content changes height.
document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', updateScroll));
