<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>iamPSR — Rides, Reviews & Videos</title>
  <meta name="description" content="iamPSR — motorcycle rides, hands-on reviews, and recommended gear. Watch videos, read ride stories, and shop recommended products.">
  <meta property="og:title" content="iamPSR — Rides, Reviews & Videos">
  <meta property="og:description" content="Motorcycle rides, reviews and recommended gear. New videos every week.">
  <meta property="og:image" content="/assets/og-hero.jpg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
    /* Mobile-first responsive personal site tuned for GitHub Pages */
    :root{
      --bg:#071426; --card:#0c1624; --muted:#9fb0c7; --accent:#ff6a00; --glass: rgba(255,255,255,0.03); --radius:14px; --max:1100px;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{margin:0;font-family:Inter,system-ui,Segoe UI,Roboto,Arial;color:#e8f3ff;background:linear-gradient(180deg,#061226 0%,#071426 100%);-webkit-font-smoothing:antialiased}
    .container{max-width:var(--max);margin:0 auto;padding:20px}

    header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0}
    .brand{display:flex;align-items:center;gap:12px;color:inherit;text-decoration:none}
    .logo{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#ff8f3a);display:flex;align-items:center;justify-content:center;font-weight:800;color:#081322}
    .nav{display:flex;gap:10px;align-items:center}
    .nav a{color:var(--muted);text-decoration:none;font-weight:600;font-size:14px;padding:8px;border-radius:10px}

    /* HERO */
    .hero{display:flex;flex-direction:column;gap:14px;padding:16px;background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);border-radius:var(--radius);box-shadow:0 8px 26px rgba(2,6,23,0.6)}
    .kicker{color:var(--accent);font-weight:700;font-size:13px}
    h1{margin:6px 0 0;font-size:22px}
    p.lead{color:var(--muted);margin:6px 0 0}
    .hero-cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
    .btn{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:12px;font-weight:700;border:none;cursor:pointer}
    .btn-primary{background:linear-gradient(90deg,var(--accent),#ff8f3a);color:#081322}
    .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.05);color:var(--muted)}

    /* Grid sections */
    .stack{margin-top:18px;display:grid;gap:14px}
    .card{background:var(--card);padding:12px;border-radius:12px;box-shadow:0 8px 20px rgba(2,6,23,0.5)}

    /* Video section */
    .videos{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .video-embed{aspect-ratio:16/9;border-radius:10px;overflow:hidden}
    .video-embed iframe{width:100%;height:100%;border:0}

    /* Shop */
    .shop-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
    .product{display:flex;gap:10px;align-items:center}
    .product img{width:88px;height:64px;object-fit:cover;border-radius:8px}
    .product .meta{flex:1}
    .price{font-weight:800;color:var(--accent)}

    /* Stories / rides */
    .rides-list{display:flex;flex-direction:column;gap:10px}
    .ride{display:flex;gap:12px;align-items:center}
    .ride img{width:120px;height:72px;object-fit:cover;border-radius:8px}

    footer{margin-top:18px;color:var(--muted);font-size:14px}

    /* Desktop tweaks */
    @media(min-width:880px){
      .hero{flex-direction:row;align-items:center}
      .hero-left{flex:1}
      .hero-right{width:420px}
      .stack{grid-template-columns:1fr 420px}
      .videos{grid-template-columns:1fr}
      .shop-grid{grid-template-columns:repeat(2,1fr)}
      .rides-list{gap:14px}
    }

    @media(min-width:1100px){
      .container{padding:28px}
    }

    a:focus,button:focus{outline:3px solid rgba(255,106,0,0.12);outline-offset:3px}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <a class="brand" href="/">
        <div class="logo">PS</div>
        <div>
          <div style="font-weight:800">iamPSR</div>
          <div style="font-size:12px;color:var(--muted)">Rides • Reviews • Videos</div>
        </div>
      </a>

      <nav class="nav">
        <a href="#videos">Videos</a>
        <a href="#shop">Shop</a>
        <a href="#rides">Rides</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-left">
          <div class="kicker">New video weekly</div>
          <h1>Short, honest reviews and real ride stories.</h1>
          <p class="lead">I publish ride vlogs, product reviews and practical tips. Watch the latest videos, read ride reports and shop the gear I actually use.</p>

          <div class="hero-cta">
            <a class="btn btn-primary" href="#videos">Watch latest</a>
            <a class="btn btn-ghost" href="#shop">Shop gear</a>
            <a class="btn btn-ghost" href="/subscribe.html">Subscribe</a>
          </div>
        </div>

        <div class="hero-right">
          <div style="border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(2,6,23,0.6)"> 
            <!-- Channel banner / latest video embed (replace with your channel playlist ID) -->
            <div class="video-embed">
              <iframe src="https://www.youtube.com/embed?listType=user_uploads&list=YOUR_CHANNEL_ID" title="iamPSR channel" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <div class="stack">
        <section id="videos" class="card">
          <h2>Latest videos</h2>
          <div style="margin-top:10px" class="videos">
            <!-- Replace src with your latest video IDs or playlist embeds -->
            <div class="video-embed"><iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1" title="Video 1" allowfullscreen></iframe></div>
            <div class="video-embed"><iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2" title="Video 2" allowfullscreen></iframe></div>
          </div>
          <div style="margin-top:10px">
            <a class="btn btn-ghost" href="https://www.youtube.com/channel/YOUR_CHANNEL_ID">View channel on YouTube</a>
          </div>
        </section>

        <aside id="shop" class="card">
          <h2>Shop — recommended gear</h2>
          <div style="margin-top:10px" class="shop-grid">
            <article class="product">
              <img src="/assets/prod-helmet.jpg" alt="Helmet">
              <div class="meta">
                <div style="font-weight:700">Full-face Helmet — Brand X</div>
                <div class="muted" style="color:var(--muted);font-size:13px">Lightweight, comfy and great visibility.</div>
                <div style="margin-top:6px"><span class="price">₹7,999</span></div>
                <div style="margin-top:8px"><a class="btn btn-primary" href="https://your-affiliate-link.example">Buy</a></div>
              </div>
            </article>

            <article class="product">
              <img src="/assets/prod-gloves.jpg" alt="Gloves">
              <div class="meta">
                <div style="font-weight:700">Riding Gloves — Brand Y</div>
                <div class="muted" style="color:var(--muted);font-size:13px">Durable, breathable, good grip for long rides.</div>
                <div style="margin-top:6px"><span class="price">₹1,499</span></div>
                <div style="margin-top:8px"><a class="btn btn-primary" href="https://your-affiliate-link.example">Buy</a></div>
              </div>
            </article>
          </div>

          <div style="margin-top:12px;color:var(--muted);font-size:13px">Want a product page for each item with reviews and affiliate buttons? I can scaffold that too (Shopify or simple affiliate links).</div>
        </aside>
      </div>

      <section id="rides" class="card" style="margin-top:14px">
        <h2>Ride stories</h2>
        <div class="rides-list" style="margin-top:10px">
          <article class="ride">
            <img src="/assets/ride-lachung-gangtok.jpg" alt="Lachung to Gangtok">
            <div>
              <div style="font-weight:700">Lachung → Gangtok — Hidden alternate route</div>
              <div style="color:var(--muted);font-size:13px;margin-top:6px">Off-road sections, scenic bends and a surprise paradise spot. <a href="/rides/lachung-gangtok.html">Read more</a></div>
            </div>
          </article>

          <article class="ride">
            <img src="/assets/ride-hyderabad-jabalpur.jpg" alt="Hyderabad to Jabalpur">
            <div>
              <div style="font-weight:700">Hyderabad → Jabalpur — Long day blueprint</div>
              <div style="color:var(--muted);font-size:13px;margin-top:6px">Packing list, fuel stops and realistic timing for a long day. <a href="/rides/hyd-jbp.html">Read more</a></div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="card" style="margin-top:14px">
        <h2>Contact & business</h2>
        <p style="color:var(--muted)">Questions, collabs or sponsorships — email me at <a href="mailto:hello@iampsr.com">hello@iampsr.com</a> or open an issue on the repo.</p>
        <div style="margin-top:10px"><a class="btn btn-ghost" href="mailto:hello@iampsr.com">Email</a></div>
      </section>
    </main>

    <footer>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:18px">
        <div style="font-weight:800">iamPSR</div>
        <div style="color:var(--muted)">© " + new Date().getFullYear() + " PS — Built for riders</div>
        <div style="color:var(--muted)"><a href="https://github.com/YOUR_USERNAME/YOUR_REPO" style="color:var(--muted);text-decoration:none">Repo</a></div>
      </div>
    </footer>
  </div>

  <script>
    // smooth internal scroll
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',e=>{
        const href = a.getAttribute('href');
        if(href.length>1){e.preventDefault();document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});}  
      })
    });

    // footer year update
    (function(){try{const f = document.querySelector('footer div'); if(f) f.innerText = '© ' + new Date().getFullYear() + ' PS — Built for riders';}catch(e){}})();
  </script>
</body>
</html>
