/**
 * SIZZLE & STACK BURGER CO.
 * Main Application Logic & Interactive Features
 */

// ==========================================================================
// 1. MENU DATABASE
// ==========================================================================

const MENU_ITEMS = [
  {
    id: 'og-double-smash',
    title: 'The OG Double Smash',
    category: 'smash',
    price: 12.95,
    calories: 780,
    tags: ['bestseller'],
    dietary: ['bestseller'],
    description: 'Two 100% Angus patties smashed paper-thin, double American cheese, caramelized onions, crisp pickles, and our signature torch secret sauce on a butter-toasted potato brioche.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    options: {
      buns: ['Potato Brioche', 'Sesame Bun', 'Gluten-Free (+ $1.50)', 'Lettuce Wrap'],
      extras: ['Extra Melted Cheese (+$1.50)', 'Applewood Bacon (+$2.00)', 'Grilled Jalapeños (+$0.75)']
    }
  },
  {
    id: 'royal-smokehouse',
    title: 'The Royal Smokehouse',
    category: 'smash',
    price: 14.50,
    calories: 920,
    tags: ['bestseller', 'chef'],
    dietary: ['bestseller', 'chef'],
    description: 'Double Angus beef patties, thick-cut applewood smoked bacon, Wisconsin cheddar melt, crispy onion straws, and house bourbon chipotle BBQ sauce.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80',
    options: {
      buns: ['Potato Brioche', 'Gluten-Free (+ $1.50)', 'Lettuce Wrap'],
      extras: ['Double Bacon (+$2.50)', 'Fried Egg (+$1.75)', 'Smoked Gouda (+$1.50)']
    }
  },
  {
    id: 'triple-truffle-deluxe',
    title: 'Triple Truffle Deluxe',
    category: 'smash',
    price: 16.95,
    calories: 1040,
    tags: ['chef'],
    dietary: ['chef'],
    description: 'Three smashed patties, black truffle pecorino glaze, balsamic sautéed cremini mushrooms, baby arugula, and roasted garlic truffle aioli on brioche.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
    options: {
      buns: ['Brioche Bun', 'Gluten-Free (+$1.50)'],
      extras: ['Extra Truffle Aioli (+$1.25)', 'Extra Mushrooms (+$1.50)']
    }
  },
  {
    id: 'ghost-pepper-inferno',
    title: 'Ghost Pepper Inferno',
    category: 'smash',
    price: 13.95,
    calories: 840,
    tags: ['spicy'],
    dietary: ['spicy'],
    description: 'Double smash seared with cracked ghost pepper flakes, pepper jack cheese, pickled habanero slaw, and spicy sriracha honey glaze.',
    image: 'https://images.unsplash.com/photo-1583032015879-c56320d1396b?auto=format&fit=crop&w=700&q=80',
    options: {
      buns: ['Potato Brioche', 'Lettuce Wrap'],
      extras: ['Extra Ghost Dust (Free)', 'Cooling Ranch Dip (+$1.00)']
    }
  },
  {
    id: 'nashville-hot-bird',
    title: 'Nashville Hot Bird',
    category: 'chicken-plant',
    price: 13.50,
    calories: 760,
    tags: ['spicy', 'bestseller'],
    dietary: ['spicy', 'bestseller'],
    description: 'Buttermilk 24-hr brined crispy chicken breast, dipped in cayenne chili oil, topped with creamy dill slaw, pickles, and comeback sauce on brioche.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=700&q=80',
    options: {
      buns: ['Potato Brioche', 'Gluten-Free (+$1.50)'],
      extras: ['Extra Hot Glaze (Free)', 'Applewood Bacon (+$2.00)']
    }
  },
  {
    id: 'beyond-plant-master',
    title: 'Beyond Plant Master',
    category: 'chicken-plant',
    price: 14.25,
    calories: 620,
    tags: ['veg', 'chef'],
    dietary: ['veg', 'chef'],
    description: '100% plant-based smash patty, dairy-free smoked gouda melt, smashed avocado, heirloom tomato, baby spinach, and vegan herb aioli.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80',
    options: {
      buns: ['Vegan Potato Bun', 'Lettuce Wrap', 'Gluten-Free (+$1.50)'],
      extras: ['Extra Avocado (+$2.00)', 'Grilled Mushrooms (+$1.50)']
    }
  },
  {
    id: 'truffle-parm-fries',
    title: 'Truffle Parm Crinkle Fries',
    category: 'sides',
    price: 7.50,
    calories: 490,
    tags: ['bestseller', 'veg'],
    dietary: ['bestseller', 'veg'],
    description: 'Golden ultra-crispy crinkle cuts tossed in white truffle oil, freshly grated 24-month parmesan, rosemary sea salt, and garlic aioli dip.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80',
    options: {
      extras: ['Double Parmesan (+$1.00)', 'Spicy Dust (+$0.50)']
    }
  },
  {
    id: 'loaded-queso-fries',
    title: 'Sizzling Loaded Queso Fries',
    category: 'sides',
    price: 8.95,
    calories: 680,
    tags: ['bestseller'],
    dietary: ['bestseller'],
    description: 'Hand-cut fries smothered in warm molten cheddar-jack queso, chopped smoked bacon, scallions, and a drizzle of smoky chipotle sauce.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80',
    options: {
      extras: ['Add Sliced Jalapeños (+$0.75)', 'Extra Queso (+$1.50)']
    }
  },
  {
    id: 'crispy-onion-rings',
    title: 'Beer-Battered Onion Rings',
    category: 'sides',
    price: 6.75,
    calories: 410,
    tags: ['veg'],
    dietary: ['veg'],
    description: 'Jumbo sweet colossal onions cut thick, dipped in craft IPA batter, fried to golden shatter-crisp perfection. Served with torch dip.',
    image: 'https://images.unsplash.com/photo-1639024471287-032f66e5a611?auto=format&fit=crop&w=700&q=80',
    options: {
      extras: ['Ranch Dip (+$0.75)', 'Smoky BBQ Dip (+$0.75)']
    }
  },
  {
    id: 'salted-caramel-malt',
    title: 'Bourbon Salted Caramel Malt',
    category: 'shakes',
    price: 7.25,
    calories: 650,
    tags: ['bestseller'],
    dietary: ['bestseller', 'veg'],
    description: 'Hand-spun Madagascar vanilla bean custard blended with house salted caramel ribbons, toasted malt, and sea salt pretzel crumble.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
    options: {
      extras: ['Extra Whipped Cream (Free)', 'Crushed Pretzels (+$0.50)']
    }
  },
  {
    id: 'belgian-chocolate-shake',
    title: 'Triple Dark Belgian Shake',
    category: 'shakes',
    price: 7.25,
    calories: 690,
    tags: ['chef'],
    dietary: ['chef', 'veg'],
    description: 'Rich Belgian 70% dark chocolate ganache blended with frozen custard, chocolate fudge cake crumbles, and cocoa nibs.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80',
    options: {
      extras: ['Chocolate Drizzle (Free)', 'Malted Powder (+$0.50)']
    }
  },
  {
    id: 'passionfruit-soda',
    title: 'Sparkling Passionfruit Lemonade',
    category: 'shakes',
    price: 4.50,
    calories: 140,
    tags: ['veg'],
    dietary: ['veg'],
    description: 'Fresh-squeezed Meyer lemons, real passionfruit pulp, sparkling mineral water, and fresh mint leaves. Light, tart, and effervescent.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    options: {
      extras: ['Extra Mint (Free)', 'Splash of Peach (+$0.50)']
    }
  }
];

