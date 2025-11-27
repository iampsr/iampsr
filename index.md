<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>iamPSR — Rides • Explains • Shop</title>
  <meta name="description" content="iamPSR — PSR Rides, PSR Explains, shop, about and contact. Motorcycle rides, guides and curated gear.">
  <link rel="icon" href="/favicon.ico">
  <style>
    :root{
      --bg:#0f1724; /* deep slate */
      --card:#0b1220;
      --accent:#ff6a00; /* warm orange */
      --muted:#9aa4b2;
      --glass: rgba(255,255,255,0.04);
      --radius:12px;
      color-scheme: dark;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial;
    }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;background:linear-gradient(180deg,var(--bg),#071021);color:#e6eef6}
    a{color:var(--accent);text-decoration:none}
    .container{max-width:1150px;margin:0 auto;padding:28px}

    /* HEADER */
    header.main-header{display:flex;align-items:center;justify-content:space-between;gap:16px}
    .brand{display:flex;align-items:center;gap:12px}
    .logo{width:48px;height:48px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#ff9500);display:flex;align-items:center;justify-content:center;font-weight:700;color:#021;box-shadow:0 6px 18px rgba(0,0,0,0.6)}
    .site-title{font-size:18px;font-weight:700;letter-spacing:0.2px}
    nav.desktop{display:flex;gap:12px;align-items:center}
    nav.desktop a{padding:8px 12px;border-radius:10px;font-weight:600}
    nav.desktop a:hover{background:var(--glass)}

    /* Mobile nav */
    .mobile-toggle{display:none;background:transparent;border:1px solid rgba(255,255,255,0.06);padding:8px;border-radius:10px}
    @media (max-width:820px){
      nav.desktop{display:none}
      .mobile-toggle{display:inline-flex}
    }

    /* HERO */
    .hero{display:grid;grid-template-columns:1fr 420px;gap:24px;align-items:center;margin:28px 0}
    .hero-card{background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);padding:28px;border-radius:16px;border:1px solid rgba(255,255,255,0.04)}
    .hero h1{margin:0;font-size:34px}
    .lead{color:var(--muted);margin-top:10px}
    .cta{display:flex;gap:12px;margin-top:18px}
    .btn{background:var(--accent);color:#021;padding:10px 14px;border-radius:10px;font-weight:700;border:none;cursor:pointer}
    .btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:inherit}

    /* cards & lists */
    section{margin:28px 0}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .card{background:var(--card);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
    .card h3{margin:6px 0}
    .muted{color:var(--muted);font-size:14px}

    /* shop grid */
    .shop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .product{display:flex;flex-direction:column;gap:10px}
    .product img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:8px}

    /* footer */
    footer{padding:20px 0;color:var(--muted);text-align:center}

    /* responsive */
    @media (max-width:1150px){.hero{grid-template-columns:1fr 360px}}
    @media (max-width:920px){.grid{grid-template-columns:repeat(2,1fr)}.shop-grid{grid-template-columns:repeat(2,1fr)}.hero{grid-template-columns:1fr}}
    @media (max-width:560px){.grid{grid-template-columns:1fr}.shop-grid{grid-template-columns:1fr}.container{padding:18px}}

    /* smooth anchor */
    html{scroll-behavior:smooth}

    /* small helpers */
    .pill{display:inline-block;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.03);font-weight:700}
    .meta{font-size:13px;color:var(--muted)}

    /* contact form styles */
    form.contact{display:grid;gap:10px}
    input[type=text],input[type=email],textarea{background:transparent;border:1px solid rgba(255,255,255,0.05);padding:10px;border-radius:8px;color:inherit}
    textarea{min-height:110px}
    .small{font-size:13px;color:var(--muted)}

    /* accessible focus */
    a:focus,button:focus,input:focus,textarea:focus{outline:3px solid rgba(255,106,0,0.16);outline-offset:3px}
  </style>
