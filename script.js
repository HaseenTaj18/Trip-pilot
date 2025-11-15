/* ---------- DATA (6 each) ---------- */
const hotels = [
  { id:1, title:"Grand Plaza Hotel", location:"Paris, France", img:"https://i.pinimg.com/736x/2a/bf/8c/2abf8ce3107ad921bdeb4bc4ce257bbb.jpg", price:250, rating:4.8 },
  { id:2, title:"Ocean View Resort", location:"Bali, Indonesia", img:"https://i.pinimg.com/736x/bd/ed/5f/bded5feaee76d8df023104bd124ced8f.jpg", price:180, rating:4.9 },
  { id:3, title:"City Center Suites", location:"New York, USA", img:"https://i.pinimg.com/736x/1d/2e/49/1d2e49db993f1c3d8becbb815d513a53.jpg", price:300, rating:4.7 },
  { id:4, title:"Seaside Grand", location:"Santorini, Greece", img:"https://i.pinimg.com/1200x/13/46/90/134690e463149d384c18523460d24a2b.jpg", price:220, rating:4.6 },
  { id:5, title:"Mountain Retreat", location:"Swiss Alps", img:"https://i.pinimg.com/736x/ef/02/f9/ef02f9d2a4a85614836b99c3c76b2697.jpg", price:195, rating:4.7 },
  { id:6, title:"Urban Boutique", location:"Rome, Italy", img:"https://i.pinimg.com/736x/40/d1/a2/40d1a2ce92e2b27d672352687ea5928f.jpg", price:160, rating:4.5 }
];

const flights = [
  { id:1, airline:"Air France", dep:"08:00 AM", from:"New York", arr:"10:00 PM", to:"Paris", dur:"7h 30m", date:"Dec 15, 2025", price:650, img:"https://i.pinimg.com/736x/2b/1d/78/2b1d78507260315b14e5baf4fe59720f.jpg" },
  { id:2, airline:"Emirates", dep:"02:30 PM", from:"London", arr:"11:45 PM", to:"Dubai", dur:"6h 45m", date:"Dec 18, 2025", price:800, img:"https://i.pinimg.com/736x/13/66/ec/1366ecbd3cd495ba4d79ebeea3eade5c.jpg" },
  { id:3, airline:"Japan Airlines", dep:"09:20 AM", from:"Chicago", arr:"01:35 AM", to:"Tokyo", dur:"12h 15m", date:"Jan 5, 2026", price:920, img:"https://i.pinimg.com/1200x/cc/ba/65/ccba65641715954f8878f692318d76bf.jpg" },
  { id:4, airline:"Delta", dep:"06:45 AM", from:"San Francisco", arr:"03:10 PM", to:"Honolulu", dur:"6h 25m", date:"Feb 10, 2026", price:720, img:"https://i.pinimg.com/1200x/af/55/bc/af55bc3eef6b93d152ba6d44954b1a5d.jpg" },
  { id:5, airline:"Lufthansa", dep:"11:00 AM", from:"Berlin", arr:"02:20 PM", to:"Rome", dur:"2h 20m", date:"Mar 12, 2026", price:210, img:"https://i.pinimg.com/1200x/71/82/20/718220540d5c9e1d9c682e844729ea0a.jpg" },
  { id:6, airline:"Qatar Airways", dep:"09:00 PM", from:"Doha", arr:"06:30 AM", to:"Cape Town", dur:"10h 30m", date:"Apr 8, 2026", price:980, img:"https://i.pinimg.com/736x/9b/45/90/9b4590e9f1de97b0ebc5b25313958ce4.jpg" }
];

const activities = [
  { id:1, title:"Sunset Desert Safari", place:"Dubai, UAE", img:"https://images.pexels.com/photos/2867771/pexels-photo-2867771.jpeg?auto=compress&cs=tinysrgb&w=1200", duration:"6 hours", capacity:"Up to 30", price:120, rating:4.8 },
  { id:2, title:"Traditional Tea Ceremony", place:"Tokyo, Japan", img:"https://i.pinimg.com/736x/be/0c/71/be0c71e0a5ed2028a6db657fe9e4d100.jpg", duration:"1.5 hours", capacity:"Up to 8", price:60, rating:4.9 },
  { id:3, title:"Coastal Kayaking", place:"Bali, Indonesia", img:"https://i.pinimg.com/736x/2f/02/a6/2f02a6f8f34726c343ada20e7b33fe16.jpg", duration:"3 hours", capacity:"Up to 10", price:80, rating:4.7 },
  { id:4, title:"City Bike Tour", place:"Amsterdam, Netherlands", img:"https://i.pinimg.com/736x/ec/21/44/ec214438a1d158f64c1e1ab29acb6a5a.jpg", duration:"2 hours", capacity:"Up to 12", price:40, rating:4.6 },
  { id:5, title:"Mountain Hiking", place:"Swiss Alps", img:"https://i.pinimg.com/736x/34/08/0d/34080db093e882da00157f0ee959bf8f.jpg", duration:"7 hours", capacity:"Up to 10", price:150, rating:4.9 },
  { id:6, title:"Snorkeling Adventure", place:"Maldives", img:"https://i.pinimg.com/736x/0a/2a/78/0a2a78588fb63f38562c40685459641c.jpg", duration:"3 hours", capacity:"Up to 8", price:95, rating:4.7 }
];

