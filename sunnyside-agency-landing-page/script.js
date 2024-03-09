/* Making share links on the bottom white when the cursor is above them */

document.querySelectorAll('.black').forEach(element => {
    element.addEventListener('mouseover', () => toggleRelatedDisplay(element, true));
    element.addEventListener('focus', () => toggleRelatedDisplay(element, true));
    
    element.addEventListener('mouseout', () => toggleRelatedDisplay(element, false));
    element.addEventListener('blur', () => toggleRelatedDisplay(element, false));
  });
  
  function toggleRelatedDisplay(element, showWhite) {
    const relatedWhite = element.nextElementSibling;
    if (showWhite) {
      element.style.display = 'none';
      if (relatedWhite && relatedWhite.classList.contains('white')) {
        relatedWhite.style.display = 'block';
      }
    } else {
      element.style.display = 'block';
      if (relatedWhite && relatedWhite.classList.contains('white')) {
        relatedWhite.style.display = 'none';
      }
    }
  }
  

/* Making layout sections appear smoothly one by one */

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('translated');
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
  
    document.querySelectorAll('.prehidden').forEach(div => {
      observer.observe(div);
    });
  });
