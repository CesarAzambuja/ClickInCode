const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuBtn.querySelector('svg');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('open');
  });

  // ...existing code...

document.getElementById('theme-toggle').addEventListener('click', function() {
    // Alterna a classe 'light-theme' no elemento body
    document.body.classList.toggle('light-theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if(document.body.classList.contains('light-theme')) {
        // Atualiza o ícone para sol e troca as classes para o tema claro
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-11.66l-.7.7m-13.2 0l-.7-.7M21 12h-1M4 12H3m16.66 4.66l-.7-.7m-13.2 0l-.7.7M12 5a7 7 0 100 14 7 7 0 000-14z" />';
        document.body.classList.remove('bg-gray-900', 'text-white');
        document.body.classList.add('bg-gray-100', 'text-gray-800');
    } else {
        // Atualiza o ícone para lua e retorna para o tema dark
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />';
        document.body.classList.remove('bg-gray-100', 'text-gray-800');
        document.body.classList.add('bg-gray-900', 'text-white');
    }
});

// ...existing code...