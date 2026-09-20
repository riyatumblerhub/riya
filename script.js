/* =========================================================
   TANVI TUMBLER — site behaviour
   ========================================================= */

/* -----------------------------------------------------------
   1. SETTINGS — edit these two lines for your business
   ----------------------------------------------------------- */
const WHATSAPP_NUMBER = "919783229940"; // country code + number, no + or spaces
const STORE_NAME = "Riya Tumbler";

/* -----------------------------------------------------------
   2. PRODUCT DATA
   Edit / add / remove products here. "image" must match a
   file inside the /images folder. Nothing else needs to change.
   ----------------------------------------------------------- */
const PRODUCTS = [
  {
    id: "p1",
    name: "Classic Steel Tumbler",
    desc: "500ml · double-wall insulated",
    price: 1799,
    oldPrice: 2199,
    image: "img1.jpeg",
    category: "classic",
    tag: "Bestseller",
    sizes: ["350ml", "500ml", "750ml"]
  },
  {
    id: "p2",
    name: "Matte Rose Gold Tumbler",
    desc: "500ml · leak-proof lid",
    price: 1899,
    oldPrice: 2299,
    image: "img2.jpeg",
    category: "classic",
    tag: "New",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p3",
    name: "Ocean Blue Premium Tumbler",
    desc: "650ml · insulated straw lid",
    price: 1699,
    image: "img3.jpeg",
    category: "sipper",
    tag: "Popular",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p4",
    name: "Blush Pink Luxe Tumbler",
    desc: "650ml · stainless steel body",
    price: 1799,
    image: "img4.jpeg",
    category: "sipper",
    tag: "Trending",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p5",
    name: "Royal Black Tumbler",
    desc: "750ml · vacuum insulated",
    price: 2199,
    oldPrice: 2599,
    image: "img5.jpeg",
    category: "premium",
    tag: "Bestseller",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p6",
    name: "Crimson Red Elite",
    desc: "600ml · premium matte finish",
    price: 1999,
    image: "img6.jpeg",
    category: "premium",
    tag: "New",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p7",
    name: "Marble White Tumbler",
    desc: "500ml · elegant marble texture",
    price: 1899,
    image: "img7.jpeg",
    category: "classic",
    tag: "Premium",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p8",
    name: "Luxury Gifting Set",
    desc: "500ml each · premium gift-boxed",
    price: 3299,
    oldPrice: 3899,
    image: "img8.jpeg",
    category: "gifting",
    tag: "Best for gifting",
    sizes: ["Set of 2", "Set of 4"]
  },
  {
    id: "p9",
    name: "Midnight Black Pro",
    desc: "750ml · triple-layer insulation",
    price: 2499,
    image: "img9.jpeg",
    category: "premium",
    tag: "Best Seller",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p10",
    name: "Pearl White Classic",
    desc: "500ml · smooth premium coating",
    price: 1699,
    image: "img10.jpeg",
    category: "classic",
    tag: "Classic",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p11",
    name: "Cherry Red Luxe",
    desc: "600ml · leak-resistant premium lid",
    price: 1999,
    oldPrice: 2399,
    image: "img11.jpeg",
    category: "premium",
    tag: "Trending",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p12",
    name: "Champagne Gold Tumbler",
    desc: "500ml · metallic premium finish",
    price: 2299,
    image: "img12.jpeg",
    category: "premium",
    tag: "Luxury",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p13",
    name: "Lavender Dream Tumbler",
    desc: "650ml · insulated travel design",
    price: 1799,
    image: "img13.jpeg",
    category: "classic",
    tag: "New",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p14",
    name: "Burgundy Elite Tumbler",
    desc: "750ml · vacuum sealed insulation",
    price: 2499,
    oldPrice: 2899,
    image: "img14.jpeg",
    category: "premium",
    tag: "Premium",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p15",
    name: "Sage Green Tumbler",
    desc: "500ml · soft matte exterior",
    price: 1899,
    image: "img15.jpeg",
    category: "classic",
    tag: "Popular",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p16",
    name: "Ruby Red Sipper",
    desc: "650ml · easy-grip body",
    price: 1999,
    image: "img16.jpeg",
    category: "sipper",
    tag: "Bestseller",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p17",
    name: "Ivory Pearl Tumbler",
    desc: "600ml · premium insulated body",
    price: 2099,
    image: "img17.jpeg",
    category: "premium",
    tag: "Luxury",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p18",
    name: "Sky Blue Classic",
    desc: "500ml · double-wall insulation",
    price: 1799,
    image: "img18.jpeg",
    category: "classic",
    tag: "Popular",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p19",
    name: "Rose Blush Premium",
    desc: "750ml · premium powder coating",
    price: 2399,
    oldPrice: 2799,
    image: "img19.jpeg",
    category: "premium",
    tag: "Trending",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p20",
    name: "Graphite Grey Tumbler",
    desc: "600ml · sleek modern finish",
    price: 1999,
    image: "img20.jpeg",
    category: "classic",
    tag: "New",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p21",
    name: "Royal Blue Elite",
    desc: "750ml · advanced vacuum insulation",
    price: 2699,
    image: "img21.jpeg",
    category: "premium",
    tag: "Premium",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p22",
    name: "Soft Pink Travel Tumbler",
    desc: "500ml · travel-friendly design",
    price: 1799,
    image: "img22.jpeg",
    category: "classic",
    tag: "Popular",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p23",
    name: "Wine Red Signature",
    desc: "650ml · stainless steel interior",
    price: 2199,
    oldPrice: 2599,
    image: "img23.jpeg",
    category: "premium",
    tag: "Bestseller",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p24",
    name: "Matte Cream Tumbler",
    desc: "500ml · soft-touch matte finish",
    price: 1899,
    image: "img24.jpeg",
    category: "classic",
    tag: "New",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p25",
    name: "Crimson Rose Tumbler",
    desc: "600ml · premium leak-proof lid",
    price: 2099,
    image: "img25.jpeg",
    category: "premium",
    tag: "Trending",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p26",
    name: "Silver Steel Pro",
    desc: "750ml · heavy-duty insulated body",
    price: 2299,
    image: "img26.jpeg",
    category: "classic",
    tag: "Bestseller",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p27",
    name: "Dusty Pink Luxe",
    desc: "500ml · elegant soft matte body",
    price: 1999,
    image: "img27.jpeg",
    category: "premium",
    tag: "Luxury",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p28",
    name: "Forest Green Tumbler",
    desc: "650ml · double-wall insulated",
    price: 2099,
    image: "img28.jpeg",
    category: "classic",
    tag: "Popular",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p29",
    name: "Black & Gold Elite",
    desc: "600ml · premium metallic details",
    price: 2899,
    oldPrice: 3299,
    image: "img29.jpeg",
    category: "premium",
    tag: "Luxury",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p30",
    name: "Coral Pink Sipper",
    desc: "650ml · ergonomic travel grip",
    price: 1899,
    image: "img30.jpeg",
    category: "sipper",
    tag: "New",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p31",
    name: "Arctic White Tumbler",
    desc: "750ml · high-performance insulation",
    price: 2499,
    image: "img31.jpeg",
    category: "premium",
    tag: "Bestseller",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p32",
    name: "Plum Purple Tumbler",
    desc: "500ml · premium smooth finish",
    price: 1799,
    image: "img32.jpeg",
    category: "classic",
    tag: "Trending",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p33",
    name: "Scarlet Signature",
    desc: "600ml · vacuum insulated steel",
    price: 2299,
    image: "img33.jpeg",
    category: "premium",
    tag: "Premium",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p34",
    name: "Mocha Brown Tumbler",
    desc: "500ml · elegant matte coating",
    price: 1999,
    oldPrice: 2399,
    image: "img34.jpeg",
    category: "classic",
    tag: "New",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p35",
    name: "Ocean Mist Tumbler",
    desc: "750ml · all-day temperature control",
    price: 2599,
    image: "img35.jpeg",
    category: "premium",
    tag: "Best Seller",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p36",
    name: "Golden Champagne Tumbler",
    desc: "500ml · luxury metallic finish",
    price: 2799,
    oldPrice: 3199,
    image: "img36.jpeg",
    category: "premium",
    tag: "Luxury",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p37",
    name: "Berry Pink Tumbler",
    desc: "650ml · leak-proof travel lid",
    price: 1999,
    image: "img37.jpeg",
    category: "sipper",
    tag: "Popular",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p38",
    name: "Slate Grey Elite",
    desc: "600ml · premium powder finish",
    price: 2199,
    image: "img38.jpeg",
    category: "premium",
    tag: "Trending",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p39",
    name: "Ruby Wine Tumbler",
    desc: "750ml · triple-wall insulation",
    price: 2699,
    image: "img39.jpeg",
    category: "premium",
    tag: "Premium",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p40",
    name: "Vanilla Cream Tumbler",
    desc: "500ml · soft-touch exterior",
    price: 1899,
    image: "img40.jpeg",
    category: "classic",
    tag: "New",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p41",
    name: "Royal Maroon Tumbler",
    desc: "650ml · premium steel construction",
    price: 2399,
    oldPrice: 2799,
    image: "img41.jpeg",
    category: "premium",
    tag: "Bestseller",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p42",
    name: "Pearl Lavender Tumbler",
    desc: "600ml · stylish insulated body",
    price: 2099,
    image: "img42.jpeg",
    category: "classic",
    tag: "Popular",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p43",
    name: "Obsidian Black Tumbler",
    desc: "750ml · premium vacuum insulation",
    price: 2999,
    image: "img43.jpeg",
    category: "premium",
    tag: "Luxury",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p44",
    name: "Rose Quartz Tumbler",
    desc: "500ml · elegant rose finish",
    price: 2199,
    image: "img44.jpeg",
    category: "premium",
    tag: "Trending",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p45",
    name: "Emerald Green Elite",
    desc: "650ml · insulated stainless steel",
    price: 2299,
    image: "img45.jpeg",
    category: "premium",
    tag: "New",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p46",
    name: "Ruby Red Classic",
    desc: "500ml · double-wall insulated",
    price: 1799,
    image: "img46.jpeg",
    category: "classic",
    tag: "Bestseller",
    sizes: ["350ml", "500ml"]
  },
  {
    id: "p47",
    name: "Midnight Blue Pro",
    desc: "750ml · high-performance insulation",
    price: 2599,
    oldPrice: 2999,
    image: "img47.jpeg",
    category: "premium",
    tag: "Premium",
    sizes: ["500ml", "750ml"]
  },
  {
    id: "p48",
    name: "Blush Champagne Tumbler",
    desc: "600ml · luxury matte coating",
    price: 2399,
    image: "img48.jpeg",
    category: "premium",
    tag: "Luxury",
    sizes: ["500ml", "600ml"]
  },
  {
    id: "p49",
    name: "Crimson Pearl Tumbler",
    desc: "650ml · leak-proof insulated lid",
    price: 2199,
    image: "img49.jpeg",
    category: "sipper",
    tag: "Popular",
    sizes: ["500ml", "650ml"]
  },
  {
    id: "p50",
    name: "Signature Black & Red",
    desc: "750ml · premium double-wall insulation",
    price: 2999,
    oldPrice: 3499,
    image: "img50.jpeg",
    category: "premium",
    tag: "Best Seller",
    sizes: ["500ml", "750ml"]
  }
];

