# 🍔 SIZZLE & STACK BURGER CO. — Artisanal Smash Burgers

A high-converting, interactive, responsive restaurant and online ordering website built for modern burger bistros and smash burger brands.

---

## 🌟 Highlights & Features

1. **Interactive "Build-A-Burger Lab" (Customizer)**:
   - Dynamic real-time visual layer stack that builds the burger graphically as ingredients are toggled (buns, patties, melting cheeses, toppings, sauces).
   - Live nutrition HUD calculating estimated calories, protein, and custom pricing in real-time.
   - One-click "Add Custom Creation to Bag" integration.

2. **Categorized Menu & Instant Filtering**:
   - Filter by categories: *All Items, Smashburgers, Chicken & Vegan, Loaded Fries & Sides, Thick Shakes & Drinks*.
   - Live keyword search bar with clear button.
   - Dietary & highlight chips: *🌶️ Spicy, 🌱 Veg / Vegan, ⭐ Best Seller, 👨‍🍳 Chef's Pick*.
   - Item Customizer modal for quick extras and special prep instructions.

3. **Slide-Over Cart Drawer & Checkout**:
   - Order fulfillment switch: **Delivery** (~25-35 min) vs. **Pickup** (~15 min ready).
   - Dynamic tip selector (10%, 15%, 20%, Custom).
   - Working Promo Codes:
     - `BURGERLOVE` &mdash; 15% discount on the entire order
     - `SMASH20` &mdash; $5 flat discount
     - `FREESHAKE` &mdash; $7.25 credit for a shake
   - Interactive Order Confirmation Modal with live simulated kitchen & courier status tracker.

4. **Table Reservation System**:
   - Real-time booking form with date, time, guest count, and location selector (Downtown Flagship vs Westside Tap & Grill).
   - Instant confirmation popup with reservation summary card.

5. **Brand Story & Social Proof**:
   - The science of the 700°F Maillard crust and custom 80/20 Angus beef blend.
   - Food critic & verified diner review cards with ratings.
   - Store hours and interactive "Open Now" badges.
   - Interactive FAQ accordion for dietary questions and preparation methods.

---

## 🚀 How to Run & Preview

You can open the website directly in any browser:

### Option A: Local Python Server (Recommended)
From this directory, run:
```bash
python3 -m http.server 8080
```
Then visit [http://localhost:8080](http://localhost:8080) in your web browser.

### Option B: Direct File Open
On macOS:
```bash
open /Users/sairajyumnam/.gemini/antigravity/scratch/sizzle-burger-co/index.html
```

---

## 📂 Project Structure
```text
sizzle-burger-co/
├── index.html        # Semantic HTML5 markup, accessible landmarks, and modal templates
├── styles.css        # Responsive CSS3 design system, burger visual layers, animations
├── app.js            # Menu database, customizer logic, cart state, promo codes & tracker
└── README.md         # Project documentation & instructions
```