// ==========================================================================
// 2. BUILD-YOUR-OWN BURGER INGREDIENTS CONFIG
// ==========================================================================

const BUILDER_DATA = {
  buns: [
    { id: 'bun-brioche', name: 'Golden Brioche', price: 0.00, calories: 180, protein: 5, cssClass: '' },
    { id: 'bun-potato', name: 'Sesame Potato', price: 0.00, calories: 190, protein: 6, cssClass: '' },
    { id: 'bun-gf', name: 'Gluten-Free Bun', price: 1.50, calories: 160, protein: 4, cssClass: 'gf-bun' },
    { id: 'bun-lettuce', name: 'Crisp Lettuce Wrap', price: 0.00, calories: 25, protein: 1, cssClass: 'lettuce-wrap' }
  ],
  patties: [
    { id: 'patty-single', name: 'Single Prime Angus (4oz)', price: 4.50, calories: 280, protein: 24, cssClass: 'b-patty-angus', visualName: 'Prime Angus' },
    { id: 'patty-double', name: 'Double Smash Patties (8oz)', price: 7.00, calories: 520, protein: 46, cssClass: 'b-patty-double', visualName: 'Double Smash Patty' },
    { id: 'patty-wagyu', name: 'A5 Wagyu Reserve (6oz)', price: 9.50, calories: 420, protein: 34, cssClass: 'b-patty-wagyu', visualName: 'A5 Wagyu Beef' },
    { id: 'patty-chicken', name: 'Buttermilk Fried Chicken', price: 6.00, calories: 380, protein: 32, cssClass: 'b-patty-chicken', visualName: 'Crispy Chicken' },
    { id: 'patty-beyond', name: 'Plant-Craft Beyond Patty', price: 6.50, calories: 260, protein: 22, cssClass: 'b-patty-beyond', visualName: 'Beyond Patty' }
  ],
  cheeses: [
    { id: 'cheese-cheddar', name: 'Aged Wisconsin Cheddar', price: 1.50, calories: 110, protein: 7, cssClass: 'b-cheese-cheddar', visualName: 'Aged Cheddar Melt' },
    { id: 'cheese-gouda', name: 'Smoked Dutch Gouda', price: 1.75, calories: 120, protein: 8, cssClass: 'b-cheese-gouda', visualName: 'Smoked Gouda' },
    { id: 'cheese-pepperjack', name: 'Spicy Pepper Jack', price: 1.50, calories: 105, protein: 6, cssClass: 'b-cheese-pepperjack', visualName: 'Pepper Jack' },
    { id: 'cheese-none', name: 'No Cheese', price: 0.00, calories: 0, protein: 0, cssClass: null, visualName: null }
  ],
  toppings: [
    { id: 'top-bacon', name: 'Crisp Applewood Bacon', price: 2.00, calories: 120, protein: 8, cssClass: 'b-topping-bacon', visualName: 'Applewood Bacon' },
    { id: 'top-onions', name: 'Caramelized Sweet Onions', price: 0.75, calories: 45, protein: 1, cssClass: 'b-topping-onions', visualName: 'Caramelized Onions' },
    { id: 'top-pickles', name: 'House Dill Pickles', price: 0.50, calories: 15, protein: 0, cssClass: 'b-topping-pickles', visualName: 'Crisp Pickles' },
    { id: 'top-tomato', name: 'Vine-Ripened Tomato', price: 0.50, calories: 20, protein: 1, cssClass: 'b-topping-tomato', visualName: 'Fresh Tomato' },
    { id: 'top-lettuce', name: 'Crisp Butter Lettuce', price: 0.50, calories: 10, protein: 0, cssClass: 'b-topping-lettuce', visualName: 'Butter Lettuce' },
    { id: 'top-mushrooms', name: 'Sautéed Garlic Mushrooms', price: 1.50, calories: 50, protein: 2, cssClass: 'b-topping-mushrooms', visualName: 'Sautéed Mushrooms' }
  ],
  sauces: [
    { id: 'sauce-secret', name: 'Smoky Torch Secret Sauce', price: 0.75, calories: 80, protein: 0, cssClass: 'b-sauce-layer b-sauce-secret', visualName: 'Torch Secret Sauce' },
    { id: 'sauce-truffle', name: 'Black Truffle Garlic Aioli', price: 1.25, calories: 95, protein: 1, cssClass: 'b-sauce-layer b-sauce-truffle', visualName: 'Truffle Aioli' },
    { id: 'sauce-chipotle', name: 'Spicy Ghost Chipotle Jam', price: 0.75, calories: 60, protein: 0, cssClass: 'b-sauce-layer b-sauce-chipotle', visualName: 'Chipotle Jam' }
  ]
};

