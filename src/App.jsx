import './App.css';

const formatINR = (value) => `₹${value.toLocaleString('en-IN')}`;

const heroCopy = {
  title: 'Premium Stationery for Every Creative Moment',
  subtitle: 'Discover curated pens, journals, and art tools from India’s most loved brands. Fresh drops weekly with exclusive launch pricing.',
  ctas: ['Shop New Arrivals', 'View All Collections'],
};

const trendingNow = [
  { title: 'Velvet Touch Pens', price: 599, image: 'https://images.unsplash.com/photo-1527254059249-f2e419a89af5?auto=format&fit=crop&w=600&q=80' },
  { title: 'Heritage Leather Journal', price: 1499, image: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&w=600&q=80' },
  { title: 'Watercolor Essentials', price: 2199, image: 'https://images.unsplash.com/photo-1445510861639-5651173bc5d5?auto=format&fit=crop&w=600&q=80' },
];

const topBrands = ['PaperNest', 'Ink & Ivory', 'Quill Co.', 'Kala Craft', 'Aurora Sketch'];

const catalog = [
  {
    title: 'Aurora Calligraphy Kit',
    price: 3299,
    secondaryPrice: 2899,
    badge: 'New',
    primaryImage: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Monsoon Journal Duo',
    price: 1899,
    secondaryPrice: 1599,
    primaryImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Sketch Pro Brush Set',
    price: 2499,
    secondaryPrice: 2199,
    primaryImage: 'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Metallic Accent Markers',
    price: 999,
    secondaryPrice: 799,
    primaryImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Lotus Kraft Planner',
    price: 1299,
    secondaryPrice: 1099,
    primaryImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Pebble Desk Organiser',
    price: 2599,
    secondaryPrice: 2299,
    primaryImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
  },
];

const productDetail = {
  title: 'Kanjivaram Silk Wrapped Journal',
  price: 2499,
  discount: 20,
  description:
    'Hand-bound journal with 120 GSM cotton pages, silk-wrapped spine, and gold-foil page markers. Designed for writers who value heritage craft with modern practicality.',
  highlights: ['120 GSM ivory paper', 'Elastic closure', 'Lay-flat binding', 'Gift-ready packaging'],
  images: [
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80',
  ],
};

const cartItems = [
  { id: 1, title: 'Velvet Touch Pens · Set of 5', price: 599, quantity: 2 },
  { id: 2, title: 'Heritage Leather Journal', price: 1499, quantity: 1 },
];

const checkoutSteps = ['Address', 'Payment', 'Summary'];

const recommendations = ['Lotus Kraft Planner', 'Aurora Calligraphy Kit', 'Sketch Pro Brush Set'];

function App() {
  const cartTotals = cartItems.reduce(
    (acc, item) => {
      acc.mrp += item.price * item.quantity;
      return acc;
    },
    { mrp: 0 }
  );
  cartTotals.discount = Math.round(cartTotals.mrp * 0.15);
  cartTotals.final = cartTotals.mrp - cartTotals.discount;

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-text">
          <p className="eyebrow">Stationery · India · 2026</p>
          <h1>{heroCopy.title}</h1>
          <p className="lede">{heroCopy.subtitle}</p>
          <div className="hero-ctas">
            <button className="btn primary">{heroCopy.ctas[0]}</button>
            <button className="btn secondary">{heroCopy.ctas[1]}</button>
          </div>
        </div>
        <div className="hero-banner">
          <p className="banner-label">Back to School</p>
          <h3>New Arrivals · Up to 25% OFF</h3>
          <p>Free shipping on orders above ₹999 across India.</p>
        </div>
      </header>

      <section className="scroll-section">
        <div className="section-heading">
          <h2>Trending Now</h2>
          <p>Curated drops from indie brands.</p>
        </div>
        <div className="h-scroll">
          {trendingNow.map((item) => (
            <article key={item.title} className="trend-card">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>{formatINR(item.price)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scroll-section brands">
        <div className="section-heading">
          <h2>Top Brands</h2>
          <p>Handpicked partners across India.</p>
        </div>
        <div className="brand-row">
          {topBrands.map((brand) => (
            <span key={brand} className="brand-pill">
              {brand}
            </span>
          ))}
        </div>
      </section>

      <section className="product-grid">
        <div className="section-heading">
          <h2>Featured Products</h2>
          <p>Hover to preview secondary angles.</p>
        </div>
        <div className="grid">
          {catalog.map((item) => (
            <article key={item.title} className="product-card">
              {item.badge && <span className="badge">{item.badge}</span>}
              <div className="product-media">
                <img src={item.primaryImage} alt={item.title} className="primary" />
                <img src={item.secondaryImage} alt={`${item.title} alt`} className="secondary" />
              </div>
              <h3>{item.title}</h3>
              <div className="price-row">
                <span className="price">{formatINR(item.secondaryPrice)}</span>
                <span className="mrp">{formatINR(item.price)}</span>
              </div>
              <button className="btn ghost">Add to Bag</button>
            </article>
          ))}
        </div>
      </section>

      <section className="product-detail">
        <div className="gallery">
          {productDetail.images.map((src, index) => (
            <img key={src} src={src} alt={`${productDetail.title} ${index + 1}`} />
          ))}
        </div>
        <div className="detail-content">
          <p className="eyebrow">Featured · Limited Edition</p>
          <h2>{productDetail.title}</h2>
          <div className="detail-price">
            <span className="price">{formatINR(productDetail.price)}</span>
            <span className="discount">{productDetail.discount}% OFF</span>
          </div>
          <p>{productDetail.description}</p>
          <ul>
            {productDetail.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="detail-ctas">
            <button className="btn primary">Add to Bag</button>
            <button className="btn secondary">Wishlist</button>
          </div>
          <details className="accordion" open>
            <summary>Product Details</summary>
            <p>Ships from Bangalore · Delivery in 3-5 days · Free returns within 7 days.</p>
          </details>
          <div className="recommend">
            <p>You May Also Like</p>
            <div>
              {recommendations.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cart">
        <div className="section-heading">
          <h2>Cart</h2>
          <p>Manage your picks in one tap.</p>
        </div>
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article key={item.id} className="cart-card">
                <div>
                  <h3>{item.title}</h3>
                  <p>Qty</p>
                </div>
                <div className="quantity">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
                <p className="price">{formatINR(item.price * item.quantity)}</p>
              </article>
            ))}
            <div className="coupon">
              <p>Have a coupon?</p>
              <div>
                <input type="text" placeholder="Enter promo code" />
                <button className="btn primary">Apply</button>
              </div>
            </div>
          </div>
          <div className="totals">
            <h3>Price Details</h3>
            <div className="line">
              <span>Total MRP</span>
              <span>{formatINR(cartTotals.mrp)}</span>
            </div>
            <div className="line">
              <span>Discount</span>
              <span className="discount">- {formatINR(cartTotals.discount)}</span>
            </div>
            <div className="line grand">
              <span>Final Amount</span>
              <span>{formatINR(cartTotals.final)}</span>
            </div>
            <button className="btn primary">Proceed to Checkout</button>
          </div>
        </div>
      </section>

      <section className="checkout">
        <h2>Checkout</h2>
        <div className="progress">
          {checkoutSteps.map((step, index) => (
            <div key={step} className={`progress-step ${index === 0 ? 'active' : index < 0 ? 'done' : ''}`}>
              <div className="circle">{index + 1}</div>
              <p>{step}</p>
              {index < checkoutSteps.length - 1 && <span className="line" />}
            </div>
          ))}
        </div>
        <div className="checkout-grid">
          <form className="address">
            <h3>Address</h3>
            <label>
              Full Name
              <input type="text" placeholder="Rohit Singh" />
            </label>
            <label>
              Mobile Number
              <input type="tel" placeholder="+91 98765 43210" />
            </label>
            <label>
              Address Line 1
              <input type="text" placeholder="Flat / Street" />
            </label>
            <label>
              City
              <input type="text" placeholder="Bengaluru" />
            </label>
            <div className="inline">
              <label>
                State
                <select defaultValue="Karnataka">
                  <option>Tamil Nadu</option>
                  <option>Karnataka</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                </select>
              </label>
              <label>
                PIN Code
                <input type="text" placeholder="560001" maxLength={6} />
              </label>
            </div>
          </form>
          <div className="payment">
            <h3>Payment</h3>
            <div className="payment-tabs">
              <button className="tab active">UPI</button>
              <button className="tab">Cards</button>
              <button className="tab">Net Banking</button>
            </div>
            <div className="payment-card">
              <label>
                UPI ID
                <input type="text" placeholder="name@upi" />
              </label>
              <button className="btn primary">Pay Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div>
          <h2>Visit Us</h2>
          <p>Showroom & Experience Centre · Indiranagar, Bengaluru</p>
          <div className="map-placeholder">Google Map Placeholder</div>
        </div>
        <form className="contact-form">
          <h3>Contact Us</h3>
          <label>
            Name
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows={4} placeholder="Tell us how we can help" />
          </label>
          <button className="btn primary" type="button">
            Send Message
          </button>
          <a className="whatsapp" href="https://wa.me/919876543210">Chat on WhatsApp</a>
        </form>
      </section>
    </div>
  );
}

export default App;