const guides = [
  { id:1, title:"Ultimate Paris Travel Guide 2025", img:"https://i.pinimg.com/736x/1e/fe/ce/1efece78e0625c0a85af82a620b8eb14.jpg", readtime:"15 min read", date:"Nov 28, 2025" },
  { id:2, title:"First Timer's Guide to Tokyo", img:"https://i.pinimg.com/736x/d0/f2/73/d0f273f6ac5aa2f0a5170f8be182d233.jpg", readtime:"12 min read", date:"Nov 25, 2025" },
  { id:3, title:"Bali Budget Travel Tips", img:"https://i.pinimg.com/736x/70/41/5d/70415d91a34b11f5c360e8685de4d7f6.jpg", readtime:"8 min read", date:"Oct 10, 2025" },
  { id:4, title:"Santorini Photo Walk", img:"https://i.pinimg.com/736x/ab/11/a8/ab11a8a61508142db83648552b0d512a.jpg", readtime:"10 min read", date:"Sep 10, 2025" },
  { id:5, title:"Rome: Eat & Discover", img:"https://i.pinimg.com/736x/82/98/a4/8298a460b819ac2ef8a017e48e5b9b2e.jpg", readtime:"11 min read", date:"Dec 1, 2025" },
  { id:6, title:"New York: 48 Hours", img:"https://i.pinimg.com/1200x/ab/b3/dd/abb3dde16a049477e7595dc5598d00c8.jpg", readtime:"9 min read", date:"Dec 5, 2025" }
];

/* ---------- DOM HOOKS ---------- */
const hotelGrid = document.getElementById('hotelGrid');
const flightList = document.getElementById('flightList');
const activityGrid = document.getElementById('activityGrid');
const guideGrid = document.querySelector('.guide-grid');

const destFilter = document.getElementById('destFilter');
const destSort = document.getElementById('destSort');

const searchInput = document.getElementById('universalSearch');
const searchBtn = document.getElementById('searchBtn');

/* ---------- RENDER FUNCTIONS ---------- */
function renderHotels(list){
  hotelGrid.innerHTML = '';
  list.forEach(h=>{
    const el = document.createElement('div');
    el.className = 'card hotel-card';
    el.innerHTML = `
      <img class="hotel-img" src="${h.img}" alt="${escapeHtml(h.title)}" />
      <div class="hotel-body">
        <h3>${escapeHtml(h.title)}</h3>
        <p style="color:#6b7280">${escapeHtml(h.location)}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px">
          <div>
            <div class="hotel-price">$${h.price}</div>
            <div style="color:#94a3b8;font-size:13px">/night</div>
          </div>
          <div>
            <button class="select-book cta-btn small" data-type="hotel" data-id="${h.id}">Book Now</button>
          </div>
        </div>
      </div>
    `;
    hotelGrid.appendChild(el);
  });
}

function renderFlights(list){
  flightList.innerHTML = '';
  list.forEach(f=>{
    const el = document.createElement('div');
    el.className = 'flight-card';
    el.innerHTML = `
      <div class="flight-left">
        <div class="ico">✈️</div>
        <div>
          <div style="font-weight:800">${f.airline}</div>
          <div style="color:#6b7280;font-size:13px">Non-stop</div>
        </div>
      </div>

      <div class="flight-times">
        <div class="time">${f.dep}</div>
        <div style="color:#6b7280">${f.from}</div>
        <div style="color:#94a3b8;font-size:13px;margin-top:8px">📅 ${f.date}</div>
      </div>

      <div class="flight-mid"><div>⏱️ ${f.dur}</div></div>

      <div class="flight-right">
        <div style="text-align:right">
          <div style="font-weight:700;font-size:20px">${f.arr}</div>
          <div style="color:#6b7280">${f.to}</div>
        </div>
        <div style="margin-top:12px;text-align:right">
          <div style="color:#03a9f4;font-weight:800">$${f.price}</div>
          <button class="select-flight" data-type="flight" data-id="${f.id}">Select Flight</button>
        </div>
      </div>
    `;
    flightList.appendChild(el);
  });
}