/* -----------------------------------------------------------
   3. WHATSAPP LINK BUILDER
   ----------------------------------------------------------- */
function buildWhatsappLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function genericMessage() {
  return `Hi ${STORE_NAME}! I'd like to know more about your tumbler collection.`;
}

function productMessage(product, size) {
  return `Hi ${STORE_NAME}! I'd like to order:\n\n` +
         `• ${product.name}\n` +
         `• Size: ${size}\n` +
         `• Price: ₹${product.price}\n\n` +
         `Please confirm availability and delivery time.`;
}

/* -----------------------------------------------------------
   4. RENDER PRODUCT GRID
   ----------------------------------------------------------- */
const grid = document.getElementById("productGrid");

function renderProducts() {
  grid.innerHTML = "";

  PRODUCTS.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.category = product.category;

    const sizeButtons = product.sizes
      .map((size, i) => `<button class="size-pill${i === 0 ? " is-active" : ""}" data-size="${size}">${size}</button>`)
      .join("");

    card.innerHTML = `
      <div class="product-media">
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-body">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-meta">
          <span class="product-price">₹${product.price}${product.oldPrice ? `<span class="old">₹${product.oldPrice}</span>` : ""}</span>
        </div>
        <div class="size-row">${sizeButtons}</div>
        <a class="product-order" href="#" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.23 0 4.32.87 5.9 2.45a8.23 8.23 0 0 1 2.43 5.8c0 4.56-3.72 8.27-8.33 8.27a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.56 3.72-8.29 8.27-8.29m-4.65 4.4c-.16 0-.43.06-.65.31s-.86.84-.86 2.04.88 2.37 1 2.53 1.74 2.77 4.29 3.79c2.12.85 2.55.68 3.01.64.46-.04 1.5-.61 1.71-1.2s.21-1.1.15-1.2c-.06-.1-.23-.16-.48-.28s-1.5-.74-1.73-.83-.4-.13-.57.13-.65.83-.8 1c-.15.16-.29.19-.55.06-.26-.13-1.08-.4-2.05-1.27a7.7 7.7 0 0 1-1.43-1.77c-.15-.25-.02-.4.11-.52.11-.11.26-.29.38-.44.13-.15.17-.25.26-.42.09-.16.04-.31-.02-.44s-.57-1.39-.79-1.9c-.2-.5-.42-.43-.58-.44Z"/></svg>
          Order on WhatsApp
        </a>
      </div>
    `;

    // size selection
    let selectedSize = product.sizes[0];
    const pills = card.querySelectorAll(".size-pill");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((p) => p.classList.remove("is-active"));
        pill.classList.add("is-active");
        selectedSize = pill.dataset.size;
        updateOrderLink();
      });
    });

    const orderLink = card.querySelector(".product-order");
    function updateOrderLink() {
      orderLink.href = buildWhatsappLink(productMessage(product, selectedSize));
    }
    updateOrderLink();

    grid.appendChild(card);
  });
}

