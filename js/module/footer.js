export function Footer() {
  const footer = document.querySelector("footer");
  footer.classList.add("inner-pd", "d-flex", "flex-column", "align-items-center", "g-1");
  footer.innerHTML = `
  <p>&copy; 2014. All rights reserved. 
  Questions?</p>
  <p>Email us at <a href="#" class="text-link">office@product.com</a></p>`;
}
