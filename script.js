const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.section,.banner,.clip,.social-grid a').forEach(x=>observer.observe(x));
