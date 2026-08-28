/**
 * Morango Cravejado de Vitrine — Scripts Interativos (app.js)
 * Zero dependências externas • JS Moderno & Acessível
 */

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initPromoDate();
  initUpsellModal();
  initFaqAccordion();
  initImageFallbackGuard();
  initSmoothScroll();
});

/**
 * 1. Atualização dinâmica do ano no rodapé
 */
function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * 2. FAQ Accordion Acessível com transição suave
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros accordions (efeito sanfona exclusivo)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) {
            otherBtn.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // Alterna o item atual
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * 3b. Popup de upsell: quem escolhe o plano basico (R$ 17,00) recebe o
 * plano completo (R$ 27,00) por R$ 21,90 antes de seguir para o checkout.
 */
function initUpsellModal() {
  const overlay = document.getElementById('upsell');
  if (!overlay) return;

  let lastFocused = null;

  const open = () => {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    const accept = overlay.querySelector('.cta-button');
    if (accept) accept.focus();
  };

  const close = () => {
    overlay.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  document.querySelectorAll('[data-open-upsell]').forEach(btn => {
    btn.addEventListener('click', open);
  });

  overlay.querySelectorAll('[data-close-upsell]').forEach(btn => {
    btn.addEventListener('click', close);
  });

  // Clique fora do card fecha o popup
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) close();
  });
}

/**
 * 3c. Data de hoje na barra promocional (nunca fica desatualizada)
 */
function initPromoDate() {
  const el = document.getElementById('promo-date');
  if (el) {
    el.textContent = new Date().toLocaleDateString('pt-BR');
  }
}

/**
 * 4. Proteção de Fallback Visual para Imagens Não Encontradas
 * Garante que nenhuma imagem exiba o ícone de imagem quebrada do navegador.
 */
function initImageFallbackGuard() {
  const images = document.querySelectorAll('.img-slot-container img');

  images.forEach(img => {
    // Se a imagem já concluiu o carregamento mas falhou (naturalWidth === 0)
    if (img.complete && img.naturalWidth === 0) {
      img.parentElement.classList.add('is-fallback');
    }

    img.addEventListener('error', () => {
      img.parentElement.classList.add('is-fallback');
    });
  });
}

/**
 * 5. Rolagem Suave para Âncoras Internas
 */
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