</head>
<body>
  <div class="container">
    <header class="main-header">
      <div class="brand">
        <div class="logo">PSR</div>
        <div>
          <div class="site-title">iamPSR</div>
          <div class="muted">Rides • Explains • Shop</div>
        </div>
      </div>

      <nav class="desktop" aria-label="Primary">
        <a href="#rides">PSR Rides</a>
        <a href="#explains">PSR Explains</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <button class="mobile-toggle" id="mobileToggle" aria-expanded="false" aria-controls="mobileNav">Menu</button>
    </header>

    <!-- mobile nav panel -->
    <div id="mobileNav" style="display:none;margin-top:12px">
      <nav style="display:flex;flex-direction:column;gap:8px">
        <a href="#rides">PSR Rides</a>
        <a href="#explains">PSR Explains</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-card" style="grid-column:1/-1">
        <h1>iamPSR — for riders who want depth</h1>
        <p class="lead">Long-form ride reports, curiosity-driven explainers about science and the universe, practical how-tos, and a curated shop for riders. PSR Explains breaks down how things work — from helmet tech to the physics of cornering — in clear, visual, and experiment-friendly essays.</p>
        <div class="cta">
          <a class="btn" href="#rides">Explore Rides</a>
          <a class="btn ghost" href="#explains">Read Explains</a>
        </div>

        <div style="margin-top:18px;display:flex;gap:12px;align-items:center">
          <div class="pill">New: Lachen → Lachung comparison</div>
          <div class="meta">Updated Nov 2025</div>
        </div>
      </div>

      <!-- Collapsible Quick Links placed below the hero so main section can use full width -->
      <div style="grid-column:1/-1;margin-top:18px">
        <details style="background:var(--card);padding:14px;border-radius:12px;border:1px solid rgba(255,255,255,0.04);">
          <summary style="font-weight:700;cursor:pointer;padding:8px 10px;border-radius:8px;list-style:none;">Quick Links & Subscribe</summary>
          <div style="display:grid;grid-template-columns:1fr 360px;gap:12px;margin-top:12px;align-items:start">
            <div>
              <h4 style="margin:6px 0">Quick Links</h4>
              <ul class="muted" style="padding-left:18px;margin:8px 0;line-height:1.6">
                <li><a href="#rides">Latest Ride: Leh ↔️ Ladakh (detailed comparison)</a></li>
                <li><a href="#explains">How to get permits (avoid travel agents)</a></li>
                <li><a href="#shop">Shop: PSR Essentials</a></li>
              </ul>
            </div>

            <div style="min-width:0">
              <h4 style="margin:6px 0">Subscribe</h4>
              <p class="muted">Join the mailing list for ride alerts and gear drops.</p>
              <form action="#" onsubmit="alert('Replace form action with your provider');return false;" style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
                <input type="email" placeholder="you@domain.com" required style="padding:10px;border-radius:8px;background:transparent;border:1px solid rgba(255,255,255,0.04);color:inherit">
                <div style="display:flex;gap:8px;align-items:center">
                  <button class="btn" type="submit">Subscribe</button>
                  <div class="small">Or email <a href="mailto:hello@iampsr.com">hello@iampsr.com</a></div>
                </div>
              </form>
            </div>
          </div>
        </details>
      </div>
    </section>

    <!-- PSR RIDES -->
    <section id="rides">
      <h2>PSR Rides</h2>
      <p class="muted">Long ride reports with route notes, permits, fuel stops, and photography tips.</p>

      <div class="grid" style="margin-top:12px">
        <article class="card">
          <img src="https://via.placeholder.com/800x480?text=Leh+Ride" alt="Leh Ride" style="width:100%;border-radius:8px;object-fit:cover;aspect-ratio:16/9">
          <h3>Leh ↔️ Ladakh — Full comparison</h3>
          <p class="muted">A deep-dive comparing Leh rides versus Lachen/Lachung/Gurudongmar. What to expect from terrain, permits, and pace.</p>
          <div style="display:flex;gap:8px;margin-top:8px"><a class="btn" href="#">Read</a><a class="btn ghost" href="#contact">Ask a question</a></div>
        </article>

        <article class="card">
          <img src="https://via.placeholder.com/800x480?text=Coastal+Ride" alt="Coastal Ride" style="width:100%;border-radius:8px;object-fit:cover;aspect-ratio:16/9">
          <h3>Hyderabad → Kolkata day planning</h3>
          <p class="muted">How to plan long distance point-to-point rides efficiently and safely.</p>
        </article>

        <article class="card">
          <img src="https://via.placeholder.com/800x480?text=Hill+Loop" alt="Hill Loop" style="width:100%;border-radius:8px;object-fit:cover;aspect-ratio:16/9">
          <h3>Lachen & Lachung: the terrain you should know</h3>
          <p class="muted">A practical guide to mountain passes, acclimatisation and photography spots.</p>
        </article>
      </div>
    </section>

    <!-- PSR EXPLAINS -->

    <!-- VISUAL EXPLAINER TEMPLATE (new) -->
    <section id="explains-template" style="margin-top:40px">
      <h2>PSR Explains — Visual Explainer Template</h2>
      <div class="card" style="margin-top:12px">
        <h3>Template Structure</h3>
        <p class="muted">Use this block when creating future PSR Explains posts. It keeps your science & universe explainers consistent, visual and easy to share.</p>

        <ul class="muted" style="margin:12px 0 0 18px;line-height:1.6">
          <li><strong>Hero Visual:</strong> A simple diagram or image representing the concept (e.g., how gyroscopic forces keep a motorcycle stable).</li>
          <li><strong>The Curiosity Hook:</strong> A short 2–3 line punchy question that sparks interest.</li>
          <li><strong>How It Works:</strong> A step-by-step breakdown in plain English.</li>
          <li><strong>The Science:</strong> Use real physics, astronomy, or engineering principles — but simplified.</li>
          <li><strong>Real Ride Connection:</strong> Show how the science appears in real riding (cornering, wind behaviour, braking forces).</li>
          <li><strong>Try-It-Yourself Experiment:</strong> A safe, small experiment readers can test at home.</li>
          <li><strong>Visual Diagram:</strong> One simple labelled image for clarity.</li>
        </ul>
      </div>
    </section>
    <section id="explains">
      <h2>PSR Explains</h2>
      <p class="muted">Curiosity-led deep dives: science, the universe, and how things work — translated for riders and makers. Expect clear experiments, visual breakdowns, and practical takeaways that connect physics and engineering to real-world riding.</p>

      <div class="grid" style="margin-top:12px">
        <article class="card">
          <h3>How to choose crash protection</h3>
          <p class="muted">Key points to consider when picking frame sliders, guards and sliders for urban & offroad.</p>
        </article>

        <article class="card">
          <h3>Helmet tech explained</h3>
          <p class="muted">From shell materials to noise reduction and camera mounts.</p>
        </article>

        <article class="card">
          <h3>Camera rigs for motorsport vlogging</h3>
          <p class="muted">Mounts, battery management, and footage settings that work while riding.</p>
        </article>
      </div>
    </section>

    <!-- PSR EXPLAINS SUBPAGE TEMPLATE (new) -->
    <section id="explains-subpage-template" style="margin-top:40px">
      <h2>PSR Explains — Long‑Form Page Template</h2>
      <div class="card" style="margin-top:12px">
        <p class="muted">This is the layout to use when you create full standalone PSR Explains articles (science, universe, tech, how things work). Paste this into a new HTML file like <code>explains-gyroscopic.html</code>.</p>

        <pre style="white-space:pre-wrap;font-size:13px;background:rgba(255,255,255,0.03);padding:14px;border-radius:10px;border:1px solid rgba(255,255,255,0.05);overflow:auto">&lt;section class="explainer-hero"&gt;
  &lt;h1&gt;TITLE OF THE EXPLAINER&lt;/h1&gt;
  &lt;p&gt;A curiosity hook about the science / universe concept.&lt;/p&gt;