function renderActivities(list){
  activityGrid.innerHTML = '';
  list.forEach(a=>{
    const el = document.createElement('div');
    el.className = 'card activity-card';
    el.innerHTML = `
      <img src="${a.img}" alt="${escapeHtml(a.title)}" />
      <div class="activity-body">
        <h3>${escapeHtml(a.title)}</h3>
        <p style="color:#6b7280">${escapeHtml(a.place)}</p>
        <p style="margin:12px 0;color:#6b7280">${escapeHtml(a.duration)} • ${escapeHtml(a.capacity)}</p>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div style="font-weight:800;color:#038be6">$${a.price}</div>
          <button class="select-book cta-btn small" data-type="activity" data-id="${a.id}">Book Now</button>
        </div>
      </div>
    `;
    activityGrid.appendChild(el);
  });
}

function renderGuides(list){
  guideGrid.innerHTML = '';
  list.forEach(g=>{
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <img src="${g.img}" alt="${escapeHtml(g.title)}" />
      <div class="card-content">
        <h3>${escapeHtml(g.title)}</h3>
        <p style="color:#6b7280">${g.readtime} • ${g.date}</p>
        <div style="margin-top:12px">
          <button class="link-btn read-guide" data-id="${g.id}">Read Guide</button>
        </div>
      </div>
    `;
    guideGrid.appendChild(el);
  });
}

/* ---------- INIT RENDER ---------- */
renderHotels(hotels);
renderFlights(flights);
renderActivities(activities);
renderGuides(guides);

/* ---------- NAVBAR / SCROLL / MOBILE ---------- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', ()=> {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = a.getAttribute('href');
    const el = document.querySelector(target);
    if(el){
      window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 80, behavior:'smooth'});
    }
    if(window.innerWidth < 780) navLinks.style.display = 'none';
  });
});

/* ---------- DESTINATION FILTER & SORT (DOM-based) ---------- */
const destGrid = document.getElementById('destGrid');

function applyFilterCountry(country) {
  const cards = Array.from(destGrid.querySelectorAll('.dest-card'));
  cards.forEach(card => {
    if (country === 'all' || card.dataset.country === country) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function applySort(mode) {
  const cards = Array.from(destGrid.querySelectorAll('.dest-card'));
  let sorted = cards.slice();
  if (mode === 'price-asc') {
    sorted.sort((a,b)=> Number(a.dataset.price) - Number(b.dataset.price));
  } else if (mode === 'price-desc') {
    sorted.sort((a,b)=> Number(b.dataset.price) - Number(a.dataset.price));
  } else {
    // popular => sort by rating desc
    sorted.sort((a,b)=> Number(b.dataset.rating) - Number(a.dataset.rating));
  }
  // append in order
  sorted.forEach(c => destGrid.appendChild(c));
}

/* wires */
destFilter.addEventListener('change', (e)=> {
  applyFilterCountry(e.target.value);
});
destSort.addEventListener('change', (e)=> {
  applySort(e.target.value);
});

/* ---------- SEARCH (universal) ---------- */
function performUniversalSearch(q){
  q = q.trim().toLowerCase();
  if(!q) return alert('Please enter a search term (e.g., Paris, Tokyo).');

  // Destinations: show only matching cards (title or desc)
  const destCards = Array.from(destGrid.querySelectorAll('.dest-card'));
  let destFound = 0;
  destCards.forEach(c => {
    const title = (c.dataset.title || '').toLowerCase();
    const desc = (c.querySelector('.desc')?.textContent || '').toLowerCase();
    if (title.includes(q) || desc.includes(q)) {
      c.style.display = '';
      destFound++;
    } else {
      c.style.display = 'none';
    }
  });

  // Hotels
  const foundH = hotels.filter(h => h.title.toLowerCase().includes(q) || h.location.toLowerCase().includes(q));
  renderHotels(foundH.length ? foundH : hotels);

  // Activities
  const foundA = activities.filter(a => a.title.toLowerCase().includes(q) || a.place.toLowerCase().includes(q));
  renderActivities(foundA.length ? foundA : activities);

  // Scroll to destinations if results exist
  if (destFound) {
    document.querySelector('#destinations').scrollIntoView({behavior:'smooth', block:'start'});
  } else if (foundH.length) {
    document.querySelector('#hotels').scrollIntoView({behavior:'smooth', block:'start'});
  } else if (foundA.length) {
    document.querySelector('#activities').scrollIntoView({behavior:'smooth', block:'start'});
  } else {
    alert('No results found. Try Paris, Tokyo, Bali, or hotels/activities names.');
    renderHotels(hotels);
    renderActivities(activities);
  }
}

searchBtn.addEventListener('click', ()=> performUniversalSearch(searchInput.value));
searchInput.addEventListener('keydown', (e)=> { if(e.key === 'Enter') performUniversalSearch(searchInput.value) });

/* ---------- BOOKING MODAL ---------- */
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

document.body.addEventListener('click', (e)=>{
  const btn = e.target.closest('.select-book, .select-flight');
  if(btn){
    const type = btn.dataset.type;
    const id = Number(btn.dataset.id);
    openBookingModal(type, id);
  }
  const guideBtn = e.target.closest('.read-guide');
  if(guideBtn){
    const gid = Number(guideBtn.dataset.id);
    const g = guides.find(x=>x.id===gid);
    if(g) {
      modalContent.innerHTML = `<img src="${g.img}" alt="${escapeHtml(g.title)}"/><h3>${g.title}</h3><p style="color:#6b7280">Estimated read: ${g.readtime} • ${g.date}</p>
        <p style="margin-top:12px">This is a sample guide content. Replace with your full guide text or link.</p>
        <div style="margin-top:18px"><button class="cta-btn" onclick="closeModal()">Close</button></div>`;
      modal.classList.remove('hidden');
    }
  }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=> { if(e.target === modal) closeModal(); });

function openBookingModal(type, id){
  if(type === 'hotel'){
    const h = hotels.find(x=>x.id===id);
    modalContent.innerHTML = `<img src="${h.img}" alt="${escapeHtml(h.title)}"/><h3>Book: ${h.title}</h3>
      <p style="color:#6b7280">${h.location}</p>
      <p style="margin-top:12px">Price: <strong>$${h.price} / night</strong></p>
      <label style="display:block;margin-top:12px">Nights: <input type="number" id="nights" value="1" min="1" style="width:80px;margin-left:8px"/></label>
      <div style="margin-top:18px"><button class="cta-btn" id="confirmBook">Confirm Booking</button> <button class="link-btn" onclick="closeModal()">Cancel</button></div>`;
    modal.classList.remove('hidden');
    document.getElementById('confirmBook').addEventListener('click', ()=>{
      const nights = Number(document.getElementById('nights').value);
      alert(`Booked ${h.title} for ${nights} night(s). Total: $${(h.price*nights).toLocaleString()}`);
      closeModal();
    });
  } else if(type === 'flight'){
    const f = flights.find(x=>x.id===id);
    modalContent.innerHTML = `<img src="${f.img}" alt="${escapeHtml(f.airline)}"/><h3>Select Flight: ${f.airline}</h3>
      <p>${f.from} → ${f.to} • ${f.dep} — ${f.arr}</p>
      <p style="margin-top:12px">Price: <strong>$${f.price}</strong> per person</p>
      <div style="margin-top:18px"><label>Passengers: <input type="number" id="pax" value="1" min="1" style="width:80px;margin-left:8px"/></label></div>
      <div style="margin-top:18px"><button class="cta-btn" id="confirmFlight">Confirm</button> <button class="link-btn" onclick="closeModal()">Cancel</button></div>`;
    modal.classList.remove('hidden');
    document.getElementById('confirmFlight').addEventListener('click', ()=>{
      const pax = Number(document.getElementById('pax').value);
      alert(`Flight selected (${f.airline}). Passengers: ${pax}. Total: $${(f.price*pax).toLocaleString()}`);
      closeModal();
    });
  } else if(type === 'activity'){
    const a = activities.find(x=>x.id===id);
    modalContent.innerHTML = `<img src="${a.img}" alt="${escapeHtml(a.title)}"/><h3>Book Activity: ${a.title}</h3>
      <p>${a.place} • ${a.duration}</p>
      <p style="margin-top:12px">Price: <strong>$${a.price}</strong> per person</p>
      <div style="margin-top:18px"><label>People: <input type="number" id="people" value="1" min="1" style="width:80px;margin-left:8px"/></label></div>
      <div style="margin-top:18px"><button class="cta-btn" id="confirmAct">Confirm</button> <button class="link-btn" onclick="closeModal()">Cancel</button></div>`;
    modal.classList.remove('hidden');
    document.getElementById('confirmAct').addEventListener('click', ()=>{
      const people = Number(document.getElementById('people').value);
      alert(`Activity booked (${a.title}). People: ${people}. Total: $${(a.price*people).toLocaleString()}`);
      closeModal();
    });
  }
}

function closeModal(){ modal.classList.add('hidden'); modalContent.innerHTML = ''; }

/* ---------- small reveal on load (visual polish) ---------- */
window.addEventListener('load', ()=> {
  document.querySelectorAll('.dest-card, .card, .flight-card').forEach((el,i)=>{
    el.style.opacity = 0;
    setTimeout(()=> el.style.transition = 'all .6s ease', i*80);
    setTimeout(()=> el.style.opacity = 1, i*80 + 120);
  });
});

/* ---------- helper ---------- */
function escapeHtml(s){
  if(!s && s!==0) return '';
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'", '&#39;');
}
