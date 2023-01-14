const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
  <div class="topnav">
  <!-- Centered link -->
  <div class="topnav-centered">
      <a href="/HTML/VintageHomePage.html" class="active">VINTAGE</a>
  </div>
  <!-- Left-aligned links (default) -->
  <a href="/HTML/VintageHomePage.html" class="pocitions">Home</a>
  <a href="#contact" class="pocitions">Blog</a>
  <a href="/HTML/Shoppage.html" class="pocitions">Shop</a>
  <a href="#news" class="pocitions">Contact</a>

  <!-- Right-aligned links -->
  <div class="topnav-right">
      <a href="#search"><i class="fa-solid fa-magnifying-glass"></i></a>
      <a href="/HTML/loginpage.html"><i class="fa-regular fa-user"></i></a>
      <a href="#about" <div class="container">
          <div class="icon-badge-container">
              <i class="fa-sharp fa-solid fa-cart-shopping"></i>
              <div class="icon-text">25</div>
          </div>
  </div>
  </a>
</div>
</div>
    `;
};

createNav();
