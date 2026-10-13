/* Agro Exports PK starter configuration.
   Before publishing, replace the placeholder email and WhatsApp number below. */
const SITE_CONFIG = {
  email: 'YOUR-EMAIL@example.com',
  whatsappNumber: '923000000000' // international digits only; Pakistan example format, replace with your real number
};
const basket = new Set();
const countEl = document.getElementById('basketCount');
const toast = document.getElementById('toast');
const dialog = document.getElementById('quoteDialog');
const quoteProducts = document.getElementById('quoteProducts');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
function updateBasket(){countEl.textContent=basket.size;quoteProducts.value=[...basket].join(', ')}
function openQuote(){if(!dialog.open)dialog.showModal();updateBasket()}
document.querySelectorAll('[data-open-quote]').forEach(button=>button.addEventListener('click',openQuote));
document.querySelectorAll('[data-add]').forEach(button=>button.addEventListener('click',()=>{const product=button.dataset.add;if(basket.has(product)){basket.delete(product);button.textContent='+';showToast(product+' removed from your enquiry list')}else{basket.add(product);button.textContent='✓';showToast(product+' added to your enquiry list')}updateBasket()}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===button));const filter=button.dataset.filter;document.querySelectorAll('.product-card').forEach(card=>card.hidden=filter!=='all'&&card.dataset.category!==filter)}));
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
function getEnquiryData(){const data=Object.fromEntries(new FormData(document.getElementById('quoteForm')).entries());if(!data.products)data.products=[...basket].join(', ');return data}
function buildMessage(d){return `Agro Exports PK — Buyer Enquiry\n\nName / company: ${d.buyer||''}\nBusiness email: ${d.email||''}\nDestination country: ${d.country||''}\nProducts: ${d.products||'Not specified'}\nEstimated quantity: ${d.quantity||'Not specified'}\nPackaging / grade: ${d.specs||'Not specified'}\nAdditional details: ${d.message||'None provided'}\n\nPlease share availability, specifications and a quotation.`}
document.getElementById('quoteForm').addEventListener('submit',event=>{event.preventDefault();const d=getEnquiryData();const subject=encodeURIComponent('Export quotation enquiry — '+(d.products||'Agro Exports PK'));const body=encodeURIComponent(buildMessage(d));if(SITE_CONFIG.email.includes('YOUR-EMAIL')){showToast('Before publishing, add your business email in script.js.');return}window.location.href=`mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`});
document.getElementById('whatsappQuote').addEventListener('click',()=>{const form=document.getElementById('quoteForm');if(!form.reportValidity())return;if(SITE_CONFIG.whatsappNumber==='923000000000'){showToast('Replace the sample WhatsApp number in script.js before using this link.');return}window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(buildMessage(getEnquiryData()))}`,'_blank','noopener')});
// Prevent placeholder contact links from being mistaken for real company contacts.
document.querySelectorAll('a[href^="mailto:"]').forEach(a=>a.addEventListener('click',event=>{if(SITE_CONFIG.email.includes('YOUR-EMAIL')){event.preventDefault();showToast('Add your business email in script.js before publishing.')}}));
