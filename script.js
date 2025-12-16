// Dropdown toggle functionality
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdown = this.parentElement;
    dropdown.classList.toggle('active');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown').forEach(dd => {
      dd.classList.remove('active');
    });
  }
});

// Specific card click redirect (Stranger Things card)
const strangerThingsCard = document.getElementById("strangerThingsCard");
if (strangerThingsCard) {
  strangerThingsCard.addEventListener("click", function() {
    window.location.href = "https://hdhub4u.rehab/?utm=gs";
  });
}
