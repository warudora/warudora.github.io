(()=>{
 const toggle=document.getElementById("menu-toggle");
 const nav=document.getElementById("site-nav");
 if(toggle&&nav){
   toggle.addEventListener("click",()=>{
     const isOpen=toggle.getAttribute("aria-expanded")==="true";
     toggle.setAttribute("aria-expanded",String(!isOpen));
     nav.classList.toggle("open",!isOpen);
   });
   nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
     toggle.setAttribute("aria-expanded","false");nav.classList.remove("open");
   }));
 }
 const filters=[...document.querySelectorAll("[data-filter]")];
 const entries=[...document.querySelectorAll("[data-category]")];
 const counter=document.getElementById("project-count");
 filters.forEach(b=>b.addEventListener("click",()=>{
   const f=b.dataset.filter;
   filters.forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
   let shown=0;
   entries.forEach(el=>{const visible=f==="all"||el.dataset.category===f;el.hidden=!visible;if(visible)shown++;});
   if(counter)counter.textContent=shown+" PROJECTS";
 }));
 const year=document.getElementById("year");
 if(year)year.textContent=String(new Date().getFullYear());
})();