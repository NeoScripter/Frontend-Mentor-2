document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.querySelector('.share-btn');
    const socialLinks = document.querySelector('.social-links');
    const svgPath = document.querySelector('.svg-icon path');
    let timeoutId;

    function showSocialLinks() {
        clearTimeout(timeoutId); 
        socialLinks.style.display = 'flex';
        svgPath.style.fill = 'white';
        shareBtn.style.backgroundColor = 'hsl(217, 19%, 55%)';
    }

    function hideSocialLinks() {
        timeoutId = setTimeout(function() {
            socialLinks.style.display = 'none';
            shareBtn.style.backgroundColor = 'hsla(212, 23%, 69%, 0.2)';
            svgPath.style.fill = '';
        }, 500);
    }

    shareBtn.addEventListener('mouseover', showSocialLinks);
    shareBtn.addEventListener('mouseout', hideSocialLinks);
    socialLinks.addEventListener('mouseover', showSocialLinks);
    socialLinks.addEventListener('mouseout', hideSocialLinks);
});
