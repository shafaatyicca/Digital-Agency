AOS.init({ duration: 900, once: true });
const nav = document.getElementById('nav'), toTop = document.getElementById('toTop');
const onScroll = () => {
  nav.classList.toggle('bg-black', scrollY > 50);
  toTop.classList.toggle('d-none', scrollY < 400);
};
addEventListener('scroll', onScroll); onScroll();
toTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

// Portfolio filter (uses Bootstrap's d-none)
const fb = document.querySelectorAll('[data-filter]');
fb.forEach(b => b.onclick = () => {
  fb.forEach(x => x.classList.remove('active')); b.classList.add('active');
  const f = b.dataset.filter;
  document.querySelectorAll('.portfolio-col').forEach(c =>
    c.classList.toggle('d-none', f !== 'all' && !c.classList.contains(f)));
});

// Skill rings count up when visible
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  io.unobserve(e.target);
  const r = e.target, t = +r.dataset.p, lab = r.querySelector('span'); let n = 0;
  const id = setInterval(() => { n++; r.style.setProperty('--p', n); lab.textContent = n + '%'; if (n >= t) clearInterval(id); }, 15);
}));
document.querySelectorAll('.ring').forEach(r => io.observe(r));

// Form validation (Bootstrap)
document.querySelectorAll('.needs-validation').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  if (f.checkValidity()) { f.reset(); f.classList.remove('was-validated'); alert('Thank you! We will reply soon.'); }
  else f.classList.add('was-validated');
}));