// Customizer current selected state
let customBurgerState = {
  name: 'The Ultimate Sizzler',
  bun: 'bun-brioche',
  patty: 'patty-double',
  cheese: 'cheese-cheddar',
  toppings: ['top-bacon', 'top-pickles', 'top-lettuce'],
  sauces: ['sauce-secret']
};

// ==========================================================================
// 3. CART & ORDER STATE
// ==========================================================================

let cartState = [];
let fulfillmentType = 'delivery'; // 'delivery' or 'pickup'
let tipRate = 0.15;
let appliedDiscount = 0; // Dollar amount or multiplier
let activePromoCode = null;

// ==========================================================================
// 4. DOM INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initMenuSection();
  initBurgerBuilder();
  initCart();
  initTableReservation();
  initFaqAccordion();
  initNewsletter();
  initDealsAndHero();
  initCustomizerModal();
});

// ==========================================================================
// 5. STICKY HEADER & SMOOTH NAVIGATION
// ==========================================================================

function initStickyHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileMenuDrawer');
  const mobileReserveBtn = document.getElementById('mobileReserveBtn');

  mobileBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  drawer.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });

  if (mobileReserveBtn) {
    mobileReserveBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      const reserveBox = document.getElementById('reserveBox');
      if (reserveBox) {
        reserveBox.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// ==========================================================================
// 6. MENU RENDERING, FILTERING & SEARCH
// ==========================================================================

let activeCategory = 'all';
let activeDietFilter = null;
let searchQuery = '';

function initMenuSection() {
  renderMenu();

  // Category Tabs
  const catTabs = document.querySelectorAll('.cat-tab');
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      renderMenu();
    });
  });

  // Dietary Tag Chips
  const tagChips = document.querySelectorAll('.tag-filter-chip');
  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const diet = chip.dataset.diet;
      if (activeDietFilter === diet) {
        chip.classList.remove('active');
        activeDietFilter = null;
      } else {
        tagChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeDietFilter = diet;
      }
      renderMenu();
    });
  });

  // Search Input
  const searchInput = document.getElementById('menuSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
    renderMenu();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    renderMenu();
  });

  // Reset Button in Empty State
  const resetBtn = document.getElementById('resetMenuFilterBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCategory = 'all';
      activeDietFilter = null;
      searchQuery = '';
      searchInput.value = '';
      clearBtn.style.display = 'none';
      catTabs.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
      tagChips.forEach(c => c.classList.remove('active'));
      renderMenu();
    });
  }
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  const emptyState = document.getElementById('emptyMenuState');

  // Filter items
  const filtered = MENU_ITEMS.filter(item => {
    // Category match
    const catMatch = activeCategory === 'all' || item.category === activeCategory;

    // Dietary filter match
    const dietMatch = !activeDietFilter || (item.dietary && item.dietary.includes(activeDietFilter));

    // Search query match
    const searchMatch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery);

    return catMatch && dietMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(item => {
    const isChef = item.tags.includes('chef');
    const isSpicy = item.tags.includes('spicy');
    const isBest = item.tags.includes('bestseller');
    const isVeg = item.tags.includes('veg');

    let badgePill = '';
    if (isChef) badgePill = `<span class="item-badge-pill">👨‍🍳 Chef Choice</span>`;
    else if (isBest) badgePill = `<span class="item-badge-pill">⭐ Best Seller</span>`;
    else if (isSpicy) badgePill = `<span class="item-badge-pill">🌶️ Spicy</span>`;
    else if (isVeg) badgePill = `<span class="item-badge-pill">🌱 Vegan Friendly</span>`;

    return `
      <div class="menu-card" data-item-id="${item.id}">
        <div class="menu-card-img-wrapper">
          <img src="${item.image}" alt="${item.title}" class="menu-card-img" loading="lazy">
          ${badgePill}
          <span class="item-calorie-tag">${item.calories} kcal</span>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-title-row">
            <h3 class="menu-card-title">${item.title}</h3>
            <span class="menu-card-price">$${item.price.toFixed(2)}</span>
          </div>
          <p class="menu-card-desc">${item.description}</p>
          <div class="menu-card-actions">
            <button class="btn-add-item" data-action="quick-add" data-id="${item.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add to Bag</span>
            </button>
            <button class="btn-customize-item" data-action="customize" data-id="${item.id}">Customize</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach card event listeners
  grid.querySelectorAll('[data-action="quick-add"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = MENU_ITEMS.find(i => i.id === btn.dataset.id);
      if (item) {
        addToCart({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          notes: 'Standard prep'
        });
        showToast(`Added ${item.title} to bag! 🍔`);
      }
    });
  });

  grid.querySelectorAll('[data-action="customize"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = MENU_ITEMS.find(i => i.id === btn.dataset.id);
      if (item) {
        openItemCustomizerModal(item);
      }
    });
  });
}

// ==========================================================================
// 7. BUILD-YOUR-OWN BURGER INTERACTIVE LAB
// ==========================================================================

function initBurgerBuilder() {
  const nameInput = document.getElementById('customBurgerName');
  if (nameInput) {
    nameInput.addEventListener('input', (e) => {
      customBurgerState.name = e.target.value.trim() || 'Custom Sizzler';
    });
  }

  renderBuilderControls();
  updateBurgerVisualAndStats();

  // Reset button
  const resetBtn = document.getElementById('resetCustomBurgerBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      customBurgerState = {
        name: 'The Ultimate Sizzler',
        bun: 'bun-brioche',
        patty: 'patty-double',
        cheese: 'cheese-cheddar',
        toppings: ['top-bacon', 'top-pickles', 'top-lettuce'],
        sauces: ['sauce-secret']
      };
      if (nameInput) nameInput.value = customBurgerState.name;
      renderBuilderControls();
      updateBurgerVisualAndStats();
      showToast('Burger builder reset to default!');
    });
  }

  // Add custom burger to cart
  const addBtn = document.getElementById('addCustomToCartBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const { price, summary } = calculateBuilderTotals();
      const customItem = {
        id: 'custom-' + Date.now(),
        title: customBurgerState.name || 'Custom Sizzler',
        price: price,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
        notes: summary
      };
      addToCart(customItem);
      openCartDrawer();
      showToast(`Added your custom "${customItem.title}" to bag! 🏆`);
    });
  }
}

function renderBuilderControls() {
  // Buns
  const bunGrid = document.getElementById('bunOptions');
  bunGrid.innerHTML = BUILDER_DATA.buns.map(bun => `
    <div class="opt-card ${customBurgerState.bun === bun.id ? 'selected' : ''}" data-type="bun" data-id="${bun.id}">
      <span class="opt-title">${bun.name}</span>
      <span class="opt-sub">${bun.calories} kcal</span>
      <span class="opt-price">${bun.price > 0 ? '+$' + bun.price.toFixed(2) : 'Included'}</span>
    </div>
  `).join('');

  // Patties
  const pattyGrid = document.getElementById('pattyOptions');
  pattyGrid.innerHTML = BUILDER_DATA.patties.map(patty => `
    <div class="opt-card ${customBurgerState.patty === patty.id ? 'selected' : ''}" data-type="patty" data-id="${patty.id}">
      <span class="opt-title">${patty.name}</span>
      <span class="opt-sub">${patty.calories} kcal &bull; ${patty.protein}g protein</span>
      <span class="opt-price">$${patty.price.toFixed(2)}</span>
    </div>
  `).join('');

  // Cheeses
  const cheeseGrid = document.getElementById('cheeseOptions');
  cheeseGrid.innerHTML = BUILDER_DATA.cheeses.map(cheese => `
    <div class="opt-card ${customBurgerState.cheese === cheese.id ? 'selected' : ''}" data-type="cheese" data-id="${cheese.id}">
      <span class="opt-title">${cheese.name}</span>
      <span class="opt-sub">${cheese.calories} kcal</span>
      <span class="opt-price">${cheese.price > 0 ? '+$' + cheese.price.toFixed(2) : 'Free'}</span>
    </div>
  `).join('');

  // Toppings (multi-select)
  const toppingGrid = document.getElementById('toppingOptions');
  toppingGrid.innerHTML = BUILDER_DATA.toppings.map(top => {
    const isSelected = customBurgerState.toppings.includes(top.id);
    return `
      <div class="opt-card ${isSelected ? 'selected' : ''}" data-type="topping" data-id="${top.id}">
        <span class="opt-title">${isSelected ? '✓ ' : ''}${top.name}</span>
        <span class="opt-sub">${top.calories} kcal</span>
        <span class="opt-price">+$${top.price.toFixed(2)}</span>
      </div>
    `;
  }).join('');

  // Sauces (multi-select)
  const sauceGrid = document.getElementById('sauceOptions');
  sauceGrid.innerHTML = BUILDER_DATA.sauces.map(sauce => {
    const isSelected = customBurgerState.sauces.includes(sauce.id);
    return `
      <div class="opt-card ${isSelected ? 'selected' : ''}" data-type="sauce" data-id="${sauce.id}">
        <span class="opt-title">${isSelected ? '✓ ' : ''}${sauce.name}</span>
        <span class="opt-sub">${sauce.calories} kcal</span>
        <span class="opt-price">+$${sauce.price.toFixed(2)}</span>
      </div>
    `;
  }).join('');

  // Attach card click handlers
  document.querySelectorAll('.builder-card .opt-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type;
      const id = card.dataset.id;

      if (type === 'bun') {
        customBurgerState.bun = id;
      } else if (type === 'patty') {
        customBurgerState.patty = id;
      } else if (type === 'cheese') {
        customBurgerState.cheese = id;
      } else if (type === 'topping') {
        if (customBurgerState.toppings.includes(id)) {
          customBurgerState.toppings = customBurgerState.toppings.filter(t => t !== id);
        } else {
          customBurgerState.toppings.push(id);
        }
      } else if (type === 'sauce') {
        if (customBurgerState.sauces.includes(id)) {
          customBurgerState.sauces = customBurgerState.sauces.filter(s => s !== id);
        } else {
          customBurgerState.sauces.push(id);
        }
      }

      renderBuilderControls();
      updateBurgerVisualAndStats();
    });
  });
}

function calculateBuilderTotals() {
  const baseBun = BUILDER_DATA.buns.find(b => b.id === customBurgerState.bun) || BUILDER_DATA.buns[0];
  const selectedPatty = BUILDER_DATA.patties.find(p => p.id === customBurgerState.patty) || BUILDER_DATA.patties[0];
  const selectedCheese = BUILDER_DATA.cheeses.find(c => c.id === customBurgerState.cheese) || BUILDER_DATA.cheeses[0];
  
  const selectedToppings = BUILDER_DATA.toppings.filter(t => customBurgerState.toppings.includes(t.id));
  const selectedSauces = BUILDER_DATA.sauces.filter(s => customBurgerState.sauces.includes(s.id));

  let totalPrice = 4.00; // Base artisan build fee
  totalPrice += baseBun.price;
  totalPrice += selectedPatty.price;
  totalPrice += selectedCheese.price;
  selectedToppings.forEach(t => totalPrice += t.price);
  selectedSauces.forEach(s => totalPrice += s.price);

  let totalCalories = baseBun.calories + selectedPatty.calories + selectedCheese.calories;
  selectedToppings.forEach(t => totalCalories += t.calories);
  selectedSauces.forEach(s => totalCalories += s.calories);

  let totalProtein = baseBun.protein + selectedPatty.protein + selectedCheese.protein;
  selectedToppings.forEach(t => totalProtein += t.protein);
  selectedSauces.forEach(s => totalProtein += s.protein);

  const summary = [
    baseBun.name,
    selectedPatty.name,
    selectedCheese.id !== 'cheese-none' ? selectedCheese.name : null,
    selectedToppings.map(t => t.name).join(', '),
    selectedSauces.map(s => s.name).join(', ')
  ].filter(Boolean).join(' • ');

  return {
    price: totalPrice,
    calories: totalCalories,
    protein: totalProtein,
    summary: summary,
    baseBun,
    selectedPatty,
    selectedCheese,
    selectedToppings,
    selectedSauces
  };
}

function updateBurgerVisualAndStats() {
  const totals = calculateBuilderTotals();

  // Update HUD
  document.getElementById('hudCalories').textContent = `${totals.calories} kcal`;
  document.getElementById('hudProtein').textContent = `${totals.protein}g`;
  document.getElementById('hudPrice').textContent = `$${totals.price.toFixed(2)}`;
  document.getElementById('btnCustomPrice').textContent = `$${totals.price.toFixed(2)}`;

  // Update Visual Layer Stack
  const stackWrapper = document.getElementById('burgerStackWrapper');
  let layersHtml = '';

  // 1. Bun Top
  layersHtml += `<div class="b-layer b-bun-top ${totals.baseBun.cssClass}"></div>`;

  // 2. Sauces (Drizzle)
  totals.selectedSauces.forEach(s => {
    layersHtml += `<div class="b-layer ${s.cssClass}"><span class="b-layer-label">${s.visualName}</span></div>`;
  });

  // 3. Crisp Bacon & Toppings Top
  totals.selectedToppings.forEach(t => {
    if (t.id === 'top-bacon' || t.id === 'top-onions') {
      layersHtml += `<div class="b-layer ${t.cssClass}"><span class="b-layer-label">${t.visualName}</span></div>`;
    }
  });

  // 4. Melted Cheese
  if (totals.selectedCheese && totals.selectedCheese.cssClass) {
    layersHtml += `<div class="b-layer ${totals.selectedCheese.cssClass}"><span class="b-layer-label">${totals.selectedCheese.visualName}</span></div>`;
  }

  // 5. Patty
  layersHtml += `<div class="b-layer ${totals.selectedPatty.cssClass}"><span class="b-layer-label">${totals.selectedPatty.visualName}</span></div>`;

  // 6. Remaining Toppings (Lettuce, tomato, pickles, mushrooms)
  totals.selectedToppings.forEach(t => {
    if (t.id !== 'top-bacon' && t.id !== 'top-onions') {
      layersHtml += `<div class="b-layer ${t.cssClass}"><span class="b-layer-label">${t.visualName}</span></div>`;
    }
  });

  // 7. Bun Bottom
  layersHtml += `<div class="b-layer b-bun-bottom ${totals.baseBun.cssClass}"></div>`;

  stackWrapper.innerHTML = layersHtml;
}

// ==========================================================================
// 8. CART & CHECKOUT DRAWER
// ==========================================================================

function initCart() {
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const backdrop = document.getElementById('cartBackdrop');
  const startBrowsingBtn = document.getElementById('startBrowsingBtn');

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

  if (startBrowsingBtn) {
    startBrowsingBtn.addEventListener('click', () => {
      closeCartDrawer();
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Fulfillment switcher (Pickup vs Delivery)
  const fulfillBtns = document.querySelectorAll('.fulfillment-btn');
  fulfillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fulfillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      fulfillmentType = btn.dataset.type;
      recalculateCart();
    });
  });

  // Promo code
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', handlePromoCode);
  }

  // Tip options
  const tipBtns = document.querySelectorAll('.tip-btn');
  tipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tipBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tipRate = parseFloat(btn.dataset.tip);
      recalculateCart();
    });
  });

  // Checkout trigger
  const proceedBtn = document.getElementById('proceedCheckoutBtn');
  if (proceedBtn) {
    proceedBtn.addEventListener('click', handleProceedCheckout);
  }

  renderCart();
}

function openCartDrawer() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(item) {
  // Check if standard item already in cart
  const existing = cartState.find(c => c.id === item.id && c.notes === item.notes);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartState.push({
      cartKey: 'ck-' + Math.random().toString(36).substring(2, 9),
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      notes: item.notes || '',
      quantity: 1
    });
  }
  renderCart();
  recalculateCart();
}

function updateItemQuantity(cartKey, delta) {
  const item = cartState.find(c => c.cartKey === cartKey);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cartState = cartState.filter(c => c.cartKey !== cartKey);
  }
  renderCart();
  recalculateCart();
}

function renderCart() {
  const list = document.getElementById('cartItemsList');
  const emptyView = document.getElementById('emptyCartView');
  const footer = document.getElementById('cartFooter');
  const countBadge = document.getElementById('cartCountBadge');
  const drawerCount = document.getElementById('cartDrawerCount');

  const totalQuantity = cartState.reduce((sum, item) => sum + item.quantity, 0);
  countBadge.textContent = totalQuantity;
  drawerCount.textContent = `${totalQuantity} item${totalQuantity === 1 ? '' : 's'}`;

  if (cartState.length === 0) {
    list.innerHTML = '';
    list.style.display = 'none';
    emptyView.style.display = 'flex';
    footer.style.display = 'none';
    return;
  }

  list.style.display = 'flex';
  emptyView.style.display = 'none';
  footer.style.display = 'block';

  list.innerHTML = cartState.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
      <div class="cart-item-details">
        <div class="cart-item-head">
          <span class="cart-item-title">${item.title}</span>
          <button class="cart-item-remove" data-key="${item.cartKey}" title="Remove item">&times;</button>
        </div>
        ${item.notes ? `<span class="cart-item-notes">${item.notes}</span>` : ''}
        <div class="cart-item-bottom">
          <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
          <div class="quantity-control">
            <button class="qty-btn" data-action="dec" data-key="${item.cartKey}">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" data-action="inc" data-key="${item.cartKey}">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Remove and quantity buttons
  list.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => updateItemQuantity(btn.dataset.key, -9999));
  });

  list.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = btn.dataset.action === 'inc' ? 1 : -1;
      updateItemQuantity(btn.dataset.key, delta);
    });
  });

  recalculateCart();
}

function handlePromoCode() {
  const input = document.getElementById('promoCodeInput');
  const feedback = document.getElementById('promoFeedback');
  const code = input.value.trim().toUpperCase();

  if (!code) {
    feedback.textContent = 'Please enter a promo code.';
    feedback.className = 'promo-feedback error';
    return;
  }

  if (code === 'BURGERLOVE') {
    appliedDiscount = 0.15; // 15% off
    activePromoCode = 'BURGERLOVE';
    feedback.textContent = 'Awesome! 15% discount applied.';
    feedback.className = 'promo-feedback success';
    showToast('Promo code BURGERLOVE applied: 15% off! 🎉');
  } else if (code === 'SMASH20') {
    appliedDiscount = 5.00; // Flat $5 off
    activePromoCode = 'SMASH20';
    feedback.textContent = '$5.00 discount applied to order.';
    feedback.className = 'promo-feedback success';
    showToast('Promo code SMASH20 applied: $5 off! 🎉');
  } else if (code === 'FREESHAKE') {
    appliedDiscount = 7.25; // Value of a shake
    activePromoCode = 'FREESHAKE';
    feedback.textContent = 'Free Shake voucher applied (-$7.25).';
    feedback.className = 'promo-feedback success';
    showToast('Free Shake voucher applied! 🥤');
  } else {
    appliedDiscount = 0;
    activePromoCode = null;
    feedback.textContent = 'Invalid promo code. Try "BURGERLOVE".';
    feedback.className = 'promo-feedback error';
  }

  recalculateCart();
}

function recalculateCart() {
  const subtotal = cartState.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (appliedDiscount > 0) {
    if (appliedDiscount < 1) {
      discountAmount = subtotal * appliedDiscount;
    } else {
      discountAmount = Math.min(appliedDiscount, subtotal);
    }
  }

  const taxableSubtotal = Math.max(0, subtotal - discountAmount);
  const taxes = taxableSubtotal * 0.0825; // 8.25%
  const deliveryFee = fulfillmentType === 'delivery' ? 3.99 : 0.00;
  const tipAmount = taxableSubtotal * tipRate;
  const finalTotal = taxableSubtotal + taxes + deliveryFee + tipAmount;

  // DOM Updates
  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  
  const discountRow = document.getElementById('discountRow');
  if (discountAmount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('cartDiscount').textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  document.getElementById('cartTaxes').textContent = `$${taxes.toFixed(2)}`;
  
  const delivRow = document.getElementById('deliveryFeeRow');
  delivRow.querySelector('span:first-child').textContent = fulfillmentType === 'delivery' ? 'Estimated Delivery' : 'Pickup Fee';
  document.getElementById('cartDelivery').textContent = deliveryFee > 0 ? `$${deliveryFee.toFixed(2)}` : 'FREE';

  document.getElementById('cartTip').textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById('cartFinalTotal').textContent = `$${finalTotal.toFixed(2)}`;
  document.getElementById('checkoutTotalBtn').textContent = `$${finalTotal.toFixed(2)}`;

  return { subtotal, discountAmount, taxes, deliveryFee, tipAmount, finalTotal };
}

// ==========================================================================
// 9. CHECKOUT SIMULATION & ORDER TRACKER
// ==========================================================================

function handleProceedCheckout() {
  if (cartState.length === 0) {
    showToast('Your bag is currently empty! 🍔');
    return;
  }

  const totals = recalculateCart();
  const orderId = '#SS-' + Math.floor(1000 + Math.random() * 9000);

  // Setup Receipt Breakdown in Modal
  const receiptEl = document.getElementById('orderReceiptBreakdown');
  receiptEl.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom: 0.4rem;">
      <strong>Fulfillment:</strong>
      <span>${fulfillmentType === 'delivery' ? '🛵 Contactless Delivery' : '🛍️ Express Store Pickup'}</span>
    </div>
    <div style="display:flex; justify-content:space-between; margin-bottom: 0.4rem;">
      <strong>Items (${cartState.reduce((s, i) => s + i.quantity, 0)}):</strong>
      <span>${cartState.map(i => `${i.quantity}x ${i.title}`).join(', ')}</span>
    </div>
    <div style="display:flex; justify-content:space-between; font-weight:800; color:var(--accent-gold); border-top:1px solid var(--border-subtle); padding-top:0.4rem; margin-top:0.4rem;">
      <span>Total Paid:</span>
      <span>$${totals.finalTotal.toFixed(2)}</span>
    </div>
  `;

  document.getElementById('orderConfirmationId').textContent = `ORDER ${orderId}`;

  // Close Cart, Open Checkout Modal
  closeCartDrawer();
  const checkoutModal = document.getElementById('checkoutModalBackdrop');
  checkoutModal.classList.add('open');

  // Trigger sound effect or vibration simulation
  showToast(`Order confirmed! Pitmasters firing up the grill. 🔥`);

  // Clear Cart
  cartState = [];
  appliedDiscount = 0;
  activePromoCode = null;
  const promoInput = document.getElementById('promoCodeInput');
  if (promoInput) promoInput.value = '';
  const promoFeedback = document.getElementById('promoFeedback');
  if (promoFeedback) promoFeedback.textContent = '';
  renderCart();

  // Attach Close & Reset Handlers
  const closeBtn = document.getElementById('closeCheckoutModalBtn');
  const doneBtn = document.getElementById('doneCheckoutBtn');
  const gpsBtn = document.getElementById('trackLiveMapBtn');

  const dismissCheckoutModal = () => {
    checkoutModal.classList.remove('open');
  };

  closeBtn.onclick = dismissCheckoutModal;
  doneBtn.onclick = dismissCheckoutModal;

  gpsBtn.onclick = () => {
    const step3 = document.getElementById('trackStep3');
    const step4 = document.getElementById('trackStep4');
    step3.classList.add('active');
    setTimeout(() => {
      step4.classList.add('active');
      showToast('Courier assigned: Driver Carlos is 6 minutes away in a Prius! 🚗');
    }, 1200);
  };
}

// ==========================================================================
// 10. ITEM CUSTOMIZER MODAL (STANDARD MENU ITEMS)
// ==========================================================================

function initCustomizerModal() {
  const modalBackdrop = document.getElementById('customizerModalBackdrop');
  const closeBtn = document.getElementById('closeCustomizerModalBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalBackdrop.classList.remove('open'));
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }
}

function openItemCustomizerModal(item) {
  const backdrop = document.getElementById('customizerModalBackdrop');
  const content = document.getElementById('customizerModalContent');

  let selectedBun = item.options?.buns ? item.options.buns[0] : 'Standard Bun';
  let selectedExtras = [];

  content.innerHTML = `
    <div class="customizer-item-head">
      <img src="${item.image}" alt="${item.title}" class="customizer-thumb">
      <div>
        <h3 style="font-size: 1.3rem;">${item.title}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">${item.description}</p>
        <span style="font-weight: 800; color: var(--accent-gold); font-size: 1.1rem; display: block; margin-top: 0.4rem;">$${item.price.toFixed(2)}</span>
      </div>
    </div>

    ${item.options?.buns ? `
      <div class="customizer-options-group">
        <h4>Select Bun Style:</h4>
        <div id="modalBunPills">
          ${item.options.buns.map((bun, i) => `
            <button class="customizer-choice-pill ${i === 0 ? 'selected' : ''}" data-choice="${bun}">${bun}</button>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${item.options?.extras ? `
      <div class="customizer-options-group">
        <h4>Add Extra Goodies:</h4>
        <div id="modalExtrasPills">
          ${item.options.extras.map(extra => `
            <button class="customizer-choice-pill" data-extra="${extra}">+ ${extra}</button>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div class="customizer-options-group">
      <h4>Special Cooking Notes / Instructions:</h4>
      <input type="text" id="modalSpecialNotes" class="form-input" placeholder="e.g. Cut in half, extra crispy bacon, sauce on side">
    </div>

    <button class="btn btn-primary w-full btn-lg mt-4" id="modalAddCustomItemBtn">
      <span>Add Customized Item to Bag</span>
      <span>$${item.price.toFixed(2)}</span>
    </button>
  `;

  // Bun selection listener
  const bunPills = content.querySelectorAll('#modalBunPills .customizer-choice-pill');
  bunPills.forEach(pill => {
    pill.addEventListener('click', () => {
      bunPills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      selectedBun = pill.dataset.choice;
    });
  });

  // Extras selection listener
  const extrasPills = content.querySelectorAll('#modalExtrasPills .customizer-choice-pill');
  extrasPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const extra = pill.dataset.extra;
      if (selectedExtras.includes(extra)) {
        selectedExtras = selectedExtras.filter(e => e !== extra);
        pill.classList.remove('selected');
      } else {
        selectedExtras.push(extra);
        pill.classList.add('selected');
      }
    });
  });

  // Add customized item
  const addBtn = document.getElementById('modalAddCustomItemBtn');
  addBtn.addEventListener('click', () => {
    const specialNotes = document.getElementById('modalSpecialNotes').value.trim();
    const allNotes = [
      selectedBun,
      selectedExtras.length > 0 ? selectedExtras.join(', ') : null,
      specialNotes
    ].filter(Boolean).join(' • ');

    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      notes: allNotes
    });

    backdrop.classList.remove('open');
    showToast(`Added customized ${item.title} to bag! 🍔`);
  });

  backdrop.classList.add('open');
}

