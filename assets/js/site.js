
(function(){
'use strict';
const catalog=window.HMZ_CATALOG||{products:[],license:{en:'',ar:''}};
const products=catalog.products||[];
const $=id=>document.getElementById(id);
const UI={
 en:{
  navProducts:'Products',navWhy:'Why HMZ-Bytes',navPrivacy:'Privacy',navStudio:'Studio',navFaq:'FAQ',navStore:'Visit Store ↗',
  heroEyebrow:'INDEPENDENT WINDOWS SOFTWARE',heroTitle:'Your work.<br><span class="gradient-text">Your tools.</span><br>Your control.',heroText:'Practical desktop software that brings useful tools together, respects your workflow, and keeps control in your hands.',heroExplore:'Explore the apps ↓',heroWatch:'Watch the brand film',heroPoint1:'Windows desktop apps',heroPoint2:'Arabic + English',heroPoint3:'Local-first workflows',heroArtFoot:'Designed for focus. Built for control.',heroFloat1:'Less switching.',heroFloat2:'More getting done.',heroFloat3:'Tools that respect your workflow.',
  trust1:'Purpose-built Windows tools',trust2:'Arabic and English interfaces',trust3:'Practical, focused workflows',trust4:'Local processing where supported',
  productsEyebrow:'THE SOFTWARE COLLECTION',productsTitle:'A focused tool for<br><span class="gradient-text">every kind of work.</span>',productsText:'Explore the current HMZ-Bytes lineup. Every app has a clear purpose, a real product page and a direct path to purchase.',liveLabel:'apps available now',upcomingLabel:'in development',catalogNote:'Prices and availability reflect the current Gumroad listings.',filterAll:'All apps',filterAvailable:'Available now',filterProductivity:'Productivity',filterCreative:'Creative',filterSoon:'Coming soon',catalogHint:'Choose an app to explore its features.',available:'AVAILABLE NOW',coming:'COMING SOON',details:'Explore features',buy:'View on Gumroad ↗',minimum:'Minimum',suggested:'Suggested',payWhat:'Pay what you want',pwywNote:'All published products use Gumroad Pay What You Want pricing. The minimum price is shown first; the suggested amount is optional.',
  whyEyebrow:'THE HMZ-BYTES APPROACH',whyTitle:'Useful power.<br><span class="gradient-text">Without the clutter.</span>',whyText:'The goal is not to add buttons for the sake of it. It is to bring the right capabilities into a workspace that feels clear and dependable.',principle1Title:'One workspace, connected tools.',principle1Text:'Handle related steps in one application instead of jumping between websites and unrelated utilities.',principle2Title:'Designed for real workflows.',principle2Text:'Practical controls, helpful previews, shortcuts and guidance make everyday tasks easier to follow.',principle3Title:'A workspace that feels familiar.',principle3Text:'Arabic and English interfaces, RTL and LTR layouts, and comfortable appearance options across the collection.',
  privacyEyebrow:'LOCAL-FIRST BY DESIGN',privacyTitle:'Your files are<br><span class="gradient-text">your business.</span>',privacyText:'For products that process documents, images and project data locally, the work happens on your Windows device rather than an online editing service.',privacyPoint1:'No need to upload supported working files to third-party editing websites.',privacyPoint2:'Your files remain on your device during local processing.',privacyPoint3:'Internet may still be used for license verification, updates, catalogs or downloading required AI models.',privacyBadge:'LOCAL-FIRST WORKFLOW',privacyBadgeSub:'Control stays with you.',
  studioEyebrow:'MEET THE STUDIO',studioTitle:'See the thinking<br><span class="gradient-text">behind the tools.</span>',studioText:'A closer look at HMZ-Bytes and the idea behind its growing collection of desktop software.',videoUnsupported:'Your browser does not support this video.',videoMissing:'The brand video is not available yet. Upload the MP4 to assets/videos/hmzbytes-intro.mp4.',
  licenseEyebrow:'PURCHASE WITH CLARITY',licenseTitle:'Straightforward pricing.<br><span class="gradient-text">Clear licensing.</span>',licenseText:'Published Gumroad products let you choose what to pay above the listed minimum. Each product page explains its own features and requirements.',licenseCardTitle:'Pay what you want',licenseCardSub:'Minimum price + optional suggested amount',licenseDevices:'Gumroad activation',licenseDevicesValue:'Up to 2 devices',licenseCheck:'Online verification',licenseCheckValue:'Every 7 days',licenseDirect:'Direct HMZ-Bytes serials',licenseDirectValue:'14-day verification',licenseFoot:'License terms can vary by purchase route. Review the product page and receipt for the terms attached to your purchase.',
  faqEyebrow:'GOOD TO KNOW',faqTitle:'A few useful<br><span class="gradient-text">answers.</span>',faqText:'Before choosing an app, here are a few details about availability, licensing and local processing.',
  ctaEyebrow:'FIND YOUR NEXT TOOL',ctaTitle:'Make your next task<br><span class="gradient-text">feel simpler.</span>',ctaText:'Explore the current HMZ-Bytes collection and find a desktop app that fits the way you work.',ctaButton:'Explore the official store ↗',
  footerBio:'Independent Windows software, thoughtfully made by Hamza Mansour.',footerExplore:'Explore',footerHelp:'Help & information',footerSupport:'Store & support',footerStore:'Official store',footerPayment:'Purchases and license delivery are handled through Gumroad.',rights:'All rights reserved.',footerMade:'Built with care. Made for useful work.',
  faq:[
   ['Where can I buy an app?','Use the “View on Gumroad” button on any available product. Payment, downloads and Gumroad license delivery are handled on Gumroad.'],
   ['What does “Pay what you want” mean?','Each published listing has a minimum price. Gumroad lets you pay that amount or choose a higher amount; the suggested amount is optional.'],
   ['Are all the apps available now?','All six current HMZ-Bytes products are published and available on Gumroad. Availability and prices are reflected in the product catalog on this site.'],
   ['Do the apps work offline?','File processing and core workflows are local where stated. Internet may be required for license verification, updates, app catalogs or downloading AI models on first use.'],
   ['How does Gumroad activation work?','The current Gumroad product listings specify up to two devices and online verification every seven days. Direct licenses issued by HMZ-Bytes use a 14-day verification interval.'],
   ['Does OmniCalc POS process card or wallet payments?','No. The POS workspace stores products, invoices and payment records locally; it is not a payment gateway.'],
   ['Does PDF Toolkit Pro include OCR?','The current product description lists selectable-text extraction, not OCR for scanned image-only documents.']
  ],
  featureTitle:'What it can do',audienceTitle:'A good fit for',notesTitle:'Important details & limitations',viewBuy:'View product on Gumroad ↗',upcomingCta:'Coming soon',galleryAlt:'Product image',noImage:'Image preview',storeOther:'Visit the HMZ-Bytes store ↗',productAvailable:'Available now',productSoon:'Coming soon'
 },
 ar:{
  navProducts:'البرامج',navWhy:'لماذا HMZ-Bytes',navPrivacy:'الخصوصية',navStudio:'الاستوديو',navFaq:'الأسئلة',navStore:'زيارة المتجر ↗',
  heroEyebrow:'برمجيات مستقلة لنظام Windows',heroTitle:'عملك.<br><span class="gradient-text">أدواتك.</span><br>تحكّمك.',heroText:'تطبيقات مكتبية عملية تجمع الأدوات المفيدة، وتحترم طريقة عملك، وتُبقي التحكم بين يديك.',heroExplore:'استكشف التطبيقات ↓',heroWatch:'شاهد فيلم البراند',heroPoint1:'تطبيقات Windows مكتبية',heroPoint2:'العربية والإنجليزية',heroPoint3:'سير عمل يعتمد على المعالجة المحلية',heroArtFoot:'مصممة للتركيز. صُنعت لتمنحك التحكم.',heroFloat1:'تنقّل أقل.',heroFloat2:'إنجاز أكثر.',heroFloat3:'أدوات تحترم طريقة عملك.',
  trust1:'أدوات Windows لمهام محددة',trust2:'واجهات عربية وإنجليزية',trust3:'سير عمل عملي ومركّز',trust4:'معالجة محلية حيثما كانت مدعومة',
  productsEyebrow:'مجموعة التطبيقات',productsTitle:'أداة متخصصة<br><span class="gradient-text">لكل نوع من العمل.</span>',productsText:'اكتشف مجموعة HMZ-Bytes الحالية. لكل تطبيق وظيفة واضحة وصفحة منتج حقيقية وطريق مباشر للشراء.',liveLabel:'تطبيقات متاحة الآن',upcomingLabel:'قيد التجهيز',catalogNote:'الأسعار وحالة التوافر مطابقة لقوائم Gumroad الحالية.',filterAll:'كل التطبيقات',filterAvailable:'متاح الآن',filterProductivity:'الإنتاجية',filterCreative:'أدوات إبداعية',filterSoon:'قريباً',catalogHint:'اختر تطبيقاً لاكتشاف مميزاته.',available:'متاح الآن',coming:'قريباً',details:'اكتشف المميزات',buy:'عرض على Gumroad ↗',minimum:'الحد الأدنى',suggested:'السعر المقترح',payWhat:'ادفع السعر الذي تختاره',pwywNote:'جميع المنتجات المنشورة تعمل بنظام ادفع ما تريد على Gumroad. يظهر الحد الأدنى أولاً، أما السعر المقترح فهو اختياري.',
  whyEyebrow:'فلسفة HMZ-BYTES',whyTitle:'قوة مفيدة.<br><span class="gradient-text">دون فوضى.</span>',whyText:'الهدف ليس إضافة أزرار لمجرد زيادة عدد المميزات، بل جمع الإمكانيات المناسبة في مساحة عمل واضحة ويمكن الاعتماد عليها.',principle1Title:'مساحة واحدة وأدوات مترابطة.',principle1Text:'أنجز الخطوات المرتبطة داخل تطبيق واحد بدلاً من التنقل بين المواقع والأدوات المتفرقة.',principle2Title:'مصممة لسير العمل الحقيقي.',principle2Text:'عناصر تحكم عملية ومعاينات مفيدة واختصارات وإرشادات تجعل المهام اليومية أسهل.',principle3Title:'بيئة مألوفة ومريحة.',principle3Text:'واجهات عربية وإنجليزية واتجاه RTL وLTR وخيارات مظهر مريحة عبر مجموعة التطبيقات.',
  privacyEyebrow:'الخصوصية جزء من التصميم',privacyTitle:'ملفاتك<br><span class="gradient-text">شأنك وحدك.</span>',privacyText:'في التطبيقات التي تعالج المستندات والصور وبيانات المشاريع محلياً، تتم المعالجة على جهاز Windows الخاص بك بدلاً من إرسال الملفات إلى خدمة تحرير عبر الإنترنت.',privacyPoint1:'لا تحتاج إلى رفع ملفات العمل المدعومة إلى مواقع تحرير خارجية.',privacyPoint2:'تظل ملفاتك على جهازك أثناء المعالجة المحلية.',privacyPoint3:'قد يُستخدم الإنترنت للتحقق من الترخيص والتحديثات ودليل التطبيقات أو تنزيل نماذج الذكاء الاصطناعي المطلوبة.',privacyBadge:'سير عمل محلي أولاً',privacyBadgeSub:'التحكم يظل بيدك.',
  studioEyebrow:'تعرّف على الاستوديو',studioTitle:'اكتشف الفكرة<br><span class="gradient-text">وراء الأدوات.</span>',studioText:'نظرة أقرب على HMZ-Bytes والفكرة وراء مجموعة تطبيقاته المكتبية المتنامية.',videoUnsupported:'متصفحك لا يدعم تشغيل هذا الفيديو.',videoMissing:'الفيديو التعريفي غير متاح حالياً. ارفع ملف MP4 إلى assets/videos/hmzbytes-intro.mp4.',
  licenseEyebrow:'شراء واضح وشروط مفهومة',licenseTitle:'تسعير مرن.<br><span class="gradient-text">وترخيص واضح.</span>',licenseText:'تتيح منتجات Gumroad المنشورة اختيار المبلغ الذي تريد دفعه بشرط ألا يقل عن الحد الأدنى. وتوضح صفحة كل منتج مميزاته ومتطلباته.',licenseCardTitle:'ادفع السعر الذي تختاره',licenseCardSub:'حد أدنى + مبلغ مقترح اختياري',licenseDevices:'تفعيل Gumroad',licenseDevicesValue:'حتى جهازين',licenseCheck:'التحقق عبر الإنترنت',licenseCheckValue:'كل 7 أيام',licenseDirect:'التراخيص المباشرة من HMZ-Bytes',licenseDirectValue:'تحقق كل 14 يوماً',licenseFoot:'قد تختلف الشروط حسب طريقة الشراء. راجع صفحة المنتج والإيصال لمعرفة الشروط المرتبطة بعملية الشراء.',
  faqEyebrow:'معلومات تهمك',faqTitle:'إجابات<br><span class="gradient-text">مفيدة وسريعة.</span>',faqText:'قبل اختيار التطبيق، إليك تفاصيل مهمة حول التوافر والترخيص والمعالجة المحلية.',
  ctaEyebrow:'اعثر على أداتك القادمة',ctaTitle:'اجعل مهمتك القادمة<br><span class="gradient-text">أكثر سهولة.</span>',ctaText:'اكتشف مجموعة HMZ-Bytes الحالية واختر التطبيق المكتبي المناسب لطريقة عملك.',ctaButton:'اكتشف المتجر الرسمي ↗',
  footerBio:'برمجيات مستقلة لنظام Windows، من تطوير حمزة منصور بعناية.',footerExplore:'استكشف',footerHelp:'المساعدة والمعلومات',footerSupport:'المتجر والدعم',footerStore:'المتجر الرسمي',footerPayment:'تتم عمليات الشراء وتسليم التراخيص عبر Gumroad.',rights:'جميع الحقوق محفوظة.',footerMade:'صُنع بعناية. لإنجاز أعمال مفيدة.',
  faq:[
   ['أين أستطيع شراء التطبيق؟','استخدم زر «عرض على Gumroad» في أي منتج متاح. تتم المدفوعات والتنزيلات وتسليم تراخيص Gumroad عبر Gumroad.'],
   ['ماذا يعني «ادفع السعر الذي تختاره»؟','لكل منتج منشور حد أدنى للسعر. يمكنك دفع هذا المبلغ أو اختيار مبلغ أعلى؛ السعر المقترح اختياري.'],
   ['هل جميع التطبيقات متاحة الآن؟','التطبيقات الستة الحالية من HMZ-Bytes منشورة ومتاحة على Gumroad. يعرض الموقع حالة التوافر والأسعار وفق كتالوج المنتجات.'],
   ['هل تعمل التطبيقات دون إنترنت؟','تتم معالجة الملفات وسير العمل الأساسي محلياً حيثما ذُكر ذلك. وقد يلزم الإنترنت للتحقق من الترخيص والتحديثات ودليل التطبيقات أو تنزيل نماذج الذكاء الاصطناعي عند الاستخدام الأول.'],
   ['كيف يعمل تفعيل Gumroad؟','توضح قوائم Gumroad الحالية أن الترخيص يدعم حتى جهازين ويتطلب التحقق عبر الإنترنت كل سبعة أيام. أما التراخيص المباشرة من HMZ-Bytes فيتم التحقق منها كل 14 يوماً.'],
   ['هل تعالج نقطة البيع في OmniCalc مدفوعات البطاقات أو المحافظ؟','لا. مساحة نقطة البيع تحفظ المنتجات والفواتير وسجلات الدفع محلياً، لكنها ليست بوابة دفع.'],
   ['هل يتضمن PDF Toolkit Pro ميزة OCR؟','الوصف الحالي يذكر استخراج النص القابل للتحديد، ولا يذكر OCR للمستندات الممسوحة كصور فقط.']
  ],
  featureTitle:'ماذا يستطيع أن يفعل؟',audienceTitle:'مناسب لـ',notesTitle:'تفاصيل مهمة وحدود الاستخدام',viewBuy:'عرض المنتج على Gumroad ↗',upcomingCta:'قريباً',galleryAlt:'صورة المنتج',noImage:'معاينة الصورة',storeOther:'زيارة متجر HMZ-Bytes ↗',productAvailable:'متاح الآن',productSoon:'قريباً'
 }
};
let lang='en',activeFilter='all',lastFocus=null,theme='dark';
try{lang=localStorage.getItem('hmz-site-language')||((navigator.language||'').toLowerCase().startsWith('ar')?'ar':'en')}catch(e){}
try{theme=localStorage.getItem('hmz-site-theme')||'dark'}catch(e){}
document.documentElement.dataset.theme=theme;
const t=key=>UI[lang][key]??key;
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const money=cents=>'$'+(Number(cents||0)/100).toFixed(2);
function priceMarkup(p){
 if(!p.price)return '';
 return '<div class="price-box"><div class="price-main"><strong>'+t('minimum')+' '+money(p.price.minimum)+'</strong><span>'+t('payWhat')+'</span></div><div class="price-sub">'+t('suggested')+': '+money(p.price.suggested)+' · '+(lang==='ar'?'اختياري':'optional')+'</div></div>';
}
function coverMarkup(p,cls){
 const src=(p.cover&&p.cover[0])||'';
 const coverClass=src?'has-cover':'no-cover';
 return '<div class="'+cls+' '+coverClass+'">'+
  (src?'<img class="cover-image" src="'+escapeHtml(src)+'" alt="'+escapeHtml(p.name)+'" loading="lazy" decoding="async" onerror="this.remove()">':'')+
  '<span class="product-status '+(p.status==='soon'?'soon':'')+'">'+(p.status==='live'?t('available'):t('coming'))+'</span>'+
  (p.icon?'<img class="product-cover-icon" src="'+escapeHtml(p.icon)+'" alt="" loading="lazy" decoding="async" onerror="this.remove()">':'')+
 '</div>';
}
function renderCard(p){
 const isLive=p.status==='live';
 const hi=(p.highlights?.[lang]||[]).map(x=>'<span>'+escapeHtml(x)+'</span>').join('');
 return '<article class="product-card reveal">'+coverMarkup(p,'product-cover')+
  '<div class="product-body"><div class="product-meta"><span>'+escapeHtml(p.categoryLabel?.[lang]||'')+'</span><span>'+(isLive?t('productAvailable'):t('productSoon'))+'</span></div>'+
  '<h3>'+escapeHtml(p.name)+(p.version?'<span class="product-version">'+escapeHtml(p.version)+'</span>':'')+'</h3>'+
  '<p class="product-tagline">'+escapeHtml(p.tagline?.[lang]||'')+'</p>'+
  '<p class="product-summary">'+escapeHtml(p.summary?.[lang]||'')+'</p>'+
  '<div class="product-highlights">'+hi+'</div>'+priceMarkup(p)+
  '<div class="product-actions"><button class="button button-outline" type="button" data-open-product="'+escapeHtml(p.id)+'">'+t('details')+'</button>'+
  (isLive?'<a class="button button-primary" href="'+escapeHtml(p.url)+'" target="_blank" rel="noopener">'+t('buy')+'</a>':'<span class="button button-outline button-disabled">'+t('upcomingCta')+'</span>')+
  '</div></div></article>';
}
function filteredProducts(){
 return products.filter(p=>{
  if(activeFilter==='all')return true;
  if(activeFilter==='live'||activeFilter==='soon')return p.status===activeFilter;
  return p.category===activeFilter;
 });
}
function renderProducts(){
 const live=products.filter(p=>p.status==='live').length;
 const upcoming=products.filter(p=>p.status!=='live').length;
 $('liveCount').textContent=live;$('upcomingCount').textContent=upcoming;
 const selected=filteredProducts();
 $('productGrid').innerHTML=selected.length?selected.map(renderCard).join(''):'<div class="empty-state">'+(lang==='ar'?'لا توجد تطبيقات في هذا التصنيف حالياً.':'No apps in this category yet.')+'</div>';
 observeReveals();
}
function renderFaq(){
 $('faqList').innerHTML=UI[lang].faq.map((item,i)=>'<details class="faq-item"><summary>'+escapeHtml(item[0])+'</summary><div class="faq-answer">'+escapeHtml(item[1])+'</div></details>').join('');
}
function setLanguage(next){
 lang=next;try{localStorage.setItem('hmz-site-language',lang)}catch(e){}
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.dir=lang==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.getAttribute('data-i18n');if(UI[lang][key]!==undefined)el.textContent=UI[lang][key]});
 document.querySelectorAll('[data-i18n-html]').forEach(el=>{const key=el.getAttribute('data-i18n-html');if(UI[lang][key]!==undefined)el.innerHTML=UI[lang][key]});
 $('languageToggle').textContent=lang==='ar'?'English':'العربية';
 renderProducts();renderFaq();updateThemeControl();
}
function updateThemeControl(){
 const btn=$('themeToggle');if(!btn)return;
 const switchingToLight=theme!=='light';
 btn.textContent=lang==='ar'?(switchingToLight?'☀ فاتح':'☾ داكن'):(switchingToLight?'☀ Light':'☾ Dark');
 const label=lang==='ar'?(switchingToLight?'تفعيل الوضع الفاتح':'تفعيل الوضع الداكن'):(switchingToLight?'Switch to light mode':'Switch to dark mode');
 btn.setAttribute('aria-label',label);btn.setAttribute('title',label);
}
function setTheme(next){
 theme=next==='light'?'light':'dark';
 document.documentElement.dataset.theme=theme;
 try{localStorage.setItem('hmz-site-theme',theme)}catch(e){}
 document.querySelectorAll('[data-theme-logo]').forEach(img=>{
  const source=img.getAttribute(theme==='light'?'data-light-src':'data-dark-src');
  if(source)img.src=source;
 });
 updateThemeControl();
}
function openProduct(id,updateHash){
 const p=products.find(x=>x.id===id);if(!p)return;
 lastFocus=document.activeElement;
 $('modalCategory').textContent=(p.categoryLabel?.[lang]||'')+' · '+(p.status==='live'?t('productAvailable'):t('productSoon'));
 $('modalTitle').textContent=p.name+(p.version?' '+p.version:'');
 const mainImage=(p.cover&&p.cover[0])?'<img class="modal-main-image" src="'+escapeHtml(p.cover[0])+'" alt="'+escapeHtml(p.name)+'" loading="eager">':'';
 const screenshotNames=['01-main.webp','02-workspace.webp','03-feature-1.webp','04-feature-2.webp','05-settings.webp'];
 const localScreens=(p.screenshotDir?screenshotNames.map(name=>p.screenshotDir+name):[]);
 const gallerySources=localScreens.concat((p.cover||[]).slice(1,4));
 const gallery=gallerySources.map((src,i)=>'<img src="'+escapeHtml(src)+'" alt="'+escapeHtml(p.name)+' '+(i+1)+'" loading="lazy" decoding="async" onerror="this.remove()">').join('');
 const groups=(p.groups||[]).map(g=>'<section class="feature-group"><h3>'+escapeHtml(g.title?.[lang]||'')+'</h3><ul>'+(g.items?.[lang]||[]).map(x=>'<li>'+escapeHtml(x)+'</li>').join('')+'</ul></section>').join('');
 const notes=(p.notes?.[lang]||[]).length?'<details class="modal-notes"><summary>'+t('notesTitle')+'</summary><ul>'+(p.notes[lang].map(x=>'<li>'+escapeHtml(x)+'</li>').join(''))+'</ul></details>':'';
 const buy=p.status==='live'?'<a class="button button-primary" href="'+escapeHtml(p.url)+'" target="_blank" rel="noopener">'+t('viewBuy')+'</a>':'<span class="button button-outline button-disabled">'+t('upcomingCta')+'</span>';
 $('modalContent').innerHTML=
  '<div class="modal-intro">'+mainImage+'<div><p class="modal-summary">'+escapeHtml(p.summary?.[lang]||'')+'</p>'+
  '<div class="modal-price">'+(p.status==='live'?(t('minimum')+' '+money(p.price.minimum)+' · '+t('suggested')+' '+money(p.price.suggested)):t('coming'))+'</div>'+
  '<p class="modal-audience">'+escapeHtml(p.platform||'Windows')+'</p></div></div>'+
  (gallery?'<div class="modal-gallery">'+gallery+'</div>':'')+
  '<h3 class="modal-section-title">'+t('featureTitle')+'</h3><div class="feature-groups">'+groups+'</div>'+
  (p.audience?.[lang]?'<div class="modal-audience"><b>'+t('audienceTitle')+':</b> '+escapeHtml(p.audience[lang])+'</div>':'')+
  notes+
  '<div class="modal-bottom">'+(p.status==='live'?'<div class="modal-audience">'+t('payWhat')+' · '+t('minimum')+' '+money(p.price.minimum)+' · '+t('suggested')+' '+money(p.price.suggested)+'</div>':'<div class="modal-audience">'+t('upcomingCta')+'</div>')+buy+'</div>';
 $('productModal').classList.add('open');$('productModal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('modalClose').focus();
 if(updateHash!==false)history.replaceState(null,'','#app/'+p.id);
}
function closeProduct(){
 $('productModal').classList.remove('open');$('productModal').setAttribute('aria-hidden','true');document.body.style.overflow='';
 if(location.hash.startsWith('#app/'))history.replaceState(null,'',location.pathname+location.search);
 if(lastFocus&&lastFocus.focus)lastFocus.focus();
}
function applyTranslations(){
 document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.getAttribute('data-i18n');if(UI[lang][key]!==undefined)el.textContent=UI[lang][key]});
 document.querySelectorAll('[data-i18n-html]').forEach(el=>{const key=el.getAttribute('data-i18n-html');if(UI[lang][key]!==undefined)el.innerHTML=UI[lang][key]});
}
let observer;
function observeReveals(){
 if(!('IntersectionObserver'in window)){document.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'));return}
 if(observer)observer.disconnect();
 observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.1});
 document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el));
}
$('productFilters').addEventListener('click',e=>{
 const btn=e.target.closest('[data-filter]');if(!btn)return;activeFilter=btn.dataset.filter;
 document.querySelectorAll('.filter-chip').forEach(x=>x.classList.toggle('active',x===btn));renderProducts();
});
$('productGrid').addEventListener('click',e=>{const btn=e.target.closest('[data-open-product]');if(btn)openProduct(btn.dataset.openProduct)});
$('languageToggle').addEventListener('click',()=>setLanguage(lang==='en'?'ar':'en'));
$('themeToggle').addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
$('menuToggle').addEventListener('click',()=>{const open=$('siteNav').classList.toggle('open');$('menuToggle').setAttribute('aria-expanded',String(open))});
$('siteNav').addEventListener('click',e=>{if(e.target.closest('a')){$('siteNav').classList.remove('open');$('menuToggle').setAttribute('aria-expanded','false')}});
$('modalClose').addEventListener('click',closeProduct);
$('productModal').addEventListener('click',e=>{if(e.target.matches('[data-close-modal]'))closeProduct()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('productModal').classList.contains('open'))closeProduct()});
$('year').textContent=new Date().getFullYear();
document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.dir=lang==='ar'?'rtl':'ltr';
applyTranslations();$('languageToggle').textContent=lang==='ar'?'English':'العربية';setTheme(theme);renderProducts();renderFaq();observeReveals();
if(location.hash.startsWith('#app/'))openProduct(location.hash.slice(5),false);
const brandVideo=$('brandVideo');if(brandVideo)brandVideo.addEventListener('error',()=>{$('videoUnavailable').hidden=false});
})();