&lt;/section&gt;

&lt;section class="explainer-body"&gt;
  &lt;h2&gt;How It Works&lt;/h2&gt;
  &lt;p&gt;Break it down step by step.&lt;/p&gt;

  &lt;h2&gt;The Science Behind It&lt;/h2&gt;
  &lt;p&gt;Physics, astronomy or engineering explained simply.&lt;/p&gt;

  &lt;h2&gt;Real Ride Connection&lt;/h2&gt;
  &lt;p&gt;Explain how this principle appears during riding.&lt;/p&gt;

  &lt;h2&gt;Try It Yourself Experiment&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;List of simple safe experiments&lt;/li&gt;
  &lt;/ul&gt;

  &lt;h2&gt;Visual Diagram&lt;/h2&gt;
  &lt;img src="diagram.jpg" alt="Concept diagram" style="width:100%;border-radius:10px;aspect-ratio:16/9;object-fit:cover"&gt;
&lt;/section&gt;</pre>
      </div>
    </section>

    <!-- SHOP -->
    <section id="shop">
      <h2>Shop — PSR Essentials</h2>
      <p class="muted">Curated items I use and recommend. Link to your affiliate or Shopify store from each product card.</p>

      <div class="shop-grid" style="margin-top:12px">

        <!-- NEW: Experiment Kit Card -->
        <div class="product card">
          <img src="https://via.placeholder.com/600x400?text=Experiment+Kit" alt="Experiment Kit">
          <h4>PSR Experiment Kit</h4>
          <div class="muted">For PSR Explains: gyroscope demos, airflow tests, light experiments. Perfect for science content & at‑home demonstrations.</div>
          <div style="margin-top:8px;display:flex;gap:8px"><a class="btn" href="#">View</a><a class="btn ghost" href="#">Buy</a></div>
        </div>

        <!-- existing cards -->
         style="margin-top:12px">
        <div class="product card">
          <img src="https://via.placeholder.com/600x400?text=PSR+Jacket" alt="PSR Jacket">
          <h4>PSR Riding Jacket</h4>
          <div class="muted">From ₹7,999 — Durable, ventilated, and crash-tested</div>
          <div style="margin-top:8px;display:flex;gap:8px"><a class="btn" href="#">View</a><a class="btn ghost" href="#">Buy</a></div>
        </div>

        <div class="product card">
          <img src="https://via.placeholder.com/600x400?text=Helmet" alt="Helmet">
          <h4>PSR Helmet</h4>
          <div class="muted">Lightweight full-face — camera mount friendly</div>
        </div>

        <div class="product card">
          <img src="https://via.placeholder.com/600x400?text=Toolkit" alt="Toolkit">
          <h4>PSR Toolkit</h4>
          <div class="muted">Compact multi-tool & tyre repair kit</div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <h2>About — Prem Singh (iamPSR)</h2>
      <p class="muted">I ride, test, and write. I share real ride experience, technical explainers, and curated gear — straight from the road.</p>

      <div class="grid" style="margin-top:12px">
        <div class="card">
          <h3>My approach</h3>
          <p class="muted">Honest, experience-driven content. I prioritise safety, practical tips, and useful templates for riders who want to improve their craft.</p>
        </div>

        <div class="card">
          <h3>Media & collaborations</h3>
          <p class="muted">If you're a brand or publisher, email me at <a href="mailto:hello@iampsr.com">hello@iampsr.com</a> — include brief details and budget.</p>
        </div>

        <div class="card">
          <h3>Tech stack</h3>
          <p class="muted">Static site — ready for GitHub Pages, Netlify or Vercel. No build step required for this template.</p>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <h2>Contact</h2>
      <p class="muted">Questions, collaborations, or ride invites — drop a message.</p>

      <div style="display:grid;grid-template-columns:1fr 360px;gap:16px;margin-top:12px">
        <div class="card">
          <form class="contact" action="https://formspree.io/f/your-form-id" method="POST">
            <!-- Replace the action URL above with your Formspree / Netlify Forms endpoint or use a serverless function -->
            <label class="small">Name<input type="text" name="name" required></label>
            <label class="small">Email<input type="email" name="email" required></label>
            <label class="small">Message<textarea name="message" required></textarea></label>
            <div style="display:flex;gap:8px;align-items:center">
              <button class="btn" type="submit">Send</button>
              <div class="small">Or email <a href="mailto:hello@iampsr.com">hello@iampsr.com</a></div>
            </div>
          </form>
        </div>

        <aside class="card">
          <h4>Social</h4>
          <p class="muted">YouTube • Instagram • Threads • X</p>
          <h4 style="margin-top:12px">Location</h4>
          <p class="muted">Based in India — available for collaborations worldwide</p>
        </aside>
      </div>
    </section>

    <footer>
      <div class="muted">© <span id="year"></span> iamPSR — Built with ❤️ for riders</div>
    </footer>
  </div>

  <script>
    // small interactive bits
    document.getElementById('year').textContent = new Date().getFullYear();
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    mobileToggle.addEventListener('click', ()=>{
      const open = mobileNav.style.display === 'block';
      mobileNav.style.display = open ? 'none' : 'block';
      mobileToggle.setAttribute('aria-expanded', String(!open));
    });

    // lightweight smooth image loading
    document.querySelectorAll('img').forEach(img=>{img.loading='lazy'});

    // Accessibility: close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{mobileNav.style.display='none';mobileToggle.setAttribute('aria-expanded','false')}));
  </script>
</body>
</html>
