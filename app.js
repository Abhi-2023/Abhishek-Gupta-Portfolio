// ===== Nav scroll state =====
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile menu =====
const menu = document.getElementById('mobileMenu');
document.getElementById('burger').addEventListener('click', () => menu.classList.add('open'));
document.getElementById('mmClose').addEventListener('click', () => menu.classList.remove('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// ===== Accordion =====
document.querySelectorAll('.acc').forEach(acc => {
  const q = acc.querySelector('.acc-q');
  const a = acc.querySelector('.acc-a');
  const sync = () => { a.style.maxHeight = acc.classList.contains('open') ? a.scrollHeight + 'px' : '0px'; };
  // init open ones
  if (acc.classList.contains('open')) requestAnimationFrame(sync);
  q.addEventListener('click', () => {
    const isOpen = acc.classList.contains('open');
    document.querySelectorAll('.acc').forEach(o => { o.classList.remove('open'); o.querySelector('.acc-a').style.maxHeight = '0px'; });
    if (!isOpen) { acc.classList.add('open'); sync(); }
  });
});
window.addEventListener('resize', () => {
  const open = document.querySelector('.acc.open .acc-a');
  if (open) open.style.maxHeight = open.scrollHeight + 'px';
});

// ===== Projects carousel =====
const track = document.getElementById('projTrack');
const prev = document.getElementById('projPrev');
const next = document.getElementById('projNext');
const step = () => {
  const card = track.querySelector('.proj-card');
  if (!card) return track.clientWidth;
  return card.getBoundingClientRect().width + 24;
};
const updateBtns = () => {
  prev.disabled = track.scrollLeft < 8;
  next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
};
prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
track.addEventListener('scroll', updateBtns, { passive: true });
window.addEventListener('resize', updateBtns);
updateBtns();

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Contact form -> mailto =====
const cform = document.getElementById('cform');
if (cform) {
  const TO = 'abhishekofficials2004@gmail.com';
  const CC = 'abhishekgupta862004@gmail.com';
  const success = document.getElementById('formSuccess');
  const fields = {
    name: cform.querySelector('#cf-name'),
    email: cform.querySelector('#cf-email'),
    message: cform.querySelector('#cf-message'),
  };
  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const setErr = (input, bad) => {
    input.classList.toggle('invalid', bad);
    input.closest('.field').classList.toggle('show-err', bad);
  };
  // clear error as the user types
  Object.values(fields).forEach(inp => inp.addEventListener('input', () => setErr(inp, false)));

  cform.addEventListener('submit', e => {
    e.preventDefault();
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const message = fields.message.value.trim();
    const subject = cform.querySelector('#cf-subject').value.trim();

    const errs = [
      [fields.name, !name],
      [fields.email, !isEmail(email)],
      [fields.message, !message],
    ];
    errs.forEach(([inp, bad]) => setErr(inp, bad));
    if (errs.some(([, bad]) => bad)) {
      const first = errs.find(([, bad]) => bad)[0];
      first.focus();
      return;
    }

    const subj = encodeURIComponent(subject || `Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}\n\n— Sent from your portfolio site`
    );
    window.location.href = `mailto:${TO}?cc=${CC}&subject=${subj}&body=${body}`;

    success.classList.add('show');
  });
}
