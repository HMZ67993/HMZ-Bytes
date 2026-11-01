# HMZ-Bytes Website — Asset Upload Guide

ضع الصور والفيديو في المسارات المحددة أدناه **بالأسماء نفسها تماماً**. بعد رفعها، ستتمكن صفحة الموقع من تحميلها مباشرة من مجلدات المستودع.

## 1) Brand identity

داخل `assets/brand/`:

| اسم الملف | الاستخدام | المقاس المقترح |
|---|---|---|
| `hmz-bytes-logo.png` | اللوجو الأساسي بخلفية شفافة | PNG شفاف، ارتفاع 512px أو أكثر |
| `hmz-bytes-logo-white.png` | نسخة بيضاء للاستخدام فوق الخلفيات الداكنة (اختياري) | PNG شفاف |
| `hmz-bytes-hero.webp` | صورة البراند الرئيسية في الواجهة الافتتاحية | 1920×1080 أو 1600×900 |

## 2) Application icons

ارفع الأيقونات داخل `assets/icons/` بهذه الأسماء:

- `pdf-toolkit-pro.png`
- `omni-calc-studio.png`
- `screencast-pro.png`
- `image-toolkit-pro.png`
- `smart-file-hub.png`
- `video-studio.png`

المفضل PNG مربع 512×512 أو 1024×1024. اترك الخلفية الأصلية للأيقونة كما هي إن كانت جزءاً من التصميم.

## 3) App screenshots

ضع لقطات كل تطبيق في المجلد الخاص به. استخدم أسماء متسلسلة وواضحة:

| التطبيق | المجلد |
|---|---|
| PDF Toolkit Pro | `assets/screenshots/pdf-toolkit-pro/` |
| OmniCalc Studio | `assets/screenshots/omni-calc-studio/` |
| ScreenCast Pro | `assets/screenshots/screencast-pro/` |
| Image Toolkit Pro | `assets/screenshots/image-toolkit-pro/` |
| Smart File Hub | `assets/screenshots/smart-file-hub/` |
| Video Studio | `assets/screenshots/video-studio/` |

أسماء الصور المقترحة داخل كل مجلد:
- `01-main.webp` — الشاشة الرئيسية للتطبيق.
- `02-workspace.webp` — مساحة العمل أو الشاشة الأساسية.
- `03-feature-1.webp` — أهم ميزة.
- `04-feature-2.webp` — ميزة إضافية.
- `05-settings.webp` — الإعدادات أو التخصيص (اختياري).

يفضل أن تكون اللقطات بدقة 1600×900 أو قريبة منها، ومن دون قص أجزاء مهمة من واجهة التطبيق.

## 4) Brand video — upload the actual video file

ارفع الفيديو التعريفي مباشرة داخل:

`assets/videos/hmzbytes-intro.mp4`

ولصورة المعاينة قبل تشغيل الفيديو (اختياري):

`assets/videos/hmzbytes-intro-poster.webp`

**لن نستخدم YouTube embed.** سيعرض الموقع ملف MP4 نفسه باستخدام مشغل HTML5 مدمج في المتصفح، مع أزرار التشغيل والصوت وملء الشاشة. لن يبدأ الفيديو تلقائياً؛ سيختار الزائر تشغيله.

مواصفات موصى بها:
- MP4 بترميز H.264 للفيديو وAAC للصوت.
- أبعاد 1920×1080 أو 1280×720، بنسبة 16:9 إن أمكن.
- الأفضل أن يكون الحجم **25 MiB أو أقل** حتى تستطيع رفعه من واجهة GitHub في المتصفح بسهولة.
- رفع الملفات إلى المستودع من المتصفح محدود عادةً بـ **25 MiB للملف الواحد**. ومن سطر الأوامر يمكن رفع ملفات أكبر حتى حد GitHub البالغ **100 MiB**؛ الملفات الأكبر من ذلك تُرفض في Git العادي.
- لا تستخدم Git LFS لهذا الفيديو إذا كان الموقع منشوراً عبر GitHub Pages؛ GitHub Pages لا يدعم عرض ملفات Git LFS كأصول للموقع.

إذا كان الفيديو أكبر من 25 MiB، الأفضل ضغطه أولاً إلى MP4/H.264 مع صوت AAC. وإذا تعذّر الوصول إلى حجم مناسب، نختار استضافة فيديو مباشرة أخرى (ليست YouTube) ونربطها بمشغل الموقع.

## 5) How to upload

1. افتح المجلد المطلوب في GitHub.
2. اختر **Add file → Upload files**.
3. اسحب الملف أو اختره من جهازك.
4. اترك اسم الملف كما هو محدد أعلاه، ثم اضغط **Commit changes**.

يمكنك رفع مجموعة ملفات مرة واحدة، مع الحفاظ على بنية المجلدات.

## 6) Quick checklist

- [ ] `assets/brand/hmz-bytes-logo.png`
- [ ] `assets/brand/hmz-bytes-logo-white.png` (اختياري)
- [ ] `assets/brand/hmz-bytes-hero.webp`
- [ ] أيقونات التطبيقات الستة داخل `assets/icons/`
- [ ] لقطات التطبيقات داخل مجلداتها في `assets/screenshots/`
- [ ] `assets/videos/hmzbytes-intro.mp4`
- [ ] `assets/videos/hmzbytes-intro-poster.webp` (اختياري)

بعد رفع الملفات، أستطيع ربط كل أصل بصري بمكانه في الصفحة وضبط عرضه على الشاشات الكبيرة والهواتف.
