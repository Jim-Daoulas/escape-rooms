document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', function () {
            const targetId = this.getAttribute('data-bs-target').substring(1);
            const targetContent = document.getElementById(targetId);

            tabContents.forEach(content => {
                content.classList.remove('fade-in');
            });

            setTimeout(() => {
                targetContent.classList.add('fade-in');
            }, 50);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Προσθήκη event listener σε όλα τα tabs
    const allTabs = document.querySelectorAll('[data-bs-toggle="tab"]');
    
    allTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Κρύψιμο της αρχικής προβολής
        document.getElementById('welcome-view').style.display = 'none';
        
        // Κλείσιμο του navbar collapse σε μικρές οθόνες
        if (window.innerWidth < 768) {
          const navbarCollapse = document.getElementById('navbarNav');
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
    
    // Προσθήκη event listener στα dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        // Κρύψιμο της αρχικής προβολής
        document.getElementById('welcome-view').style.display = 'none';
        
        // Κλείσιμο του navbar collapse σε μικρές οθόνες
        if (window.innerWidth < 768) {
          const navbarCollapse = document.getElementById('navbarNav');
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  });
