document.querySelectorAll(".year").forEach(el=>el.textContent=new Date().getFullYear());
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll("main section[id]")],links=[...document.querySelectorAll(".side-nav a")];
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id))}})},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>navObserver.observe(section));