renderProducts();

/* -----------------------------------------------------------
   5. GENERIC WHATSAPP LINKS (header, hero, drawer, footer tab)
   ----------------------------------------------------------- */
function wireGenericWhatsappLinks() {
  const ids = ["headerWhatsapp", "heroWhatsapp", "drawerWhatsapp", "ctaWhatsapp", "fixedWhatsapp"];
  const link = buildWhatsappLink(genericMessage());
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}
wireGenericWhatsappLinks();

/* -----------------------------------------------------------
   6. CATEGORY FILTER
   ----------------------------------------------------------- */
const chipRow = document.getElementById("chipRow");
chipRow.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;

  chipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
  chip.classList.add("is-active");

  const filter = chip.dataset.filter;
  document.querySelectorAll(".product-card").forEach((card) => {
    const match = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !match);
  });
});

/* -----------------------------------------------------------
   7. MOBILE DRAWER
   ----------------------------------------------------------- */
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawerOverlay");

function openDrawer() {
  drawer.classList.add("is-open");
  drawerOverlay.classList.add("is-open");
  menuBtn.classList.add("is-open");
  menuBtn.setAttribute("aria-expanded", "true");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  drawer.classList.remove("is-open");
  drawerOverlay.classList.remove("is-open");
  menuBtn.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
menuBtn.addEventListener("click", () => {
  drawer.classList.contains("is-open") ? closeDrawer() : openDrawer();
});
drawerOverlay.addEventListener("click", closeDrawer);
drawer.querySelectorAll(".drawer-link, .drawer-cta").forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

/* -----------------------------------------------------------
   8. FAQ ACCORDION
   ----------------------------------------------------------- */
document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");

  q.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item").forEach((other) => {
      other.classList.remove("is-open");
      other.querySelector(".faq-a").style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      a.style.maxHeight = a.scrollHeight + "px";
    }
  });
});

/* -----------------------------------------------------------
   9. HEADER SHADOW ON SCROLL + BACK TO TOP VISIBILITY
   ----------------------------------------------------------- */
const header = document.getElementById("siteHeader");
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 12;
  header.classList.toggle("is-scrolled", scrolled);
  toTop.classList.toggle("is-visible", window.scrollY > 480);
}, { passive: true });

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* -----------------------------------------------------------
   10. SCROLL-REVEAL FOR PRODUCT CARDS
   ----------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".product-card").forEach((card) => revealObserver.observe(card));

/* -----------------------------------------------------------
   11. FOOTER YEAR
   ----------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();
