/* =====================================================================
   MAIN.JS — renders listings from bikes.js. You shouldn't need to
   edit this file to add or change bikes — see bikes.js for that.
   ===================================================================== */

function money(n) {
  return "$" + Number(n).toLocaleString("en-US");
}

function bikeTitle(bike) {
  return `${bike.year} ${bike.make} ${bike.model}`;
}

function specLine(bike) {
  return [bike.category, bike.size ? `Size ${bike.size}` : null, bike.wheelSize]
    .filter(Boolean)
    .join(" · ");
}

/* ---------- Modal ---------- */

function buildModal() {
  if (document.getElementById("bike-modal")) return;
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.id = "bike-modal";
  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Close">&times;</button>
      <div id="modal-content"></div>
    </div>`;
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  backdrop.querySelector(".modal-close").addEventListener("click", closeModal);
  document.body.appendChild(backdrop);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(bike) {
  buildModal();
  const backdrop = document.getElementById("bike-modal");
  const content = document.getElementById("modal-content");

  const specRows = [
    ["Frame", bike.frameMaterial],
    ["Wheel size", bike.wheelSize],
    ["Suspension travel", bike.suspension],
    ["Drivetrain", bike.drivetrain],
    ["Size", bike.size],
    ["Condition", bike.condition]
  ].filter(([, v]) => v);

  const priceHtml = bike.status === "sold"
    ? `<span class="price sold">${money(bike.price)}</span> <span class="meta">Sold ${bike.soldDate || ""}</span>`
    : `<span class="price">${money(bike.price)}</span>`;

  const linksHtml = (bike.listingLinks || [])
    .map(l => `<a class="btn btn-primary" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
    .join("");

  const thumbs = bike.photos.slice(1).map(src =>
    `<img src="${src}" alt="${bikeTitle(bike)}">`
  ).join("");

  content.innerHTML = `
    <div class="modal-hero"><img src="${bike.photos[0]}" alt="${bikeTitle(bike)}"></div>
    ${bike.photos.length > 1 ? `<div class="modal-thumbs">${thumbs}</div>` : ""}
    <div class="modal-body">
      <div class="eyebrow">${bike.category}</div>
      <h3>${bikeTitle(bike)}</h3>
      <div class="modal-meta">${specLine(bike)}</div>
      <div class="modal-price-row">${priceHtml}</div>
      <div class="modal-cols">
        <div>
          <p class="modal-desc">${bike.description}</p>
          ${linksHtml ? `<div class="listing-links">${linksHtml}</div>` : ""}
        </div>
        <ul class="spec-list">
          ${specRows.map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join("")}
        </ul>
      </div>
    </div>`;

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const backdrop = document.getElementById("bike-modal");
  if (backdrop) backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- Card rendering ---------- */

function postCardHtml(bike) {
  const priceHtml = bike.status === "sold"
    ? `<span class="price sold">${money(bike.price)}</span>`
    : `<span class="price">${money(bike.price)}</span>`;

  return `
    <article class="post-card" data-id="${bike.id}" tabindex="0">
      <div class="post-photo">
        ${bike.status === "sold" ? `<span class="sold-stamp">Sold</span>` : ""}
        <img src="${bike.photos[0]}" alt="${bikeTitle(bike)}" loading="lazy">
      </div>
      <div class="eyebrow post-eyebrow">${bike.category}</div>
      <h3 class="post-title">${bikeTitle(bike)}</h3>
      <p class="post-specs">${specLine(bike)}</p>
      <div class="post-price-row">${priceHtml}</div>
    </article>`;
}

function featuredHtml(bike) {
  const priceHtml = bike.status === "sold"
    ? `<span class="price sold">${money(bike.price)}</span> <span class="meta">Sold ${bike.soldDate || ""}</span>`
    : `<span class="price">${money(bike.price)}</span>`;

  return `
    <article class="featured-post" data-id="${bike.id}" tabindex="0">
      <div class="featured-photo"><img src="${bike.photos[0]}" alt="${bikeTitle(bike)}"></div>
      <div>
        <div class="eyebrow">${bike.category}</div>
        <h2 class="featured-title">${bikeTitle(bike)}</h2>
        <p class="featured-excerpt">${bike.excerpt || ""}</p>
        <div class="featured-price-row">${priceHtml}</div>
      </div>
    </article>`;
}

/* ---------- Page renderers ---------- */

function attachCardHandlers(container, list) {
  container.querySelectorAll("[data-id]").forEach(el => {
    const bike = list.find(b => b.id === el.dataset.id);
    el.addEventListener("click", () => openModal(bike));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openModal(bike);
    });
  });
}

function renderListingPage({ status, gridId, featuredId, emptyMessage, filterBarId }) {
  const all = bikes.filter(b => b.status === status);
  const grid = document.getElementById(gridId);
  const featuredSlot = featuredId ? document.getElementById(featuredId) : null;
  const filterBar = filterBarId ? document.getElementById(filterBarId) : null;

  const categories = ["All", ...new Set(all.map(b => b.category))];

  function draw(activeCategory) {
    const filtered = activeCategory && activeCategory !== "All"
      ? all.filter(b => b.category === activeCategory)
      : all;

    if (filtered.length === 0) {
      if (featuredSlot) featuredSlot.innerHTML = "";
      grid.innerHTML = `<div class="empty-state">Nothing here yet — check back soon.</div>`;
      return;
    }

    let rest = filtered;
    if (featuredSlot && !activeCategory) {
      featuredSlot.innerHTML = featuredHtml(filtered[0]);
      attachCardHandlers(featuredSlot, filtered);
      rest = filtered.slice(1);
    } else if (featuredSlot) {
      featuredSlot.innerHTML = "";
    }

    grid.innerHTML = rest.map(postCardHtml).join("");
    attachCardHandlers(grid, filtered);
  }

  if (filterBar && categories.length > 2) {
    filterBar.innerHTML = categories.map((c, i) =>
      `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`
    ).join("");
    filterBar.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        draw(btn.dataset.cat === "All" ? null : btn.dataset.cat);
      });
    });
  } else if (filterBar) {
    filterBar.style.display = "none";
  }

  draw(null);
}
