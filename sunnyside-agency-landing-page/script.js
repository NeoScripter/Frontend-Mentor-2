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

  /* Displaying the collapsed navigation when the user hovers over the image */

  document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.querySelector('.selector');
    const arrow = document.querySelector('.arrow');
    const socialLinks = document.querySelector('.collapsed-nav');
    let timeoutId;

    function showSocialLinks() {
        clearTimeout(timeoutId); 
        socialLinks.style.display = 'block';
        arrow.style.display = 'none';
    }

    function hideSocialLinks() {
        timeoutId = setTimeout(function() {
            socialLinks.style.display = 'none';
            arrow.style.display = 'block';
        }, 500);
    }

    shareBtn.addEventListener('mouseover', showSocialLinks);
    shareBtn.addEventListener('mouseout', hideSocialLinks);
    socialLinks.addEventListener('mouseover', showSocialLinks);
    socialLinks.addEventListener('mouseout', hideSocialLinks);
});