// ==========================================================================
// 11. TABLE RESERVATIONS
// ==========================================================================

function initTableReservation() {
  const reserveBtn = document.getElementById('openReserveBtn');
  const reserveForm = document.getElementById('tableReservationForm');
  const resModal = document.getElementById('reservationModalBackdrop');
  const closeResBtn = document.getElementById('closeReservationModalBtn');
  const okResBtn = document.getElementById('okReservationBtn');

  // Set default date to today
  const dateInput = document.getElementById('resDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today;
  }

  // Scroll to reserve box
  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      const reserveBox = document.getElementById('reserveBox');
      if (reserveBox) {
        reserveBox.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('resName').focus();
      }
    });
  }

  if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const location = document.getElementById('resLocation').value;
      const guests = document.getElementById('resGuests').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const notes = document.getElementById('resNotes').value.trim();

      const summaryCard = document.getElementById('reservationDetailsSummary');
      summaryCard.innerHTML = `
        <div><strong>Guest Name:</strong> ${name} (${phone})</div>
        <div><strong>Party Size:</strong> ${guests} Guests</div>
        <div><strong>Date &amp; Time:</strong> ${date} at ${time}</div>
        <div><strong>Restaurant Location:</strong> ${location === 'Downtown' ? 'Downtown Flagship (442 S Grand Ave)' : 'Westside Tap & Grill (1890 Ocean Blvd)'}</div>
        ${notes ? `<div><strong>Special Notes:</strong> ${notes}</div>` : ''}
      `;

      resModal.classList.add('open');
      reserveForm.reset();
      if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
      }
    });
  }

  const dismissResModal = () => resModal.classList.remove('open');
  if (closeResBtn) closeResBtn.addEventListener('click', dismissResModal);
  if (okResBtn) okResBtn.addEventListener('click', dismissResModal);
  if (resModal) {
    resModal.addEventListener('click', (e) => {
      if (e.target === resModal) dismissResModal();
    });
  }

  // Select store buttons in location cards
  document.querySelectorAll('.select-location-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const loc = btn.dataset.loc;
      const select = document.getElementById('resLocation');
      if (select) select.value = loc;
      showToast(`Selected ${loc} location for reservation & orders! 📍`);
      document.getElementById('reserveBox').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ==========================================================================
// 12. FAQ ACCORDION
// ==========================================================================

function initFaqAccordion() {
  const accordion = document.getElementById('faqAccordion');
  if (!accordion) return;

  const items = accordion.querySelectorAll('.faq-item');
  items.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ==========================================================================
// 13. DEALS COMBO & HERO QUICK ADD
// ==========================================================================

function initDealsAndHero() {
  // Quick add from Hero
  const heroAddBtn = document.querySelector('.quick-add-hero');
  if (heroAddBtn) {
    heroAddBtn.addEventListener('click', () => {
      const royal = MENU_ITEMS.find(i => i.id === 'royal-smokehouse');
      if (royal) {
        addToCart({
          id: royal.id,
          title: royal.title,
          price: royal.price,
          image: royal.image,
          notes: 'Standard chef prep'
        });
        openCartDrawer();
        showToast('Added The Royal Smokehouse to bag! 🍔');
      }
    });
  }

  // Deal Combo button
  const comboBtn = document.getElementById('addDealComboBtn');
  if (comboBtn) {
    comboBtn.addEventListener('click', () => {
      const comboItem = {
        id: 'deal-smash-feast',
        title: 'The Ultimate Smash Feast for Two',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
        notes: '2x Double Smash, 1x Truffle Parm Fries, 2x Dipping Sauces, 2x Craft Malts'
      };
      addToCart(comboItem);
      openCartDrawer();
      showToast('Smash Feast for Two added to bag! (Saved $11.51) 🔥');
    });
  }
}

// ==========================================================================
// 14. NEWSLETTER SUBSCRIPTION
// ==========================================================================

function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const email = input.value.trim();
      if (email) {
        showToast(`Welcome to the Sizzle Club! Secret coupon sent to ${email} 🎁`);
        input.value = '';
      }
    });
  }
}

// ==========================================================================
// 15. TOAST NOTIFICATION SYSTEM
// ==========================================================================

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✨</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
