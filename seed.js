const fs = require('fs');
const path = require('path');

// Load user seeds from JSON file
function loadUserSeeds() {
  const userSeedsPath = path.join(__dirname, 'data', 'user_seeds.json');
  try {
    if (fs.existsSync(userSeedsPath)) {
      const data = fs.readFileSync(userSeedsPath, 'utf8');
      const userSeeds = JSON.parse(data);
      return Array.isArray(userSeeds) ? userSeeds : [];
    }
  } catch (err) {
    console.error('Error loading user_seeds.json:', err);
  }
  return [];
}

// Combine hardcoded seed data with user seeds
const userSeeds = loadUserSeeds();
const seedData = [
  {
    english: 'electricity',
    arabic: 'الكهرباء',
    icon: '⚡',
    definition_en: 'The flow of electric charge through a conductor.',
    definition_ar: 'تدفق الشحنة الكهربائية عبر موصل.'
  },
  {
    english: 'voltage',
    arabic: 'الجهد',
    icon: '🔋',
    definition_en: 'The electric potential difference between two points.',
    definition_ar: 'الفرق في الجهد الكهربائي بين نقطتين.'
  },
  {
    english: 'circuit',
    arabic: 'الدائرة',
    icon: '🔌',
    definition_en: 'A closed loop that allows electric current to flow.',
    definition_ar: 'حلقة مغلقة تسمح بتدفق التيار الكهربائي.'
  },
  {
    english: 'resistor',
    arabic: 'المقاوم',
    icon: '🔴',
    definition_en: 'A component that limits the flow of electric current.',
    definition_ar: 'مكون يحد من تدفق التيار الكهربائي.'
  },
  {
    english: 'capacitor',
    arabic: 'المكثف',
    icon: '⚪',
    definition_en: 'A device that stores electrical energy in an electric field.',
    definition_ar: 'جهاز يخزن الطاقة الكهربائية في مجال كهربائي.'
  },
  {
    english: 'transistor',
    arabic: 'الترانزستور',
    icon: '📡',
    definition_en: 'A semiconductor device used to amplify or switch electronic signals.',
    definition_ar: 'جهاز شبه موصل يستخدم لتضخيم أو تبديل الإشارات الإلكترونية.'
  },
  {
    english: 'diode',
    arabic: 'الديود',
    icon: '➡️',
    definition_en: 'A component that allows current to flow in one direction only.',
    definition_ar: 'مكون يسمح بتدفق التيار في اتجاه واحد فقط.'
  },
  {
    english: 'inductor',
    arabic: 'الملف',
    icon: '🌀',
    definition_en: 'A coil that stores energy in a magnetic field when current flows through it.',
    definition_ar: 'ملف يخزن الطاقة في مجال مغناطيسي عند تدفق التيار من خلاله.'
  },
  {
    english: 'transformer',
    arabic: 'المحول',
    icon: '🔄',
    definition_en: 'A device that transfers electrical energy between circuits through electromagnetic induction.',
    definition_ar: 'جهاز ينقل الطاقة الكهربائية بين الدوائر من خلال الحث الكهرومغناطيسي.'
  },
  {
    english: 'oscilloscope',
    arabic: 'الأوسيلوسكوب',
    icon: '📊',
    definition_en: 'An instrument used to observe the waveform of electrical signals.',
    definition_ar: 'أداة تستخدم لمراقبة شكل الموجة للإشارات الكهربائية.'
  },
  {
    english: 'algorithm',
    arabic: 'الخوارزمية',
    icon: '🔢',
    definition_en: 'A set of instructions to solve a problem or perform a task.',
    definition_ar: 'مجموعة من التعليمات لحل مشكلة أو تنفيذ مهمة.'
  },
  {
    english: 'binary',
    arabic: 'الثنائي',
    icon: '0️⃣1️⃣',
    definition_en: 'A number system that uses only 0 and 1.',
    definition_ar: 'نظام أرقام يستخدم 0 و1 فقط.'
  },
  {
    english: 'compiler',
    arabic: 'المترجم',
    icon: '⚙️',
    definition_en: 'A program that translates source code into machine code.',
    definition_ar: 'برنامج يترجم الكود المصدري إلى كود آلة.'
  },
  {
    english: 'database',
    arabic: 'قاعدة البيانات',
    icon: '💾',
    definition_en: 'An organized collection of structured information.',
    definition_ar: 'مجموعة منظمة من المعلومات المنظمة.'
  },
  {
    english: 'server',
    arabic: 'الخادم',
    icon: '🖥️',
    definition_en: 'A computer that provides data to other computers.',
    definition_ar: 'حاسوب يوفر بيانات للحواسيب الأخرى.'
  },
  {
    english: 'client',
    arabic: 'العميل',
    icon: '👤',
    definition_en: 'A device or software that requests services from a server.',
    definition_ar: 'جهاز أو برنامج يطلب خدمات من خادم.'
  },
  {
    english: 'api',
    arabic: 'واجهة برمجة التطبيقات',
    icon: '🔌',
    definition_en: 'A set of rules for building software applications.',
    definition_ar: 'مجموعة من القواعد لبناء تطبيقات البرمجيات.'
  },
  {
    english: 'endpoint',
    arabic: 'نقطة النهاية',
    icon: '📍',
    definition_en: 'A specific URL where an API can be accessed.',
    definition_ar: 'رابط محدد يمكن الوصول إليه عبر API.'
  },
  {
    english: 'query',
    arabic: 'الاستعلام',
    icon: '🔍',
    definition_en: 'A request for data from a database.',
    definition_ar: 'طلب للبيانات من قاعدة بيانات.'
  },
  {
    english: 'index',
    arabic: 'الفهرس',
    icon: '📋',
    definition_en: 'A data structure that improves the speed of data retrieval.',
    definition_ar: 'هيكل بيانات يحسن سرعة استرجاع البيانات.'
  },
  {
    english: 'normalization',
    arabic: 'التطبيع',
    icon: '📊',
    definition_en: 'The process of organizing data to reduce redundancy.',
    definition_ar: 'عملية تنظيم البيانات لتقليل التكرار.'
  },
  {
    english: 'join',
    arabic: 'الانضمام',
    icon: '🔗',
    definition_en: 'A method to combine rows from two or more tables.',
    definition_ar: 'طريقة لدمج الصفوف من جدولين أو أكثر.'
  },
  {
    english: 'encryption',
    arabic: 'التشفير',
    icon: '🔒',
    definition_en: 'The process of converting information into a code.',
    definition_ar: 'عملية تحويل المعلومات إلى كود.'
  },
  {
    english: 'neural network',
    arabic: 'الشبكة العصبية',
    icon: '🧠',
    definition_en: 'A computing system inspired by biological neural networks.',
    definition_ar: 'نظام حوسبة مستوحى من الشبكات العصبية البيولوجية.'
  },
  {
    english: 'machine learning',
    arabic: 'التعلم الآلي',
    icon: '🤖',
    definition_en: 'A subset of AI that enables computers to learn from data.',
    definition_ar: 'فرع من الذكاء الاصطناعي يمكن الحواسيب من التعلم من البيانات.'
  },
  {
    english: 'big data',
    arabic: 'البيانات الكبيرة',
    icon: '📈',
    definition_en: 'Large volumes of data that require special processing techniques.',
    definition_ar: 'حجوم كبيرة من البيانات تتطلب تقنيات معالجة خاصة.'
  },
  {
    english: 'cloud computing',
    arabic: 'الحوسبة السحابية',
    icon: '☁️',
    definition_en: 'Delivery of computing services over the internet.',
    definition_ar: 'تقديم خدمات الحوسبة عبر الإنترنت.'
  },
  {
    english: 'blockchain',
    arabic: 'سلسلة الكتل',
    icon: '⛓️',
    definition_en: 'A decentralized digital ledger.',
    definition_ar: 'سجل رقمي لامركزي.'
  },
  {
    english: 'cybersecurity',
    arabic: 'الأمن السيبراني',
    icon: '🛡️',
    definition_en: 'Protection of systems and data from digital attacks.',
    definition_ar: 'حماية الأنظمة والبيانات من الهجمات الرقمية.'
  },
  {
    english: 'internet of things',
    arabic: 'إنترنت الأشياء',
    icon: '🌐',
    definition_en: 'Network of physical devices embedded with sensors and software.',
    definition_ar: 'شبكة من الأجهزة الفيزيائية المضمنة بأجهزة استشعار وبرمجيات.'
  },
  {
    english: 'agile',
    arabic: 'المرن',
    icon: '🏃',
    definition_en: 'A methodology for software development that emphasizes iterative progress.',
    definition_ar: 'منهجية لتطوير البرمجيات تركز على التقدم التكراري.'
  },
  {
    english: 'devops',
    arabic: 'ديف أوبس',
    icon: '🔧',
    definition_en: 'A set of practices that combines software development and IT operations.',
    definition_ar: 'مجموعة من الممارسات تجمع بين تطوير البرمجيات وعمليات تكنولوجيا المعلومات.'
  },
  {
    english: 'gravity',
    arabic: 'الجاذبية',
    icon: '🪐',
    definition_en: 'The force that attracts objects towards each other.',
    definition_ar: 'القوة التي تجذب الأجسام نحو بعضها.'
  },
  {
    english: 'thermodynamics',
    arabic: 'الديناميكا الحرارية',
    icon: '🔥',
    definition_en: 'The branch of physics dealing with heat and temperature.',
    definition_ar: 'فرع الفيزياء الذي يتعامل مع الحرارة والدرجة الحرارية.'
  },
  {
    english: 'pressure',
    arabic: 'الضغط',
    icon: '💨',
    definition_en: 'Force per unit area.',
    definition_ar: 'القوة لكل وحدة مساحة.'
  },
  {
    english: 'density',
    arabic: 'الكثافة',
    icon: '📦',
    definition_en: 'Mass per unit volume.',
    definition_ar: 'الكتلة لكل وحدة حجم.'
  },
  {
    english: 'stress',
    arabic: 'الإجهاد',
    icon: '😰',
    definition_en: 'Internal force per unit area within a material.',
    definition_ar: 'القوة الداخلية لكل وحدة مساحة داخل المادة.'
  },
  {
    english: 'strain',
    arabic: 'الإجهاد',
    icon: '🧬',
    definition_en: 'Deformation of a material under stress.',
    definition_ar: 'تشوه المادة تحت الإجهاد.'
  },
  {
    english: 'modulus',
    arabic: 'المعامل',
    icon: '📊',
    definition_en: 'A measure of stiffness of a material.',
    definition_ar: 'مقياس لصلابة المادة.'
  },
  {
    english: 'yield',
    arabic: 'الإنتاج',
    icon: '📈',
    definition_en: 'The point at which a material begins to deform plastically.',
    definition_ar: 'النقطة التي تبدأ فيها المادة في التشوه البلاستيكي.'
  },
  {
    english: 'ductility',
    arabic: 'الليونة',
    icon: '🔗',
    definition_en: 'The ability of a material to undergo significant plastic deformation.',
    definition_ar: 'قدرة المادة على التشوه البلاستيكي الكبير.'
  },
  {
    english: 'hardness',
    arabic: 'الصلابة',
    icon: '💎',
    definition_en: 'Resistance to permanent deformation.',
    definition_ar: 'مقاومة التشوه الدائم.'
  },
  {
    english: 'tensile',
    arabic: 'شدي',
    icon: '➡️',
    definition_en: 'Relating to tension or pulling forces.',
    definition_ar: 'متعلق بالتوتر أو قوى السحب.'
  },
  {
    english: 'compression',
    arabic: 'الضغط',
    icon: '⬅️',
    definition_en: 'Force applied to squeeze or shorten an object.',
    definition_ar: 'قوة تُطبق لضغط أو تقصير جسم.'
  },
  {
    english: 'shear',
    arabic: 'القص',
    icon: '✂️',
    definition_en: 'Force that acts to slide one layer over another.',
    definition_ar: 'قوة تعمل على انزلاق طبقة فوق أخرى.'
  },
  {
    english: 'bending',
    arabic: 'الانحناء',
    icon: '↩️',
    definition_en: 'Deformation under load causing curvature.',
    definition_ar: 'التشوه تحت الحمل يسبب الانحناء.'
  },
  {
    english: 'torsion',
    arabic: 'الالتواء',
    icon: '🔄',
    definition_en: 'Twisting of an object due to applied torque.',
    definition_ar: 'التواء جسم بسبب عزم الدوران المطبق.'
  },
  {
    english: 'fatigue',
    arabic: 'التعب',
    icon: '😴',
    definition_en: 'Weakening of a material caused by repeated loading.',
    definition_ar: 'ضعف المادة الناتج عن التحميل المتكرر.'
  },
  {
    english: 'creep',
    arabic: 'الزحف',
    icon: '🐌',
    definition_en: 'Slow deformation under constant stress.',
    definition_ar: 'التشوه البطيء تحت إجهاد مستمر.'
  },
  {
    english: 'welding',
    arabic: 'اللحام',
    icon: '🔥',
    definition_en: 'A fabrication process that joins materials by causing fusion.',
    definition_ar: 'عملية تصنيع تجمع المواد عن طريق الاندماج.'
  },
  {
    english: 'casting',
    arabic: 'الصب',
    icon: '🔨',
    definition_en: 'A manufacturing process where molten material is poured into a mold.',
    definition_ar: 'عملية تصنيع يُصب فيها المادة المنصهرة في قالب.'
  },
  {
    english: 'machining',
    arabic: 'التصنيع الميكانيكي',
    icon: '🛠️',
    definition_en: 'A process of shaping material by removing unwanted parts.',
    definition_ar: 'عملية تشكيل المادة عن طريق إزالة الأجزاء غير المرغوب فيها.'
  },
  {
    english: 'extrusion',
    arabic: 'البثق',
    icon: '➡️',
    definition_en: 'A process used to create objects of a fixed cross-sectional profile.',
    definition_ar: 'عملية تستخدم لإنشاء أجسام بملف قاطع ثابت.'
  },
  {
    english: 'forging',
    arabic: 'التزوير',
    icon: '🔨',
    definition_en: 'A manufacturing process involving the shaping of metal.',
    definition_ar: 'عملية تصنيع تشمل تشكيل المعدن.'
  },
  {
    english: 'rolling',
    arabic: 'الدرفلة',
    icon: '📜',
    definition_en: 'A metal forming process in which metal stock is passed through rollers.',
    definition_ar: 'عملية تشكيل معدنية يمر فيها المعدن عبر بكرات.'
  },
  {
    english: 'drawing',
    arabic: 'الرسم',
    icon: '✏️',
    definition_en: 'A process where a wire is pulled through a die to reduce its diameter.',
    definition_ar: 'عملية يُسحب فيها السلك عبر قال ب لتقليل قطره.'
  },
  {
    english: 'annealing',
    arabic: 'التلدين',
    icon: '🔥',
    definition_en: 'A heat treatment that alters the physical and sometimes chemical properties.',
    definition_ar: 'معالجة حرارية تغير الخصائص الفيزيائية وأحياناً الكيميائية.'
  },
  {
    english: 'quenching',
    arabic: 'الإخماد',
    icon: '💧',
    definition_en: 'Rapid cooling of a workpiece in water or oil to obtain a martensitic structure.',
    definition_ar: 'تبريد سريع للقطعة في الماء أو الزيت للحصول على هيكل مارتنزيتي.'
  },
  {
    english: 'tempering',
    arabic: 'المعالجة الحرارية',
    icon: '🌡️',
    definition_en: 'A process of heat treating to reduce brittleness and increase toughness.',
    definition_ar: 'عملية معالجة حرارية لتقليل الهشاشة وزيادة الصلابة.'
  },
  {
    english: 'normalizing',
    arabic: 'التطبيع',
    icon: '⚖️',
    definition_en: 'A heat treatment process that is used to refine the microstructure.',
    definition_ar: 'عملية معالجة حرارية تستخدم لتحسين الهيكل الدقيق.'
  },
  {
    english: 'hardening',
    arabic: 'التصلب',
    icon: '💎',
    definition_en: 'A process to increase the hardness of a material.',
    definition_ar: 'عملية لزيادة صلابة المادة.'
  },
  {
    english: 'carburizing',
    arabic: 'الكربنة',
    icon: '🔬',
    definition_en: 'A heat treatment process in which steel absorbs carbon.',
    definition_ar: 'عملية معالجة حرارية يمتص فيها الفولاذ الكربون.'
  },
  {
    english: 'nitriding',
    arabic: 'النيتريدة',
    icon: '🌫️',
    definition_en: 'A heat treating process that diffuses nitrogen into the surface.',
    definition_ar: 'عملية معالجة حرارية تنتشر فيها النيتروجين إلى السطح.'
  },
  {
    english: 'corrosion',
    arabic: 'التآكل',
    icon: '💧',
    definition_en: 'The deterioration of a material due to chemical reactions with its environment.',
    definition_ar: 'تدهور المادة بسبب التفاعلات الكيميائية مع بيئتها.'
  },
  {
    english: 'oxidation',
    arabic: 'الأكسدة',
    icon: '🧪',
    definition_en: 'A chemical reaction in which a substance loses electrons.',
    definition_ar: 'تفاعل كيميائي يفقد فيه المادة الإلكترونات.'
  },
  {
    english: 'rust',
    arabic: 'الصدأ',
    icon: '🟠',
    definition_en: 'A form of corrosion specific to iron and steel.',
    definition_ar: 'شكل من أشكال التآكل خاص بالحديد والفولاذ.'
  },
  {
    english: 'galvanization',
    arabic: 'التنجيد',
    icon: '🔒',
    definition_en: 'A process of applying a protective zinc coating to steel.',
    definition_ar: 'عملية تطبيق طبقة زنك واقية على الفولاذ.'
  },
  {
    english: 'anodizing',
    arabic: 'الأنودة',
    icon: '⚡',
    definition_en: 'An electrolytic process that forms a protective oxide layer on aluminum.',
    definition_ar: 'عملية كهروكيميائية تشكل طبقة أكسيد واقية على الألمنيوم.'
  },
  {
    english: 'cathodic protection',
    arabic: 'الحماية الكاثودية',
    icon: '🛡️',
    definition_en: 'A technique to control the corrosion of a metal surface by making it the cathode.',
    definition_ar: 'تقنية للسيطرة على تآكل سطح معدني بجعله الكاثود.'
  },
  {
    english: 'alloy',
    arabic: 'السبيكة',
    icon: '🔗',
    definition_en: 'A mixture of metals or a metal and another element.',
    definition_ar: 'خليط من المعادن أو معدن وعنصر آخر.'
  },
  {
    english: 'steel',
    arabic: 'الفولاذ',
    icon: '🔩',
    definition_en: 'An alloy of iron and carbon.',
    definition_ar: 'سبيكة من الحديد والكربون.'
  },
  {
    english: 'aluminum',
    arabic: 'الألمنيوم',
    icon: '🛩️',
    definition_en: 'A lightweight metal used in aerospace and construction.',
    definition_ar: 'معدن خفيف الوزن يستخدم في الفضاء والإنشاءات.'
  },
  {
    english: 'copper',
    arabic: 'النحاس',
    icon: '🪙',
    definition_en: 'A ductile metal used in electrical wiring.',
    definition_ar: 'معدن قابل للطرق يستخدم في الأسلاك الكهربائية.'
  },
  {
    english: 'titanium',
    arabic: 'التيتانيوم',
    icon: '🚀',
    definition_en: 'A strong, lightweight metal resistant to corrosion.',
    definition_ar: 'معدن قوي خفيف الوزن مقاوم للتآكل.'
  },
  {
    english: 'polymer',
    arabic: 'البوليمر',
    icon: '🔬',
    definition_en: 'A large molecule composed of many repeated subunits.',
    definition_ar: 'جزيء كبير مكون من وحدات فرعية متكررة كثيرة.'
  },
  {
    english: 'composite',
    arabic: 'المركب',
    icon: '🧱',
    definition_en: 'A material made from two or more constituent materials with different properties.',
    definition_ar: 'مادة مصنوعة من مواد مكونة اثنتين أو أكثر بخصائص مختلفة.'
  },
  {
    english: 'ceramic',
    arabic: 'السيراميك',
    icon: '🍵',
    definition_en: 'A solid material comprising an inorganic compound of metal, non-metal or metalloid atoms.',
    definition_ar: 'مادة صلبة تتكون من مركب غير عضوي من ذرات معدنية أو غير معدنية.'
  },
  {
    english: 'semiconductor',
    arabic: 'شبه موصل',
    icon: '🔌',
    definition_en: 'A material with electrical conductivity between that of a conductor and an insulator.',
    definition_ar: 'مادة بتوصيل كهربائي بين الموصل والعازل.'
  },
  {
    english: 'insulator',
    arabic: 'العازل',
    icon: '🛡️',
    definition_en: 'A material that does not allow the flow of electric charge.',
    definition_ar: 'مادة لا تسمح بتدفق الشحنة الكهربائية.'
  },
  {
    english: 'conductor',
    arabic: 'الموصل',
    icon: '⚡',
    definition_en: 'A material that allows the flow of electric charge.',
    definition_ar: 'مادة تسمح بتدفق الشحنة الكهربائية.'
  },
  {
    english: 'turbulence',
    arabic: 'الاضطراب',
    icon: '🌪️',
    definition_en: 'Chaotic changes in pressure and flow velocity in a fluid.',
    definition_ar: 'تغييرات فوضوية في الضغط وسرعة التدفق في سائل.'
  },
  {
    english: 'laminar flow',
    arabic: 'التدفق الطبقي',
    icon: '➡️',
    definition_en: 'Smooth, constant fluid motion.',
    definition_ar: 'حركة سائل ناعمة وثابتة.'
  },
  {
    english: 'reynolds number',
    arabic: 'رقم رينولدز',
    icon: '📊',
    definition_en: 'A dimensionless quantity used to predict flow patterns.',
    definition_ar: 'كمية بدون أبعاد تستخدم للتنبؤ بأنماط التدفق.'
  },
  {
    english: 'bernoulli principle',
    arabic: 'مبدأ برنولي',
    icon: '✈️',
    definition_en: 'An increase in the speed of a fluid occurs simultaneously with a decrease in pressure.',
    definition_ar: 'زيادة في سرعة السائل تحدث مع انخفاض في الضغط.'
  },
  {
    english: 'newton law',
    arabic: 'قانون نيوتن',
    icon: '⚖️',
    definition_en: 'Fundamental principles describing the relationship between motion and forces.',
    definition_ar: 'مبادئ أساسية تصف العلاقة بين الحركة والقوى.'
  },
  {
    english: 'fourier law',
    arabic: 'قانون فورييه',
    icon: '🔥',
    definition_en: 'The rate of heat transfer through a material is proportional to the negative gradient.',
    definition_ar: 'معدل نقل الحرارة عبر مادة متناسب مع التدرج السلبي.'
  },
  {
    english: 'ohms law',
    arabic: 'قانون أوم',
    icon: '🔌',
    definition_en: 'The current through a conductor is proportional to the voltage across it.',
    definition_ar: 'التيار عبر موصل متناسب مع الجهد عبره.'
  },
  {
    english: 'kirchhoff law',
    arabic: 'قوانين كيرشوف',
    icon: '🔗',
    definition_en: 'Laws describing the conservation of charge and energy in electrical circuits.',
    definition_ar: 'قوانين تصف حفظ الشحنة والطاقة في الدوائر الكهربائية.'
  },
  {
    english: 'pascal law',
    arabic: 'قانون باسكال',
    icon: '💧',
    definition_en: 'Pressure applied to a confined fluid is transmitted equally in all directions.',
    definition_ar: 'الضغط المطبق على سائل محصور ينتقل بالتساوي في جميع الاتجاهات.'
  },
  {
    english: 'archimedes principle',
    arabic: 'مبدأ أرخميدس',
    icon: '🛁',
    definition_en: 'The upward buoyant force is equal to the weight of the fluid displaced.',
    definition_ar: 'القوة الدافعة الصاعدة تساوي وزن السائل المزاح.'
  },
  {
    english: 'variable',
    arabic: 'المتغير',
    icon: '🔄',
    definition_en: 'A storage location paired with an associated symbolic name.',
    definition_ar: 'موقع تخزين مرتبط باسم رمزي.'
  },
  {
    english: 'function',
    arabic: 'الدالة',
    icon: '📈',
    definition_en: 'A block of code that performs a specific task.',
    definition_ar: 'كتلة من الكود تقوم بمهمة محددة.'
  },
  {
    english: 'loop',
    arabic: 'الحلقة',
    icon: '🔁',
    definition_en: 'A sequence of instructions that is continually repeated.',
    definition_ar: 'تسلسل من التعليمات يتكرر باستمرار.'
  },
  {
    english: 'array',
    arabic: 'المصفوفة',
    icon: '📊',
    definition_en: 'A data structure consisting of a collection of elements.',
    definition_ar: 'هيكل بيانات يتكون من مجموعة من العناصر.'
  },
  {
    english: 'object',
    arabic: 'الكائن',
    icon: '📦',
    definition_en: 'An instance of a class in object-oriented programming.',
    definition_ar: 'مثال لفئة في البرمجة كائنية التوجه.'
  },
  {
    english: 'class',
    arabic: 'الفئة',
    icon: '🏗️',
    definition_en: 'A blueprint for creating objects.',
    definition_ar: 'خطة لإنشاء كائنات.'
  },
  {
    english: 'inheritance',
    arabic: 'الوراثة',
    icon: '👪',
    definition_en: 'A mechanism where one class acquires the properties of another.',
    definition_ar: 'آلية يحصل فيها فئة على خصائص فئة أخرى.'
  },
  {
    english: 'polymorphism',
    arabic: 'التعددية',
    icon: '🎭',
    definition_en: 'The ability of an object to take on many forms.',
    definition_ar: 'قدرة الكائن على اتخاذ أشكال متعددة.'
  },
  {
    english: 'encapsulation',
    arabic: 'التغليف',
    icon: '🔒',
    definition_en: 'The bundling of data and methods that operate on that data.',
    definition_ar: 'ربط البيانات والطرق التي تعمل على تلك البيانات.'
  },
  {
    english: 'abstraction',
    arabic: 'التجريد',
    icon: '🧠',
    definition_en: 'The process of hiding complex implementation details.',
    definition_ar: 'عملية إخفاء تفاصيل التنفيذ المعقدة.'
  },
  {
    english: 'debugging',
    arabic: 'تصحيح الأخطاء',
    icon: '🐛',
    definition_en: 'The process of finding and fixing bugs in software.',
    definition_ar: 'عملية العثور على الأخطاء وإصلاحها في البرمجيات.'
  },
  {
    english: 'compilation',
    arabic: 'التجميع',
    icon: '⚙️',
    definition_en: 'The process of translating source code into machine code.',
    definition_ar: 'عملية ترجمة الكود المصدري إلى كود الآلة.'
  },
  {
    english: 'interpreter',
    arabic: 'المترجم',
    icon: '🔍',
    definition_en: 'A program that executes instructions written in a programming language.',
    definition_ar: 'برنامج ينفذ التعليمات المكتوبة بلغة برمجة.'
  },
  {
    english: 'syntax',
    arabic: 'الصيغة',
    icon: '📝',
    definition_en: 'The set of rules that defines the combinations of symbols.',
    definition_ar: 'مجموعة القواعد التي تحدد تركيبات الرموز.'
  },
  {
    english: 'semantics',
    arabic: 'الدلالة',
    icon: '💡',
    definition_en: 'The meaning of the symbols and their combinations.',
    definition_ar: 'معنى الرموز وتركيباتها.'
  },
  {
    english: 'recursion',
    arabic: 'التكرارية',
    icon: '🔄',
    definition_en: 'A function that calls itself in its definition.',
    definition_ar: 'دالة تستدعي نفسها في تعريفها.'
  },
  {
    english: 'pointer',
    arabic: 'المؤشر',
    icon: '👆',
    definition_en: 'A variable that stores the address of another variable.',
    definition_ar: 'متغير يخزن عنوان متغير آخر.'
  },
  {
    english: 'memory',
    arabic: 'الذاكرة',
    icon: '🧠',
    definition_en: 'The part of a computer that stores data temporarily or permanently.',
    definition_ar: 'الجزء من الحاسوب الذي يخزن البيانات مؤقتاً أو دائماً.'
  },
  {
    english: 'framework',
    arabic: 'الإطار',
    icon: '🏗️',
    definition_en: 'A platform for developing software applications.',
    definition_ar: 'منصة لتطوير تطبيقات البرمجيات.'
  },
  {
    english: 'library',
    arabic: 'المكتبة',
    icon: '📚',
    definition_en: 'A collection of pre-written code that developers can use.',
    definition_ar: 'مجموعة من الكود المكتوب مسبقاً يمكن للمطورين استخدامه.'
  },
  {
    english: 'version control',
    arabic: 'التحكم في الإصدارات',
    icon: '📋',
    definition_en: 'A system that records changes to a file or set of files over time.',
    definition_ar: 'نظام يسجل التغييرات على ملف أو مجموعة ملفات مع مرور الوقت.'
  },
  {
    english: 'git',
    arabic: 'جيت',
    icon: '🌳',
    definition_en: 'A distributed version control system.',
    definition_ar: 'نظام تحكم في الإصدارات موزع.'
  },
  {
    english: 'repository',
    arabic: 'المستودع',
    icon: '📁',
    definition_en: 'A storage location for software packages.',
    definition_ar: 'موقع تخزين لحزم البرمجيات.'
  },
  {
    english: 'branch',
    arabic: 'الفرع',
    icon: '🌿',
    definition_en: 'A parallel version of a repository.',
    definition_ar: 'إصدار موازٍ لمستودع.'
  },
  {
    english: 'merge',
    arabic: 'الدمج',
    icon: '🔀',
    definition_en: 'Combining multiple sequences of commits into one.',
    definition_ar: 'دمج تسلسلات متعددة من الالتزامات في واحدة.'
  },
  {
    english: 'commit',
    arabic: 'الالتزام',
    icon: '✅',
    definition_en: 'A snapshot of changes in the repository.',
    definition_ar: 'لقطة للتغييرات في المستودع.'
  },
  {
    english: 'pull request',
    arabic: 'طلب السحب',
    icon: '📤',
    definition_en: 'A method of submitting contributions to an open development project.',
    definition_ar: 'طريقة لتقديم المساهمات إلى مشروع تطوير مفتوح.'
  },
  {
    english: 'scrum',
    arabic: 'سكرام',
    icon: '🏉',
    definition_en: 'An agile framework for managing complex projects.',
    definition_ar: 'إطار رشيق لإدارة المشاريع المعقدة.'
  },
  {
    english: 'kanban',
    arabic: 'كانبان',
    icon: '📋',
    definition_en: 'A method for managing work with an emphasis on just-in-time delivery.',
    definition_ar: 'طريقة لإدارة العمل مع التركيز على التسليم في الوقت المناسب.'
  },
  {
    english: 'ci cd',
    arabic: 'التكامل المستمر والنشر المستمر',
    icon: '🔄',
    definition_en: 'Practices that automate the integration and deployment of code.',
    definition_ar: 'ممارسات تؤتمت دمج ونشر الكود.'
  },
  {
    english: 'docker',
    arabic: 'دوكر',
    icon: '🐳',
    definition_en: 'A platform for developing, shipping, and running applications.',
    definition_ar: 'منصة لتطوير وشحن وتشغيل التطبيقات.'
  },
  {
    english: 'kubernetes',
    arabic: 'كوبيرنيتيس',
    icon: '⚓',
    definition_en: 'An open-source system for automating deployment and scaling of containerized applications.',
    definition_ar: 'نظام مفتوح المصدر لأتمتة نشر وتوسيع التطبيقات المحتواة.'
  },
  {
    english: 'serverless',
    arabic: 'بدون خادم',
    icon: '🚀',
    definition_en: 'A cloud computing execution model where the cloud provider manages the infrastructure.',
    definition_ar: 'نموذج تنفيذ حوسبة سحابية يدير فيه مزود السحابة البنية التحتية.'
  },
  {
    english: 'microservices',
    arabic: 'الخدمات الصغيرة',
    icon: '🧩',
    definition_en: 'An architectural style that structures an application as a collection of services.',
    definition_ar: 'أسلوب معماري يهيكل التطبيق كمجموعة من الخدمات.'
  },
  {
    english: 'cryptocurrency',
    arabic: 'العملة الرقمية',
    icon: '💰',
    definition_en: 'A digital or virtual currency that uses cryptography for security.',
    definition_ar: 'عملة رقمية أو افتراضية تستخدم التشفير للأمان.'
  },
  {
    english: 'data mining',
    arabic: 'استخراج البيانات',
    icon: '⛏️',
    definition_en: 'The process of discovering patterns in large data sets.',
    definition_ar: 'عملية اكتشاف الأنماط في مجموعات البيانات الكبيرة.'
  },
  {
    english: 'firewall',
    arabic: 'جدار النار',
    icon: '🛡️',
    definition_en: 'A network security system that monitors and controls incoming and outgoing network traffic.',
    definition_ar: 'نظام أمان شبكي يراقب ويسيطر على حركة الشبكة الواردة والصادرة.'
  },
  {
    english: 'virus',
    arabic: 'الفيروس',
    icon: '🦠',
    definition_en: 'A malicious software program that replicates itself.',
    definition_ar: 'برنامج برمجي ضار يتكاثر بنفسه.'
  },
  {
    english: 'malware',
    arabic: 'البرمجيات الضارة',
    icon: '🐛',
    definition_en: 'Software designed to disrupt, damage, or gain unauthorized access to a computer system.',
    definition_ar: 'برمجيات مصممة لتعطيل أو إلحاق الضرر أو الوصول غير المصرح به إلى نظام حاسوبي.'
  },
  {
    english: 'phishing',
    arabic: 'التصيد',
    icon: '🎣',
    definition_en: 'A cyber attack where attackers trick users into revealing sensitive information.',
    definition_ar: 'هجوم سيبراني يخدع فيه المهاجمون المستخدمين لكشف معلومات حساسة.'
  },
  {
    english: 'hacking',
    arabic: 'الاختراق',
    icon: '💻',
    definition_en: 'The unauthorized access to computer systems.',
    definition_ar: 'الوصول غير المصرح به إلى أنظمة الحواسيب.'
  },
  {
    english: 'quantum computing',
    arabic: 'الحوسبة الكمية',
    icon: '⚛️',
    definition_en: 'A type of computing that uses quantum mechanics principles.',
    definition_ar: 'نوع من الحوسبة يستخدم مبادئ الميكانيكا الكمية.'
  },
  {
    english: 'iot',
    arabic: 'إنترنت الأشياء',
    icon: '🌐',
    definition_en: 'The network of physical devices connected to the internet.',
    definition_ar: 'شبكة الأجهزة المادية المتصلة بالإنترنت.'
  },
  {
    english: 'augmented reality',
    arabic: 'الواقع المعزز',
    icon: '👓',
    definition_en: 'An interactive experience of a real-world environment enhanced by computer-generated information.',
    definition_ar: 'تجربة تفاعلية للبيئة الحقيقية معززة بمعلومات مولدة بالحاسوب.'
  },
  {
    english: 'virtual reality',
    arabic: 'الواقع الافتراضي',
    icon: '🕶️',
    definition_en: 'A simulated experience that can be similar to or completely different from the real world.',
    definition_ar: 'تجربة محاكاة يمكن أن تكون مشابهة أو مختلفة تماماً عن العالم الحقيقي.'
  },
  {
    english: 'data structure',
    arabic: 'هيكل البيانات',
    icon: '📊',
    definition_en: 'A way of organizing and storing data for efficient access and modification.',
    definition_ar: 'طريقة لتنظيم وتخزين البيانات للوصول الفعال والتعديل.'
  },
  {
    english: 'algorithm complexity',
    arabic: 'تعقيد الخوارزمية',
    icon: '⏱️',
    definition_en: 'A measure of the amount of time and space required by an algorithm.',
    definition_ar: 'مقياس لكمية الوقت والمساحة المطلوبة من خوارزمية.'
  },
  {
    english: 'sorting algorithm',
    arabic: 'خوارزمية الترتيب',
    icon: '🔀',
    definition_en: 'An algorithm that puts elements of a list in a certain order.',
    definition_ar: 'خوارزمية تضع عناصر القائمة في ترتيب معين.'
  },
  {
    english: 'binary search',
    arabic: 'البحث الثنائي',
    icon: '🔍',
    definition_en: 'A search algorithm that finds the position of a target value within a sorted array.',
    definition_ar: 'خوارزمية بحث تجد موقع القيمة المستهدفة داخل مصفوفة مرتبة.'
  },
  {
    english: 'hash table',
    arabic: 'جدول التجزئة',
    icon: '🔑',
    definition_en: 'A data structure that implements an associative array abstract data type.',
    definition_ar: 'هيكل بيانات ينفذ نوع بيانات مجرد مصفوفة ارتباطية.'
  },
  {
    english: 'linked list',
    arabic: 'القائمة المرتبطة',
    icon: '🔗',
    definition_en: 'A linear collection of data elements whose order is not given by their physical placement.',
    definition_ar: 'مجموعة خطية من عناصر البيانات التي لا يحدد ترتيبها وضعها الفيزيائي.'
  },
  {
    english: 'stack',
    arabic: 'الكومة',
    icon: '📚',
    definition_en: 'A linear data structure which follows a particular order in which operations are performed.',
    definition_ar: 'هيكل بيانات خطي يتبع ترتيباً معيناً في العمليات.'
  },
  {
    english: 'queue',
    arabic: 'الطابور',
    icon: '🚶',
    definition_en: 'A collection of entities that are maintained in a sequence.',
    definition_ar: 'مجموعة من الكيانات التي يتم الحفاظ عليها في تسلسل.'
  },
  {
    english: 'tree',
    arabic: 'الشجرة',
    icon: '🌳',
    definition_en: 'A widely used abstract data type that simulates a hierarchical tree structure.',
    definition_ar: 'نوع بيانات مجرد مستخدم على نطاق واسع يحاكي هيكل شجرة هرمي.'
  },
  {
    english: 'graph',
    arabic: 'الرسم البياني',
    icon: '📈',
    definition_en: 'A non-linear data structure consisting of nodes and edges.',
    definition_ar: 'هيكل بيانات غير خطي يتكون من عقد وحواف.'
  },
  {
    english: 'dynamic programming',
    arabic: 'البرمجة الديناميكية',
    icon: '⚡',
    definition_en: 'A method for solving complex problems by breaking them down into simpler subproblems.',
    definition_ar: 'طريقة لحل المشكلات المعقدة بتقسيمها إلى مشكلات فرعية أبسط.'
  },
  {
    english: 'greedy algorithm',
    arabic: 'الخوارزمية الجشعة',
    icon: '🤑',
    definition_en: 'An algorithmic paradigm that follows the problem solving heuristic of making the locally optimal choice.',
    definition_ar: 'نمط خوارزمي يتبع إرشاد حل المشكلات باختيار الخيار الأمثل محلياً.'
  },
  {
    english: 'divide and conquer',
    arabic: 'قسم وغلب',
    icon: '⚔️',
    definition_en: 'A strategy of solving a large problem by breaking it into smaller subproblems.',
    definition_ar: 'استراتيجية لحل مشكلة كبيرة بتقسيمها إلى مشكلات فرعية أصغر.'
  },
  {
    english: 'backtracking',
    arabic: 'العودة الخلفية',
    icon: '↩️',
    definition_en: 'A general algorithm for finding all solutions to some computational problems.',
    definition_ar: 'خوارزمية عامة للعثور على جميع الحلول لبعض المشكلات الحسابية.'
  },
  {
    english: 'deep learning',
    arabic: 'التعلم العميق',
    icon: '🧠',
    definition_en: 'A subset of machine learning based on artificial neural networks.',
    definition_ar: 'فرع من تعلم الآلة يعتمد على الشبكات العصبية الاصطناعية.'
  },
  {
    english: 'convolutional neural network',
    arabic: 'الشبكة العصبية الالتفافية',
    icon: '🔄',
    definition_en: 'A class of deep neural networks commonly applied to analyzing visual imagery.',
    definition_ar: 'فئة من الشبكات العصبية العميقة تُطبق عادة على تحليل الصور البصرية.'
  },
  {
    english: 'reinforcement learning',
    arabic: 'التعلم بالتعزيز',
    icon: '🏆',
    definition_en: 'An area of machine learning concerned with how software agents ought to take actions.',
    definition_ar: 'مجال من تعلم الآلة يتعلق بكيفية اتخاذ الوكلاء البرمجيين للإجراءات.'
  },
  {
    english: 'supervised learning',
    arabic: 'التعلم الخاضع للإشراف',
    icon: '👨‍🏫',
    definition_en: 'A type of machine learning where the model is trained on labeled data.',
    definition_ar: 'نوع من تعلم الآلة حيث يتم تدريب النموذج على بيانات مصنفة.'
  },
  {
    english: 'unsupervised learning',
    arabic: 'التعلم غير الخاضع للإشراف',
    icon: '🔍',
    definition_en: 'A type of machine learning where the model is trained on unlabeled data.',
    definition_ar: 'نوع من تعلم الآلة حيث يتم تدريب النموذج على بيانات غير مصنفة.'
  },
  {
    english: 'natural language processing',
    arabic: 'معالجة اللغة الطبيعية',
    icon: '💬',
    definition_en: 'A subfield of AI concerned with the interactions between computers and human language.',
    definition_ar: 'فرع من الذكاء الاصطناعي يتعلق بالتفاعلات بين الحواسيب واللغة البشرية.'
  },
  {
    english: 'computer vision',
    arabic: 'رؤية الحاسوب',
    icon: '👁️',
    definition_en: 'A field of AI that trains computers to interpret and understand visual information.',
    definition_ar: 'مجال من الذكاء الاصطناعي يدرب الحواسيب على تفسير وفهم المعلومات البصرية.'
  },
  {
    english: 'robotics',
    arabic: 'الروبوتات',
    icon: '🤖',
    definition_en: 'The branch of technology that deals with the design, construction, operation, and application of robots.',
    definition_ar: 'فرع التكنولوجيا الذي يتعامل مع تصميم وبناء وتشغيل وتطبيق الروبوتات.'
  },
  {
    english: 'automation',
    arabic: 'الأتمتة',
    icon: '⚙️',
    definition_en: 'The use of technology to perform tasks with minimal human intervention.',
    definition_ar: 'استخدام التكنولوجيا لأداء المهام بأقل تدخل بشري.'
  },
  {
    english: 'fluid mechanics',
    arabic: 'ميكانيكا الموائع',
    icon: '💧',
    definition_en: 'The branch of physics concerned with the mechanics of fluids.',
    definition_ar: 'فرع الفيزياء الذي يتعامل مع ميكانيكا الموائع.'
  },
  {
    english: 'heat transfer',
    arabic: 'نقل الحرارة',
    icon: '🌡️',
    definition_en: 'The process of transfer of heat from one body to another.',
    definition_ar: 'عملية نقل الحرارة من جسم إلى آخر.'
  },
  {
    english: 'conduction',
    arabic: 'التوصيل',
    icon: '🔗',
    definition_en: 'The process by which heat is transferred through a material without movement of the material.',
    definition_ar: 'العملية التي يتم بها نقل الحرارة عبر مادة دون حركة المادة.'
  },
  {
    english: 'convection',
    arabic: 'التحويل',
    icon: '🌬️',
    definition_en: 'The process of heat transfer by the movement of fluids.',
    definition_ar: 'عملية نقل الحرارة بحركة الموائع.'
  },
  {
    english: 'radiation',
    arabic: 'الإشعاع',
    icon: '☀️',
    definition_en: 'The emission of energy as electromagnetic waves.',
    definition_ar: 'إصدار الطاقة كموجات كهرومغناطيسية.'
  },
  {
    english: 'kinematics',
    arabic: 'الحركيات',
    icon: '🏎️',
    definition_en: 'The branch of mechanics concerned with the motion of objects without reference to the forces causing it.',
    definition_ar: 'فرع الميكانيكا الذي يتعامل مع حركة الأجسام دون الإشارة إلى القوى المسببة لها.'
  },
  {
    english: 'dynamics',
    arabic: 'الديناميكا',
    icon: '💥',
    definition_en: 'The branch of mechanics concerned with the motion of objects and the forces causing it.',
    definition_ar: 'فرع الميكانيكا الذي يتعامل مع حركة الأجسام والقوى المسببة لها.'
  },
  {
    english: 'statics',
    arabic: 'الإحصائيات',
    icon: '⚖️',
    definition_en: 'The branch of mechanics concerned with bodies at rest.',
    definition_ar: 'فرع الميكانيكا الذي يتعامل مع الأجسام في حالة الراحة.'
  },
  {
    english: 'structural analysis',
    arabic: 'تحليل الهيكل',
    icon: '🏗️',
    definition_en: 'The determination of the effects of loads on physical structures.',
    definition_ar: 'تحديد تأثيرات الأحمال على الهياكل الفيزيائية.'
  },
  {
    english: 'finite element method',
    arabic: 'طريقة العناصر المحدودة',
    icon: '🔬',
    definition_en: 'A numerical method for solving problems of engineering and mathematical physics.',
    definition_ar: 'طريقة عددية لحل مشكلات الهندسة والفيزياء الرياضية.'
  },
  {
    english: 'control systems',
    arabic: 'أنظمة التحكم',
    icon: '🎛️',
    definition_en: 'A system that manages, commands, directs, or regulates the behavior of other devices.',
    definition_ar: 'نظام يدير أو يأمر أو يوجه أو ينظم سلوك الأجهزة الأخرى.'
  },
  {
    english: 'signal processing',
    arabic: 'معالجة الإشارات',
    icon: '📡',
    definition_en: 'The analysis, modification, and synthesis of signals.',
    definition_ar: 'تحليل وتعديل وتركيب الإشارات.'
  },
  {
    english: 'digital signal processing',
    arabic: 'معالجة الإشارات الرقمية',
    icon: '🔢',
    definition_en: 'The use of digital processing to perform a wide variety of signal processing operations.',
    definition_ar: 'استخدام المعالجة الرقمية لأداء مجموعة واسعة من عمليات معالجة الإشارات.'
  },
  {
    english: 'analog signal processing',
    arabic: 'معالجة الإشارات التناظرية',
    icon: '📻',
    definition_en: 'Signal processing concerned with analog signals.',
    definition_ar: 'معالجة الإشارات المتعلقة بالإشارات التناظرية.'
  },
  {
    english: 'power electronics',
    arabic: 'إلكترونيات الطاقة',
    icon: '⚡',
    definition_en: 'The application of solid-state electronics to the control and conversion of electric power.',
    definition_ar: 'تطبيق إلكترونيات الحالة الصلبة على التحكم وتحويل الطاقة الكهربائية.'
  },
  {
    english: 'renewable energy',
    arabic: 'الطاقة المتجددة',
    icon: '🌞',
    definition_en: 'Energy from sources that are naturally replenished.',
    definition_ar: 'طاقة من مصادر تتجدد طبيعياً.'
  },
  {
    english: 'solar energy',
    arabic: 'الطاقة الشمسية',
    icon: '☀️',
    definition_en: 'Energy from the sun that is converted into thermal or electrical energy.',
    definition_ar: 'طاقة من الشمس يتم تحويلها إلى طاقة حرارية أو كهربائية.'
  },
  {
    english: 'wind energy',
    arabic: 'طاقة الرياح',
    icon: '🌬️',
    definition_en: 'Energy obtained from the wind.',
    definition_ar: 'طاقة مستمدة من الرياح.'
  },
  {
    english: 'hydroelectric power',
    arabic: 'الطاقة الكهرومائية',
    icon: '💧',
    definition_en: 'Electricity generated from hydropower.',
    definition_ar: 'كهرباء مولدة من طاقة المياه.'
  },
  {
    english: 'nuclear energy',
    arabic: 'الطاقة النووية',
    icon: '☢️',
    definition_en: 'Energy released by nuclear reactions.',
    definition_ar: 'طاقة تُطلق بواسطة التفاعلات النووية.'
  },
  {
    english: 'fossil fuels',
    arabic: 'الوقود الأحفوري',
    icon: '⛽',
    definition_en: 'Natural fuels formed from the remains of ancient organisms.',
    definition_ar: 'وقود طبيعي يتشكل من بقايا الكائنات القديمة.'
  },
  {
    english: 'carbon footprint',
    arabic: 'البصمة الكربونية',
    icon: '🌍',
    definition_en: 'The total amount of greenhouse gases produced by an individual or organization.',
    definition_ar: 'إجمالي كمية غازات الدفيئة المنتجة من قبل فرد أو منظمة.'
  },
  {
    english: 'sustainability',
    arabic: 'الاستدامة',
    icon: '♻️',
    definition_en: 'The ability to be maintained at a certain rate or level.',
    definition_ar: 'القدرة على الحفاظ على معدل أو مستوى معين.'
  },
  {
    english: 'environmental engineering',
    arabic: 'الهندسة البيئية',
    icon: '🌱',
    definition_en: 'The application of science and engineering to improve the natural environment.',
    definition_ar: 'تطبيق العلوم والهندسة لتحسين البيئة الطبيعية.'
  },
  {
    english: 'water treatment',
    arabic: 'معالجة المياه',
    icon: '💧',
    definition_en: 'The process of removing contaminants from wastewater.',
    definition_ar: 'عملية إزالة الملوثات من مياه الصرف الصحي.'
  },
  {
    english: 'air pollution',
    arabic: 'تلوث الهواء',
    icon: '🌫️',
    definition_en: 'The presence of substances in the atmosphere that are harmful to human health.',
    definition_ar: 'وجود مواد في الغلاف الجوي ضارة بالصحة البشرية.'
  },
  {
    english: 'waste management',
    arabic: 'إدارة النفايات',
    icon: '🗑️',
    definition_en: 'The collection, transport, processing, recycling, or disposal of waste materials.',
    definition_ar: 'جمع ونقل ومعالجة وإعادة تدوير أو التخلص من مواد النفايات.'
  },
  {
    english: 'recycling',
    arabic: 'إعادة التدوير',
    icon: '♻️',
    definition_en: 'The process of converting waste materials into new materials.',
    definition_ar: 'عملية تحويل مواد النفايات إلى مواد جديدة.'
  },
  {
    english: 'biomedical engineering',
    arabic: 'الهندسة الطبية الحيوية',
    icon: '🩺',
    definition_en: 'The application of engineering principles to medicine and biology.',
    definition_ar: 'تطبيق مبادئ الهندسة على الطب والأحياء.'
  },
  {
    english: 'prosthetics',
    arabic: 'الأطراف الصناعية',
    icon: '🦿',
    definition_en: 'Artificial devices that replace missing body parts.',
    definition_ar: 'أجهزة اصطناعية تحل محل أجزاء الجسم المفقودة.'
  },
  {
    english: 'medical imaging',
    arabic: 'التصوير الطبي',
    icon: '🩻',
    definition_en: 'Techniques and processes used to create images of the human body.',
    definition_ar: 'التقنيات والعمليات المستخدمة لإنشاء صور لجسم الإنسان.'
  },
  {
    english: 'telemedicine',
    arabic: 'الطب عن بعد',
    icon: '📱',
    definition_en: 'The remote diagnosis and treatment of patients by means of telecommunications technology.',
    definition_ar: 'تشخيص وعلاج المرضى عن بعد بواسطة تقنيات الاتصالات.'
  },
  {
    english: 'aerospace engineering',
    arabic: 'هندسة الفضاء الجوي',
    icon: '🚀',
    definition_en: 'The branch of engineering concerned with the development of aircraft and spacecraft.',
    definition_ar: 'فرع الهندسة الذي يتعامل مع تطوير الطائرات والمركبات الفضائية.'
  },
  {
    english: 'propulsion',
    arabic: 'الدفع',
    icon: '🚀',
    definition_en: 'The action or process of driving something forward.',
    definition_ar: 'الفعل أو عملية دفع شيء إلى الأمام.'
  },
  {
    english: 'aerodynamics',
    arabic: 'الديناميكا الهوائية',
    icon: '✈️',
    definition_en: 'The study of the motion of air, particularly when it interacts with a solid object.',
    definition_ar: 'دراسة حركة الهواء، خاصة عند تفاعله مع جسم صلب.'
  },
  {
    english: 'avionics',
    arabic: 'الإلكترونيات الجوية',
    icon: '🛩️',
    definition_en: 'The electronic systems used on aircraft.',
    definition_ar: 'الأنظمة الإلكترونية المستخدمة في الطائرات.'
  },
  {
    english: 'navigation',
    arabic: 'الملاحة',
    icon: '🧭',
    definition_en: 'The process of planning and controlling the movement of a craft or vehicle.',
    definition_ar: 'عملية التخطيط والتحكم في حركة مركبة أو مركبة.'
  },
  {
    english: 'geodesy',
    arabic: 'الجيوديسيا',
    icon: '🌍',
    definition_en: 'The branch of mathematics dealing with the shape and area of the earth.',
    definition_ar: 'فرع الرياضيات الذي يتعامل مع شكل ومساحة الأرض.'
  },
  {
    english: 'cartography',
    arabic: 'رسم الخرائط',
    icon: '🗺️',
    definition_en: 'The science and art of making maps.',
    definition_ar: 'علم وفن رسم الخرائط.'
  },
  {
    english: 'geographic information system',
    arabic: 'نظام المعلومات الجغرافية',
    icon: '🗺️',
    definition_en: 'A system designed to capture, store, manipulate, analyze, manage, and present spatial or geographic data.',
    definition_ar: 'نظام مصمم لالتقاط وتخزين ومعالجة وتحليل وإدارة وعرض البيانات المكانية أو الجغرافية.'
  },
  {
    english: 'remote sensing',
    arabic: 'الاستشعار عن بعد',
    icon: '🛰️',
    definition_en: 'The acquisition of information about an object without being in physical contact with it.',
    definition_ar: 'الحصول على معلومات عن جسم دون الاتصال الجسدي به.'
  },
  {
    english: 'photogrammetry',
    arabic: 'التصوير المقياسي',
    icon: '📷',
    definition_en: 'The science of making measurements from photographs.',
    definition_ar: 'علم إجراء القياسات من الصور.'
  },
  {
    english: 'supply chain management',
    arabic: 'إدارة سلسلة التوريد',
    icon: '📦',
    definition_en: 'The management of the flow of goods and services.',
    definition_ar: 'إدارة تدفق السلع والخدمات.'
  },
  {
    english: 'project management',
    arabic: 'إدارة المشاريع',
    icon: '📋',
    definition_en: 'The practice of initiating, planning, executing, controlling, and closing the work of a team.',
    definition_ar: 'ممارسة بدء وتخطيط وتنفيذ والتحكم وإغلاق عمل فريق.'
  },
  {
    english: 'risk assessment',
    arabic: 'تقييم المخاطر',
    icon: '⚠️',
    definition_en: 'The identification, evaluation, and prioritization of risks.',
    definition_ar: 'تحديد وتقييم وترتيب أولويات المخاطر.'
  },
  {
    english: 'quality control',
    arabic: 'مراقبة الجودة',
    icon: '✅',
    definition_en: 'A process by which entities review the quality of all factors involved in production.',
    definition_ar: 'عملية يراجع فيها الكيانات جودة جميع العوامل المشاركة في الإنتاج.'
  },
  {
    english: 'lean manufacturing',
    arabic: 'التصنيع النحيل',
    icon: '🏭',
    definition_en: 'A methodology that focuses on minimizing waste within manufacturing systems.',
    definition_ar: 'منهجية تركز على تقليل النفايات داخل أنظمة التصنيع.'
  },
  {
    english: 'six sigma',
    arabic: 'ستة سيجما',
    icon: '📊',
    definition_en: 'A set of techniques and tools for process improvement.',
    definition_ar: 'مجموعة من التقنيات والأدوات لتحسين العمليات.'
  },
  {
    english: 'total quality management',
    arabic: 'الإدارة الشاملة للجودة',
    icon: '🎯',
    definition_en: 'A management approach to long-term success through customer satisfaction.',
    definition_ar: 'نهج إداري للنجاح طويل الأمد من خلال رضا العملاء.'
  },
  {
    english: 'ergonomics',
    arabic: 'علم الإرجونوميا',
    icon: '🪑',
    definition_en: 'The scientific discipline concerned with the understanding of interactions among humans and other elements.',
    definition_ar: 'التخصص العلمي الذي يتعامل مع فهم التفاعلات بين البشر والعناصر الأخرى.'
  },
  {
    english: 'human factors engineering',
    arabic: 'هندسة العوامل البشرية',
    icon: '👥',
    definition_en: 'The application of human factors to the design of equipment and devices.',
    definition_ar: 'تطبيق العوامل البشرية على تصميم المعدات والأجهزة.'
  },
  {
    english: 'industrial design',
    arabic: 'التصميم الصناعي',
    icon: '🎨',
    definition_en: 'The professional service of creating and developing concepts and specifications.',
    definition_ar: 'الخدمة المهنية لإنشاء وتطوير المفاهيم والمواصفات.'
  },
  {
    english: 'product lifecycle',
    arabic: 'دورة حياة المنتج',
    icon: '🔄',
    definition_en: 'The process a product goes through from inception to market removal.',
    definition_ar: 'العملية التي يمر بها المنتج من البداية إلى إزالته من السوق.'
  },
  {
    english: 'reverse engineering',
    arabic: 'الهندسة العكسية',
    icon: '🔄',
    definition_en: 'The process of analyzing a product to identify its design, architecture, or to extract knowledge.',
    definition_ar: 'عملية تحليل منتج لتحديد تصميمه أو بنيته أو استخراج المعرفة.'
  },
  {
    english: 'prototyping',
    arabic: 'النمذجة الأولية',
    icon: '🛠️',
    definition_en: 'The process of creating an early sample or model of a product.',
    definition_ar: 'عملية إنشاء عينة أولية أو نموذج للمنتج.'
  },
  {
    english: 'computational fluid dynamics',
    arabic: 'ديناميكا الموائع الحاسوبية',
    icon: '💻',
    definition_en: 'A branch of fluid mechanics that uses numerical analysis and algorithms.',
    definition_ar: 'فرع من ميكانيكا الموائع يستخدم التحليل العددي والخوارزميات.'
  },
  {
    english: 'finite element analysis',
    arabic: 'تحليل العناصر المحدودة',
    icon: '🔬',
    definition_en: 'A numerical method for solving problems of engineering and mathematical physics.',
    definition_ar: 'طريقة عددية لحل مشكلات الهندسة والفيزياء الرياضية.'
  },
  {
    english: 'computer-aided design',
    arabic: 'التصميم بمساعدة الحاسوب',
    icon: '💻',
    definition_en: 'The use of computer systems to aid in the creation, modification, analysis, or optimization of a design.',
    definition_ar: 'استخدام أنظمة الحواسيب للمساعدة في إنشاء أو تعديل أو تحليل أو تحسين تصميم.'
  },
  {
    english: 'computer-aided manufacturing',
    arabic: 'التصنيع بمساعدة الحاسوب',
    icon: '🏭',
    definition_en: 'The use of software to control machine tools and related machinery in manufacturing.',
    definition_ar: 'استخدام البرمجيات للتحكم في أدوات الآلات والآلات ذات الصلة في التصنيع.'
  },
  {
    english: 'additive manufacturing',
    arabic: 'التصنيع الإضافي',
    icon: '🖨️',
    definition_en: 'The process of creating objects by adding material layer by layer.',
    definition_ar: 'عملية إنشاء الأجسام بإضافة المادة طبقة تلو الأخرى.'
  },
  {
    english: '3d printing',
    arabic: 'الطباعة ثلاثية الأبعاد',
    icon: '🖨️',
    definition_en: 'A process of making three-dimensional solid objects from a digital file.',
    definition_ar: 'عملية صنع أجسام صلبة ثلاثية الأبعاد من ملف رقمي.'
  },
  {
    english: 'nanotechnology',
    arabic: 'النانوتكنولوجيا',
    icon: '🔬',
    definition_en: 'The manipulation of matter on an atomic, molecular, and supramolecular scale.',
    definition_ar: 'التلاعب بالمادة على المقياس الذري والجزيئي والفوق جزيئي.'
  },
  {
    english: 'biotechnology',
    arabic: 'التكنولوجيا الحيوية',
    icon: '🧬',
    definition_en: 'The use of living systems and organisms to develop or make products.',
    definition_ar: 'استخدام الأنظمة الحية والكائنات لتطوير أو صنع المنتجات.'
  },
  {
    english: 'bioinformatics',
    arabic: 'المعلوماتية الحيوية',
    icon: '🧬',
    definition_en: 'The application of computer technology to the management of biological information.',
    definition_ar: 'تطبيق تقنية الحاسوب على إدارة المعلومات البيولوجية.'
  },
  {
    english: 'pharmaceutical engineering',
    arabic: 'الهندسة الصيدلانية',
    icon: '💊',
    definition_en: 'The branch of engineering focused on the development and manufacture of pharmaceutical products.',
    definition_ar: 'فرع الهندسة الذي يركز على تطوير وتصنيع المنتجات الصيدلانية.'
  },
  {
    english: 'chemical engineering',
    arabic: 'الهندسة الكيميائية',
    icon: '🧪',
    definition_en: 'The branch of engineering that deals with the design and development of processes.',
    definition_ar: 'فرع الهندسة الذي يتعامل مع تصميم وتطوير العمليات.'
  },
  {
    english: 'process engineering',
    arabic: 'هندسة العمليات',
    icon: '⚙️',
    definition_en: 'The understanding and development of an effective and efficient process.',
    definition_ar: 'فهم وتطوير عملية فعالة وفعالة.'
  },
  {
    english: 'petroleum engineering',
    arabic: 'هندسة البترول',
    icon: '⛽',
    definition_en: 'The branch of engineering concerned with the activities related to the production of hydrocarbons.',
    definition_ar: 'فرع الهندسة الذي يتعامل مع الأنشطة المتعلقة بإنتاج الهيدروكربونات.'
  },
  {
    english: 'mining engineering',
    arabic: 'هندسة التعدين',
    icon: '⛏️',
    definition_en: 'The branch of engineering that deals with the science, technology, and application of extracting minerals.',
    definition_ar: 'فرع الهندسة الذي يتعامل مع علم وتكنولوجيا وتطبيق استخراج المعادن.'
  },
  {
    english: 'geotechnical engineering',
    arabic: 'الهندسة الجيوتقنية',
    icon: '🌍',
    definition_en: 'The branch of civil engineering concerned with the engineering behavior of earth materials.',
    definition_ar: 'فرع الهندسة المدنية الذي يتعامل مع سلوك الهندسة لمواد الأرض.'
  },
  {
    english: 'hydraulics',
    arabic: 'الهيدروليكا',
    icon: '💧',
    definition_en: 'The branch of science and engineering concerned with the conveyance of liquids through pipes.',
    definition_ar: 'فرع العلم والهندسة الذي يتعامل مع نقل السوائل عبر الأنابيب.'
  },
  {
    english: 'pneumatics',
    arabic: 'النيوماتيكا',
    icon: '💨',
    definition_en: 'The branch of engineering that deals with the mechanical properties of gases.',
    definition_ar: 'فرع الهندسة الذي يتعامل مع الخصائص الميكانيكية للغازات.'
  },
  {
    english: 'mass transfer',
    arabic: 'نقل الكتلة',
    icon: '⚖️',
    definition_en: 'The net movement of mass from one location to another.',
    definition_ar: 'الحركة الصافية للكتلة من موقع إلى آخر.'
  },
  {
    english: 'reaction engineering',
    arabic: 'هندسة التفاعلات',
    icon: '🧪',
    definition_en: 'The branch of chemical engineering that deals with chemical reactors.',
    definition_ar: 'فرع الهندسة الكيميائية الذي يتعامل مع المفاعلات الكيميائية.'
  },
  {
    english: 'catalysis',
    arabic: 'التحفيز',
    icon: '⚗️',
    definition_en: 'The process of increasing the rate of a chemical reaction by adding a catalyst.',
    definition_ar: 'عملية زيادة معدل التفاعل الكيميائي بإضافة محفز.'
  },
  {
    english: 'distillation',
    arabic: 'التقطير',
    icon: '🧪',
    definition_en: 'A separation process consisting of the components of a liquid mixture.',
    definition_ar: 'عملية فصل تتكون من مكونات خليط سائل.'
  },
  {
    english: 'extraction',
    arabic: 'الاستخلاص',
    icon: '🧪',
    definition_en: 'The process of separating a substance from a mixture.',
    definition_ar: 'عملية فصل مادة من خليط.'
  },
  {
    english: 'filtration',
    arabic: 'الترشيح',
    icon: '🧽',
    definition_en: 'The process of separating solids from liquids by passing through a medium.',
    definition_ar: 'عملية فصل المواد الصلبة من السوائل بتمريرها عبر وسط.'
  },
  {
    english: 'centrifugation',
    arabic: 'الطرد المركزي',
    icon: '🌀',
    definition_en: 'The process of separating substances of different densities by centrifugal force.',
    definition_ar: 'عملية فصل المواد ذات الكثافات المختلفة بالقوة الطاردة المركزية.'
  },
  {
    english: 'crystallization',
    arabic: 'التبلور',
    icon: '❄️',
    definition_en: 'The process of forming solid crystals from a homogeneous solution.',
    definition_ar: 'عملية تشكيل بلورات صلبة من محلول متجانس.'
  },
  {
    english: 'evaporation',
    arabic: 'التبخير',
    icon: '💨',
    definition_en: 'The process of turning liquid into vapor.',
    definition_ar: 'عملية تحويل السائل إلى بخار.'
  },
  {
    english: 'drying',
    arabic: 'التجفيف',
    icon: '☀️',
    definition_en: 'The process of removing moisture from a substance.',
    definition_ar: 'عملية إزالة الرطوبة من مادة.'
  },
  {
    english: 'grinding',
    arabic: 'الطحن',
    icon: '🔨',
    definition_en: 'The process of reducing particle size of a material.',
    definition_ar: 'عملية تقليل حجم الجسيمات لمادة.'
  },
  {
    english: 'milling',
    arabic: 'الطحن',
    icon: '🔨',
    definition_en: 'The process of grinding, crushing, or pulverizing a solid material.',
    definition_ar: 'عملية طحن أو سحق أو تحطيم مادة صلبة.'
  },
  {
    english: 'apple',
    arabic: 'تفاحة',
    icon: '🍎',
    definition_en: 'A round fruit with red, green, or yellow skin.',
    definition_ar: 'فاكهة مستديرة ذات قشرة حمراء أو خضراء أو صفراء.'
  },
  {
    english: 'book',
    arabic: 'كتاب',
    icon: '📖',
    definition_en: 'A set of written or printed pages bound together.',
    definition_ar: 'مجموعة من الصفحات المكتوبة أو المطبوعة ومجمعة معًا.'
  },
  {
    english: 'cat',
    arabic: 'قطة',
    icon: '🐱',
    definition_en: 'A small domesticated carnivorous mammal.',
    definition_ar: 'حيوان لاحم صغير مستأنس.'
  },
  {
    english: 'dog',
    arabic: 'كلب',
    icon: '🐶',
    definition_en: 'A domesticated carnivorous mammal with a keen sense of smell.',
    definition_ar: 'حيوان لاحم مستأنس ذو حاسة شم قوية.'
  },
  {
    english: 'sun',
    arabic: 'الشمس',
    icon: '☀️',
    definition_en: 'The star around which the Earth orbits, providing light and heat.',
    definition_ar: 'النجم الذي تدور حوله الأرض، ويزودها بالضوء والحرارة.'
  },
  {
    english: 'moon',
    arabic: 'القمر',
    icon: '🌙',
    definition_en: 'The natural satellite that orbits the Earth.',
    definition_ar: 'القمر الطبيعي الذي يدور حول الأرض.'
  },
  {
    english: 'flower',
    arabic: 'زهرة',
    icon: '🌸',
    definition_en: 'The seed-bearing part of a plant, often colorful and fragrant.',
    definition_ar: 'جزء من النبات يحمل البذور وغالبًا ما يكون ملونًا وعطريًا.'
  },
  {
    english: 'water',
    arabic: 'ماء',
    icon: '💧',
    definition_en: 'A transparent, tasteless, odorless liquid essential for life.',
    definition_ar: 'سائل شفاف بلا طعم أو رائحة، ضروري للحياة.'
  },
  {
    english: 'bird',
    arabic: 'طائر',
    icon: '🐦',
    definition_en: 'A warm-blooded egg-laying vertebrate distinguished by feathers.',
    definition_ar: 'فقاري ذو دم دافئ يبيض ومميز بالريش.'
  },
  {
    english: 'chair',
    arabic: 'كرسي',
    icon: '🪑',
    definition_en: 'A separate seat for one person, typically with a back and four legs.',
    definition_ar: 'مقعد منفصل لشخص واحد، عادة له ظهر وأربع أرجل.'
  },
  {
    english: 'table',
    arabic: 'طاولة',
    icon: '🛋️',
    definition_en: 'A piece of furniture with a flat top supported by legs.',
    definition_ar: 'قطعة أثاث ذات سطح مستوي مدعوم بأرجل.'
  },
  {
    english: 'phone',
    arabic: 'هاتف',
    icon: '📱',
    definition_en: 'A device used for voice communication over distances.',
    definition_ar: 'جهاز يستخدم للتواصل الصوتي عبر المسافات.'
  },
  {
    english: 'computer',
    arabic: 'حاسوب',
    icon: '💻',
    definition_en: 'An electronic device for storing and processing data.',
    definition_ar: 'جهاز إلكتروني لتخزين ومعالجة البيانات.'
  },
  {
    english: 'music',
    arabic: 'موسيقى',
    icon: '🎵',
    definition_en: 'The art of arranging sounds in time to produce a composition.',
    definition_ar: 'فن ترتيب الأصوات في الوقت لإنتاج قطعة موسيقية.'
  },
  {
    english: 'car',
    arabic: 'سيارة',
    icon: '🚗',
    definition_en: 'A road vehicle, typically with four wheels, powered by an engine.',
    definition_ar: 'مركبة على الطريق، عادة بأربع عجلات، تعمل بمحرك.'
  },
  {
    english: 'river',
    arabic: 'نهر',
    icon: '🏞️',
    definition_en: 'A large natural stream of water flowing in a channel.',
    definition_ar: 'مجموعة كبيرة من المياه الطبيعية تتدفق في مجرى.'
  },
  {
    english: 'mountain',
    arabic: 'جبل',
    icon: '⛰️',
    definition_en: 'A large natural elevation of the earth’s surface.',
    definition_ar: 'ارتفاع طبيعي كبير في سطح الأرض.'
  },
  {
    english: 'rain',
    arabic: 'مطر',
    icon: '🌧️',
    definition_en: 'Water droplets that fall from clouds in the sky.',
    definition_ar: 'قطرات ماء تتساقط من السحب في السماء.'
  },
  {
    english: 'bookstore',
    arabic: 'مكتبة',
    icon: '🏪',
    definition_en: 'A place where books are sold.',
    definition_ar: 'مكان تُباع فيه الكتب.'
  },
  {
    english: 'elephant',
    arabic: 'فيل',
    icon: '🐘',
    definition_en: 'A large mammal with a trunk.',
    definition_ar: 'ثديي كبير ذو خرطوم.'
  },
  {
    english: 'garden',
    arabic: 'حديقة',
    icon: '🌳',
    definition_en: 'A piece of ground where plants are grown.',
    definition_ar: 'قطعة أرض يزرع فيها النباتات.'
  },
  {
    english: 'house',
    arabic: 'منزل',
    icon: '🏠',
    definition_en: 'A building for human habitation.',
    definition_ar: 'مبنى للسكن البشري.'
  },
  {
    english: 'ice',
    arabic: 'جليد',
    icon: '🧊',
    definition_en: 'Frozen water.',
    definition_ar: 'ماء مجمد.'
  },
  {
    english: 'jungle',
    arabic: 'غابة',
    icon: '🌴',
    definition_en: 'A dense forest in a tropical region.',
    definition_ar: 'غابة كثيفة في منطقة استوائية.'
  },
  {
    english: 'kite',
    arabic: 'طائرة ورقية',
    icon: '🪁',
    definition_en: 'A toy flown in the wind.',
    definition_ar: 'لعبة تطير في الرياح.'
  },
  {
    english: 'lamp',
    arabic: 'مصباح',
    icon: '💡',
    definition_en: 'A device for giving light.',
    definition_ar: 'جهاز لإعطاء الضوء.'
  },
  {
    english: 'nose',
    arabic: 'أنف',
    icon: '👃',
    definition_en: 'The organ for smelling and breathing.',
    definition_ar: 'العضو للشم والتنفس.'
  },
  {
    english: 'ocean',
    arabic: 'محيط',
    icon: '🌊',
    definition_en: 'A large body of salt water.',
    definition_ar: 'جسم كبير من الماء المالح.'
  },
  {
    english: 'piano',
    arabic: 'بيانو',
    icon: '🎹',
    definition_en: 'A musical instrument with keys.',
    definition_ar: 'آلة موسيقية ذات مفاتيح.'
  },
  {
    english: 'queen',
    arabic: 'ملكة',
    icon: '👸',
    definition_en: 'A female monarch.',
    definition_ar: 'ملكة أنثى.'
  },
  {
    english: 'umbrella',
    arabic: 'مظلة',
    icon: '☂️',
    definition_en: 'A device for protection from rain.',
    definition_ar: 'جهاز للحماية من المطر.'
  },
  {
    english: 'violin',
    arabic: 'كمان',
    icon: '🎻',
    definition_en: 'A stringed musical instrument.',
    definition_ar: 'آلة موسيقية وترية.'
  },
  {
    english: 'xylophone',
    arabic: 'زيلوفون',
    icon: '🎵',
    definition_en: 'A musical instrument with bars.',
    definition_ar: 'آلة موسيقية ذات قضبان.'
  },
  {
    english: 'yacht',
    arabic: 'يخت',
    icon: '⛵',
    definition_en: 'A sailing boat.',
    definition_ar: 'قارب شراعي.'
  },
  {
    english: 'zebra',
    arabic: 'حمار وحشي',
    icon: '🦓',
    definition_en: 'An African wild horse with stripes.',
    definition_ar: 'حصان أفريقي بري ذو خطوط.'
  },
  {
    english: 'airplane',
    arabic: 'طائرة',
    icon: '✈️',
    definition_en: 'A powered flying vehicle.',
    definition_ar: 'مركبة طائرة مدعومة.'
  },
  {
    english: 'banana',
    arabic: 'موزة',
    icon: '🍌',
    definition_en: 'A long curved fruit.',
    definition_ar: 'فاكهة طويلة منحنية.'
  },
  {
    english: 'door',
    arabic: 'باب',
    icon: '🚪',
    definition_en: 'A hinged barrier for entry.',
    definition_ar: 'حاجز مفصلي للدخول.'
  },
  {
    english: 'egg',
    arabic: 'بيضة',
    icon: '🥚',
    definition_en: 'An oval reproductive body.',
    definition_ar: 'جسم إنجابي بيضاوي.'
  },
  {
    english: 'fish',
    arabic: 'سمكة',
    icon: '🐟',
    definition_en: 'A cold-blooded aquatic animal.',
    definition_ar: 'حيوان مائي بارد الدم.'
  },
  {
    english: 'grape',
    arabic: 'عنبة',
    icon: '🍇',
    definition_en: 'A small round fruit.',
    definition_ar: 'فاكهة صغيرة مستديرة.'
  },
  {
    english: 'hat',
    arabic: 'قبعة',
    icon: '🎩',
    definition_en: 'A head covering.',
    definition_ar: 'غطاء للرأس.'
  },
  {
    english: 'island',
    arabic: 'جزيرة',
    icon: '🏝️',
    definition_en: 'A piece of land surrounded by water.',
    definition_ar: 'قطعة أرض محاطة بالماء.'
  },
  {
    english: 'jacket',
    arabic: 'جاكيت',
    icon: '🧥',
    definition_en: 'A short coat.',
    definition_ar: 'معطف قصير.'
  },
  {
    english: 'key',
    arabic: 'مفتاح',
    icon: '🔑',
    definition_en: 'A device for opening locks.',
    definition_ar: 'جهاز لفتح الأقفال.'
  },
  {
    english: 'lemon',
    arabic: 'ليمون',
    icon: '🍋',
    definition_en: 'A yellow citrus fruit.',
    definition_ar: 'فاكهة حمراء حامضة.'
  },
  {
    english: 'night',
    arabic: 'ليل',
    icon: '🌙',
    definition_en: 'The period of darkness.',
    definition_ar: 'فترة الظلام.'
  },
  {
    english: 'orange',
    arabic: 'برتقالة',
    icon: '🍊',
    definition_en: 'A round citrus fruit.',
    definition_ar: 'فاكهة مستديرة حمضية.'
  },
  {
    english: 'pen',
    arabic: 'قلم',
    icon: '✒️',
    definition_en: 'A writing instrument.',
    definition_ar: 'أداة كتابة.'
  },
  {
    english: 'quilt',
    arabic: 'لحاف',
    icon: '🛏️',
    definition_en: 'A bed covering.',
    definition_ar: 'غطاء سرير.'
  },
  {
    english: 'rose',
    arabic: 'وردة',
    icon: '🌹',
    definition_en: 'A flowering plant.',
    definition_ar: 'نبات مزهر.'
  },
  {
    english: 'star',
    arabic: 'نجم',
    icon: '⭐',
    definition_en: 'A celestial body.',
    definition_ar: 'جسم سماوي.'
  },
  {
    english: 'van',
    arabic: 'فان',
    icon: '🚐',
    definition_en: 'A vehicle for carrying goods.',
    definition_ar: 'مركبة لنقل البضائع.'
  },
  {
    english: 'window',
    arabic: 'نافذة',
    icon: '🪟',
    definition_en: 'An opening in a wall.',
    definition_ar: 'فتحة في الجدار.'
  },
  {
    english: 'yellow',
    arabic: 'أصفر',
    icon: '🟡',
    definition_en: 'A color.',
    definition_ar: 'لون.'
  },
  {
    english: 'zoo',
    arabic: 'حديقة حيوان',
    icon: '🦁',
    definition_en: 'A place where animals are kept.',
    definition_ar: 'مكان يحتفظ فيه بالحيوانات.'
  },
  {
    english: 'school',
    arabic: 'مدرسة',
    icon: '🏫',
    definition_en: 'An institution for educating children.',
    definition_ar: 'مؤسسة لتعليم الأطفال.'
  },
  {
    english: 'teacher',
    arabic: 'معلم',
    icon: '👩‍🏫',
    definition_en: 'A person who teaches.',
    definition_ar: 'شخص يعلم.'
  },
  {
    english: 'student',
    arabic: 'طالب',
    icon: '👨‍🎓',
    definition_en: 'A person who is studying.',
    definition_ar: 'شخص يدرس.'
  },
  {
    english: 'classroom',
    arabic: 'فصل دراسي',
    icon: '🏫',
    definition_en: 'A room in a school where lessons take place.',
    definition_ar: 'غرفة في المدرسة حيث تجري الدروس.'
  },
  {
    english: 'desk',
    arabic: 'مكتب',
    icon: '🪑',
    definition_en: 'A piece of furniture with a flat top for writing.',
    definition_ar: 'قطعة أثاث ذات سطح مستوي للكتابة.'
  },
  {
    english: 'pencil',
    arabic: 'قلم رصاص',
    icon: '✏️',
    definition_en: 'A writing instrument with a graphite core.',
    definition_ar: 'أداة كتابة ذات لب جرافيت.'
  },
  {
    english: 'paper',
    arabic: 'ورق',
    icon: '📄',
    definition_en: 'A material made from wood pulp.',
    definition_ar: 'مادة مصنوعة من لب الخشب.'
  },
  {
    english: 'television',
    arabic: 'تلفزيون',
    icon: '📺',
    definition_en: 'A device for receiving broadcast signals.',
    definition_ar: 'جهاز لاستقبال الإشارات المبثوثة.'
  },
  {
    english: 'radio',
    arabic: 'راديو',
    icon: '📻',
    definition_en: 'A device for receiving radio broadcasts.',
    definition_ar: 'جهاز لاستقبال البث الإذاعي.'
  },
  {
    english: 'newspaper',
    arabic: 'جريدة',
    icon: '📰',
    definition_en: 'A printed publication with news.',
    definition_ar: 'منشور مطبوع يحتوي على أخبار.'
  },
  {
    english: 'magazine',
    arabic: 'مجلة',
    icon: '📖',
    definition_en: 'A periodical publication.',
    definition_ar: 'منشور دوري.'
  },
  {
    english: 'movie',
    arabic: 'فيلم',
    icon: '🎥',
    definition_en: 'A story told through moving images.',
    definition_ar: 'قصة تُروى من خلال صور متحركة.'
  },
  {
    english: 'song',
    arabic: 'أغنية',
    icon: '🎶',
    definition_en: 'A musical composition with lyrics.',
    definition_ar: 'تركيب موسيقي مع كلمات.'
  },
  {
    english: 'dance',
    arabic: 'رقص',
    icon: '💃',
    definition_en: 'A series of movements to music.',
    definition_ar: 'سلسلة من الحركات على الموسيقى.'
  },
  {
    english: 'art',
    arabic: 'فن',
    icon: '🎨',
    definition_en: 'The expression of human creativity.',
    definition_ar: 'تعبير عن الإبداع البشري.'
  },
  {
    english: 'painting',
    arabic: 'رسم',
    icon: '🖼️',
    definition_en: 'The practice of applying paint to a surface.',
    definition_ar: 'ممارسة تطبيق الطلاء على سطح.'
  },
  {
    english: 'sculpture',
    arabic: 'نحت',
    icon: '🗿',
    definition_en: 'A three-dimensional artwork.',
    definition_ar: 'عمل فني ثلاثي الأبعاد.'
  },
  {
    english: 'photography',
    arabic: 'تصوير',
    icon: '📷',
    definition_en: 'The art of capturing images.',
    definition_ar: 'فن التقاط الصور.'
  },
  {
    english: 'theater',
    arabic: 'مسرح',
    icon: '🎭',
    definition_en: 'A building or outdoor area for performances.',
    definition_ar: 'مبنى أو منطقة خارجية للعروض.'
  },
  {
    english: 'concert',
    arabic: 'حفل موسيقي',
    icon: '🎤',
    definition_en: 'A musical performance.',
    definition_ar: 'عرض موسيقي.'
  },
  {
    english: 'festival',
    arabic: 'مهرجان',
    icon: '🎉',
    definition_en: 'A celebration or series of performances.',
    definition_ar: 'احتفال أو سلسلة من العروض.'
  },
  {
    english: 'party',
    arabic: 'حفلة',
    icon: '🎊',
    definition_en: 'A social gathering.',
    definition_ar: 'تجمع اجتماعي.'
  },
  {
    english: 'holiday',
    arabic: 'عطلة',
    icon: '🏖️',
    definition_en: 'A day of rest or celebration.',
    definition_ar: 'يوم راحة أو احتفال.'
  },
  {
    english: 'vacation',
    arabic: 'إجازة',
    icon: '✈️',
    definition_en: 'A period of time spent away from work.',
    definition_ar: 'فترة زمنية قضيت بعيداً عن العمل.'
  },
  {
    english: 'trip',
    arabic: 'رحلة',
    icon: '🗺️',
    definition_en: 'A journey to a place.',
    definition_ar: 'رحلة إلى مكان.'
  },
  {
    english: 'journey',
    arabic: 'رحلة',
    icon: '🚶',
    definition_en: 'An act of traveling from one place to another.',
    definition_ar: 'فعل السفر من مكان إلى آخر.'
  },
  {
    english: 'adventure',
    arabic: 'مغامرة',
    icon: '🏔️',
    definition_en: 'An exciting experience.',
    definition_ar: 'تجربة مثيرة.'
  },
  {
    english: 'exploration',
    arabic: 'استكشاف',
    icon: '🔍',
    definition_en: 'The act of exploring.',
    definition_ar: 'فعل الاستكشاف.'
  },
  {
    english: 'discovery',
    arabic: 'اكتشاف',
    icon: '🔬',
    definition_en: 'The act of finding something new.',
    definition_ar: 'فعل العثور على شيء جديد.'
  },
  {
    english: 'invention',
    arabic: 'اختراع',
    icon: '💡',
    definition_en: 'The creation of a new device or process.',
    definition_ar: 'إنشاء جهاز أو عملية جديدة.'
  },
  {
    english: 'innovation',
    arabic: 'ابتكار',
    icon: '🚀',
    definition_en: 'The introduction of new ideas.',
    definition_ar: 'إدخال أفكار جديدة.'
  },
  {
    english: 'technology',
    arabic: 'تكنولوجيا',
    icon: '⚙️',
    definition_en: 'The application of scientific knowledge.',
    definition_ar: 'تطبيق المعرفة العلمية.'
  },
  {
    english: 'science',
    arabic: 'علم',
    icon: '🔬',
    definition_en: 'The systematic study of the natural world.',
    definition_ar: 'الدراسة المنهجية للعالم الطبيعي.'
  },
  {
    english: 'mathematics',
    arabic: 'رياضيات',
    icon: '📐',
    definition_en: 'The study of numbers and shapes.',
    definition_ar: 'دراسة الأرقام والأشكال.'
  },
  {
    english: 'physics',
    arabic: 'فيزياء',
    icon: '⚛️',
    definition_en: 'The study of matter and energy.',
    definition_ar: 'دراسة المادة والطاقة.'
  },
  {
    english: 'chemistry',
    arabic: 'كيمياء',
    icon: '🧪',
    definition_en: 'The study of substances and their reactions.',
    definition_ar: 'دراسة المواد وتفاعلاتها.'
  },
  {
    english: 'biology',
    arabic: 'أحياء',
    icon: '🧬',
    definition_en: 'The study of living organisms.',
    definition_ar: 'دراسة الكائنات الحية.'
  },
  {
    english: 'history',
    arabic: 'تاريخ',
    icon: '📜',
    definition_en: 'The study of past events.',
    definition_ar: 'دراسة الأحداث الماضية.'
  },
  {
    english: 'language',
    arabic: 'لغة',
    icon: '🗣️',
    definition_en: 'A system of communication.',
    definition_ar: 'نظام تواصل.'
  },
  {
    english: 'literature',
    arabic: 'أدب',
    icon: '📚',
    definition_en: 'Written works of art.',
    definition_ar: 'أعمال فنية مكتوبة.'
  },
  {
    english: 'poetry',
    arabic: 'شعر',
    icon: '📝',
    definition_en: 'Literary work in verse.',
    definition_ar: 'عمل أدبي في الشعر.'
  },
  {
    english: 'novel',
    arabic: 'رواية',
    icon: '📖',
    definition_en: 'A long fictional story.',
    definition_ar: 'قصة خيالية طويلة.'
  },
  {
    english: 'story',
    arabic: 'قصة',
    icon: '📖',
    definition_en: 'An account of imaginary or real events.',
    definition_ar: 'حساب لأحداث خيالية أو حقيقية.'
  },
  {
    english: 'play',
    arabic: 'لعب',
    icon: '🎮',
    definition_en: 'An activity done for enjoyment.',
    definition_ar: 'نشاط يتم للمتعة.'
  },
  {
    english: 'game',
    arabic: 'لعبة',
    icon: '🎲',
    definition_en: 'An activity with rules for fun.',
    definition_ar: 'نشاط ذو قواعد للمتعة.'
  },
  {
    english: 'sport',
    arabic: 'رياضة',
    icon: '⚽',
    definition_en: 'An organized physical activity.',
    definition_ar: 'نشاط بدني منظم.'
  },
  {
    english: 'football',
    arabic: 'كرة قدم',
    icon: '⚽',
    definition_en: 'A game played with a ball.',
    definition_ar: 'لعبة تُلعب بالكرة.'
  },
  {
    english: 'basketball',
    arabic: 'كرة سلة',
    icon: '🏀',
    definition_en: 'A game played with a ball and hoops.',
    definition_ar: 'لعبة تُلعب بالكرة والحلقات.'
  },
  {
    english: 'tennis',
    arabic: 'تنس',
    icon: '🎾',
    definition_en: 'A racket sport.',
    definition_ar: 'رياضة ذات مضرب.'
  },
  {
    english: 'swimming',
    arabic: 'سباحة',
    icon: '🏊',
    definition_en: 'The act of moving through water.',
    definition_ar: 'فعل الحركة عبر الماء.'
  },
  {
    english: 'running',
    arabic: 'جري',
    icon: '🏃',
    definition_en: 'Moving at a fast pace on foot.',
    definition_ar: 'الحركة بسرعة على الأقدام.'
  },
  {
    english: 'walking',
    arabic: 'مشي',
    icon: '🚶',
    definition_en: 'Moving at a regular pace on foot.',
    definition_ar: 'الحركة بوتيرة منتظمة على الأقدام.'
  },
  {
    english: 'cycling',
    arabic: 'ركوب الدراجة',
    icon: '🚴',
    definition_en: 'Riding a bicycle.',
    definition_ar: 'ركوب دراجة.'
  },
  {
    english: 'driving',
    arabic: 'قيادة',
    icon: '🚗',
    definition_en: 'Operating a vehicle.',
    definition_ar: 'تشغيل مركبة.'
  },
  {
    english: 'flying',
    arabic: 'طيران',
    icon: '✈️',
    definition_en: 'Traveling through the air.',
    definition_ar: 'السفر عبر الهواء.'
  },
  {
    english: 'sailing',
    arabic: 'إبحار',
    icon: '⛵',
    definition_en: 'Traveling by boat.',
    definition_ar: 'السفر بالقارب.'
  },
  {
    english: 'fishing',
    arabic: 'صيد السمك',
    icon: '🎣',
    definition_en: 'Catching fish.',
    definition_ar: 'صيد السمك.'
  },
  {
    english: 'hunting',
    arabic: 'صيد',
    icon: '🏹',
    definition_en: 'Pursuing and killing wild animals.',
    definition_ar: 'مطاردة وقتل الحيوانات البرية.'
  },
  {
    english: 'cooking',
    arabic: 'طبخ',
    icon: '👨‍🍳',
    definition_en: 'Preparing food by heating.',
    definition_ar: 'تحضير الطعام بالتسخين.'
  },
  {
    english: 'baking',
    arabic: 'خبز',
    icon: '🍞',
    definition_en: 'Cooking in an oven.',
    definition_ar: 'الطبخ في الفرن.'
  },
  {
    english: 'eating',
    arabic: 'أكل',
    icon: '🍽️',
    definition_en: 'Consuming food.',
    definition_ar: 'استهلاك الطعام.'
  },
  {
    english: 'drinking',
    arabic: 'شرب',
    icon: '🥤',
    definition_en: 'Consuming liquid.',
    definition_ar: 'استهلاك السائل.'
  },
  {
    english: 'sleeping',
    arabic: 'نوم',
    icon: '😴',
    definition_en: 'Being in a state of rest.',
    definition_ar: 'الكون في حالة راحة.'
  },
  {
    english: 'dreaming',
    arabic: 'حلم',
    icon: '💭',
    definition_en: 'Experiencing visions during sleep.',
    definition_ar: 'تجربة رؤى أثناء النوم.'
  },
  {
    english: 'thinking',
    arabic: 'تفكير',
    icon: '🤔',
    definition_en: 'Using the mind to consider.',
    definition_ar: 'استخدام العقل للنظر.'
  },
  {
    english: 'learning',
    arabic: 'تعلم',
    icon: '📚',
    definition_en: 'Acquiring knowledge.',
    definition_ar: 'اكتساب المعرفة.'
  },
  {
    english: 'teaching',
    arabic: 'تعليم',
    icon: '👨‍🏫',
    definition_en: 'Imparting knowledge.',
    definition_ar: 'نقل المعرفة.'
  },
  {
    english: 'reading',
    arabic: 'قراءة',
    icon: '📖',
    definition_en: 'Looking at and comprehending written words.',
    definition_ar: 'النظر وفهم الكلمات المكتوبة.'
  },
  {
    english: 'writing',
    arabic: 'كتابة',
    icon: '✍️',
    definition_en: 'Marking words on a surface.',
    definition_ar: 'وضع علامات على سطح.'
  },
  {
    english: 'speaking',
    arabic: 'كلام',
    icon: '🗣️',
    definition_en: 'Using voice to communicate.',
    definition_ar: 'استخدام الصوت للتواصل.'
  },
  {
    english: 'listening',
    arabic: 'استماع',
    icon: '👂',
    definition_en: 'Paying attention to sounds.',
    definition_ar: 'الانتباه إلى الأصوات.'
  },
  {
    english: 'seeing',
    arabic: 'رؤية',
    icon: '👀',
    definition_en: 'Perceiving with the eyes.',
    definition_ar: 'الإدراك بالعيون.'
  },
  {
    english: 'hearing',
    arabic: 'سمع',
    icon: '👂',
    definition_en: 'Perceiving sounds.',
    definition_ar: 'إدراك الأصوات.'
  },
  {
    english: 'touching',
    arabic: 'لمس',
    icon: '🤚',
    definition_en: 'Making contact with something.',
    definition_ar: 'التواصل مع شيء.'
  },
  {
    english: 'smelling',
    arabic: 'شم',
    icon: '👃',
    definition_en: 'Perceiving odors.',
    definition_ar: 'إدراك الروائح.'
  },
  {
    english: 'tasting',
    arabic: 'تذوق',
    icon: '👅',
    definition_en: 'Perceiving flavors.',
    definition_ar: 'إدراك النكهات.'
  },
  {
    english: 'feeling',
    arabic: 'شعور',
    icon: '❤️',
    definition_en: 'Experiencing emotion.',
    definition_ar: 'تجربة عاطفة.'
  },
  {
    english: 'loving',
    arabic: 'حب',
    icon: '❤️',
    definition_en: 'Having deep affection.',
    definition_ar: 'امتلاك عاطفة عميقة.'
  },
  {
    english: 'hating',
    arabic: 'كره',
    icon: '😠',
    definition_en: 'Having strong dislike.',
    definition_ar: 'امتلاك كره قوي.'
  },
  {
    english: 'fearing',
    arabic: 'خوف',
    icon: '😨',
    definition_en: 'Being afraid.',
    definition_ar: 'الخوف.'
  },
  {
    english: 'hoping',
    arabic: 'أمل',
    icon: '🤞',
    definition_en: 'Expecting with confidence.',
    definition_ar: 'التوقع بثقة.'
  },
  {
    english: 'wishing',
    arabic: 'تمني',
    icon: '🤞',
    definition_en: 'Desiring something.',
    definition_ar: 'الرغبة في شيء.'
  },
  {
    english: 'wanting',
    arabic: 'رغبة',
    icon: '😍',
    definition_en: 'Having a desire for.',
    definition_ar: 'امتلاك رغبة في.'
  },
  {
    english: 'needing',
    arabic: 'حاجة',
    icon: '🙏',
    definition_en: 'Requiring something.',
    definition_ar: 'الاحتياج إلى شيء.'
  },
  {
    english: 'having',
    arabic: 'امتلاك',
    icon: '🤲',
    definition_en: 'Possessing something.',
    definition_ar: 'امتلاك شيء.'
  },
  {
    english: 'doing',
    arabic: 'فعل',
    icon: '💪',
    definition_en: 'Performing an action.',
    definition_ar: 'أداء عمل.'
  },
  {
    english: 'making',
    arabic: 'صنع',
    icon: '🛠️',
    definition_en: 'Creating something.',
    definition_ar: 'إنشاء شيء.'
  },
  {
    english: 'building',
    arabic: 'بناء',
    icon: '🏗️',
    definition_en: 'Constructing something.',
    definition_ar: 'بناء شيء.'
  },
  {
    english: 'creating',
    arabic: 'إنشاء',
    icon: '🎨',
    definition_en: 'Bringing something into existence.',
    definition_ar: 'إحضار شيء إلى الوجود.'
  },
  {
    english: 'destroying',
    arabic: 'تدمير',
    icon: '💥',
    definition_en: 'Causing ruin.',
    definition_ar: 'إحداث خراب.'
  },
  {
    english: 'helping',
    arabic: 'مساعدة',
    icon: '🤝',
    definition_en: 'Assisting someone.',
    definition_ar: 'مساعدة شخص.'
  },
  {
    english: 'hurting',
    arabic: 'إيذاء',
    icon: '😢',
    definition_en: 'Causing pain.',
    definition_ar: 'إحداث ألم.'
  },
  {
    english: 'healing',
    arabic: 'شفاء',
    icon: '🩹',
    definition_en: 'Restoring health.',
    definition_ar: 'استعادة الصحة.'
  },
  {
    english: 'time',
    arabic: 'وقت',
    icon: '⏰',
    definition_en: 'The indefinite continued progress of existence.',
    definition_ar: 'التقدم المستمر غير المحدد للوجود.'
  },
  {
    english: 'clock',
    arabic: 'ساعة',
    icon: '🕰️',
    definition_en: 'A device for measuring time.',
    definition_ar: 'جهاز لقياس الوقت.'
  },
  {
    english: 'watch',
    arabic: 'ساعة يد',
    icon: '⌚',
    definition_en: 'A small clock worn on the wrist.',
    definition_ar: 'ساعة صغيرة تُرتدى على المعصم.'
  },
  {
    english: 'hour',
    arabic: 'ساعة',
    icon: '🕐',
    definition_en: 'A period of 60 minutes.',
    definition_ar: 'فترة 60 دقيقة.'
  },
  {
    english: 'minute',
    arabic: 'دقيقة',
    icon: '🕒',
    definition_en: 'A period of 60 seconds.',
    definition_ar: 'فترة 60 ثانية.'
  },
  {
    english: 'second',
    arabic: 'ثانية',
    icon: '🕓',
    definition_en: 'A unit of time.',
    definition_ar: 'وحدة زمنية.'
  },
  {
    english: 'day',
    arabic: 'يوم',
    icon: '🌞',
    definition_en: 'A period of 24 hours.',
    definition_ar: 'فترة 24 ساعة.'
  },
  {
    english: 'week',
    arabic: 'أسبوع',
    icon: '📅',
    definition_en: 'A period of seven days.',
    definition_ar: 'فترة سبعة أيام.'
  },
  {
    english: 'month',
    arabic: 'شهر',
    icon: '📆',
    definition_en: 'A period of about 30 days.',
    definition_ar: 'فترة حوالي 30 يوماً.'
  },
  {
    english: 'year',
    arabic: 'سنة',
    icon: '🎉',
    definition_en: 'A period of 365 days.',
    definition_ar: 'فترة 365 يوماً.'
  },
  {
    english: 'morning',
    arabic: 'صباح',
    icon: '🌅',
    definition_en: 'The early part of the day.',
    definition_ar: 'الجزء المبكر من اليوم.'
  },
  {
    english: 'afternoon',
    arabic: 'ظهر',
    icon: '🌞',
    definition_en: 'The middle part of the day.',
    definition_ar: 'الجزء الأوسط من اليوم.'
  },
  {
    english: 'evening',
    arabic: 'مساء',
    icon: '🌆',
    definition_en: 'The later part of the day.',
    definition_ar: 'الجزء المتأخر من اليوم.'
  },
  {
    english: 'today',
    arabic: 'اليوم',
    icon: '📅',
    definition_en: 'The present day.',
    definition_ar: 'اليوم الحالي.'
  },
  {
    english: 'yesterday',
    arabic: 'أمس',
    icon: '📅',
    definition_en: 'The day before today.',
    definition_ar: 'اليوم قبل اليوم.'
  },
  {
    english: 'tomorrow',
    arabic: 'غداً',
    icon: '📅',
    definition_en: 'The day after today.',
    definition_ar: 'اليوم بعد اليوم.'
  },
  {
    english: 'now',
    arabic: 'الآن',
    icon: '⏰',
    definition_en: 'At the present time.',
    definition_ar: 'في الوقت الحالي.'
  },
  {
    english: 'then',
    arabic: 'ثم',
    icon: '⏰',
    definition_en: 'At that time.',
    definition_ar: 'في ذلك الوقت.'
  },
  {
    english: 'soon',
    arabic: 'قريباً',
    icon: '⏰',
    definition_en: 'In a short time.',
    definition_ar: 'في وقت قصير.'
  },
  {
    english: 'later',
    arabic: 'لاحقاً',
    icon: '⏰',
    definition_en: 'At a future time.',
    definition_ar: 'في وقت مستقبلي.'
  },
  {
    english: 'before',
    arabic: 'قبل',
    icon: '⏰',
    definition_en: 'Earlier than.',
    definition_ar: 'أقدم من.'
  },
  {
    english: 'after',
    arabic: 'بعد',
    icon: '⏰',
    definition_en: 'Later than.',
    definition_ar: 'أحدث من.'
  },
  {
    english: 'past',
    arabic: 'ماضي',
    icon: '⏰',
    definition_en: 'Gone by in time.',
    definition_ar: 'مضى في الوقت.'
  },
  {
    english: 'present',
    arabic: 'حاضر',
    icon: '⏰',
    definition_en: 'Existing now.',
    definition_ar: 'موجود الآن.'
  },
  {
    english: 'future',
    arabic: 'مستقبل',
    icon: '⏰',
    definition_en: 'Yet to come.',
    definition_ar: 'قادم بعد.'
  },
  {
    english: 'early',
    arabic: 'مبكر',
    icon: '⏰',
    definition_en: 'Before the usual time.',
    definition_ar: 'قبل الوقت المعتاد.'
  },
  {
    english: 'late',
    arabic: 'متأخر',
    icon: '⏰',
    definition_en: 'After the usual time.',
    definition_ar: 'بعد الوقت المعتاد.'
  },
  {
    english: 'fast',
    arabic: 'سريع',
    icon: '💨',
    definition_en: 'Moving or able to move quickly.',
    definition_ar: 'متحرك أو قادر على الحركة بسرعة.'
  },
  {
    english: 'slow',
    arabic: 'بطيء',
    icon: '🐌',
    definition_en: 'Moving or able to move slowly.',
    definition_ar: 'متحرك أو قادر على الحركة ببطء.'
  },
  {
    english: 'quick',
    arabic: 'سريع',
    icon: '💨',
    definition_en: 'Done in a short time.',
    definition_ar: 'منجز في وقت قصير.'
  },
  {
    english: 'hurry',
    arabic: 'عجلة',
    icon: '🏃',
    definition_en: 'Great haste.',
    definition_ar: 'عجلة كبيرة.'
  },
  {
    english: 'wait',
    arabic: 'انتظار',
    icon: '⏳',
    definition_en: 'To stay in place.',
    definition_ar: 'البقاء في المكان.'
  },
  {
    english: 'stop',
    arabic: 'توقف',
    icon: '🛑',
    definition_en: 'To cease moving.',
    definition_ar: 'التوقف عن الحركة.'
  },
  {
    english: 'go',
    arabic: 'ذهاب',
    icon: '🚶',
    definition_en: 'To move from one place to another.',
    definition_ar: 'الحركة من مكان إلى آخر.'
  },
  {
    english: 'come',
    arabic: 'مجيء',
    icon: '🚶',
    definition_en: 'To move toward.',
    definition_ar: 'الحركة نحو.'
  },
  {
    english: 'leave',
    arabic: 'مغادرة',
    icon: '🚪',
    definition_en: 'To go away from.',
    definition_ar: 'الذهاب بعيداً عن.'
  },
  {
    english: 'arrive',
    arabic: 'وصول',
    icon: '🏁',
    definition_en: 'To reach a destination.',
    definition_ar: 'الوصول إلى وجهة.'
  },
  {
    english: 'start',
    arabic: 'بدء',
    icon: '🚀',
    definition_en: 'To begin.',
    definition_ar: 'البدء.'
  },
  {
    english: 'finish',
    arabic: 'انتهاء',
    icon: '🏁',
    definition_en: 'To complete.',
    definition_ar: 'الانتهاء.'
  },
  {
    english: 'begin',
    arabic: 'بدء',
    icon: '🚀',
    definition_en: 'To start.',
    definition_ar: 'البدء.'
  },
  {
    english: 'end',
    arabic: 'نهاية',
    icon: '🏁',
    definition_en: 'To finish.',
    definition_ar: 'الانتهاء.'
  },
  {
    english: 'open',
    arabic: 'فتح',
    icon: '🚪',
    definition_en: 'Not closed.',
    definition_ar: 'غير مغلق.'
  },
  {
    english: 'close',
    arabic: 'إغلاق',
    icon: '🚪',
    definition_en: 'To shut.',
    definition_ar: 'الإغلاق.'
  },
  {
    english: 'full',
    arabic: 'ممتلئ',
    icon: '🍽️',
    definition_en: 'Containing as much as possible.',
    definition_ar: 'يحتوي على أكبر قدر ممكن.'
  },
  {
    english: 'empty',
    arabic: 'فارغ',
    icon: '🍽️',
    definition_en: 'Containing nothing.',
    definition_ar: 'لا يحتوي على شيء.'
  },
  {
    english: 'hot',
    arabic: 'ساخن',
    icon: '🔥',
    definition_en: 'Having a high temperature.',
    definition_ar: 'ذو درجة حرارة عالية.'
  },
  {
    english: 'cold',
    arabic: 'بارد',
    icon: '❄️',
    definition_en: 'Having a low temperature.',
    definition_ar: 'ذو درجة حرارة منخفضة.'
  },
  {
    english: 'warm',
    arabic: 'دافئ',
    icon: '🌞',
    definition_en: 'Moderately hot.',
    definition_ar: 'حار بشكل معتدل.'
  },
  {
    english: 'cool',
    arabic: 'بارد',
    icon: '❄️',
    definition_en: 'Moderately cold.',
    definition_ar: 'بارد بشكل معتدل.'
  },
  {
    english: 'big',
    arabic: 'كبير',
    icon: '🐘',
    definition_en: 'Of considerable size.',
    definition_ar: 'ذو حجم كبير.'
  },
  {
    english: 'small',
    arabic: 'صغير',
    icon: '🐭',
    definition_en: 'Of little size.',
    definition_ar: 'ذو حجم صغير.'
  },
  {
    english: 'long',
    arabic: 'طويل',
    icon: '📏',
    definition_en: 'Measuring a great distance.',
    definition_ar: 'يقيس مسافة كبيرة.'
  },
  {
    english: 'short',
    arabic: 'قصير',
    icon: '📏',
    definition_en: 'Measuring a small distance.',
    definition_ar: 'يقيس مسافة صغيرة.'
  },
  {
    english: 'tall',
    arabic: 'طويل',
    icon: '🗼',
    definition_en: 'Of great height.',
    definition_ar: 'ذو ارتفاع كبير.'
  },
  {
    english: 'wide',
    arabic: 'واسع',
    icon: '🌉',
    definition_en: 'Of great width.',
    definition_ar: 'ذو عرض كبير.'
  },
  {
    english: 'narrow',
    arabic: 'ضيق',
    icon: '🌉',
    definition_en: 'Of small width.',
    definition_ar: 'ذو عرض صغير.'
  },
  {
    english: 'thick',
    arabic: 'سميك',
    icon: '📏',
    definition_en: 'Of great thickness.',
    definition_ar: 'ذو سمك كبير.'
  },
  {
    english: 'thin',
    arabic: 'رفيع',
    icon: '📏',
    definition_en: 'Of small thickness.',
    definition_ar: 'ذو سمك صغير.'
  },
  {
    english: 'heavy',
    arabic: 'ثقيل',
    icon: '🏋️',
    definition_en: 'Of great weight.',
    definition_ar: 'ذو وزن كبير.'
  },
  {
    english: 'light',
    arabic: 'خفيف',
    icon: '💡',
    definition_en: 'Of little weight.',
    definition_ar: 'ذو وزن صغير.'
  },
  {
    english: 'hard',
    arabic: 'صلب',
    icon: '🪨',
    definition_en: 'Firm to the touch.',
    definition_ar: 'صلب للمس.'
  },
  {
    english: 'soft',
    arabic: 'ناعم',
    icon: '🧸',
    definition_en: 'Yielding to the touch.',
    definition_ar: 'يخضع للمس.'
  },
  {
    english: 'rough',
    arabic: 'خشن',
    icon: '🪨',
    definition_en: 'Having an uneven surface.',
    definition_ar: 'ذو سطح غير مستو.'
  },
  {
    english: 'smooth',
    arabic: 'ناعم',
    icon: '🧴',
    definition_en: 'Having an even surface.',
    definition_ar: 'ذو سطح مستو.'
  },
  {
    english: 'clean',
    arabic: 'نظيف',
    icon: '🧽',
    definition_en: 'Free from dirt.',
    definition_ar: 'خالي من التراب.'
  },
  {
    english: 'dirty',
    arabic: 'قذر',
    icon: '🗑️',
    definition_en: 'Covered with dirt.',
    definition_ar: 'مغطى بالتراب.'
  },
  {
    english: 'wet',
    arabic: 'مبلل',
    icon: '💧',
    definition_en: 'Covered with liquid.',
    definition_ar: 'مغطى بالسائل.'
  },
  {
    english: 'dry',
    arabic: 'جاف',
    icon: '🌵',
    definition_en: 'Free from moisture.',
    definition_ar: 'خالي من الرطوبة.'
  },
  {
    english: 'new',
    arabic: 'جديد',
    icon: '🆕',
    definition_en: 'Not existing before.',
    definition_ar: 'غير موجود سابقاً.'
  },
  {
    english: 'old',
    arabic: 'قديم',
    icon: '🕰️',
    definition_en: 'Having lived for a long time.',
    definition_ar: 'عاش لفترة طويلة.'
  },
  {
    english: 'young',
    arabic: 'شاب',
    icon: '👶',
    definition_en: 'Having lived for only a short time.',
    definition_ar: 'عاش لفترة قصيرة فقط.'
  },
  {
    english: 'good',
    arabic: 'جيد',
    icon: '👍',
    definition_en: 'Of high quality.',
    definition_ar: 'ذو جودة عالية.'
  },
  {
    english: 'bad',
    arabic: 'سيء',
    icon: '👎',
    definition_en: 'Of low quality.',
    definition_ar: 'ذو جودة منخفضة.'
  },
  {
    english: 'right',
    arabic: 'صحيح',
    icon: '✅',
    definition_en: 'Correct.',
    definition_ar: 'صحيح.'
  },
  {
    english: 'wrong',
    arabic: 'خطأ',
    icon: '❌',
    definition_en: 'Incorrect.',
    definition_ar: 'خطأ.'
  },
  {
    english: 'easy',
    arabic: 'سهل',
    icon: '😊',
    definition_en: 'Not difficult.',
    definition_ar: 'غير صعب.'
  },
  {
    english: 'difficult',
    arabic: 'صعب',
    icon: '😰',
    definition_en: 'Not easy.',
    definition_ar: 'غير سهل.'
  },
  {
    english: 'cheap',
    arabic: 'رخيص',
    icon: '💰',
    definition_en: 'Low in price.',
    definition_ar: 'منخفض السعر.'
  },
  {
    english: 'expensive',
    arabic: 'غالي',
    icon: '💸',
    definition_en: 'High in price.',
    definition_ar: 'عالي السعر.'
  },
  {
    english: 'free',
    arabic: 'حر',
    icon: '🆓',
    definition_en: 'Not under control.',
    definition_ar: 'غير تحت السيطرة.'
  },
  {
    english: 'busy',
    arabic: 'مشغول',
    icon: '🏃',
    definition_en: 'Having a great deal to do.',
    definition_ar: 'لديه الكثير للقيام به.'
  },
  {
    english: 'quiet',
    arabic: 'هادئ',
    icon: '🤫',
    definition_en: 'Making little noise.',
    definition_ar: 'يصدر ضجيجاً قليلاً.'
  },
  {
    english: 'loud',
    arabic: 'عالي الصوت',
    icon: '📣',
    definition_en: 'Making a lot of noise.',
    definition_ar: 'يصدر ضجيجاً كثيراً.'
  },
  {
    english: 'happy',
    arabic: 'سعيد',
    icon: '😊',
    definition_en: 'Feeling pleasure.',
    definition_ar: 'يشعر بالمتعة.'
  },
  {
    english: 'sad',
    arabic: 'حزين',
    icon: '😢',
    definition_en: 'Feeling sorrow.',
    definition_ar: 'يشعر بالحزن.'
  },
  {
    english: 'angry',
    arabic: 'غاضب',
    icon: '😠',
    definition_en: 'Feeling strong displeasure.',
    definition_ar: 'يشعر بعدم رضا قوي.'
  },
  {
    english: 'surprised',
    arabic: 'مفاجأ',
    icon: '😲',
    definition_en: 'Feeling sudden wonder.',
    definition_ar: 'يشعر بعجب مفاجئ.'
  },
  {
    english: 'tired',
    arabic: 'متعب',
    icon: '😴',
    definition_en: 'In need of rest.',
    definition_ar: 'بحاجة إلى الراحة.'
  },
  {
    english: 'hungry',
    arabic: 'جائع',
    icon: '🍽️',
    definition_en: 'Feeling a need to eat.',
    definition_ar: 'يشعر بالحاجة إلى الأكل.'
  },
  {
    english: 'thirsty',
    arabic: 'عطشان',
    icon: '🥤',
    definition_en: 'Feeling a need to drink.',
    definition_ar: 'يشعر بالحاجة إلى الشرب.'
  },
  {
    english: 'sick',
    arabic: 'مريض',
    icon: '🤒',
    definition_en: 'Ill.',
    definition_ar: 'مريض.'
  },
  {
    english: 'healthy',
    arabic: 'صحي',
    icon: '💪',
    definition_en: 'In good health.',
    definition_ar: 'في صحة جيدة.'
  },
  {
    english: 'strong',
    arabic: 'قوي',
    icon: '💪',
    definition_en: 'Having great power.',
    definition_ar: 'ذو قوة كبيرة.'
  },
  {
    english: 'weak',
    arabic: 'ضعيف',
    icon: '😩',
    definition_en: 'Having little power.',
    definition_ar: 'ذو قوة قليلة.'
  },
  {
    english: 'rich',
    arabic: 'غني',
    icon: '💰',
    definition_en: 'Having a lot of money.',
    definition_ar: 'لديه الكثير من المال.'
  },
  {
    english: 'poor',
    arabic: 'فقير',
    icon: '💸',
    definition_en: 'Having little money.',
    definition_ar: 'لديه قليل من المال.'
  },
  {
    english: 'famous',
    arabic: 'شهير',
    icon: '⭐',
    definition_en: 'Known by many people.',
    definition_ar: 'معروف من قبل الكثير من الناس.'
  },
  {
    english: 'beautiful',
    arabic: 'جميل',
    icon: '🌹',
    definition_en: 'Pleasing to the senses.',
    definition_ar: 'ممتع للحواس.'
  },
  {
    english: 'ugly',
    arabic: 'قبيح',
    icon: '😱',
    definition_en: 'Unpleasing to the senses.',
    definition_ar: 'غير ممتع للحواس.'
  },
  {
    english: 'red',
    arabic: 'أحمر',
    icon: '🔴',
    definition_en: 'A color like blood.',
    definition_ar: 'لون مثل الدم.'
  },
  {
    english: 'blue',
    arabic: 'أزرق',
    icon: '🔵',
    definition_en: 'A color like the sky.',
    definition_ar: 'لون مثل السماء.'
  },
  {
    english: 'green',
    arabic: 'أخضر',
    icon: '🟢',
    definition_en: 'A color like grass.',
    definition_ar: 'لون مثل العشب.'
  },
  {
    english: 'black',
    arabic: 'أسود',
    icon: '⚫',
    definition_en: 'The darkest color.',
    definition_ar: 'اللون الأغمق.'
  },
  {
    english: 'white',
    arabic: 'أبيض',
    icon: '⚪',
    definition_en: 'The lightest color.',
    definition_ar: 'اللون الأفتح.'
  },
  {
    english: 'purple',
    arabic: 'بنفسجي',
    icon: '🟣',
    definition_en: 'A color like grapes.',
    definition_ar: 'لون مثل العنب.'
  },
  {
    english: 'pink',
    arabic: 'وردي',
    icon: '🩷',
    definition_en: 'A light red color.',
    definition_ar: 'لون أحمر فاتح.'
  },
  {
    english: 'brown',
    arabic: 'بني',
    icon: '🤎',
    definition_en: 'A color like earth.',
    definition_ar: 'لون مثل الأرض.'
  },
  {
    english: 'gray',
    arabic: 'رمادي',
    icon: '🔘',
    definition_en: 'A color between black and white.',
    definition_ar: 'لون بين الأسود والأبيض.'
  },
  {
    english: 'gold',
    arabic: 'ذهبي',
    icon: '🥇',
    definition_en: 'A precious metal color.',
    definition_ar: 'لون معدن ثمين.'
  },
  {
    english: 'silver',
    arabic: 'فضي',
    icon: '🥈',
    definition_en: 'A shiny metal color.',
    definition_ar: 'لون معدن لامع.'
  },
  {
    english: 'color',
    arabic: 'لون',
    icon: '🎨',
    definition_en: 'The property of objects.',
    definition_ar: 'خاصية الأشياء.'
  },
  {
    english: 'shape',
    arabic: 'شكل',
    icon: '🔺',
    definition_en: 'The form of an object.',
    definition_ar: 'شكل الجسم.'
  },
  {
    english: 'size',
    arabic: 'حجم',
    icon: '📏',
    definition_en: 'The dimensions of an object.',
    definition_ar: 'أبعاد الجسم.'
  },
  {
    english: 'number',
    arabic: 'رقم',
    icon: '🔢',
    definition_en: 'A mathematical object.',
    definition_ar: 'كائن رياضي.'
  },
  {
    english: 'letter',
    arabic: 'حرف',
    icon: '📝',
    definition_en: 'A symbol in an alphabet.',
    definition_ar: 'رمز في الأبجدية.'
  },
  {
    english: 'word',
    arabic: 'كلمة',
    icon: '📖',
    definition_en: 'A unit of language.',
    definition_ar: 'وحدة لغوية.'
  },
  {
    english: 'sentence',
    arabic: 'جملة',
    icon: '📝',
    definition_en: 'A set of words.',
    definition_ar: 'مجموعة من الكلمات.'
  },
  {
    english: 'paragraph',
    arabic: 'فقرة',
    icon: '📄',
    definition_en: 'A group of sentences.',
    definition_ar: 'مجموعة من الجمل.'
  },
  {
    english: 'page',
    arabic: 'صفحة',
    icon: '📄',
    definition_en: 'A sheet of paper.',
    definition_ar: 'ورقة.'
  },
  {
    english: 'university',
    arabic: 'جامعة',
    icon: '🎓',
    definition_en: 'A higher education institution.',
    definition_ar: 'مؤسسة تعليم عالي.'
  },
  {
    english: 'office',
    arabic: 'مكتب',
    icon: '🏢',
    definition_en: 'A place for work.',
    definition_ar: 'مكان للعمل.'
  },
  {
    english: 'factory',
    arabic: 'مصنع',
    icon: '🏭',
    definition_en: 'A place for manufacturing.',
    definition_ar: 'مكان للتصنيع.'
  },
  {
    english: 'shop',
    arabic: 'متجر',
    icon: '🏪',
    definition_en: 'A place for selling goods.',
    definition_ar: 'مكان لبيع البضائع.'
  },
  {
    english: 'market',
    arabic: 'سوق',
    icon: '🛒',
    definition_en: 'A place for buying and selling.',
    definition_ar: 'مكان للشراء والبيع.'
  },
  {
    english: 'street',
    arabic: 'شارع',
    icon: '🛣️',
    definition_en: 'A public road in a city.',
    definition_ar: 'طريق عام في المدينة.'
  },
  {
    english: 'road',
    arabic: 'طريق',
    icon: '🛤️',
    definition_en: 'A way for travel.',
    definition_ar: 'طريق للسفر.'
  },
  {
    english: 'city',
    arabic: 'مدينة',
    icon: '🏙️',
    definition_en: 'A large town.',
    definition_ar: 'مدينة كبيرة.'
  },
  {
    english: 'country',
    arabic: 'بلد',
    icon: '🌍',
    definition_en: 'A nation.',
    definition_ar: 'أمة.'
  },
  {
    english: 'world',
    arabic: 'عالم',
    icon: '🌎',
    definition_en: 'The earth and its inhabitants.',
    definition_ar: 'الأرض وسكانها.'
  },
  {
    english: 'earth',
    arabic: 'أرض',
    icon: '🌍',
    definition_en: 'The planet we live on.',
    definition_ar: 'الكوكب الذي نعيش عليه.'
  },
  {
    english: 'planet',
    arabic: 'كوكب',
    icon: '🪐',
    definition_en: 'A celestial body.',
    definition_ar: 'جسم سماوي.'
  },
  {
    english: 'galaxy',
    arabic: 'مجرة',
    icon: '🌌',
    definition_en: 'A system of stars.',
    definition_ar: 'نظام من النجوم.'
  },
  {
    english: 'universe',
    arabic: 'كون',
    icon: '🌌',
    definition_en: 'All existing matter.',
    definition_ar: 'جميع المادة الموجودة.'
  },
  {
    english: 'space',
    arabic: 'فضاء',
    icon: '🚀',
    definition_en: 'The void between celestial bodies.',
    definition_ar: 'الفراغ بين الأجسام السماوية.'
  },
  {
    english: 'life',
    arabic: 'حياة',
    icon: '🌱',
    definition_en: 'The condition of living.',
    definition_ar: 'حالة الحياة.'
  },
  {
    english: 'death',
    arabic: 'موت',
    icon: '💀',
    definition_en: 'The end of life.',
    definition_ar: 'نهاية الحياة.'
  },
  {
    english: 'birth',
    arabic: 'ولادة',
    icon: '👶',
    definition_en: 'The beginning of life.',
    definition_ar: 'بداية الحياة.'
  },
  {
    english: 'marriage',
    arabic: 'زواج',
    icon: '💍',
    definition_en: 'The union of two people.',
    definition_ar: 'اتحاد شخصين.'
  },
  {
    english: 'family',
    arabic: 'عائلة',
    icon: '👨‍👩‍👧',
    definition_en: 'A group of related people.',
    definition_ar: 'مجموعة من الأشخاص ذوي الصلة.'
  },
  {
    english: 'friend',
    arabic: 'صديق',
    icon: '🤝',
    definition_en: 'A person you know well.',
    definition_ar: 'شخص تعرفه جيداً.'
  },
  {
    english: 'register',
    arabic: 'مسجل البيانات',
    icon: '📊',
    definition_en: 'A small storage inside the CPU used to hold temporary data.',
    definition_ar: 'وحدة تخزين صغيرة داخل المعالج لحفظ بيانات مؤقتة.'
  },
  {
    english: 'bus',
    arabic: 'الناقل',
    icon: '🔗',
    definition_en: 'A communication system that transfers data between components.',
    definition_ar: 'نظام اتصال ينقل البيانات بين مكونات الكمبيوتر.'
  },
  {
    english: 'ram',
    arabic: 'الذاكرة العشوائية',
    icon: '📚',
    definition_en: 'A memory used to store data temporarily while programs run.',
    definition_ar: 'ذاكرة تخزن البيانات مؤقتاً أثناء تشغيل البرامج.'
  },
  {
    english: 'rom',
    arabic: 'ذاكرة القراءة فقط',
    icon: '💾',
    definition_en: 'Permanent memory that stores essential system instructions.',
    definition_ar: 'ذاكرة دائمة تخزن تعليمات النظام الأساسية.'
  },
  {
    english: 'bit',
    arabic: 'بت',
    icon: '⚙️',
    definition_en: 'The smallest unit of digital information, can be 0 or 1.',
    definition_ar: 'أصغر وحدة معلومات رقمية، يمكن أن تكون 0 أو 1.'
  },
  {
    english: 'clock speed',
    arabic: 'سرعة الساعة',
    icon: '⏱️',
    definition_en: 'The speed at which a processor executes instructions.',
    definition_ar: 'السرعة التي ينفذ بها المعالج الأوامر.'
  },
  {
    english: 'firmware',
    arabic: 'البرمجيات المدمجة',
    icon: '🧩',
    definition_en: 'Software programmed into hardware to control its functions.',
    definition_ar: 'برمجيات مدمجة في العتاد تتحكم في وظائفه.'
  },
  {
    english: 'compiler',
    arabic: 'المترجم',
    icon: '🛠️',
    definition_en: 'A program that converts source code into machine code.',
    definition_ar: 'برنامج يحول الكود المصدري إلى كود آلة.'
  },
  {
    english: 'algorithm',
    arabic: 'الخوارزمية',
    icon: '📐',
    definition_en: 'A step-by-step procedure to solve a problem.',
    definition_ar: 'مجموعة خطوات منظمة لحل مشكلة ما.'
  },
  {
    english: 'instruction set',
    arabic: 'مجموعة الأوامر',
    icon: '📘',
    definition_en: 'A set of commands supported by the CPU.',
    definition_ar: 'مجموعة الأوامر التي يدعمها المعالج.'
  },
  {
    english: 'logic gate',
    arabic: 'بوابة منطقية',
    icon: '🔲',
    definition_en: 'A basic digital circuit that performs logical operations.',
    definition_ar: 'دائرة رقمية أساسية تنفذ عمليات منطقية.'
  },
  {
    english: 'integrated circuit',
    arabic: 'الدائرة المتكاملة',
    icon: '🔌',
    definition_en: 'A tiny electronic circuit inside a chip.',
    definition_ar: 'دائرة إلكترونية صغيرة داخل شريحة.'
  },
  {
    english: 'floating point unit',
    arabic: 'وحدة الفاصلة العائمة',
    icon: '🌊',
    definition_en: 'The part of the CPU that performs decimal number operations.',
    definition_ar: 'جزء من المعالج ينفذ عمليات الأعداد العشرية.'
  },
  {
    english: 'pipeline',
    arabic: 'خط الأنابيب',
    icon: '🚇',
    definition_en: 'A technique where multiple instructions are processed in stages.',
    definition_ar: 'تقنية يتم فيها معالجة عدة تعليمات على مراحل.'
  },
  {
    english: 'multithreading',
    arabic: 'تعدد الخيوط',
    icon: '🧵',
    definition_en: 'Running multiple parts of a program simultaneously.',
    definition_ar: 'تشغيل عدة أجزاء من البرنامج في نفس الوقت.'
  },
  {
    english: 'cache miss',
    arabic: 'فشل الكاش',
    icon: '❌',
    definition_en: 'When data is not found in the cache and must be fetched from RAM.',
    definition_ar: 'عدم إيجاد البيانات في الكاش واضطرار النظام لجلبها من الذاكرة.'
  },
  {
    english: 'heat sink',
    arabic: 'مشتت حراري',
    icon: '🔥',
    definition_en: 'A device that absorbs and disperses heat from components.',
    definition_ar: 'جهاز يمتص الحرارة من المكونات ويبددها.'
  },
  {
    english: 'thread',
    arabic: 'خيط المعالجة',
    icon: '🧶',
    definition_en: 'A sequence of execution inside a program.',
    definition_ar: 'تسلسل تنفيذ داخل البرنامج.'
  },
  {
    english: 'interrupt',
    arabic: 'مقاطعة',
    icon: '⛔',
    definition_en: 'A signal that pauses the CPU to handle an urgent task.',
    definition_ar: 'إشارة توقف المعالج مؤقتاً للتعامل مع مهمة طارئة.'
  },
  {
    english: 'bandwidth',
    arabic: 'عرض النطاق',
    icon: '📡',
    definition_en: 'The maximum data transfer rate of a system or network.',
    definition_ar: 'أقصى معدل لنقل البيانات في نظام أو شبكة.'
  },
  {
    english: 'latency',
    arabic: 'زمن الاستجابة',
    icon: '⌛',
    definition_en: 'The delay before a transfer of data begins.',
    definition_ar: 'الوقت المستغرق قبل بدء نقل البيانات.'
  },
  {
    english: 'virtual memory',
    arabic: 'الذاكرة الافتراضية',
    icon: '🧠',
    definition_en: 'Additional memory created by using disk space as RAM.',
    definition_ar: 'ذاكرة إضافية يتم إنشاؤها باستخدام مساحة التخزين كبديل للذاكرة العشوائية.'
  },
  {
    english: 'bootloader',
    arabic: 'محمّل الإقلاع',
    icon: '🚀',
    definition_en: 'A small program that loads the operating system at startup.',
    definition_ar: 'برنامج صغير يقوم بتحميل نظام التشغيل عند بدء التشغيل.'
  },
  {
    english: 'binary',
    arabic: 'ثنائي',
    icon: '01',
    definition_en: 'A number system that uses only 0 and 1.',
    definition_ar: 'نظام عد يستخدم الصفر والواحد فقط.'
  },
  {
    english: 'power supply',
    arabic: 'مزود الطاقة',
    icon: '🔋',
    definition_en: 'A device that provides electrical power to the computer.',
    definition_ar: 'جهاز يوفر الطاقة الكهربائية للكمبيوتر.'
  },
  {
    english: 'sensor',
    arabic: 'حساس',
    icon: '🎛️',
    definition_en: 'A device that detects physical changes and outputs signals.',
    definition_ar: 'جهاز يستشعر التغيرات الفيزيائية ويخرج إشارات.'
  },
  {
    english: 'microcontroller',
    arabic: 'المتحكم الدقيق',
    icon: '🧩',
    definition_en: 'A compact integrated circuit used to control devices.',
    definition_ar: 'دائرة متكاملة صغيرة تُستخدم للتحكم في الأجهزة.'
  },
  {
    english: 'embedded system',
    arabic: 'النظام المدمج',
    icon: '🔧',
    definition_en: 'A computer system built into a larger device.',
    definition_ar: 'نظام حاسوبي مدمج داخل جهاز أكبر.'
  },
  {
    english: 'throughput',
    arabic: 'معدل الإنتاجية',
    icon: '🚚',
    definition_en: 'The amount of data processed in a given time.',
    definition_ar: 'كمية البيانات التي تتم معالجتها خلال وقت محدد.'
  },
  {
    english: 'firmware update',
    arabic: 'تحديث البرمجيات المدمجة',
    icon: '🔄',
    definition_en: 'A software update that improves hardware functionality.',
    definition_ar: 'تحديث برمجي يحسن أداء العتاد.'
  },
  {
    english: 'voltage regulator',
    arabic: 'منظم الجهد',
    icon: '⚡',
    definition_en: 'A device that maintains a constant voltage level.',
    definition_ar: 'جهاز يحافظ على مستوى ثابت للجهد الكهربائي.'
  },
  {
    english: 'oscillator',
    arabic: 'مهتز',
    icon: '🎛️',
    definition_en: 'A circuit that generates repetitive electronic signals.',
    definition_ar: 'دائرة تنتج إشارات إلكترونية متكررة.'
  },
  {
    english: 'processor',
    arabic: 'المعالج',
    icon: '🖥️',
    definition_en: 'The main chip that executes instructions.',
    definition_ar: 'الشريحة الأساسية التي تنفذ الأوامر.'
  },
  {
    english: 'motherboard',
    arabic: 'اللوحة الأم',
    icon: '📦',
    definition_en: 'The main circuit board connecting all components.',
    definition_ar: 'اللوحة الأساسية التي تربط جميع المكونات.'
  },
  {
    english: 'ram',
    arabic: 'ذاكرة الوصول العشوائي',
    icon: '📚',
    definition_en: 'Temporary memory used by running programs.',
    definition_ar: 'ذاكرة مؤقتة تستخدمها البرامج أثناء التشغيل.'
  },
  {
    english: 'rom',
    arabic: 'ذاكرة القراءة فقط',
    icon: '💾',
    definition_en: 'Permanent memory storing essential instructions.',
    definition_ar: 'ذاكرة دائمة تخزن التعليمات الأساسية.'
  },
  {
    english: 'cache',
    arabic: 'الذاكرة المخبئية',
    icon: '⚡',
    definition_en: 'Fast memory storing frequently accessed data.',
    definition_ar: 'ذاكرة سريعة تخزن البيانات المستخدمة بشكل متكرر.'
  },
  {
    english: 'register',
    arabic: 'مسجل البيانات',
    icon: '📊',
    definition_en: 'Small storage inside the CPU for temporary values.',
    definition_ar: 'وحدة تخزين صغيرة داخل المعالج لحفظ بيانات مؤقتة.'
  },
  {
    english: 'bus',
    arabic: 'الناقل',
    icon: '🔗',
    definition_en: 'A communication path for transferring data.',
    definition_ar: 'مسار اتصال لنقل البيانات بين المكونات.'
  },
  {
    english: 'bit',
    arabic: 'بت',
    icon: '0️⃣',
    definition_en: 'The smallest unit of digital information.',
    definition_ar: 'أصغر وحدة معلومات رقمية.'
  },
  {
    english: 'byte',
    arabic: 'بايت',
    icon: '1️⃣',
    definition_en: 'A group of 8 bits.',
    definition_ar: 'مجموعة من 8 بتات.'
  },
  {
    english: 'clock speed',
    arabic: 'سرعة الساعة',
    icon: '⏱️',
    definition_en: 'Processor speed measured in GHz.',
    definition_ar: 'سرعة المعالج وتقاس بالجيجاهرتز.'
  },
  {
    english: 'firmware',
    arabic: 'البرمجيات المدمجة',
    icon: '🧩',
    definition_en: 'Software stored in hardware to control its functions.',
    definition_ar: 'برمجيات مخزنة داخل العتاد للتحكم بوظائفه.'
  },
  {
    english: 'compiler',
    arabic: 'المترجم',
    icon: '🛠️',
    definition_en: 'A program that converts source code to machine code.',
    definition_ar: 'برنامج يحول الكود المصدري إلى كود آلة.'
  },
  {
    english: 'interpreter',
    arabic: 'المفسر',
    icon: '🎧',
    definition_en: 'Executes code line by line.',
    definition_ar: 'ينفذ الكود سطرًا بسطر.'
  },
  {
    english: 'algorithm',
    arabic: 'الخوارزمية',
    icon: '📐',
    definition_en: 'A step-by-step procedure to solve a problem.',
    definition_ar: 'خطوات منظمة لحل مشكلة معينة.'
  },
  {
    english: 'binary',
    arabic: 'ثنائي',
    icon: '01',
    definition_en: 'A number system using 0 and 1.',
    definition_ar: 'نظام عد يعتمد على 0 و 1.'
  },
  {
    english: 'hexadecimal',
    arabic: 'سداسي عشري',
    icon: '🔢',
    definition_en: 'A base-16 number system.',
    definition_ar: 'نظام عد من 16 رمزًا.'
  },
  {
    english: 'logic gate',
    arabic: 'بوابة منطقية',
    icon: '🔲',
    definition_en: 'A basic digital circuit performing logical operations.',
    definition_ar: 'دائرة رقمية تنفذ عمليات منطقية.'
  },
  {
    english: 'integrated circuit',
    arabic: 'دائرة متكاملة',
    icon: '💡',
    definition_en: 'A chip containing miniaturized electronic circuits.',
    definition_ar: 'شريحة تحتوي على دوائر إلكترونية مصغرة.'
  },
  {
    english: 'transistor',
    arabic: 'ترانزستور',
    icon: '📡',
    definition_en: 'A semiconductor device that amplifies or switches signals.',
    definition_ar: 'جهاز شبه موصل يُستخدم للتضخيم أو التبديل.'
  },
  {
    english: 'microprocessor',
    arabic: 'المعالج الدقيق',
    icon: '💻',
    definition_en: 'A CPU on a single integrated circuit.',
    definition_ar: 'وحدة معالجة مركزية على شريحة واحدة.'
  },
  {
    english: 'microcontroller',
    arabic: 'المتحكم الدقيق',
    icon: '🧩',
    definition_en: 'A chip with CPU, memory, and I/O for control tasks.',
    definition_ar: 'شريحة تضم معالجًا وذاكرة ومدخلات ومخرجات للتحكم.'
  },
  {
    english: 'embedded system',
    arabic: 'النظام المدمج',
    icon: '🔧',
    definition_en: 'A computer system built into a larger device.',
    definition_ar: 'نظام حاسوبي مدمج داخل جهاز أكبر.'
  },
  {
    english: 'oscillator',
    arabic: 'مهتز',
    icon: '🎛️',
    definition_en: 'A circuit that generates repetitive electronic signals.',
    definition_ar: 'دائرة تنتج إشارات إلكترونية متكررة.'
  },
  {
    english: 'heat sink',
    arabic: 'مشتت حراري',
    icon: '🔥',
    definition_en: 'A device used to dissipate heat from components.',
    definition_ar: 'جهاز يساعد على تبديد حرارة المكونات.'
  },
  {
    english: 'power supply',
    arabic: 'مزود الطاقة',
    icon: '🔋',
    definition_en: 'Converts AC electricity to DC for computers.',
    definition_ar: 'يحّول الكهرباء من AC إلى DC لجهاز الكمبيوتر.'
  },
  {
    english: 'gpu',
    arabic: 'وحدة معالجة الرسوميات',
    icon: '🎮',
    definition_en: 'A processor for graphics and parallel computing.',
    definition_ar: 'معالج مخصص للرسوميات والحوسبة المتوازية.'
  },
  {
    english: 'ssd',
    arabic: 'قرص الحالة الصلبة',
    icon: '📀',
    definition_en: 'A fast storage device with no moving parts.',
    definition_ar: 'وحدة تخزين سريعة بدون أجزاء متحركة.'
  },
  {
    english: 'hdd',
    arabic: 'القرص الصلب',
    icon: '💽',
    definition_en: 'A magnetic storage device with spinning disks.',
    definition_ar: 'وحدة تخزين تعتمد على أقراص دوارة.'
  },
  {
    english: 'bios',
    arabic: 'البيوس',
    icon: '🧬',
    definition_en: 'Firmware that initializes hardware during startup.',
    definition_ar: 'برمجيات مدمجة تهيئ العتاد عند بدء التشغيل.'
  },
  {
    english: 'bootloader',
    arabic: 'محمّل الإقلاع',
    icon: '🚀',
    definition_en: 'Loads the operating system when the device starts.',
    definition_ar: 'يحمل نظام التشغيل عند تشغيل الجهاز.'
  },
  {
    english: 'virtual memory',
    arabic: 'الذاكرة الافتراضية',
    icon: '🧠',
    definition_en: 'Uses disk space as additional RAM.',
    definition_ar: 'استخدام القرص كذاكرة عشوائية إضافية.'
  },
  {
    english: 'throughput',
    arabic: 'معدل الإنتاجية',
    icon: '🚚',
    definition_en: 'Amount of data processed in a given time.',
    definition_ar: 'كمية البيانات المعالجة خلال فترة معينة.'
  },
  {
    english: 'latency',
    arabic: 'زمن الاستجابة',
    icon: '⌛',
    definition_en: 'The delay before data begins transferring.',
    definition_ar: 'التأخير قبل بدء نقل البيانات.'
  },
  {
    english: 'bandwidth',
    arabic: 'عرض النطاق',
    icon: '📡',
    definition_en: 'Maximum rate of data transfer.',
    definition_ar: 'أقصى معدل لنقل البيانات.'
  },
  {
    english: 'sensor',
    arabic: 'حساس',
    icon: '🎛️',
    definition_en: 'A device that detects physical changes.',
    definition_ar: 'جهاز يستشعر التغيرات الفيزيائية.'
  },
  {
    english: 'actuator',
    arabic: 'مشغل',
    icon: '⚙️',
    definition_en: 'A device that converts signals into physical action.',
    definition_ar: 'جهاز يحول الإشارات إلى حركة فيزيائية.'
  },
  {
    english: 'chipset',
    arabic: 'طقم الشرائح',
    icon: '🧱',
    definition_en: 'Controls communication between CPU, RAM, and devices.',
    definition_ar: 'يتحكم في الاتصال بين المعالج والذاكرة والأجهزة.'
  },
  {
    english: 'pci slot',
    arabic: 'منفذ PCI',
    icon: '📥',
    definition_en: 'A slot to connect expansion cards.',
    definition_ar: 'منفذ لتوصيل بطاقات التوسعة.'
  },
  {
    english: 'ethernet',
    arabic: 'إيثرنت',
    icon: '🔌',
    definition_en: 'A wired networking technology.',
    definition_ar: 'تقنية شبكة سلكية.'
  },
  {
    english: 'wifi',
    arabic: 'واي فاي',
    icon: '📶',
    definition_en: 'A wireless networking technology.',
    definition_ar: 'تقنية شبكة لاسلكية.'
  },
  {
    english: 'bluetooth',
    arabic: 'بلوتوث',
    icon: '🌀',
    definition_en: 'Short-range wireless communication.',
    definition_ar: 'اتصال لاسلكي قصير المدى.'
  },
  {
    english: 'ip address',
    arabic: 'عنوان IP',
    icon: '🌐',
    definition_en: 'Digital address identifying a device on a network.',
    definition_ar: 'عنوان رقمي يعرّف الجهاز على الشبكة.'
  },
  {
    english: 'mac address',
    arabic: 'عنوان MAC',
    icon: '🏷️',
    definition_en: 'Unique hardware address of a network interface.',
    definition_ar: 'عنوان فريد لبطاقات الشبكة.'
  },
  {
    english: 'router',
    arabic: 'راوتر',
    icon: '📡',
    definition_en: 'Device that forwards data between networks.',
    definition_ar: 'جهاز يوجه البيانات بين الشبكات.'
  },
  {
    english: 'switch',
    arabic: 'مبدّل',
    icon: '🔀',
    definition_en: 'Connects devices in the same network.',
    definition_ar: 'يربط الأجهزة ضمن نفس الشبكة.'
  },
  {
    english: 'firewall',
    arabic: 'جدار الحماية',
    icon: '🧱',
    definition_en: 'Security system that monitors network traffic.',
    definition_ar: 'نظام أمني يراقب حركة البيانات.'
  },
  {
    english: 'vpn',
    arabic: 'شبكة خاصة افتراضية',
    icon: '🕶️',
    definition_en: 'Encrypts your internet connection.',
    definition_ar: 'يقوم بتشفير اتصال الإنترنت.'
  },
  {
    english: 'socket',
    arabic: 'مقبس',
    icon: '🔌',
    definition_en: 'Endpoint of communication between two programs.',
    definition_ar: 'نقطة اتصال بين برنامجين.'
  },
  {
    english: 'api',
    arabic: 'واجهة برمجة التطبيقات',
    icon: '🔗',
    definition_en: 'A set of rules for software communication.',
    definition_ar: 'مجموعة قواعد لربط التطبيقات ببعضها.'
  },
  {
    english: 'thread',
    arabic: 'خيط المعالجة',
    icon: '🧵',
    definition_en: 'Smallest sequence of programmed instructions.',
    definition_ar: 'أصغر تسلسل من التعليمات البرمجية.'
  },
  {
    english: 'multithreading',
    arabic: 'تعدد الخيوط',
    icon: '🧶',
    definition_en: 'Running multiple threads at the same time.',
    definition_ar: 'تشغيل عدة خيوط في نفس الوقت.'
  },
  {
    english: 'kernel',
    arabic: 'النواة',
    icon: '⚙️',
    definition_en: 'Core part of the operating system.',
    definition_ar: 'الجزء الأساسي من نظام التشغيل.'
  },
  {
    english: 'operating system',
    arabic: 'نظام التشغيل',
    icon: '🖥️',
    definition_en: 'Software that manages hardware and applications.',
    definition_ar: 'البرمجيات التي تدير العتاد والتطبيقات.'
  },
  {
    english: 'file system',
    arabic: 'نظام الملفات',
    icon: '📁',
    definition_en: 'Controls how data is stored and retrieved.',
    definition_ar: 'يدير كيفية تخزين البيانات واسترجاعها.'
  },
  {
    english: 'buffer',
    arabic: 'ذاكرة مؤقتة',
    icon: '📥',
    definition_en: 'Temporary memory used to hold data before processing.',
    definition_ar: 'ذاكرة مؤقتة لتخزين البيانات قبل معالجتها.'
  },
  {
    english: 'overflow',
    arabic: 'تجاوز السعة',
    icon: '🌊',
    definition_en: 'When data exceeds memory limits.',
    definition_ar: 'عندما تتجاوز البيانات حدود الذاكرة.'
  },
  {
    english: 'stack',
    arabic: 'المكدس',
    icon: '📚',
    definition_en: 'Memory used for function calls and local variables.',
    definition_ar: 'ذاكرة تُستخدم لاستدعاءات الدوال والمتغيرات المحلية.'
  },
  {
    english: 'heap',
    arabic: 'الكومة',
    icon: '🎒',
    definition_en: 'Memory used for dynamic allocation.',
    definition_ar: 'ذاكرة تُستخدم للتخصيص الديناميكي.'
  },
  {
    english: 'json',
    arabic: 'جيسون',
    icon: '📦',
    definition_en: 'A lightweight data exchange format.',
    definition_ar: 'صيغة خفيفة لتبادل البيانات.'
  },
  {
    english: 'encryption',
    arabic: 'التشفير',
    icon: '🔐',
    definition_en: 'Transforming data so only authorized users can read it.',
    definition_ar: 'تحويل البيانات بحيث لا يقرأها إلا المصرح لهم.'
  },
  {
    english: 'hashing',
    arabic: 'الهاش',
    icon: '🧮',
    definition_en: 'Converting data into a fixed-length value.',
    definition_ar: 'تحويل البيانات إلى قيمة ثابتة الطول.'
  },
  {
    english: 'public key',
    arabic: 'المفتاح العام',
    icon: '🔓',
    definition_en: 'A key used for encrypting data.',
    definition_ar: 'مفتاح يُستخدم لتشفير البيانات.'
  },
  {
    english: 'private key',
    arabic: 'المفتاح الخاص',
    icon: '🔑',
    definition_en: 'A key used for decrypting data.',
    definition_ar: 'مفتاح يُستخدم لفك التشفير.'
  },
  {
    english: 'machine learning',
    arabic: 'تعلم الآلة',
    icon: '🤖',
    definition_en: 'A field where computers learn from data.',
    definition_ar: 'مجال يتعلم فيه الكمبيوتر من البيانات.'
  },
  {
    english: 'database',
    arabic: 'قاعدة البيانات',
    icon: '🗄️',
    definition_en: 'An organized collection of data.',
    definition_ar: 'مجموعة منظمة من البيانات.'
  },
  {
    english: 'query',
    arabic: 'استعلام',
    icon: '❓',
    definition_en: 'A request for information from a database.',
    definition_ar: 'طلب للحصول على بيانات من قاعدة البيانات.'
  },
  {
    english: 'server',
    arabic: 'الخادم',
    icon: '🖧',
    definition_en: 'A computer that provides services to clients.',
    definition_ar: 'جهاز يقدم خدمات لأجهزة أخرى.'
  },
  {
    english: 'client',
    arabic: 'العميل',
    icon: '👤',
    definition_en: 'A device that requests services from a server.',
    definition_ar: 'جهاز يطلب خدمات من الخادم.'
  },
  {
    english: 'cloud computing',
    arabic: 'الحوسبة السحابية',
    icon: '☁️',
    definition_en: 'Using remote servers over the internet.',
    definition_ar: 'استخدام خوادم بعيدة عبر الإنترنت.'
  },
  {
    english: 'spectrum',
    arabic: 'طيف',
    icon: '🌈',
    definition_en: 'The range of electromagnetic frequencies used for communication.',
    definition_ar: 'مجموعة الترددات الكهرومغناطيسية المستخدمة في الاتصال.'
  },
  {
    english: 'amplifier',
    arabic: 'مضخم',
    icon: '📢',
    definition_en: 'A device that increases the strength of a signal.',
    definition_ar: 'جهاز يزيد من قوة الإشارة.'
  },
  {
    english: 'filter',
    arabic: 'مرشح',
    icon: '🧪',
    definition_en: 'A circuit that removes unwanted frequencies from a signal.',
    definition_ar: 'دائرة تزيل الترددات غير المرغوبة من الإشارة.'
  },
  {
    english: 'multimeter',
    arabic: 'ملتيميتر',
    icon: '🔧',
    definition_en: 'A tool used to measure voltage, current, and resistance.',
    definition_ar: 'أداة تستخدم لقياس الجهد والتيار والمقاومة.'
  },
  {
    english: 'oscilloscope',
    arabic: 'راسم الذبذبات',
    icon: '📈',
    definition_en: 'A device that displays electronic signal waveforms.',
    definition_ar: 'جهاز يعرض أشكال الموجات للإشارات الإلكترونية.'
  },
  {
    english: 'transmitter',
    arabic: 'مرسل',
    icon: '📡',
    definition_en: 'A device that sends signals over a distance.',
    definition_ar: 'جهاز يرسل الإشارات عبر مسافة.'
  },
  {
    english: 'receiver',
    arabic: 'مستقبل',
    icon: '📥',
    definition_en: 'A device that receives and decodes signals.',
    definition_ar: 'جهاز يستقبل ويفك تشفير الإشارات.'
  },
  {
    english: 'ground',
    arabic: 'الأرضي',
    icon: '🌍',
    definition_en: 'A reference point in circuits with zero voltage.',
    definition_ar: 'نقطة مرجعية في الدوائر بجهد صفري.'
  },
  {
    english: 'impedance',
    arabic: 'الممانعة',
    icon: '📏',
    definition_en: 'The total opposition a circuit offers to alternating current.',
    definition_ar: 'المقاومة الكلية التي تقدمها الدائرة للتيار المتردد.'
  },
  {
    english: 'diode',
    arabic: 'دايود',
    icon: '➡️',
    definition_en: 'A component that allows current to flow in one direction only.',
    definition_ar: 'مكون يسمح بمرور التيار في اتجاه واحد فقط.'
  },
  {
    english: 'capacitive sensor',
    arabic: 'حساس سعوي',
    icon: '📟',
    definition_en: 'A sensor that detects changes in capacitance.',
    definition_ar: 'حساس يكتشف التغيرات في السعة الكهربائية.'
  },
  {
    english: 'inductive sensor',
    arabic: 'حساس حثي',
    icon: '🔍',
    definition_en: 'A sensor that detects metal objects using magnetic fields.',
    definition_ar: 'حساس يكتشف الأجسام المعدنية باستخدام المجالات المغناطيسية.'
  },
  {
    english: 'digital signal',
    arabic: 'إشارة رقمية',
    icon: '💠',
    definition_en: 'A signal represented by discrete values, usually 0 and 1.',
    definition_ar: 'إشارة تمثل بقيم منفصلة عادة 0 و1.'
  },
  {
    english: 'analog signal',
    arabic: 'إشارة تماثلية',
    icon: '📶',
    definition_en: 'A continuous signal that varies over time.',
    definition_ar: 'إشارة مستمرة تتغير بمرور الوقت.'
  },
  {
    english: 'firmware',
    arabic: 'برمجيات مدمجة',
    icon: '🧩',
    definition_en: 'Software stored in hardware to control its functions.',
    definition_ar: 'برمجيات مدمجة في العتاد للتحكم في وظائفه.'
  },
  {
    english: 'microarchitecture',
    arabic: 'الميكروآركيتيكتشر',
    icon: '🏗️',
    definition_en: 'The internal structure of a processor that defines how it executes instructions.',
    definition_ar: 'البنية الداخلية للمعالج التي تحدد كيفية تنفيذ التعليمات.'
  },
  {
    english: 'bootloader',
    arabic: 'محمّل الإقلاع',
    icon: '🚀',
    definition_en: 'A small program that starts the operating system.',
    definition_ar: 'برنامج صغير يبدأ تشغيل نظام التشغيل.'
  },
  {
    english: 'checksum',
    arabic: 'مجموع التحقق',
    icon: '✔️',
    definition_en: 'A value used to verify data integrity.',
    definition_ar: 'قيمة تستخدم للتحقق من سلامة البيانات.'
  },
  {
    english: 'heat sink',
    arabic: 'مشتت حراري',
    icon: '🔥',
    definition_en: 'A component that dissipates heat from electronic devices.',
    definition_ar: 'مكون يبدد الحرارة من الأجهزة الإلكترونية.'
  },
  {
    english: 'logic gate',
    arabic: 'بوابة منطقية',
    icon: '🔲',
    definition_en: 'A basic building block of digital circuits that performs logical operations.',
    definition_ar: 'وحدة أساسية في الدوائر الرقمية تقوم بعمليات منطقية.'
  },
  {
  english: 'malware',
  arabic: 'برمجيات خبيثة',
  icon: '🦠',
  definition_en: 'Software designed to harm or exploit systems.',
  definition_ar: 'برمجيات مصممة لإلحاق الضرر أو استغلال الأنظمة.'
},
{
  english: 'phishing',
  arabic: 'التصيد الاحتيالي',
  icon: '🎣',
  definition_en: 'A method used to trick users into giving sensitive information.',
  definition_ar: 'طريقة لخداع المستخدمين للحصول على معلومات حساسة.'
},
{
  english: 'ransomware',
  arabic: 'فيروس الفدية',
  icon: '💰',
  definition_en: 'Malware that encrypts data and demands payment.',
  definition_ar: 'برمجية خبيثة تشفر البيانات وتطلب فدية لفكها.'
},
{
  english: 'firewall',
  arabic: 'جدار ناري',
  icon: '🔥',
  definition_en: 'A system that filters network traffic for security.',
  definition_ar: 'نظام يفلتر حركة الشبكة لأغراض الحماية.'
},
{
  english: 'encryption',
  arabic: 'التشفير',
  icon: '🔐',
  definition_en: 'The process of converting data into unreadable form.',
  definition_ar: 'عملية تحويل البيانات إلى شكل غير قابل للقراءة.'
},
{
  english: 'decryption',
  arabic: 'فك التشفير',
  icon: '🔓',
  definition_en: 'Converting encrypted data back to readable format.',
  definition_ar: 'إعادة البيانات المشفرة إلى شكل قابل للقراءة.'
},
{
  english: 'vpn',
  arabic: 'شبكة خاصة افتراضية',
  icon: '🛜',
  definition_en: 'A secure private connection over a public network.',
  definition_ar: 'اتصال خاص وآمن عبر شبكة عامة.'
},
{
  english: 'zero-day',
  arabic: 'ثغرة يوم الصفر',
  icon: '0️⃣',
  definition_en: 'A vulnerability unknown to the vendor.',
  definition_ar: 'ثغرة غير معروفة للشركة المصنعة بعد.'
},
{
  english: 'botnet',
  arabic: 'شبكة روبوتات',
  icon: '🤖',
  definition_en: 'A network of infected devices controlled by an attacker.',
  definition_ar: 'شبكة أجهزة مصابة يتحكم فيها المهاجم.'
},
{
  english: 'dos attack',
  arabic: 'هجوم تعطيل الخدمة',
  icon: '🚫',
  definition_en: 'An attack that overloads a system to make it unavailable.',
  definition_ar: 'هجوم يرهق النظام لجعله غير متاح.'
},
{
  english: 'ddos attack',
  arabic: 'هجوم حجب الخدمة الموزع',
  icon: '🌐',
  definition_en: 'A large-scale attack using multiple sources to overwhelm a system.',
  definition_ar: 'هجوم واسع النطاق يستخدم مصادر متعددة لشل النظام.'
},
{
  english: 'trojan',
  arabic: 'حصان طروادة',
  icon: '🐴',
  definition_en: 'Malware disguised as legitimate software.',
  definition_ar: 'برنامج خبيث يتخفى كبرنامج شرعي.'
},
{
  english: 'worm',
  arabic: 'دودة إلكترونية',
  icon: '🪱',
  definition_en: 'Malware that spreads automatically across networks.',
  definition_ar: 'برنامج خبيث ينتشر تلقائياً عبر الشبكات.'
},
{
  english: 'spyware',
  arabic: 'برمجيات تجسس',
  icon: '🕵️‍♂️',
  definition_en: 'Software that secretly collects user information.',
  definition_ar: 'برنامج يجمع معلومات المستخدم سراً.'
},
{
  english: 'rootkit',
  arabic: 'روتكيت',
  icon: '📦',
  definition_en: 'Malware that hides its presence on a system.',
  definition_ar: 'برمجية خبيثة تخفي وجودها داخل النظام.'
},
{
  english: 'backdoor',
  arabic: 'باب خلفي',
  icon: '🚪',
  definition_en: 'A hidden method of bypassing security mechanisms.',
  definition_ar: 'مدخل مخفي لتجاوز آليات الحماية.'
},
{
  english: 'social engineering',
  arabic: 'الهندسة الاجتماعية',
  icon: '🎭',
  definition_en: 'Manipulating people to reveal confidential information.',
  definition_ar: 'التلاعب بالأشخاص للحصول على معلومات سرية.'
},
{
  english: 'authentication',
  arabic: 'المصادقة',
  icon: '✔️',
  definition_en: 'Verifying the identity of a user or device.',
  definition_ar: 'التحقق من هوية المستخدم أو الجهاز.'
},
{
  english: 'authorization',
  arabic: 'التفويض',
  icon: '🛂',
  definition_en: 'Determining what actions a user is allowed to perform.',
  definition_ar: 'تحديد ما يُسمح للمستخدم بفعله.'
},
{
  english: 'hashing',
  arabic: 'الهاش',
  icon: '🔢',
  definition_en: 'Transforming data uniquely and irreversibly.',
  definition_ar: 'تحويل البيانات بشكل فريد وغير قابل للعكس.'
},
{
  english: 'salt',
  arabic: 'ملح تشفير',
  icon: '🧂',
  definition_en: 'Random data added to a password before hashing.',
  definition_ar: 'بيانات عشوائية تضاف إلى كلمة المرور قبل الهاش.'
},
{
  english: 'penetration testing',
  arabic: 'اختبار الاختراق',
  icon: '🗡️',
  definition_en: 'Simulating attacks to identify security weaknesses.',
  definition_ar: 'محاكاة هجمات لاكتشاف نقاط الضعف الأمنية.'
},
{
  english: 'threat model',
  arabic: 'نموذج التهديد',
  icon: '⚠️',
  definition_en: 'A structured approach to identifying security risks.',
  definition_ar: 'طريقة منظمة لتحديد المخاطر الأمنية.'
},
{
  english: 'incident response',
  arabic: 'الاستجابة للحوادث',
  icon: '🚑',
  definition_en: 'Steps taken to address a security breach.',
  definition_ar: 'الإجراءات المتخذة للتعامل مع اختراق أمني.'
},
{
  english: 'forensics',
  arabic: 'التحليل الجنائي الرقمي',
  icon: '🔍',
  definition_en: 'Investigating and analyzing digital evidence.',
  definition_ar: 'فحص وتحليل الأدلة الرقمية.'
},
{
  english: 'sql injection',
  arabic: 'حقن SQL',
  icon: '💉',
  definition_en: 'An attack that manipulates database queries.',
  definition_ar: 'هجوم يتلاعب باستعلامات قاعدة البيانات.'
},
{
  english: 'xss',
  arabic: 'هجوم XSS',
  icon: '⚡',
  definition_en: 'An attack that injects malicious scripts into websites.',
  definition_ar: 'هجوم يحقن سكربتات خبيثة داخل المواقع.'
},
{
  english: 'csrf',
  arabic: 'تزوير الطلبات عبر المواقع',
  icon: '🎯',
  definition_en: 'An attack that forces users to perform unwanted actions.',
  definition_ar: 'هجوم يجبر المستخدم على تنفيذ عمليات غير مرغوبة.'
},
{
  english: 'mitm attack',
  arabic: 'هجوم الرجل في الوسط',
  icon: '🧍‍♂️↔️🧍‍♀️',
  definition_en: 'Intercepting communication between two parties.',
  definition_ar: 'اعتراض الاتصال بين طرفين.'
},
{
  english: 'brute force attack',
  arabic: 'هجوم التخمين العنيف',
  icon: '🔨',
  definition_en: 'Trying all possible combinations to guess credentials.',
  definition_ar: 'تجربة جميع الاحتمالات لتخمين بيانات الدخول.'
},
{
  english: 'session hijacking',
  arabic: 'اختطاف الجلسة',
  icon: '🎫',
  definition_en: 'Stealing a user’s active session identifier.',
  definition_ar: 'سرقة معرف جلسة المستخدم النشطة.'
},
{
  english: 'payload',
  arabic: 'الحمولة الضارة',
  icon: '📦',
  definition_en: 'The malicious part of an attack.',
  definition_ar: 'الجزء الخبيث داخل الهجمة.'
},
{
  english: 'exploit',
  arabic: 'استغلال ثغرة',
  icon: '💥',
  definition_en: 'A tool or code that takes advantage of vulnerabilities.',
  definition_ar: 'أداة أو كود يستغل الثغرات.'
},
{
  english: 'vulnerability',
  arabic: 'ثغرة',
  icon: '🕳️',
  definition_en: 'A weakness that can be exploited by attackers.',
  definition_ar: 'نقطة ضعف يمكن استغلالها من قبل المهاجمين.'
},
{
  english: 'threat',
  arabic: 'تهديد',
  icon: '⚔️',
  definition_en: 'Any potential danger to a system.',
  definition_ar: 'أي خطر محتمل على النظام.'
},
{
  english: 'risk',
  arabic: 'مخاطرة',
  icon: '📉',
  definition_en: 'The likelihood of a threat exploiting a vulnerability.',
  definition_ar: 'احتمالية استغلال التهديد لثغرة.'
},
{
  english: 'two-factor authentication',
  arabic: 'المصادقة الثنائية',
  icon: '2️⃣',
  definition_en: 'Security that requires two verification methods.',
  definition_ar: 'حماية تتطلب طريقتين للتحقق.'
},
{
  english: 'packet sniffing',
  arabic: 'التنصت على الحزم',
  icon: '📡',
  definition_en: 'Capturing network packets to analyze traffic.',
  definition_ar: 'التقاط حزم الشبكة لتحليل المرور.'
},
{
  english: 'honeypot',
  arabic: 'فخ عسل',
  icon: '🍯',
  definition_en: 'A decoy system used to lure attackers.',
  definition_ar: 'نظام خداعي لجذب المهاجمين.'
},
{
  english: 'bot',
  arabic: 'روبوت',
  icon: '🤖',
  definition_en: 'An automated script that performs actions online.',
  definition_ar: 'برنامج آلي ينفذ أوامر عبر الإنترنت.'
},
{
  english: 'air gap',
  arabic: 'فصل هوائي',
  icon: '✂️',
  definition_en: 'A security measure isolating a system physically.',
  definition_ar: 'إجراء أمني يعزل النظام عن الشبكات تماماً.'
},
{
  english: 'keylogger',
  arabic: 'مسجّل المفاتيح',
  icon: '⌨️',
  definition_en: 'Software that records keystrokes secretly.',
  definition_ar: 'برنامج يسجل ضغطات المفاتيح بشكل سري.'
},
{
  english: 'patch',
  arabic: 'تصحيح أمني',
  icon: '🩹',
  definition_en: 'A software update that fixes vulnerabilities.',
  definition_ar: 'تحديث يصلح الثغرات والأخطاء.'
},
{
  english: 'session token',
  arabic: 'رمز الجلسة',
  icon: '🎟️',
  definition_en: 'A token used to maintain user sessions securely.',
  definition_ar: 'رمز يستخدم للحفاظ على جلسة المستخدم بشكل آمن.'
},
{
  english: 'insider threat',
  arabic: 'تهديد من الداخل',
  icon: '🏢',
  definition_en: 'A security risk coming from within the organization.',
  definition_ar: 'خطر أمني ناتج من داخل المؤسسة.'
},
{
  english: 'security audit',
  arabic: 'تدقيق أمني',
  icon: '📋',
  definition_en: 'An evaluation of a system’s security posture.',
  definition_ar: 'تقييم للحالة الأمنية للنظام.'
},
{
  english: 'access control',
  arabic: 'التحكم في الوصول',
  icon: '🔑',
  definition_en: 'Restricting access to resources based on permissions.',
  definition_ar: 'تقييد الوصول إلى الموارد بناءً على الصلاحيات.'
},
{
  english: 'data breach',
  arabic: 'تسريب بيانات',
  icon: '💾❌',
  definition_en: 'Unauthorized access to sensitive information.',
  definition_ar: 'وصول غير مصرح به إلى معلومات حساسة.'
},
{
  english: 'endpoint security',
  arabic: 'أمن الأجهزة الطرفية',
  icon: '💻',
  definition_en: 'Protection for user devices on a network.',
  definition_ar: 'حماية أجهزة المستخدمين داخل الشبكة.'
},
{
    english: 'register',
    arabic: 'مسجل البيانات',
    icon: '📊',
    definition_en: 'A small storage inside the CPU used to hold temporary data.',
    definition_ar: 'وحدة تخزين صغيرة داخل المعالج لحفظ بيانات مؤقتة.'
  },
  {
    english: 'bus',
    arabic: 'الناقل',
    icon: '🔗',
    definition_en: 'A communication system that transfers data between components.',
    definition_ar: 'نظام اتصال ينقل البيانات بين مكونات الكمبيوتر.'
  },
  {
    english: 'ram',
    arabic: 'الذاكرة العشوائية',
    icon: '📚',
    definition_en: 'A memory used to store data temporarily while programs run.',
    definition_ar: 'ذاكرة تخزن البيانات مؤقتاً أثناء تشغيل البرامج.'
  },
  {
    english: 'rom',
    arabic: 'ذاكرة القراءة فقط',
    icon: '💾',
    definition_en: 'Permanent memory that stores essential system instructions.',
    definition_ar: 'ذاكرة دائمة تخزن تعليمات النظام الأساسية.'
  },
  {
    english: 'bit',
    arabic: 'بت',
    icon: '⚙️',
    definition_en: 'The smallest unit of digital information, can be 0 or 1.',
    definition_ar: 'أصغر وحدة معلومات رقمية، يمكن أن تكون 0 أو 1.'
  },
  {
    english: 'clock speed',
    arabic: 'سرعة الساعة',
    icon: '⏱️',
    definition_en: 'The speed at which a processor executes instructions.',
    definition_ar: 'السرعة التي ينفذ بها المعالج الأوامر.'
  },
  {
    english: 'firmware',
    arabic: 'البرمجيات المدمجة',
    icon: '🧩',
    definition_en: 'Software programmed into hardware to control its functions.',
    definition_ar: 'برمجيات مدمجة في العتاد تتحكم في وظائفه.'
  },
  {
    english: 'compiler',
    arabic: 'المترجم',
    icon: '🛠️',
    definition_en: 'A program that converts source code into machine code.',
    definition_ar: 'برنامج يحول الكود المصدري إلى كود آلة.'
  },
  {
    english: 'algorithm',
    arabic: 'الخوارزمية',
    icon: '📐',
    definition_en: 'A step-by-step procedure to solve a problem.',
    definition_ar: 'مجموعة خطوات منظمة لحل مشكلة ما.'
  },
  {
    english: 'instruction set',
    arabic: 'مجموعة الأوامر',
    icon: '📘',
    definition_en: 'A set of commands supported by the CPU.',
    definition_ar: 'مجموعة الأوامر التي يدعمها المعالج.'
  },
  {
    english: 'logic gate',
    arabic: 'بوابة منطقية',
    icon: '🔲',
    definition_en: 'A basic digital circuit that performs logical operations.',
    definition_ar: 'دائرة رقمية أساسية تنفذ عمليات منطقية.'
  },
  {
    english: 'integrated circuit',
    arabic: 'الدائرة المتكاملة',
    icon: '🔌',
    definition_en: 'A tiny electronic circuit inside a chip.',
    definition_ar: 'دائرة إلكترونية صغيرة داخل شريحة.'
  },
  {
    english: 'floating point unit',
    arabic: 'وحدة الفاصلة العائمة',
    icon: '🌊',
    definition_en: 'The part of the CPU that performs decimal number operations.',
    definition_ar: 'جزء من المعالج ينفذ عمليات الأعداد العشرية.'
  },
  {
    english: 'pipeline',
    arabic: 'خط الأنابيب',
    icon: '🚇',
    definition_en: 'A technique where multiple instructions are processed in stages.',
    definition_ar: 'تقنية يتم فيها معالجة عدة تعليمات على مراحل.'
  },
  {
    english: 'multithreading',
    arabic: 'تعدد الخيوط',
    icon: '🧵',
    definition_en: 'Running multiple parts of a program simultaneously.',
    definition_ar: 'تشغيل عدة أجزاء من البرنامج في نفس الوقت.'
  },
  {
    english: 'cache miss',
    arabic: 'فشل الكاش',
    icon: '❌',
    definition_en: 'When data is not found in the cache and must be fetched from RAM.',
    definition_ar: 'عدم إيجاد البيانات في الكاش واضطرار النظام لجلبها من الذاكرة.'
  },
  {
    english: 'heat sink',
    arabic: 'مشتت حراري',
    icon: '🔥',
    definition_en: 'A device that absorbs and disperses heat from components.',
    definition_ar: 'جهاز يمتص الحرارة من المكونات ويبددها.'
  },
  {
    english: 'thread',
    arabic: 'خيط المعالجة',
    icon: '🧶',
    definition_en: 'A sequence of execution inside a program.',
    definition_ar: 'تسلسل تنفيذ داخل البرنامج.'
  },
  {
    english: 'interrupt',
    arabic: 'مقاطعة',
    icon: '⛔',
    definition_en: 'A signal that pauses the CPU to handle an urgent task.',
    definition_ar: 'إشارة توقف المعالج مؤقتاً للتعامل مع مهمة طارئة.'
  },
  {
    english: 'bandwidth',
    arabic: 'عرض النطاق',
    icon: '📡',
    definition_en: 'The maximum data transfer rate of a system or network.',
    definition_ar: 'أقصى معدل لنقل البيانات في نظام أو شبكة.'
  },
  {
    english: 'latency',
    arabic: 'زمن الاستجابة',
    icon: '⌛',
    definition_en: 'The delay before a transfer of data begins.',
    definition_ar: 'الوقت المستغرق قبل بدء نقل البيانات.'
  },
  {
    english: 'virtual memory',
    arabic: 'الذاكرة الافتراضية',
    icon: '🧠',
    definition_en: 'Additional memory created by using disk space as RAM.',
    definition_ar: 'ذاكرة إضافية يتم إنشاؤها باستخدام مساحة التخزين كبديل للذاكرة العشوائية.'
  },
  {
    english: 'bootloader',
    arabic: 'محمّل الإقلاع',
    icon: '🚀',
    definition_en: 'A small program that loads the operating system at startup.',
    definition_ar: 'برنامج صغير يقوم بتحميل نظام التشغيل عند بدء التشغيل.'
  },
  {
    english: 'binary',
    arabic: 'ثنائي',
    icon: '01',
    definition_en: 'A number system that uses only 0 and 1.',
    definition_ar: 'نظام عد يستخدم الصفر والواحد فقط.'
  },
  {
    english: 'power supply',
    arabic: 'مزود الطاقة',
    icon: '🔋',
    definition_en: 'A device that provides electrical power to the computer.',
    definition_ar: 'جهاز يوفر الطاقة الكهربائية للكمبيوتر.'
  },
  {
    english: 'sensor',
    arabic: 'حساس',
    icon: '🎛️',
    definition_en: 'A device that detects physical changes and outputs signals.',
    definition_ar: 'جهاز يستشعر التغيرات الفيزيائية ويخرج إشارات.'
  },
  {
    english: 'microcontroller',
    arabic: 'المتحكم الدقيق',
    icon: '🧩',
    definition_en: 'A compact integrated circuit used to control devices.',
    definition_ar: 'دائرة متكاملة صغيرة تُستخدم للتحكم في الأجهزة.'
  },
  {
    english: 'embedded system',
    arabic: 'النظام المدمج',
    icon: '🔧',
    definition_en: 'A computer system built into a larger device.',
    definition_ar: 'نظام حاسوبي مدمج داخل جهاز أكبر.'
  },
  {
    english: 'throughput',
    arabic: 'معدل الإنتاجية',
    icon: '🚚',
    definition_en: 'The amount of data processed in a given time.',
    definition_ar: 'كمية البيانات التي تتم معالجتها خلال وقت محدد.'
  },
  {
    english: 'firmware update',
    arabic: 'تحديث البرمجيات المدمجة',
    icon: '🔄',
    definition_en: 'A software update that improves hardware functionality.',
    definition_ar: 'تحديث برمجي يحسن أداء العتاد.'
  },
  {
    english: 'voltage regulator',
    arabic: 'منظم الجهد',
    icon: '⚡',
    definition_en: 'A device that maintains a constant voltage level.',
    definition_ar: 'جهاز يحافظ على مستوى ثابت للجهد الكهربائي.'
  },
  {
    english: 'oscillator',
    arabic: 'مهتز',
    icon: '🎛️',
    definition_en: 'A circuit that generates repetitive electronic signals.',
    definition_ar: 'دائرة تنتج إشارات إلكترونية متكررة.'
  },
  {
    english: 'processor',
    arabic: 'المعالج',
    icon: '🖥️',
    definition_en: 'The main chip that executes instructions.',
    definition_ar: 'الشريحة الأساسية التي تنفذ الأوامر.'
  },
  {
    english: 'motherboard',
    arabic: 'اللوحة الأم',
    icon: '📦',
    definition_en: 'The main circuit board connecting all components.',
    definition_ar: 'اللوحة الأساسية التي تربط جميع المكونات.'
  },
  {
    english: 'ram',
    arabic: 'ذاكرة الوصول العشوائي',
    icon: '📚',
    definition_en: 'Temporary memory used by running programs.',
    definition_ar: 'ذاكرة مؤقتة تستخدمها البرامج أثناء التشغيل.'
  },
  {
    english: 'rom',
    arabic: 'ذاكرة القراءة فقط',
    icon: '💾',
    definition_en: 'Permanent memory storing essential instructions.',
    definition_ar: 'ذاكرة دائمة تخزن التعليمات الأساسية.'
  },
  {
    english: 'cache',
    arabic: 'الذاكرة المخبئية',
    icon: '⚡',
    definition_en: 'Fast memory storing frequently accessed data.',
    definition_ar: 'ذاكرة سريعة تخزن البيانات المستخدمة بشكل متكرر.'
  },
  {
    english: 'register',
    arabic: 'مسجل البيانات',
    icon: '📊',
    definition_en: 'Small storage inside the CPU for temporary values.',
    definition_ar: 'وحدة تخزين صغيرة داخل المعالج لحفظ بيانات مؤقتة.'
  },
  {
    english: 'bus',
    arabic: 'الناقل',
    icon: '🔗',
    definition_en: 'A communication path for transferring data.',
    definition_ar: 'مسار اتصال لنقل البيانات بين المكونات.'
  },
  {
    english: 'bit',
    arabic: 'بت',
    icon: '0️⃣',
    definition_en: 'The smallest unit of digital information.',
    definition_ar: 'أصغر وحدة معلومات رقمية.'
  },
  {
    english: 'byte',
    arabic: 'بايت',
    icon: '1️⃣',
    definition_en: 'A group of 8 bits.',
    definition_ar: 'مجموعة من 8 بتات.'
  },
  {
    english: 'clock speed',
    arabic: 'سرعة الساعة',
    icon: '⏱️',
    definition_en: 'Processor speed measured in GHz.',
    definition_ar: 'سرعة المعالج وتقاس بالجيجاهرتز.'
  },
  {
    english: 'firmware',
    arabic: 'البرمجيات المدمجة',
    icon: '🧩',
    definition_en: 'Software stored in hardware to control its functions.',
    definition_ar: 'برمجيات مخزنة داخل العتاد للتحكم بوظائفه.'
  },
  {
    english: 'compiler',
    arabic: 'المترجم',
    icon: '🛠️',
    definition_en: 'A program that converts source code to machine code.',
    definition_ar: 'برنامج يحول الكود المصدري إلى كود آلة.'
  },
  {
    english: 'interpreter',
    arabic: 'المفسر',
    icon: '🎧',
    definition_en: 'Executes code line by line.',
    definition_ar: 'ينفذ الكود سطرًا بسطر.'
  },
  {
    english: 'algorithm',
    arabic: 'الخوارزمية',
    icon: '📐',
    definition_en: 'A step-by-step procedure to solve a problem.',
    definition_ar: 'خطوات منظمة لحل مشكلة معينة.'
  },
  {
    english: 'binary',
    arabic: 'ثنائي',
    icon: '01',
    definition_en: 'A number system using 0 and 1.',
    definition_ar: 'نظام عد يعتمد على 0 و 1.'
  },
  {
    english: 'hexadecimal',
    arabic: 'سداسي عشري',
    icon: '🔢',
    definition_en: 'A base-16 number system.',
    definition_ar: 'نظام عد من 16 رمزًا.'
  },
  {
    english: 'logic gate',
    arabic: 'بوابة منطقية',
    icon: '🔲',
    definition_en: 'A basic digital circuit performing logical operations.',
    definition_ar: 'دائرة رقمية تنفذ عمليات منطقية.'
  },
  {
    english: 'integrated circuit',
    arabic: 'دائرة متكاملة',
    icon: '💡',
    definition_en: 'A chip containing miniaturized electronic circuits.',
    definition_ar: 'شريحة تحتوي على دوائر إلكترونية مصغرة.'
  },
  {
    english: 'transistor',
    arabic: 'ترانزستور',
    icon: '📡',
    definition_en: 'A semiconductor device that amplifies or switches signals.',
    definition_ar: 'جهاز شبه موصل يُستخدم للتضخيم أو التبديل.'
  },
  {
    english: 'microprocessor',
    arabic: 'المعالج الدقيق',
    icon: '💻',
    definition_en: 'A CPU on a single integrated circuit.',
    definition_ar: 'وحدة معالجة مركزية على شريحة واحدة.'
  },
  {
    english: 'microcontroller',
    arabic: 'المتحكم الدقيق',
    icon: '🧩',
    definition_en: 'A chip with CPU, memory, and I/O for control tasks.',
    definition_ar: 'شريحة تضم معالجًا وذاكرة ومدخلات ومخرجات للتحكم.'
  },
  {
    english: 'embedded system',
    arabic: 'النظام المدمج',
    icon: '🔧',
    definition_en: 'A computer system built into a larger device.',
    definition_ar: 'نظام حاسوبي مدمج داخل جهاز أكبر.'
  },
  {
    english: 'oscillator',
    arabic: 'مهتز',
    icon: '🎛️',
    definition_en: 'A circuit that generates repetitive electronic signals.',
    definition_ar: 'دائرة تنتج إشارات إلكترونية متكررة.'
  },
  {
    english: 'heat sink',
    arabic: 'مشتت حراري',
    icon: '🔥',
    definition_en: 'A device used to dissipate heat from components.',
    definition_ar: 'جهاز يساعد على تبديد حرارة المكونات.'
  },
  {
    english: 'power supply',
    arabic: 'مزود الطاقة',
    icon: '🔋',
    definition_en: 'Converts AC electricity to DC for computers.',
    definition_ar: 'يحّول الكهرباء من AC إلى DC لجهاز الكمبيوتر.'
  },
  {
    english: 'gpu',
    arabic: 'وحدة معالجة الرسوميات',
    icon: '🎮',
    definition_en: 'A processor for graphics and parallel computing.',
    definition_ar: 'معالج مخصص للرسوميات والحوسبة المتوازية.'
  },
  {
    english: 'ssd',
    arabic: 'قرص الحالة الصلبة',
    icon: '📀',
    definition_en: 'A fast storage device with no moving parts.',
    definition_ar: 'وحدة تخزين سريعة بدون أجزاء متحركة.'
  },
  {
    english: 'hdd',
    arabic: 'القرص الصلب',
    icon: '💽',
    definition_en: 'A magnetic storage device with spinning disks.',
    definition_ar: 'وحدة تخزين تعتمد على أقراص دوارة.'
  },
  {
    english: 'bios',
    arabic: 'البيوس',
    icon: '🧬',
    definition_en: 'Firmware that initializes hardware during startup.',
    definition_ar: 'برمجيات مدمجة تهيئ العتاد عند بدء التشغيل.'
  },
  {
    english: 'bootloader',
    arabic: 'محمّل الإقلاع',
    icon: '🚀',
    definition_en: 'Loads the operating system when the device starts.',
    definition_ar: 'يحمل نظام التشغيل عند تشغيل الجهاز.'
  },
  {
    english: 'virtual memory',
    arabic: 'الذاكرة الافتراضية',
    icon: '🧠',
    definition_en: 'Uses disk space as additional RAM.',
    definition_ar: 'استخدام القرص كذاكرة عشوائية إضافية.'
  },
  {
    english: 'throughput',
    arabic: 'معدل الإنتاجية',
    icon: '🚚',
    definition_en: 'Amount of data processed in a given time.',
    definition_ar: 'كمية البيانات المعالجة خلال فترة معينة.'
  },
  {
    english: 'latency',
    arabic: 'زمن الاستجابة',
    icon: '⌛',
    definition_en: 'The delay before data begins transferring.',
    definition_ar: 'التأخير قبل بدء نقل البيانات.'
  },
  {
    english: 'bandwidth',
    arabic: 'عرض النطاق',
    icon: '📡',
    definition_en: 'Maximum rate of data transfer.',
    definition_ar: 'أقصى معدل لنقل البيانات.'
  },
  {
    english: 'sensor',
    arabic: 'حساس',
    icon: '🎛️',
    definition_en: 'A device that detects physical changes.',
    definition_ar: 'جهاز يستشعر التغيرات الفيزيائية.'
  },
  {
    english: 'actuator',
    arabic: 'مشغل',
    icon: '⚙️',
    definition_en: 'A device that converts signals into physical action.',
    definition_ar: 'جهاز يحول الإشارات إلى حركة فيزيائية.'
  },
  {
    english: 'chipset',
    arabic: 'طقم الشرائح',
    icon: '🧱',
    definition_en: 'Controls communication between CPU, RAM, and devices.',
    definition_ar: 'يتحكم في الاتصال بين المعالج والذاكرة والأجهزة.'
  },
  {
    english: 'pci slot',
    arabic: 'منفذ PCI',
    icon: '📥',
    definition_en: 'A slot to connect expansion cards.',
    definition_ar: 'منفذ لتوصيل بطاقات التوسعة.'
  },
  {
    english: 'ethernet',
    arabic: 'إيثرنت',
    icon: '🔌',
    definition_en: 'A wired networking technology.',
    definition_ar: 'تقنية شبكة سلكية.'
  },
  {
    english: 'wifi',
    arabic: 'واي فاي',
    icon: '📶',
    definition_en: 'A wireless networking technology.',
    definition_ar: 'تقنية شبكة لاسلكية.'
  },
  {
    english: 'bluetooth',
    arabic: 'بلوتوث',
    icon: '🌀',
    definition_en: 'Short-range wireless communication.',
    definition_ar: 'اتصال لاسلكي قصير المدى.'
  },
  {
    english: 'ip address',
    arabic: 'عنوان IP',
    icon: '🌐',
    definition_en: 'Digital address identifying a device on a network.',
    definition_ar: 'عنوان رقمي يعرّف الجهاز على الشبكة.'
  },
  {
    english: 'mac address',
    arabic: 'عنوان MAC',
    icon: '🏷️',
    definition_en: 'Unique hardware address of a network interface.',
    definition_ar: 'عنوان فريد لبطاقات الشبكة.'
  },
  {
    english: 'router',
    arabic: 'راوتر',
    icon: '📡',
    definition_en: 'Device that forwards data between networks.',
    definition_ar: 'جهاز يوجه البيانات بين الشبكات.'
  },
  {
    english: 'switch',
    arabic: 'مبدّل',
    icon: '🔀',
    definition_en: 'Connects devices in the same network.',
    definition_ar: 'يربط الأجهزة ضمن نفس الشبكة.'
  },
  {
    english: 'firewall',
    arabic: 'جدار الحماية',
    icon: '🧱',
    definition_en: 'Security system that monitors network traffic.',
    definition_ar: 'نظام أمني يراقب حركة البيانات.'
  },
  {
    english: 'vpn',
    arabic: 'شبكة خاصة افتراضية',
    icon: '🕶️',
    definition_en: 'Encrypts your internet connection.',
    definition_ar: 'يقوم بتشفير اتصال الإنترنت.'
  },
  {
    english: 'socket',
    arabic: 'مقبس',
    icon: '🔌',
    definition_en: 'Endpoint of communication between two programs.',
    definition_ar: 'نقطة اتصال بين برنامجين.'
  },
  {
    english: 'api',
    arabic: 'واجهة برمجة التطبيقات',
    icon: '🔗',
    definition_en: 'A set of rules for software communication.',
    definition_ar: 'مجموعة قواعد لربط التطبيقات ببعضها.'
  },
  {
    english: 'thread',
    arabic: 'خيط المعالجة',
    icon: '🧵',
    definition_en: 'Smallest sequence of programmed instructions.',
    definition_ar: 'أصغر تسلسل من التعليمات البرمجية.'
  },
  {
    english: 'multithreading',
    arabic: 'تعدد الخيوط',
    icon: '🧶',
    definition_en: 'Running multiple threads at the same time.',
    definition_ar: 'تشغيل عدة خيوط في نفس الوقت.'
  },
  {
    english: 'kernel',
    arabic: 'النواة',
    icon: '⚙️',
    definition_en: 'Core part of the operating system.',
    definition_ar: 'الجزء الأساسي من نظام التشغيل.'
  },
  {
    english: 'operating system',
    arabic: 'نظام التشغيل',
    icon: '🖥️',
    definition_en: 'Software that manages hardware and applications.',
    definition_ar: 'البرمجيات التي تدير العتاد والتطبيقات.'
  },
  {
    english: 'file system',
    arabic: 'نظام الملفات',
    icon: '📁',
    definition_en: 'Controls how data is stored and retrieved.',
    definition_ar: 'يدير كيفية تخزين البيانات واسترجاعها.'
  },
  {
    english: 'buffer',
    arabic: 'ذاكرة مؤقتة',
    icon: '📥',
    definition_en: 'Temporary memory used to hold data before processing.',
    definition_ar: 'ذاكرة مؤقتة لتخزين البيانات قبل معالجتها.'
  },
  {
    english: 'overflow',
    arabic: 'تجاوز السعة',
    icon: '🌊',
    definition_en: 'When data exceeds memory limits.',
    definition_ar: 'عندما تتجاوز البيانات حدود الذاكرة.'
  },
  {
    english: 'stack',
    arabic: 'المكدس',
    icon: '📚',
    definition_en: 'Memory used for function calls and local variables.',
    definition_ar: 'ذاكرة تُستخدم لاستدعاءات الدوال والمتغيرات المحلية.'
  },
  {
    english: 'heap',
    arabic: 'الكومة',
    icon: '🎒',
    definition_en: 'Memory used for dynamic allocation.',
    definition_ar: 'ذاكرة تُستخدم للتخصيص الديناميكي.'
  },
  {
    english: 'json',
    arabic: 'جيسون',
    icon: '📦',
    definition_en: 'A lightweight data exchange format.',
    definition_ar: 'صيغة خفيفة لتبادل البيانات.'
  },
  {
    english: 'encryption',
    arabic: 'التشفير',
    icon: '🔐',
    definition_en: 'Transforming data so only authorized users can read it.',
    definition_ar: 'تحويل البيانات بحيث لا يقرأها إلا المصرح لهم.'
  },
  {
    english: 'hashing',
    arabic: 'الهاش',
    icon: '🧮',
    definition_en: 'Converting data into a fixed-length value.',
    definition_ar: 'تحويل البيانات إلى قيمة ثابتة الطول.'
  },
  {
    english: 'public key',
    arabic: 'المفتاح العام',
    icon: '🔓',
    definition_en: 'A key used for encrypting data.',
    definition_ar: 'مفتاح يُستخدم لتشفير البيانات.'
  },
  {
    english: 'private key',
    arabic: 'المفتاح الخاص',
    icon: '🔑',
    definition_en: 'A key used for decrypting data.',
    definition_ar: 'مفتاح يُستخدم لفك التشفير.'
  },
  {
    english: 'machine learning',
    arabic: 'تعلم الآلة',
    icon: '🤖',
    definition_en: 'A field where computers learn from data.',
    definition_ar: 'مجال يتعلم فيه الكمبيوتر من البيانات.'
  },
  {
    english: 'database',
    arabic: 'قاعدة البيانات',
    icon: '🗄️',
    definition_en: 'An organized collection of data.',
    definition_ar: 'مجموعة منظمة من البيانات.'
  },
  {
    english: 'query',
    arabic: 'استعلام',
    icon: '❓',
    definition_en: 'A request for information from a database.',
    definition_ar: 'طلب للحصول على بيانات من قاعدة البيانات.'
  },
  {
    english: 'server',
    arabic: 'الخادم',
    icon: '🖧',
    definition_en: 'A computer that provides services to clients.',
    definition_ar: 'جهاز يقدم خدمات لأجهزة أخرى.'
  },
  {
    english: 'client',
    arabic: 'العميل',
    icon: '👤',
    definition_en: 'A device that requests services from a server.',
    definition_ar: 'جهاز يطلب خدمات من الخادم.'
  },
  {
    english: 'cloud computing',
    arabic: 'الحوسبة السحابية',
    icon: '☁️',
    definition_en: 'Using remote servers over the internet.',
    definition_ar: 'استخدام خوادم بعيدة عبر الإنترنت.'
  },
  {
    english: 'spectrum',
    arabic: 'طيف',
    icon: '🌈',
    definition_en: 'The range of electromagnetic frequencies used for communication.',
    definition_ar: 'مجموعة الترددات الكهرومغناطيسية المستخدمة في الاتصال.'
  },
  {
    english: 'amplifier',
    arabic: 'مضخم',
    icon: '📢',
    definition_en: 'A device that increases the strength of a signal.',
    definition_ar: 'جهاز يزيد من قوة الإشارة.'
  },
  {
    english: 'filter',
    arabic: 'مرشح',
    icon: '🧪',
    definition_en: 'A circuit that removes unwanted frequencies from a signal.',
    definition_ar: 'دائرة تزيل الترددات غير المرغوبة من الإشارة.'
  },
  {
    english: 'multimeter',
    arabic: 'ملتيميتر',
    icon: '🔧',
    definition_en: 'A tool used to measure voltage, current, and resistance.',
    definition_ar: 'أداة تستخدم لقياس الجهد والتيار والمقاومة.'
  },
  {
    english: 'oscilloscope',
    arabic: 'راسم الذبذبات',
    icon: '📈',
    definition_en: 'A device that displays electronic signal waveforms.',
    definition_ar: 'جهاز يعرض أشكال الموجات للإشارات الإلكترونية.'
  },
  {
    english: 'transmitter',
    arabic: 'مرسل',
    icon: '📡',
    definition_en: 'A device that sends signals over a distance.',
    definition_ar: 'جهاز يرسل الإشارات عبر مسافة.'
  },
  {
    english: 'receiver',
    arabic: 'مستقبل',
    icon: '📥',
    definition_en: 'A device that receives and decodes signals.',
    definition_ar: 'جهاز يستقبل ويفك تشفير الإشارات.'
  },
  {
    english: 'ground',
    arabic: 'الأرضي',
    icon: '🌍',
    definition_en: 'A reference point in circuits with zero voltage.',
    definition_ar: 'نقطة مرجعية في الدوائر بجهد صفري.'
  },
  {
    english: 'impedance',
    arabic: 'الممانعة',
    icon: '📏',
    definition_en: 'The total opposition a circuit offers to alternating current.',
    definition_ar: 'المقاومة الكلية التي تقدمها الدائرة للتيار المتردد.'
  },
  {
    english: 'diode',
    arabic: 'دايود',
    icon: '➡️',
    definition_en: 'A component that allows current to flow in one direction only.',
    definition_ar: 'مكون يسمح بمرور التيار في اتجاه واحد فقط.'
  },
  {
    english: 'capacitive sensor',
    arabic: 'حساس سعوي',
    icon: '📟',
    definition_en: 'A sensor that detects changes in capacitance.',
    definition_ar: 'حساس يكتشف التغيرات في السعة الكهربائية.'
  },
  {
    english: 'inductive sensor',
    arabic: 'حساس حثي',
    icon: '🔍',
    definition_en: 'A sensor that detects metal objects using magnetic fields.',
    definition_ar: 'حساس يكتشف الأجسام المعدنية باستخدام المجالات المغناطيسية.'
  },
  {
    english: 'digital signal',
    arabic: 'إشارة رقمية',
    icon: '💠',
    definition_en: 'A signal represented by discrete values, usually 0 and 1.',
    definition_ar: 'إشارة تمثل بقيم منفصلة عادة 0 و1.'
  },
  {
    english: 'analog signal',
    arabic: 'إشارة تماثلية',
    icon: '📶',
    definition_en: 'A continuous signal that varies over time.',
    definition_ar: 'إشارة مستمرة تتغير بمرور الوقت.'
  },
  {
    english: 'firmware',
    arabic: 'برمجيات مدمجة',
    icon: '🧩',
    definition_en: 'Software stored in hardware to control its functions.',
    definition_ar: 'برمجيات مدمجة في العتاد للتحكم في وظائفه.'
  },
  {
    english: 'microarchitecture',
    arabic: 'الميكروآركيتيكتشر',
    icon: '🏗️',
    definition_en: 'The internal structure of a processor that defines how it executes instructions.',
    definition_ar: 'البنية الداخلية للمعالج التي تحدد كيفية تنفيذ التعليمات.'
  },
  {
    english: 'bootloader',
    arabic: 'محمّل الإقلاع',
    icon: '🚀',
    definition_en: 'A small program that starts the operating system.',
    definition_ar: 'برنامج صغير يبدأ تشغيل نظام التشغيل.'
  },
  {
    english: 'checksum',
    arabic: 'مجموع التحقق',
    icon: '✔️',
    definition_en: 'A value used to verify data integrity.',
    definition_ar: 'قيمة تستخدم للتحقق من سلامة البيانات.'
  },
  {
    english: 'heat sink',
    arabic: 'مشتت حراري',
    icon: '🔥',
    definition_en: 'A component that dissipates heat from electronic devices.',
    definition_ar: 'مكون يبدد الحرارة من الأجهزة الإلكترونية.'
  },
  {
    english: 'logic gate',
    arabic: 'بوابة منطقية',
    icon: '🔲',
    definition_en: 'A basic building block of digital circuits that performs logical operations.',
    definition_ar: 'وحدة أساسية في الدوائر الرقمية تقوم بعمليات منطقية.'
  },
  {
  english: 'privilege escalation',
  arabic: 'تصعيد الامتيازات',
  icon: '⬆️',
  definition_en: 'Gaining higher access rights than permitted.',
  definition_ar: 'الحصول على صلاحيات أعلى من المسموح بها.'
},
{
  english: 'password cracking',
  arabic: 'كسر كلمة المرور',
  icon: '🔑💥',
  definition_en: 'Attempting to discover a password by guessing or computing.',
  definition_ar: 'محاولة اكتشاف كلمة المرور عن طريق التخمين أو الحساب.'
},
{
  english: 'social media attack',
  arabic: 'هجوم عبر وسائل التواصل',
  icon: '📱⚠️',
  definition_en: 'Exploiting social media to target users or organizations.',
  definition_ar: 'استغلال وسائل التواصل الاجتماعي لاستهداف المستخدمين أو المؤسسات.'
},
{
  english: 'cloud security',
  arabic: 'أمن السحابة',
  icon: '☁️🔒',
  definition_en: 'Protecting data, applications, and services in the cloud.',
  definition_ar: 'حماية البيانات والتطبيقات والخدمات في السحابة.'
},
{
  english: 'iot security',
  arabic: 'أمن إنترنت الأشياء',
  icon: '📶🛡️',
  definition_en: 'Securing connected devices in the Internet of Things.',
  definition_ar: 'تأمين الأجهزة المتصلة في شبكة إنترنت الأشياء.'
},
{
  english: 'mobile security',
  arabic: 'أمن الهواتف المحمولة',
  icon: '📱🛡️',
  definition_en: 'Protecting mobile devices from cyber threats.',
  definition_ar: 'حماية الأجهزة المحمولة من التهديدات الإلكترونية.'
},
{
  english: 'spam',
  arabic: 'البريد المزعج',
  icon: '📧❌',
  definition_en: 'Unwanted or unsolicited messages, often malicious.',
  definition_ar: 'رسائل غير مرغوب فيها أو غير مطلوبة، غالباً خبيثة.'
},
{
  english: 'domain spoofing',
  arabic: 'انتحال النطاق',
  icon: '🌐🎭',
  definition_en: 'Pretending to be a legitimate website to deceive users.',
  definition_ar: 'التظاهر بأنك موقع شرعي لخداع المستخدمين.'
},
{
  english: 'ip spoofing',
  arabic: 'انتحال عنوان IP',
  icon: '🌐🕵️',
  definition_en: 'Faking IP addresses to hide identity or launch attacks.',
  definition_ar: 'تزوير عناوين IP لإخفاء الهوية أو تنفيذ هجمات.'
},
{
  english: 'dns poisoning',
  arabic: 'تسمم DNS',
  icon: '🧪🌐',
  definition_en: 'Redirecting traffic to malicious sites by corrupting DNS.',
  definition_ar: 'إعادة توجيه الحركة إلى مواقع خبيثة عن طريق تلف DNS.'
},
{
  english: 'vishing',
  arabic: 'التصيد الصوتي',
  icon: '📞🎣',
  definition_en: 'Voice phishing to trick users into revealing information.',
  definition_ar: 'التصيد عبر المكالمات الصوتية لخداع المستخدمين.'
},
{
  english: 'smishing',
  arabic: 'التصيد عبر الرسائل القصيرة',
  icon: '📱🎣',
  definition_en: 'SMS phishing to steal sensitive information.',
  definition_ar: 'التصيد عبر الرسائل النصية لسرقة المعلومات الحساسة.'
},
{
  english: 'brute force defense',
  arabic: 'حماية ضد الهجمات العنيفة',
  icon: '🛡️🔨',
  definition_en: 'Security measures to prevent brute force attacks.',
  definition_ar: 'إجراءات أمنية لمنع هجمات التخمين العنيف.'
},
{
  english: 'sandboxing',
  arabic: 'التشغيل في صندوق حماية',
  icon: '🧰',
  definition_en: 'Running code in a restricted environment to prevent damage.',
  definition_ar: 'تشغيل الكود في بيئة محدودة لمنع الضرر.'
},
{
  english: 'cyber threat intelligence',
  arabic: 'معلومات التهديد السيبراني',
  icon: '🧠💻',
  definition_en: 'Data about potential and current cyber threats.',
  definition_ar: 'بيانات حول التهديدات السيبرانية الحالية والمحتملة.'
},
{
  english: 'zero trust',
  arabic: 'الثقة الصفرية',
  icon: '🛑',
  definition_en: 'A security model that always verifies access regardless of location.',
  definition_ar: 'نموذج أمني يتحقق دائماً من الوصول بغض النظر عن الموقع.'
},
{
  english: 'intrusion detection system',
  arabic: 'نظام كشف التسلل',
  icon: '🕵️‍♂️',
  definition_en: 'Monitors networks for malicious activity.',
  definition_ar: 'يراقب الشبكات للكشف عن الأنشطة الخبيثة.'
},
{
  english: 'intrusion prevention system',
  arabic: 'نظام منع التسلل',
  icon: '🚫🕵️‍♂️',
  definition_en: 'Detects and actively blocks threats in networks.',
  definition_ar: 'يكشف التهديدات ويمنعها بشكل نشط في الشبكات.'
},
{
  english: 'patch management',
  arabic: 'إدارة التصحيحات',
  icon: '🩹💻',
  definition_en: 'Process of applying updates to fix vulnerabilities.',
  definition_ar: 'عملية تطبيق التحديثات لإصلاح الثغرات.'
},
{
  english: 'data encryption standard',
  arabic: 'معيار تشفير البيانات',
  icon: '🔐📄',
  definition_en: 'A symmetric-key algorithm for securing data.',
  definition_ar: 'خوارزمية تشفير متماثلة لحماية البيانات.'
},
{
  english: 'advanced persistent threat',
  arabic: 'تهديد متقدم مستمر',
  icon: '🕵️‍♀️⏳',
  definition_en: 'A prolonged targeted cyberattack by skilled actors.',
  definition_ar: 'هجوم سيبراني مستمر وموجه من قبل جهات ماهرة.'
},
{
  english: 'sandbox escape',
  arabic: 'الهروب من الصندوق المحمي',
  icon: '🏃‍♂️🧰',
  definition_en: 'Exploiting vulnerabilities to break out of a sandbox.',
  definition_ar: 'استغلال ثغرات للخروج من البيئة المعزولة.'
},
{
  english: 'credential stuffing',
  arabic: 'حقن بيانات الاعتماد',
  icon: '📂💥',
  definition_en: 'Using stolen credentials to gain unauthorized access.',
  definition_ar: 'استخدام بيانات اعتماد مسروقة للوصول غير المصرح به.'
},
{
  english: 'cyber espionage',
  arabic: 'التجسس السيبراني',
  icon: '🕵️‍♂️💻',
  definition_en: 'Spying on organizations or individuals via cyber attacks.',
  definition_ar: 'التجسس على المؤسسات أو الأفراد عبر الهجمات الإلكترونية.'
},
{
  english: 'drive-by download',
  arabic: 'تحميل خفي',
  icon: '💻⬇️',
  definition_en: 'Malware downloaded automatically without user consent.',
  definition_ar: 'تحميل برنامج خبيث تلقائياً بدون موافقة المستخدم.'
},
{
  english: 'key management',
  arabic: 'إدارة المفاتيح',
  icon: '🗝️',
  definition_en: 'Handling encryption keys securely throughout their lifecycle.',
  definition_ar: 'إدارة المفاتيح بشكل آمن طوال دورة حياتها.'
},
{
  english: 'hash collision',
  arabic: 'تصادم الهاش',
  icon: '🔢⚡',
  definition_en: 'When two different inputs produce the same hash value.',
  definition_ar: 'عندما تعطي مدخلات مختلفة نفس قيمة الهاش.'
},
{
  english: 'man-in-the-browser',
  arabic: 'الرجل في المتصفح',
  icon: '🖥️🕵️',
  definition_en: 'Malware that manipulates browser transactions.',
  definition_ar: 'برمجية خبيثة تتحكم في معاملات المتصفح.'
},
{
  english: 'security token',
  arabic: 'رمز الأمان',
  icon: '🎟️🔒',
  definition_en: 'A physical or digital device used to authenticate users.',
  definition_ar: 'جهاز مادي أو رقمي يستخدم لمصادقة المستخدمين.'
},
{
  english: 'threat hunting',
  arabic: 'مطاردة التهديدات',
  icon: '🕵️‍♀️⚡',
  definition_en: 'Actively searching for cyber threats within networks.',
  definition_ar: 'البحث النشط عن التهديدات السيبرانية في الشبكات.'
},
{
  english: 'sandbox analysis',
  arabic: 'تحليل الصندوق المحمي',
  icon: '🧰🔬',
  definition_en: 'Examining suspicious files in a controlled environment.',
  definition_ar: 'فحص الملفات المشبوهة في بيئة مراقبة.'
},
{
  english: 'data exfiltration',
  arabic: 'استخراج البيانات',
  icon: '💾➡️',
  definition_en: 'Unauthorized transfer of data from a system.',
  definition_ar: 'نقل غير مصرح به للبيانات من النظام.'
},
{
  english: 'vulnerability scanner',
  arabic: 'ماسح الثغرات',
  icon: '🔍💥',
  definition_en: 'A tool to identify security weaknesses.',
  definition_ar: 'أداة لتحديد نقاط الضعف الأمنية.'
},
{
  english: 'cyber hygiene',
  arabic: 'النظافة السيبرانية',
  icon: '🧼💻',
  definition_en: 'Best practices to maintain security and reduce risks.',
  definition_ar: 'أفضل الممارسات للحفاظ على الأمن وتقليل المخاطر.'
},
{
  english: 'privileged access',
  arabic: 'الوصول المتميز',
  icon: '🛡️🔑',
  definition_en: 'High-level access rights to critical systems.',
  definition_ar: 'حقوق وصول عالية إلى الأنظمة الحيوية.'
},
{
  english: 'data masking',
  arabic: 'إخفاء البيانات',
  icon: '🗄️🕶️',
  definition_en: 'Replacing sensitive information with obfuscated values.',
  definition_ar: 'استبدال البيانات الحساسة بقيم مشفرة أو مخفية.'
},
{
  english: 'deep packet inspection',
  arabic: 'فحص الحزم العميق',
  icon: '📡🔍',
  definition_en: 'Analyzing the contents of data packets for threats.',
  definition_ar: 'تحليل محتويات حزم البيانات للكشف عن التهديدات.'
},
{
  english: 'honeynet',
  arabic: 'شبكة فخ',
  icon: '🍯🌐',
  definition_en: 'A network of decoy systems to trap attackers.',
  definition_ar: 'شبكة أنظمة خادعة لجذب المهاجمين.'
},
{
  english: 'cyber kill chain',
  arabic: 'سلسلة قتل سيبرانية',
  icon: '🔗💀',
  definition_en: 'Stages of a cyber attack from reconnaissance to objectives.',
  definition_ar: 'مراحل الهجوم السيبراني من الاستطلاع إلى تحقيق الهدف.'
},
{
  english: 'security orchestration',
  arabic: 'تنسيق الأمن',
  icon: '🎛️🔒',
  definition_en: 'Automating and integrating security tools and processes.',
  definition_ar: 'أتمتة ودمج أدوات وعمليات الأمن.'
},
{
  english: 'sandbox escape detection',
  arabic: 'كشف الهروب من الصندوق المحمي',
  icon: '🚨🧰',
  definition_en: 'Identifying attempts to break out of sandbox environments.',
  definition_ar: 'كشف محاولات الهروب من البيئة المعزولة.'
},
{
  english: 'cyber resilience',
  arabic: 'المرونة السيبرانية',
  icon: '🛡️💪',
  definition_en: 'The ability to withstand and recover from cyber attacks.',
  definition_ar: 'القدرة على الصمود والتعافي من الهجمات السيبرانية.'
},
{
  english: 'credential harvesting',
  arabic: 'جمع بيانات الاعتماد',
  icon: '📂🎣',
  definition_en: 'Collecting usernames and passwords for malicious use.',
  definition_ar: 'جمع أسماء المستخدمين وكلمات المرور للاستخدام الضار.'
},
{
  english: 'cyber insurance',
  arabic: 'تأمين سيبراني',
  icon: '💼🛡️',
  definition_en: 'Insurance to mitigate financial losses from cyber attacks.',
  definition_ar: 'تأمين لتقليل الخسائر المالية الناتجة عن الهجمات السيبرانية.'
},
{
  english: 'web application firewall',
  arabic: 'جدار حماية التطبيقات الوب',
  icon: '🌐🔥',
  definition_en: 'Filters and monitors HTTP traffic to and from web apps.',
  definition_ar: 'فلترة ومراقبة حركة HTTP للتطبيقات الوب.'
},
{
  english: 'privilege revocation',
  arabic: 'سحب الامتيازات',
  icon: '✂️🛡️',
  definition_en: 'Removing access rights from users when no longer needed.',
  definition_ar: 'إزالة صلاحيات الوصول من المستخدمين عند عدم الحاجة.'
},
{
  english: 'cybersecurity framework',
  arabic: 'إطار العمل الأمني',
  icon: '🗂️🛡️',
  definition_en: 'Structured guidelines for managing cybersecurity risks.',
  definition_ar: 'إرشادات منظمة لإدارة مخاطر الأمن السيبراني.'
},
{
  english: 'security policy',
  arabic: 'سياسة الأمان',
  icon: '📜🔒',
  definition_en: 'Rules and practices for protecting digital assets.',
  definition_ar: 'القواعد والممارسات لحماية الأصول الرقمية.'
},
{
  english: 'digital certificate',
  arabic: 'شهادة رقمية',
  icon: '📄🔑',
  definition_en: 'A credential proving identity in digital communications.',
  definition_ar: 'بيانات اعتماد تثبت الهوية في الاتصالات الرقمية.'
},
{
  english: 'security monitoring',
  arabic: 'مراقبة الأمان',
  icon: '👁️💻',
  definition_en: 'Continuous observation to detect threats and anomalies.',
  definition_ar: 'مراقبة مستمرة للكشف عن التهديدات والشذوذ.'
},
{
  english: 'cybersecurity audit',
  arabic: 'تدقيق الأمن السيبراني',
  icon: '📋💻',
  definition_en: 'Systematic review of security controls and policies.',
  definition_ar: 'مراجعة منهجية للضوابط والسياسات الأمنية.'
},
{
  english: 'data loss prevention',
  arabic: 'منع فقدان البيانات',
  icon: '💾🛑',
  definition_en: 'Techniques to prevent unauthorized data leakage.',
  definition_ar: 'تقنيات لمنع تسرب البيانات غير المصرح به.'
},
{
  english: 'network segmentation',
  arabic: 'تقسيم الشبكة',
  icon: '🌐✂️',
  definition_en: 'Dividing a network into segments to improve security.',
  definition_ar: 'تقسيم الشبكة إلى أجزاء لتحسين الأمان.'
},
{
  english: 'intrusion',
  arabic: 'تسلل',
  icon: '🚪💻',
  definition_en: 'Unauthorized access to systems or networks.',
  definition_ar: 'الوصول غير المصرح به إلى الأنظمة أو الشبكات.'
},
{
  english: 'brute force mitigation',
  arabic: 'تخفيف هجمات التخمين العنيف',
  icon: '🛡️🔨',
  definition_en: 'Techniques to prevent or reduce brute force attacks.',
  definition_ar: 'تقنيات لمنع أو تقليل هجمات التخمين العنيف.'
},
{
  english: 'cyber hygiene training',
  arabic: 'تدريب على النظافة السيبرانية',
  icon: '🧼💻📚',
  definition_en: 'Education on best practices to prevent cyber incidents.',
  definition_ar: 'التثقيف حول أفضل الممارسات لمنع الحوادث السيبرانية.'
},
{
  english: 'network sniffing',
  arabic: 'تنصت الشبكة',
  icon: '📡👂',
  definition_en: 'Monitoring network traffic to capture data packets.',
  definition_ar: 'مراقبة حركة الشبكة لالتقاط حزم البيانات.'
},
{
  english: 'incident management',
  arabic: 'إدارة الحوادث',
  icon: '🚨📝',
  definition_en: 'Coordinated approach to handling security incidents.',
  definition_ar: 'نهج منسق للتعامل مع الحوادث الأمنية.'
},
{
  english: 'access review',
  arabic: 'مراجعة الوصول',
  icon: '🔑👁️',
  definition_en: 'Checking and validating user permissions regularly.',
  definition_ar: 'التحقق من صلاحيات المستخدم ومراجعتها بشكل دوري.'
},
{
  english: 'authentication token',
  arabic: 'رمز المصادقة',
  icon: '🔑🧾',
  definition_en: 'A token used to verify identity in systems.',
  definition_ar: 'رمز يُستخدم للتحقق من الهوية في الأنظمة.'
},
{
  english: 'cyber attack vector',
  arabic: 'مسار الهجوم السيبراني',
  icon: '🛤️💻',
  definition_en: 'The path or method used by attackers to access a system.',
  definition_ar: 'المسار أو الطريقة التي يستخدمها المهاجمون للوصول إلى النظام.'
},
{
  english: 'malvertising',
  arabic: 'إعلانات خبيثة',
  icon: '🖥️⚠️',
  definition_en: 'Using online ads to distribute malware.',
  definition_ar: 'استخدام الإعلانات على الإنترنت لتوزيع البرمجيات الخبيثة.'
},
{
  english: 'cybersecurity policy enforcement',
  arabic: 'تطبيق سياسات الأمن السيبراني',
  icon: '📜🛡️',
  definition_en: 'Ensuring security rules and policies are followed.',
  definition_ar: 'ضمان الالتزام بالقواعد والسياسات الأمنية.'
},
{
  english: 'sandbox evasion',
  arabic: 'التملص من الصندوق المحمي',
  icon: '🏃‍♂️🧰',
  definition_en: 'Techniques used by malware to bypass sandbox detection.',
  definition_ar: 'تقنيات يستخدمها البرمجيات الخبيثة لتجاوز كشف الصندوق المحمي.'
},
{
  english: 'web shell',
  arabic: 'شل ويب',
  icon: '💻🖥️',
  definition_en: 'A script uploaded to a server to gain remote access.',
  definition_ar: 'سكريبت يُرفع على السيرفر للحصول على وصول عن بُعد.'
},
{
  english: 'cyber espionage toolkit',
  arabic: 'مجموعة أدوات التجسس السيبراني',
  icon: '🛠️🕵️‍♂️',
  definition_en: 'Tools used for digital spying on targets.',
  definition_ar: 'أدوات تُستخدم للتجسس الرقمي على الأهداف.'
},
{
  english: 'sandbox bypass',
  arabic: 'تجاوز الصندوق المحمي',
  icon: '🚪🧰',
  definition_en: 'Methods used by malware to escape controlled environments.',
  definition_ar: 'طرق يستخدمها البرمجيات الخبيثة للخروج من البيئة المراقبة.'
},
{
  english: 'privilege audit',
  arabic: 'تدقيق الامتيازات',
  icon: '📝🔑',
  definition_en: 'Reviewing user privileges to ensure security compliance.',
  definition_ar: 'مراجعة صلاحيات المستخدم لضمان الالتزام بالأمان.'
},
{
  english: 'cyber kill switch',
  arabic: 'مفتاح الإيقاف السيبراني',
  icon: '🛑💻',
  definition_en: 'A mechanism to disable a system in case of compromise.',
  definition_ar: 'آلية لتعطيل النظام في حالة التعرض للاختراق.'
},
{
  english: 'privilege creep',
  arabic: 'تراكم الامتيازات',
  icon: '📈🔑',
  definition_en: 'Gradual accumulation of access rights beyond necessity.',
  definition_ar: 'تراكم تدريجي لصلاحيات الوصول أكثر من اللازم.'
},
{
  english: 'cyber kill chain disruption',
  arabic: 'تعطيل سلسلة الهجوم السيبراني',
  icon: '🔗✂️',
  definition_en: 'Interrupting stages of an attack to prevent success.',
  definition_ar: 'قطع مراحل الهجوم لمنع نجاحه.'
},
{
  english: 'network access control',
  arabic: 'التحكم في الوصول للشبكة',
  icon: '🌐🔑',
  definition_en: 'Policies to restrict and manage device access to networks.',
  definition_ar: 'سياسات لتقييد وإدارة وصول الأجهزة إلى الشبكات.'
},
{
  english: 'cyber deception',
  arabic: 'الخداع السيبراني',
  icon: '🎭💻',
  definition_en: 'Using tricks to mislead attackers and protect assets.',
  definition_ar: 'استخدام الحيل لخداع المهاجمين وحماية الأصول.'
},
{
  english: 'threat intelligence platform',
  arabic: 'منصة استخبارات التهديدات',
  icon: '🧠💻',
  definition_en: 'A system to collect, analyze, and act on threat data.',
  definition_ar: 'نظام لجمع وتحليل والتعامل مع بيانات التهديد.'
},
{
  english: 'cybersecurity metrics',
  arabic: 'مؤشرات الأمن السيبراني',
  icon: '📊💻',
  definition_en: 'Quantitative measures to assess security performance.',
  definition_ar: 'مقاييس كمية لتقييم أداء الأمان.'
},
{
  english: 'digital footprint',
  arabic: 'البصمة الرقمية',
  icon: '👣💻',
  definition_en: 'The trace of data left by a user online.',
  definition_ar: 'الأثر الرقمي الذي يتركه المستخدم على الإنترنت.'
},
{
  english: 'password manager',
  arabic: 'مدير كلمات المرور',
  icon: '🔑📋',
  definition_en: 'A tool to securely store and manage passwords.',
  definition_ar: 'أداة لتخزين وإدارة كلمات المرور بأمان.'
},
{
  english: 'security orchestration automation',
  arabic: 'أتمتة وتنسيق الأمن',
  icon: '🤖🔒',
  definition_en: 'Automating responses and coordinating security tasks.',
  definition_ar: 'أتمتة الاستجابات وتنسيق مهام الأمان.'
},
{
  english: 'endpoint detection and response',
  arabic: 'كشف واستجابة الأجهزة الطرفية',
  icon: '💻🛡️',
  definition_en: 'Tools to monitor, detect, and respond to endpoint threats.',
  definition_ar: 'أدوات لمراقبة واكتشاف والاستجابة للتهديدات على الأجهزة الطرفية.'
},
{
  english: 'sandbox environment',
  arabic: 'بيئة الصندوق المحمي',
  icon: '🧰💻',
  definition_en: 'An isolated testing space for potentially malicious code.',
  definition_ar: 'مساحة اختبار معزولة للكود المحتمل أن يكون خبيثاً.'
},
{
  english: 'cybersecurity awareness',
  arabic: 'الوعي الأمني السيبراني',
  icon: '🧠🛡️',
  definition_en: 'Knowledge and understanding of online security best practices.',
  definition_ar: 'المعرفة والفهم لأفضل ممارسات الأمان عبر الإنترنت.'
},
{
  english: 'data integrity',
  arabic: 'سلامة البيانات',
  icon: '📄✅',
  definition_en: 'Ensuring that data is accurate and unaltered.',
  definition_ar: 'ضمان دقة البيانات وعدم تعديلها.'
},
{
  english: 'cybersecurity compliance',
  arabic: 'الامتثال الأمني السيبراني',
  icon: '📜🛡️',
  definition_en: 'Meeting legal, regulatory, and organizational security requirements.',
  definition_ar: 'الالتزام بالمتطلبات القانونية والتنظيمية والمؤسسية للأمان.'
},
{
  english: 'threat modeling',
  arabic: 'نمذجة التهديدات',
  icon: '🧩⚠️',
  definition_en: 'Identifying and analyzing potential attack paths.',
  definition_ar: 'تحديد وتحليل مسارات الهجوم المحتملة.'
},
{
  english: 'digital forensics',
  arabic: 'التحليل الجنائي الرقمي',
  icon: '🖥️🔍',
  definition_en: 'Investigating digital data to uncover evidence of cybercrime.',
  definition_ar: 'فحص البيانات الرقمية للكشف عن أدلة الجريمة السيبرانية.'
},
{
  english: 'security information and event management',
  arabic: 'إدارة المعلومات والأحداث الأمنية',
  icon: '💻📊',
  definition_en: 'Collecting, analyzing, and responding to security data.',
  definition_ar: 'جمع وتحليل والاستجابة لبيانات الأمان.'
},
{
  english: 'data exfiltration prevention',
  arabic: 'منع استخراج البيانات',
  icon: '💾🛑',
  definition_en: 'Methods to stop unauthorized transfer of data.',
  definition_ar: 'طرق لمنع نقل البيانات غير المصرح به.'
},
{
  english: 'cybersecurity maturity model',
  arabic: 'نموذج نضج الأمن السيبراني',
  icon: '📈🛡️',
  definition_en: 'Framework to assess and improve security capabilities.',
  definition_ar: 'إطار لتقييم وتحسين قدرات الأمان.'
},
{
  english: 'data classification',
  arabic: 'تصنيف البيانات',
  icon: '📂🔒',
  definition_en: 'Categorizing data based on sensitivity and importance.',
  definition_ar: 'تصنيف البيانات بناءً على الحساسية والأهمية.'
},
{
  english: 'malware analysis',
  arabic: 'تحليل البرمجيات الخبيثة',
  icon: '🦠🔬',
  definition_en: 'Studying malware to understand behavior and impact.',
  definition_ar: 'دراسة البرمجيات الخبيثة لفهم سلوكها وتأثيرها.'
},
{
  english: 'cybersecurity audit trail',
  arabic: 'مسار تدقيق الأمن السيبراني',
  icon: '📜👁️',
  definition_en: 'Records that track all security-relevant activities.',
  definition_ar: 'سجلات تتبع جميع الأنشطة ذات الصلة بالأمان.'
},
{
  english: 'incident containment',
  arabic: 'احتواء الحوادث',
  icon: '🚨🛑',
  definition_en: 'Limiting the impact of a security incident.',
  definition_ar: 'تقييد تأثير الحوادث الأمنية.'
},
{
  english: 'cyber threat mitigation',
  arabic: 'تخفيف التهديدات السيبرانية',
  icon: '🛡️⚡',
  definition_en: 'Actions to reduce the risk and impact of cyber threats.',
  definition_ar: 'إجراءات لتقليل خطر وتأثير التهديدات السيبرانية.'
},
{
  english: 'symmetric encryption',
  arabic: 'التشفير المتماثل',
  icon: '🔐',
  definition_en: 'Encryption where the same key is used for both encryption and decryption.',
  definition_ar: 'تشفير يُستخدم فيه نفس المفتاح لكل من التشفير وفك التشفير.'
},
{
  english: 'asymmetric encryption',
  arabic: 'التشفير غير المتماثل',
  icon: '🔑',
  definition_en: 'Encryption using a pair of public and private keys.',
  definition_ar: 'تشفير باستخدام زوج من المفاتيح العامة والخاصة.'
},
{
  english: 'hash function',
  arabic: 'دالة التجزئة',
  icon: '🔢',
  definition_en: 'A function that converts data into a fixed-size string of characters.',
  definition_ar: 'دالة تحول البيانات إلى سلسلة بحجم ثابت من الأحرف.'
},
{
  english: 'digital signature',
  arabic: 'التوقيع الرقمي',
  icon: '✍️',
  definition_en: 'A way to verify the authenticity and integrity of data.',
  definition_ar: 'طريقة للتحقق من صحة البيانات وسلامتها.'
},
{
  english: 'public key',
  arabic: 'المفتاح العام',
  icon: '🗝️',
  definition_en: 'A key used to encrypt data that can be shared publicly.',
  definition_ar: 'مفتاح يُستخدم لتشفير البيانات ويمكن مشاركته علنياً.'
},
{
  english: 'private key',
  arabic: 'المفتاح الخاص',
  icon: '🔒',
  definition_en: 'A key used to decrypt data and must be kept secret.',
  definition_ar: 'مفتاح يُستخدم لفك التشفير ويجب الاحتفاظ به سرياً.'
},
{
  english: 'certificate authority',
  arabic: 'سلطة الشهادات',
  icon: '🏛️',
  definition_en: 'An organization that issues digital certificates.',
  definition_ar: 'منظمة تصدر الشهادات الرقمية.'
},
{
  english: 'ssl/tls',
  arabic: 'SSL/TLS',
  icon: '🌐🔐',
  definition_en: 'Protocols for securing internet communications.',
  definition_ar: 'بروتوكولات لتأمين الاتصالات على الإنترنت.'
},
{
  english: 'encryption',
  arabic: 'التشفير',
  icon: '🔏',
  definition_en: 'The process of converting data into a coded form.',
  definition_ar: 'عملية تحويل البيانات إلى شكل مشفر.'
},
{
  english: 'decryption',
  arabic: 'فك التشفير',
  icon: '🔓',
  definition_en: 'The process of converting encrypted data back to its original form.',
  definition_ar: 'عملية إعادة البيانات المشفرة إلى شكلها الأصلي.'
},
{
  english: 'key exchange',
  arabic: 'تبادل المفاتيح',
  icon: '🔑🔄',
  definition_en: 'A method for securely sharing encryption keys between parties.',
  definition_ar: 'طريقة لمشاركة مفاتيح التشفير بشكل آمن بين الأطراف.'
},
{
  english: 'diffie-hellman',
  arabic: 'ديفي-هيلمان',
  icon: '🔄',
  definition_en: 'A method for secure key exchange over an insecure channel.',
  definition_ar: 'طريقة لتبادل المفاتيح بأمان عبر قناة غير آمنة.'
},
{
  english: 'rsa',
  arabic: 'RSA',
  icon: '🛡️',
  definition_en: 'An asymmetric cryptographic algorithm used for secure data transmission.',
  definition_ar: 'خوارزمية تشفير غير متماثلة تُستخدم لنقل البيانات بأمان.'
},
{
  english: 'elliptic curve cryptography',
  arabic: 'تشفير المنحنيات الإهليلجية',
  icon: '📈🔑',
  definition_en: 'A cryptography method based on elliptic curves over finite fields.',
  definition_ar: 'طريقة تشفير تعتمد على المنحنيات الإهليلجية فوق الحقول النهائية.'
},
{
  english: 'plaintext',
  arabic: 'النص الصريح',
  icon: '📄',
  definition_en: 'Data in its original readable form before encryption.',
  definition_ar: 'البيانات في شكلها الأصلي المقروء قبل التشفير.'
},
{
  english: 'ciphertext',
  arabic: 'النص المشفر',
  icon: '🔐📄',
  definition_en: 'Encrypted data that is unreadable without the key.',
  definition_ar: 'البيانات المشفرة التي لا يمكن قراءتها بدون المفتاح.'
},
{
  english: 'block cipher',
  arabic: 'تشفير الكتل',
  icon: '🧱🔑',
  definition_en: 'Encrypts data in fixed-size blocks.',
  definition_ar: 'تشفير البيانات على شكل كتل ذات حجم ثابت.'
},
{
  english: 'stream cipher',
  arabic: 'تشفير التدفق',
  icon: '🌊🔑',
  definition_en: 'Encrypts data one bit or byte at a time.',
  definition_ar: 'تشفير البيانات بتدفق كل بت أو بايت على حدة.'
},
{
  english: 'one-time pad',
  arabic: 'لوح الاستخدام مرة واحدة',
  icon: '📝🔑',
  definition_en: 'An encryption technique using a single-use random key.',
  definition_ar: 'تقنية تشفير تستخدم مفتاح عشوائي لمرة واحدة فقط.'
},
{
  english: 'cryptanalysis',
  arabic: 'تحليل التشفير',
  icon: '🕵️‍♂️🔐',
  definition_en: 'The study of analyzing and breaking cryptographic systems.',
  definition_ar: 'دراسة تحليل وكسر أنظمة التشفير.'
},
{
  english: 'digital certificate',
  arabic: 'الشهادة الرقمية',
  icon: '📄🛡️',
  definition_en: 'A file that proves the ownership of a public key.',
  definition_ar: 'ملف يثبت ملكية مفتاح عام.'
},
{
  english: 'key derivation function',
  arabic: 'دالة اشتقاق المفاتيح',
  icon: '🔑⚙️',
  definition_en: 'A function that derives one or more secret keys from a secret value.',
  definition_ar: 'دالة تستخرج مفتاحًا أو أكثر من قيمة سرية.'
},
{
  english: 'salt',
  arabic: 'الملح',
  icon: '🧂🔑',
  definition_en: 'Random data added to a password before hashing to prevent attacks.',
  definition_ar: 'بيانات عشوائية تضاف لكلمة المرور قبل التجزئة لمنع الهجمات.'
},
{
  english: 'hashing',
  arabic: 'التجزئة',
  icon: '🔢',
  definition_en: 'Converting data into a fixed-size hash value for integrity verification.',
  definition_ar: 'تحويل البيانات إلى قيمة تجزئة ثابتة للتحقق من السلامة.'
},
{
  english: 'message authentication code',
  arabic: 'رمز مصادقة الرسائل',
  icon: '📧✔️',
  definition_en: 'A code to verify data integrity and authenticity of a message.',
  definition_ar: 'رمز للتحقق من سلامة ومصداقية الرسالة.'
},
{
  english: 'certificate signing request',
  arabic: 'طلب توقيع الشهادة',
  icon: '📝✍️',
  definition_en: 'A request to a certificate authority to issue a digital certificate.',
  definition_ar: 'طلب إلى سلطة الشهادات لإصدار شهادة رقمية.'
},
{
  english: 'hybrid encryption',
  arabic: 'التشفير المختلط',
  icon: '🔀🔑',
  definition_en: 'Combining symmetric and asymmetric encryption for efficiency and security.',
  definition_ar: 'دمج التشفير المتماثل وغير المتماثل لتحقيق الأمان والكفاءة.'
},
{
  english: 'key wrapping',
  arabic: 'تغليف المفتاح',
  icon: '🔑📦',
  definition_en: 'Encrypting keys with another key to securely store or transmit them.',
  definition_ar: 'تشفير المفاتيح باستخدام مفتاح آخر لتخزينها أو نقلها بأمان.'
},
{
  english: 'forward secrecy',
  arabic: 'السرية المستقبلية',
  icon: '⏳🔐',
  definition_en: 'Ensures past sessions remain secure even if long-term keys are compromised.',
  definition_ar: 'ضمان بقاء الجلسات السابقة آمنة حتى عند تعرض المفاتيح الطويلة للأمان للخطر.'
},
{
  english: 'perfect secrecy',
  arabic: 'السرية الكاملة',
  icon: '🛡️✅',
  definition_en: 'A theoretical state where ciphertext provides no information about plaintext.',
  definition_ar: 'حالة نظرية حيث لا يعطي النص المشفر أي معلومات عن النص الصريح.'
},
{
  english: 'digital envelope',
  arabic: 'المظروف الرقمي',
  icon: '✉️🔐',
  definition_en: 'Encrypting data with a symmetric key which is then encrypted with a recipient’s public key.',
  definition_ar: 'تشفير البيانات بمفتاح متماثل ثم تشفيره بمفتاح المستلم العام.'
},
{
  english: 'blockchain',
  arabic: 'سلسلة الكتل',
  icon: '⛓️',
  definition_en: 'A distributed ledger where cryptography ensures integrity and security.',
  definition_ar: 'دفتر أستاذ موزع حيث يضمن التشفير السلامة والأمان.'
},
{
  english: 'nonce',
  arabic: 'رقم عشوائي لمرة واحدة',
  icon: '🎲',
  definition_en: 'A number used once in cryptographic communications to prevent replay attacks.',
  definition_ar: 'رقم يُستخدم مرة واحدة في الاتصالات التشفيرية لمنع هجمات الإعادة.'
},
{
  english: 'key stretching',
  arabic: 'تمديد المفتاح',
  icon: '💪🔑',
  definition_en: 'Techniques to make a weak key stronger by increasing computational effort.',
  definition_ar: 'تقنيات لجعل المفتاح الضعيف أقوى عن طريق زيادة الجهد الحسابي.'
},
{
  english: 'certificate revocation list',
  arabic: 'قائمة إلغاء الشهادات',
  icon: '📋❌',
  definition_en: 'A list of digital certificates that have been revoked before expiration.',
  definition_ar: 'قائمة الشهادات الرقمية التي تم إلغاءها قبل انتهاء صلاحيتها.'
},
{
  english: 'quantum cryptography',
  arabic: 'التشفير الكمي',
  icon: '⚛️🔐',
  definition_en: 'Using quantum mechanics to secure communication.',
  definition_ar: 'استخدام ميكانيكا الكم لتأمين الاتصالات.'
},
{
  english: 'digital watermark',
  arabic: 'علامة مائية رقمية',
  icon: '💧💻',
  definition_en: 'Embedded information in data to prove ownership or authenticity.',
  definition_ar: 'معلومات مضمنة في البيانات لإثبات الملكية أو الأصالة.'
},
{
  english: 'cipher',
  arabic: 'الشيفرة',
  icon: '🔑🔠',
  definition_en: 'Algorithm for performing encryption or decryption.',
  definition_ar: 'خوارزمية لتنفيذ التشفير أو فك التشفير.'
},
{
  english: 'obfuscation',
  arabic: 'إخفاء البيانات',
  icon: '🌀',
  definition_en: 'Making data or code difficult to understand to protect it.',
  definition_ar: 'جعل البيانات أو الكود صعب الفهم لحمايته.'
},
{
  english: 'pseudorandom number generator',
  arabic: 'مولد الأعداد شبه العشوائية',
  icon: '🎰',
  definition_en: 'Algorithm that generates numbers appearing random but deterministic.',
  definition_ar: 'خوارزمية تولد أرقام تبدو عشوائية لكنها محددة مسبقاً.'
},
{
  english: 'zero-knowledge proof',
  arabic: 'إثبات عدم المعرفة',
  icon: '🕵️‍♂️❌',
  definition_en: 'A method to prove knowledge of information without revealing it.',
  definition_ar: 'طريقة لإثبات معرفة معلومات دون الكشف عنها.'
},
{
  english: 'hash collision',
  arabic: 'تصادم التجزئة',
  icon: '💥🔢',
  definition_en: 'When two different inputs produce the same hash output.',
  definition_ar: 'عندما تنتج مدخلتان مختلفتان نفس قيمة التجزئة.'
},
{
  english: 'key escrow',
  arabic: 'خزانة المفاتيح',
  icon: '🗝️🏦',
  definition_en: 'Storing encryption keys with a trusted third party for recovery.',
  definition_ar: 'تخزين مفاتيح التشفير لدى طرف ثالث موثوق لاسترجاعها.'
},
{
  english: 'cryptographic nonce',
  arabic: 'رقم التشفير لمرة واحدة',
  icon: '🔢🎲',
  definition_en: 'A random number used once to ensure security in encryption.',
  definition_ar: 'رقم عشوائي يُستخدم مرة واحدة لضمان الأمان في التشفير.'
},
{
  english: 'blockchain consensus',
  arabic: 'إجماع سلسلة الكتل',
  icon: '⛓️🤝',
  definition_en: 'Agreement among nodes on the state of a blockchain.',
  definition_ar: 'اتفاق بين العقد على حالة سلسلة الكتل.'
},
{
  english: 'cryptoperiod',
  arabic: 'فترة التشفير',
  icon: '⏱️🔑',
  definition_en: 'The time span a cryptographic key is authorized for use.',
  definition_ar: 'الفترة الزمنية المسموح فيها باستخدام مفتاح التشفير.'
},
{
  english: 'key rotation',
  arabic: 'تدوير المفاتيح',
  icon: '🔄🗝️',
  definition_en: 'Changing encryption keys regularly to maintain security.',
  definition_ar: 'تغيير مفاتيح التشفير بشكل منتظم للحفاظ على الأمان.'
},
{
  english: 'post-quantum cryptography',
  arabic: 'التشفير بعد الكم',
  icon: '⚛️🔐',
  definition_en: 'Cryptography resistant to attacks by quantum computers.',
  definition_ar: 'تشفير مقاوم للهجمات من الحواسيب الكمومية.'
},
{
  english: 'elliptic curve digital signature algorithm',
  arabic: 'خوارزمية التوقيع الرقمي للمنحنيات الإهليلجية',
  icon: '✍️📈',
  definition_en: 'A digital signature algorithm based on elliptic curves.',
  definition_ar: 'خوارزمية توقيع رقمي تعتمد على المنحنيات الإهليلجية.'
},
{
  english: 'authenticated encryption',
  arabic: 'التشفير المصادق عليه',
  icon: '🛡️🔐',
  definition_en: 'Encryption that ensures both confidentiality and authenticity.',
  definition_ar: 'تشفير يضمن السرية والمصداقية معاً.'
},
{
  english: 'quantum key distribution',
  arabic: 'توزيع المفاتيح الكمية',
  icon: '⚛️🔑',
  definition_en: 'Using quantum mechanics to securely share encryption keys.',
  definition_ar: 'استخدام ميكانيكا الكم لمشاركة مفاتيح التشفير بأمان.'
},
{
  english: 'hybrid cryptosystem',
  arabic: 'نظام التشفير المختلط',
  icon: '🔀🔐',
  definition_en: 'A system combining symmetric and asymmetric cryptography.',
  definition_ar: 'نظام يجمع بين التشفير المتماثل وغير المتماثل.'
},
{
  english: 'cipher block chaining',
  arabic: 'ربط كتل الشيفرة',
  icon: '🔗🧱',
  definition_en: 'A mode of operation for block ciphers where blocks are linked.',
  definition_ar: 'وضع تشغيلي لتشفير الكتل حيث ترتبط الكتل مع بعضها.'
},
{
  english: 'message digest',
  arabic: 'ملخص الرسالة',
  icon: '📄🔢',
  definition_en: 'A fixed-size hash value representing a message.',
  definition_ar: 'قيمة تجزئة بحجم ثابت تمثل الرسالة.'
},
{
  english: 'digital envelope',
  arabic: 'المظروف الرقمي',
  icon: '✉️🔑',
  definition_en: 'Encrypting data with a symmetric key, then encrypting the key asymmetrically.',
  definition_ar: 'تشفير البيانات بمفتاح متماثل ثم تشفير المفتاح بشكل غير متماثل.'
},
{
  english: 'homomorphic encryption',
  arabic: 'التشفير المتماثل جزئياً',
  icon: '🧮🔐',
  definition_en: 'Allows computations on encrypted data without decrypting it.',
  definition_ar: 'يسمح بإجراء العمليات الحسابية على البيانات المشفرة دون فك التشفير.'
},
{
  english: 'key agreement protocol',
  arabic: 'بروتوكول اتفاق المفاتيح',
  icon: '🤝🔑',
  definition_en: 'Protocol allowing parties to securely agree on a shared key.',
  definition_ar: 'بروتوكول يسمح للأطراف بالاتفاق على مفتاح مشترك بأمان.'
},
{
  english: 'plaintext attack',
  arabic: 'هجوم النص الصريح',
  icon: '📄⚔️',
  definition_en: 'Analyzing plaintext-ciphertext pairs to break encryption.',
  definition_ar: 'تحليل أزواج النص الصريح والنص المشفر لكسر التشفير.'
},
{
  english: 'ciphertext-only attack',
  arabic: 'هجوم النص المشفر فقط',
  icon: '🔐⚔️',
  definition_en: 'Attempting to break encryption using only ciphertext.',
  definition_ar: 'محاولة كسر التشفير باستخدام النص المشفر فقط.'
},
{
  english: 'chosen-plaintext attack',
  arabic: 'هجوم النص الصريح المختار',
  icon: '📝⚔️',
  definition_en: 'Attacker can encrypt chosen plaintexts to find key info.',
  definition_ar: 'يمكن للمهاجم تشفير نصوص مختارة لاستخراج معلومات المفتاح.'
},
{
  english: 'chosen-ciphertext attack',
  arabic: 'هجوم النص المشفر المختار',
  icon: '🔐⚔️',
  definition_en: 'Attacker can decrypt chosen ciphertexts to gain info.',
  definition_ar: 'يمكن للمهاجم فك تشفير نصوص مشفرة مختارة للحصول على معلومات.'
},
{
  english: 'cryptoperiod management',
  arabic: 'إدارة فترة التشفير',
  icon: '⏱️🛡️',
  definition_en: 'Managing lifecycle of cryptographic keys to maintain security.',
  definition_ar: 'إدارة دورة حياة مفاتيح التشفير للحفاظ على الأمان.'
},
{
  english: 'key derivation',
  arabic: 'اشتقاق المفاتيح',
  icon: '🔑⚙️',
  definition_en: 'Generating new keys from existing secret information.',
  definition_ar: 'توليد مفاتيح جديدة من معلومات سرية موجودة.'
},
{
  english: 'quantum-safe encryption',
  arabic: 'التشفير المقاوم للكم',
  icon: '⚛️🛡️',
  definition_en: 'Encryption designed to resist quantum computing attacks.',
  definition_ar: 'تشفير مصمم لمقاومة هجمات الحوسبة الكمومية.'
},
{
  english: 'key compromise',
  arabic: 'اختراق المفتاح',
  icon: '💔🔑',
  definition_en: 'When a cryptographic key is exposed to unauthorized parties.',
  definition_ar: 'عندما يتعرض مفتاح التشفير للوصول غير المصرح به.'
},
{
  english: 'key management system',
  arabic: 'نظام إدارة المفاتيح',
  icon: '🗝️⚙️',
  definition_en: 'System to securely generate, store, and distribute keys.',
  definition_ar: 'نظام لتوليد وتخزين وتوزيع المفاتيح بأمان.'
},
{
  english: 'digital timestamping',
  arabic: 'وضع الطابع الزمني الرقمي',
  icon: '⏰💻',
  definition_en: 'Proving data existed at a specific point in time.',
  definition_ar: 'إثبات وجود البيانات في وقت محدد.'
},
{
  english: 'cryptographic agility',
  arabic: 'مرونة التشفير',
  icon: '🤸‍♂️🔐',
  definition_en: 'Ability to switch cryptographic algorithms without major issues.',
  definition_ar: 'القدرة على تغيير خوارزميات التشفير دون مشاكل كبيرة.'
},
{
  english: 'post-quantum algorithm',
  arabic: 'خوارزمية ما بعد الكم',
  icon: '⚛️🖥️',
  definition_en: 'Algorithm designed to be secure against quantum computing attacks.',
  definition_ar: 'خوارزمية مصممة لتكون آمنة ضد هجمات الحوسبة الكمومية.'
},
{
  english: 'certificate pinning',
  arabic: 'تثبيت الشهادات',
  icon: '📌🛡️',
  definition_en: 'Binding a service to a specific certificate to prevent MITM attacks.',
  definition_ar: 'ربط الخدمة بشهادة معينة لمنع هجمات الرجل في المنتصف.'
},
{
  english: 'key escrow agent',
  arabic: 'وكيل خزانة المفاتيح',
  icon: '🗝️👤',
  definition_en: 'A trusted third party that holds encryption keys for recovery.',
  definition_ar: 'طرف ثالث موثوق يحتفظ بمفاتيح التشفير للاسترجاع.'
},
{
  english: 'cryptographic module',
  arabic: 'وحدة التشفير',
  icon: '🖥️🔐',
  definition_en: 'Hardware or software that implements cryptographic functions.',
  definition_ar: 'مكون مادي أو برمجي ينفذ وظائف التشفير.'
},
{
  english: 'entropy',
  arabic: 'الإنتروبيا',
  icon: '🎲',
  definition_en: 'Measure of randomness used in cryptography for key generation.',
  definition_ar: 'قياس العشوائية المستخدمة في التشفير لتوليد المفاتيح.'
},
{
  english: 'cipher suite',
  arabic: 'مجموعة الشيفرات',
  icon: '🔐🛠️',
  definition_en: 'A set of cryptographic algorithms used together for security.',
  definition_ar: 'مجموعة من الخوارزميات التشفيرية المستخدمة معاً للأمان.'
},
{
  english: 'key fingerprint',
  arabic: 'بصمة المفتاح',
  icon: '🖐️🔑',
  definition_en: 'A short representation of a key used to verify authenticity.',
  definition_ar: 'تمثيل قصير للمفتاح للتحقق من الأصالة.'
},
{
  english: 'cryptographic backdoor',
  arabic: 'باب خلفي تشفيرى',
  icon: '🚪🛡️',
  definition_en: 'Intentional vulnerability in cryptographic software or hardware.',
  definition_ar: 'ثغرة متعمدة في برامج أو أجهزة التشفير.'
},
{
  english: 'side-channel attack',
  arabic: 'هجوم قناة جانبية',
  icon: '📡⚔️',
  definition_en: 'Attacks exploiting physical leaks from cryptographic implementations.',
  definition_ar: 'هجمات تستغل التسريبات الفيزيائية من تطبيقات التشفير.'
},
{
  english: 'quantum-resistant key',
  arabic: 'مفتاح مقاوم للكم',
  icon: '⚛️🔑',
  definition_en: 'A key designed to resist attacks from quantum computers.',
  definition_ar: 'مفتاح مصمم لمقاومة الهجمات من الحواسيب الكمومية.'
},
{
  english: 'cryptographic padding',
  arabic: 'حشو التشفير',
  icon: '📄🧩',
  definition_en: 'Extra data added to plaintext to meet block size requirements.',
  definition_ar: 'بيانات إضافية تضاف للنص الصريح لتلبية متطلبات حجم الكتلة.'
},
{
  english: 'zero-knowledge encryption',
  arabic: 'تشفير عدم المعرفة',
  icon: '0️⃣🔐',
  definition_en: 'Encryption that allows proving knowledge without revealing the data.',
  definition_ar: 'تشفير يسمح بإثبات المعرفة دون كشف البيانات.'
},
{
  english: 'quantum teleportation',
  arabic: 'الإرسال الكمومي',
  icon: '⚛️📡',
  definition_en: 'Using quantum entanglement to transfer information securely.',
  definition_ar: 'استخدام التشابك الكمومي لنقل المعلومات بأمان.'
},
{
  english: 'hash chaining',
  arabic: 'ربط التجزئة',
  icon: '🔗🔢',
  definition_en: 'Linking hash outputs to ensure integrity of sequential data.',
  definition_ar: 'ربط مخرجات التجزئة لضمان سلامة البيانات المتتابعة.'
},
{
  english: 'cryptographic agility',
  arabic: 'مرونة التشفير',
  icon: '🤸‍♂️🔐',
  definition_en: 'Ability to quickly switch algorithms to respond to threats.',
  definition_ar: 'القدرة على تبديل الخوارزميات بسرعة للاستجابة للتهديدات.'
},
{
  english: 'asymmetric key pair',
  arabic: 'زوج المفاتيح غير المتماثلة',
  icon: '🔑🔑',
  definition_en: 'A set of public and private keys used for encryption and decryption.',
  definition_ar: 'مجموعة من المفاتيح العامة والخاصة تُستخدم للتشفير وفك التشفير.'
},
{
  english: 'key escrow system',
  arabic: 'نظام خزانة المفاتيح',
  icon: '🏦🔑',
  definition_en: 'A system that stores encryption keys with a trusted third party for recovery.',
  definition_ar: 'نظام يخزن مفاتيح التشفير لدى طرف ثالث موثوق لاسترجاعها.'
},
{
  english: 'elliptic curve key',
  arabic: 'مفتاح المنحنى الإهليلجي',
  icon: '📈🔑',
  definition_en: 'A cryptographic key based on elliptic curve algorithms.',
  definition_ar: 'مفتاح تشفيري يعتمد على خوارزميات المنحنيات الإهليلجية.'
},
{
  english: 'hybrid key',
  arabic: 'المفتاح المختلط',
  icon: '🔀🔑',
  definition_en: 'A key system combining symmetric and asymmetric encryption.',
  definition_ar: 'نظام مفاتيح يجمع بين التشفير المتماثل وغير المتماثل.'
},
{
  english: 'digital key fingerprint',
  arabic: 'بصمة المفتاح الرقمي',
  icon: '🖐️🔑',
  definition_en: 'A short representation of a cryptographic key used for verification.',
  definition_ar: 'تمثيل قصير لمفتاح تشفيري للتحقق منه.'
},
{
  english: 'certificate pin',
  arabic: 'تثبيت الشهادة',
  icon: '📌🛡️',
  definition_en: 'Binding an application to a specific certificate to prevent MITM attacks.',
  definition_ar: 'ربط التطبيق بشهادة معينة لمنع هجمات الرجل في المنتصف.'
},
{
  english: 'cryptographic primitive',
  arabic: 'الأساسيات التشفيرية',
  icon: '🛠️🔐',
  definition_en: 'Basic building blocks used to construct cryptographic algorithms.',
  definition_ar: 'المكونات الأساسية المستخدمة لبناء خوارزميات التشفير.'
},
{
  english: 'entropy pool',
  arabic: 'مجمع الإنتروبيا',
  icon: '🎲🗃️',
  definition_en: 'A collection of randomness used to generate secure keys.',
  definition_ar: 'مجموعة من العشوائية تُستخدم لتوليد مفاتيح آمنة.'
},
{
  english: 'key lifetime',
  arabic: 'مدة صلاحية المفتاح',
  icon: '⏱️🔑',
  definition_en: 'The period a cryptographic key remains valid and in use.',
  definition_ar: 'الفترة الزمنية التي يظل فيها المفتاح التشفيري صالحاً للاستخدام.'
},
{
  english: 'digital notarization',
  arabic: 'التوثيق الرقمي',
  icon: '🖋️💻',
  definition_en: 'Certifying the authenticity of digital data at a specific time.',
  definition_ar: 'توثيق أصالة البيانات الرقمية في وقت محدد.'
},
{
  english: 'cryptographic salt',
  arabic: 'ملح التشفير',
  icon: '🧂🔐',
  definition_en: 'Random data added to a password before hashing to increase security.',
  definition_ar: 'بيانات عشوائية تضاف لكلمة المرور قبل التجزئة لزيادة الأمان.'
},
{
  english: 'key recovery',
  arabic: 'استرجاع المفتاح',
  icon: '🔑♻️',
  definition_en: 'Process of retrieving lost or compromised cryptographic keys.',
  definition_ar: 'عملية استرجاع المفاتيح التشفيرية المفقودة أو المخترقة.'
},
{
  english: 'cryptanalysis attack',
  arabic: 'هجوم تحليل التشفير',
  icon: '🕵️‍♂️⚔️',
  definition_en: 'An attempt to break cryptographic systems using mathematical methods.',
  definition_ar: 'محاولة لكسر أنظمة التشفير باستخدام الطرق الرياضية.'
},
{
  english: 'quantum encryption',
  arabic: 'التشفير الكمي',
  icon: '⚛️🔐',
  definition_en: 'Encryption techniques that leverage quantum mechanics for security.',
  definition_ar: 'تقنيات تشفير تستخدم ميكانيكا الكم للأمان.'
},
{
  english: 'hash chain',
  arabic: 'سلسلة التجزئة',
  icon: '🔗🔢',
  definition_en: 'A sequence of hashes where each hash depends on the previous one.',
  definition_ar: 'تسلسل من التجزئات يعتمد كل منها على السابق.'
},
{
  english: 'digital commitment',
  arabic: 'الالتزام الرقمي',
  icon: '📄🛡️',
  definition_en: 'A cryptographic technique to commit to a value while keeping it hidden.',
  definition_ar: 'تقنية تشفيرية للالتزام بقيمة مع إبقائها مخفية.'
},
{
  english: 'key splitting',
  arabic: 'تقسيم المفتاح',
  icon: '✂️🔑',
  definition_en: 'Dividing a key into parts so that multiple parties must cooperate to reconstruct it.',
  definition_ar: 'تقسيم المفتاح إلى أجزاء بحيث يجب على عدة أطراف التعاون لإعادة تكوينه.'
},
{
  english: 'threshold cryptography',
  arabic: 'التشفير الحدّي',
  icon: '⚖️🔐',
  definition_en: 'Cryptography where only a subset of participants is needed to decrypt.',
  definition_ar: 'تشفير يحتاج فقط إلى مجموعة فرعية من المشاركين لفك التشفير.'
},
{
  english: 'quantum-safe algorithm',
  arabic: 'خوارزمية مقاومة للكم',
  icon: '⚛️🖥️',
  definition_en: 'Algorithm designed to be secure against attacks from quantum computers.',
  definition_ar: 'خوارزمية مصممة لتكون آمنة ضد هجمات الحواسيب الكمومية.'
},
{
  english: 'cryptographic padding oracle',
  arabic: 'مدقق حشو التشفير',
  icon: '📦🔐',
  definition_en: 'A vulnerability that allows attackers to decrypt data by exploiting padding errors.',
  definition_ar: 'ثغرة تتيح للمهاجمين فك التشفير عن طريق استغلال أخطاء الحشو.'
},
{
  english: 'cryptographic agility',
  arabic: 'مرونة التشفير',
  icon: '🤸‍♂️🔐',
  definition_en: 'Ability to switch cryptographic algorithms without disrupting operations.',
  definition_ar: 'القدرة على تبديل الخوارزميات التشفيرية دون تعطيل العمليات.'
},
{
  english: 'key escrow agent',
  arabic: 'وكيل خزانة المفاتيح',
  icon: '👤🔑',
  definition_en: 'A trusted third party responsible for holding encryption keys securely.',
  definition_ar: 'طرف ثالث موثوق مسؤول عن الاحتفاظ بمفاتيح التشفير بأمان.'
},
{
  english: 'oblivious transfer',
  arabic: 'النقل المجهول',
  icon: '🎭🔄',
  definition_en: 'A method where a sender transfers one of many pieces of information without knowing which one the receiver obtains.',
  definition_ar: 'طريقة ينقل فيها المرسل قطعة من معلومات متعددة دون معرفة أيها يحصل عليها المستقبل.'
},
{
  english: 'commitment scheme',
  arabic: 'مخطط الالتزام',
  icon: '📄🔐',
  definition_en: 'A protocol to commit to a chosen value while keeping it hidden until revealed.',
  definition_ar: 'بروتوكول للالتزام بقيمة معينة مع إبقائها مخفية حتى يتم الكشف عنها.'
},
{
  english: 'secure multi-party computation',
  arabic: 'الحوسبة الآمنة متعددة الأطراف',
  icon: '🤝💻',
  definition_en: 'Computation on private data from multiple parties without revealing the data.',
  definition_ar: 'إجراء العمليات على بيانات خاصة من أطراف متعددة دون الكشف عنها.'
},
{
  english: 'quantum entanglement',
  arabic: 'التشابك الكمي',
  icon: '⚛️🔗',
  definition_en: 'A quantum phenomenon where particles remain connected so that the state of one affects the other.',
  definition_ar: 'ظاهرة كمومية حيث تبقى الجسيمات متصلة بحيث يؤثر حالة أحدها على الآخر.'
},
{
  english: 'cryptographic proof',
  arabic: 'دليل تشفيري',
  icon: '🛡️📜',
  definition_en: 'Evidence that a cryptographic operation or protocol is secure.',
  definition_ar: 'دليل على أن عملية أو بروتوكول التشفير آمن.'
},
{
  english: 'side-channel leak',
  arabic: 'تسريب قناة جانبية',
  icon: '📡⚠️',
  definition_en: 'Information inadvertently leaked from cryptographic operations.',
  definition_ar: 'معلومات تتسرب عن طريق الخطأ من العمليات التشفيرية.'
},
{
  english: 'quantum-resistant encryption',
  arabic: 'التشفير المقاوم للكم',
  icon: '⚛️🛡️',
  definition_en: 'Encryption that is designed to remain secure against quantum attacks.',
  definition_ar: 'تشفير مصمم للبقاء آمناً ضد الهجمات الكمومية.'
},
{
  english: 'cryptographic module validation',
  arabic: 'تحقق وحدة التشفير',
  icon: '✅🖥️',
  definition_en: 'The process of certifying a cryptographic module meets security standards.',
  definition_ar: 'عملية تصديق أن وحدة التشفير تستوفي معايير الأمان.'
},
{
  english: 'authenticated key exchange',
  arabic: 'تبادل المفاتيح المصادق عليه',
  icon: '🔑🛡️',
  definition_en: 'Key exchange protocol that ensures both parties are authenticated.',
  definition_ar: 'بروتوكول تبادل مفاتيح يضمن مصادقة الطرفين.'
},
{
  english: 'cryptographic token',
  arabic: 'رمز تشفيري',
  icon: '🔑🪙',
  definition_en: 'A token used to perform cryptographic operations securely.',
  definition_ar: 'رمز يُستخدم لتنفيذ العمليات التشفيرية بأمان.'
},
{
  english: 'hash-based signature',
  arabic: 'التوقيع المعتمد على التجزئة',
  icon: '✍️🔢',
  definition_en: 'A digital signature scheme that relies on hash functions.',
  definition_ar: 'خوارزمية توقيع رقمي تعتمد على دوال التجزئة.'
},
{
  english: 'key hierarchy',
  arabic: 'تدرج المفاتيح',
  icon: '🗝️📊',
  definition_en: 'Organizing keys in a hierarchical structure to simplify management.',
  definition_ar: 'تنظيم المفاتيح في هيكل هرمي لتبسيط الإدارة.'
},
{
  english: 'cryptographic random number generator',
  arabic: 'مولد الأعداد العشوائية التشفيري',
  icon: '🎲🛡️',
  definition_en: 'Generates random numbers suitable for cryptographic use.',
  definition_ar: 'مولد أرقام عشوائية مناسب للاستخدام التشفيري.'
},
{
  english: 'quantum teleportation encryption',
  arabic: 'تشفير الإرسال الكمومي',
  icon: '⚛️📡🔐',
  definition_en: 'Secure communication using quantum teleportation principles.',
  definition_ar: 'اتصال آمن باستخدام مبادئ الإرسال الكمومي.'
},
{
  english: 'sql injection',
  arabic: 'حقن SQL',
  icon: '💉🗄️',
  definition_en: 'A vulnerability allowing attackers to execute malicious SQL queries.',
  definition_ar: 'ثغرة تسمح للمهاجمين بتنفيذ استعلامات SQL خبيثة.'
},
{
  english: 'cross-site scripting',
  arabic: 'البرمجة عبر المواقع (XSS)',
  icon: '🌐💻',
  definition_en: 'A vulnerability that allows attackers to inject scripts into web pages.',
  definition_ar: 'ثغرة تسمح للمهاجمين بحقن سكربتات في صفحات الويب.'
},
{
  english: 'cross-site request forgery',
  arabic: 'تزوير طلبات عبر المواقع (CSRF)',
  icon: '🔗⚔️',
  definition_en: 'A vulnerability that forces a user to execute unwanted actions on a web app.',
  definition_ar: 'ثغرة تجبر المستخدم على تنفيذ إجراءات غير مرغوبة في التطبيق.'
},
{
  english: 'remote code execution',
  arabic: 'تنفيذ كود عن بعد (RCE)',
  icon: '💻⚡',
  definition_en: 'Allows attackers to execute arbitrary code on a server.',
  definition_ar: 'يسمح للمهاجمين بتنفيذ كود عشوائي على الخادم.'
},
{
  english: 'local file inclusion',
  arabic: 'تضمين ملفات محلية (LFI)',
  icon: '📂⚠️',
  definition_en: 'Allows attackers to include local files in the web server execution.',
  definition_ar: 'يسمح للمهاجمين بتضمين ملفات محلية ضمن تنفيذ الخادم.'
},
{
  english: 'remote file inclusion',
  arabic: 'تضمين ملفات عن بعد (RFI)',
  icon: '🌐📂',
  definition_en: 'Allows attackers to include remote files in web server execution.',
  definition_ar: 'يسمح للمهاجمين بتضمين ملفات عن بعد ضمن تنفيذ الخادم.'
},
{
  english: 'command injection',
  arabic: 'حقن الأوامر',
  icon: '💻🛠️',
  definition_en: 'Vulnerability allowing attackers to execute system commands.',
  definition_ar: 'ثغرة تسمح للمهاجمين بتنفيذ أوامر النظام.'
},
{
  english: 'path traversal',
  arabic: 'التنقل في المسار',
  icon: '📂🔝',
  definition_en: 'Allows attackers to access files outside the intended directories.',
  definition_ar: 'يسمح للمهاجمين بالوصول لملفات خارج الدلائل المقصودة.'
},
{
  english: 'file upload vulnerability',
  arabic: 'ثغرة رفع الملفات',
  icon: '📤⚠️',
  definition_en: 'Allows attackers to upload malicious files to the server.',
  definition_ar: 'ثغرة تسمح للمهاجمين برفع ملفات خبيثة على الخادم.'
},
{
  english: 'insecure deserialization',
  arabic: 'إعادة التسلسل غير الآمنة',
  icon: '🔄⚠️',
  definition_en: 'Allows attackers to manipulate serialized objects to execute code.',
  definition_ar: 'يسمح للمهاجمين بالتلاعب بالكائنات المسلسلة لتنفيذ كود.'
},
{
  english: 'broken authentication',
  arabic: 'تسجيل الدخول المكسور',
  icon: '🔓⚠️',
  definition_en: 'Flaws in authentication that allow attackers to bypass login.',
  definition_ar: 'ثغرات في المصادقة تسمح للمهاجمين بتجاوز تسجيل الدخول.'
},
{
  english: 'broken access control',
  arabic: 'كسر التحكم بالوصول',
  icon: '🚫⚠️',
  definition_en: 'Flaws that allow unauthorized access to resources.',
  definition_ar: 'ثغرات تسمح بالوصول غير المصرح به إلى الموارد.'
},
{
  english: 'security misconfiguration',
  arabic: 'سوء إعداد الأمان',
  icon: '⚙️🔓',
  definition_en: 'Incorrect configuration that exposes the app to attacks.',
  definition_ar: 'إعداد غير صحيح يعرض التطبيق للهجمات.'
},
{
  english: 'sensitive data exposure',
  arabic: 'كشف البيانات الحساسة',
  icon: '🔑📄',
  definition_en: 'Vulnerability that exposes sensitive information like passwords.',
  definition_ar: 'ثغرة تكشف معلومات حساسة مثل كلمات المرور.'
},
{
  english: 'xml external entity injection',
  arabic: 'حقن الكيانات الخارجية في XML (XXE)',
  icon: '📄💣',
  definition_en: 'Allows attackers to interfere with XML processing to read files.',
  definition_ar: 'ثغرة تسمح للمهاجمين بالتلاعب بمعالجة XML لقراءة الملفات.'
},
{
  english: 'server-side request forgery',
  arabic: 'تزوير الطلبات من جانب الخادم (SSRF)',
  icon: '🖥️🔗',
  definition_en: 'Attacker can make the server send requests to unintended locations.',
  definition_ar: 'يستطيع المهاجم جعل الخادم يرسل طلبات إلى مواقع غير مقصودة.'
},
{
  english: 'clickjacking',
  arabic: 'احتيال النقر',
  icon: '🖱️🎭',
  definition_en: 'Tricking users into clicking something different than intended.',
  definition_ar: 'خداع المستخدم للنقر على شيء مختلف عن المقصود.'
},
{
  english: 'open redirect',
  arabic: 'إعادة توجيه مفتوحة',
  icon: '🔗➡️',
  definition_en: 'Redirecting users to malicious websites via vulnerable links.',
  definition_ar: 'إعادة توجيه المستخدمين إلى مواقع خبيثة عبر روابط ضعيفة.'
},
{
  english: 'dom-based xss',
  arabic: 'XSS المستندة إلى DOM',
  icon: '🌐📝',
  definition_en: 'Client-side XSS where the vulnerability exists in JavaScript.',
  definition_ar: 'XSS من جانب العميل حيث توجد الثغرة في جافاسكريبت.'
},
{
  english: 'reflected xss',
  arabic: 'XSS المنعكس',
  icon: '🔄🌐',
  definition_en: 'XSS vulnerability reflected off a web server in response.',
  definition_ar: 'ثغرة XSS تنعكس من الخادم في الاستجابة.'
},
{
  english: 'stored xss',
  arabic: 'XSS المخزن',
  icon: '💾🌐',
  definition_en: 'XSS that stores malicious scripts in a database to affect users.',
  definition_ar: 'XSS يخزن سكربتات خبيثة في قاعدة البيانات لتؤثر على المستخدمين.'
},
{
  english: 'http header injection',
  arabic: 'حقن رؤوس HTTP',
  icon: '📤⚠️',
  definition_en: 'Injecting malicious headers to manipulate web server responses.',
  definition_ar: 'حقن رؤوس خبيثة للتحكم في استجابات الخادم.'
},
{
  english: 'http parameter pollution',
  arabic: 'تلوث معلمات HTTP',
  icon: '🔀📄',
  definition_en: 'Injecting multiple parameters to bypass security controls.',
  definition_ar: 'حقن معلمات متعددة لتجاوز ضوابط الأمان.'
},
{
  english: 'session fixation',
  arabic: 'تثبيت الجلسة',
  icon: '🔗🕵️',
  definition_en: 'Attacker sets a user session ID to hijack it later.',
  definition_ar: 'المهاجم يحدد معرف جلسة المستخدم للاستيلاء عليها لاحقاً.'
},
{
  english: 'session hijacking',
  arabic: 'اختطاف الجلسة',
  icon: '🕵️‍♂️🔑',
  definition_en: 'Stealing or taking over a valid user session.',
  definition_ar: 'سرقة أو السيطرة على جلسة مستخدم صالحة.'
},
{
  english: 'authentication bypass',
  arabic: 'تجاوز المصادقة',
  icon: '🚪🔓',
  definition_en: 'Gaining access without valid credentials.',
  definition_ar: 'الوصول بدون بيانات اعتماد صالحة.'
},
{
  english: 'mass assignment',
  arabic: 'تعيين جماعي',
  icon: '📦⚠️',
  definition_en: 'Attacker modifies object properties that should not be accessible.',
  definition_ar: 'المهاجم يغير خصائص كائن لا يجب الوصول إليها.'
},
{
  english: 'directory listing',
  arabic: 'قائمة الدليل',
  icon: '📂👀',
  definition_en: 'Exposing files and directories of a web server to attackers.',
  definition_ar: 'كشف ملفات ودلائل الخادم للمهاجمين.'
},
{
  english: 'insecure direct object reference',
  arabic: 'مرجع كائن مباشر غير آمن (IDOR)',
  icon: '📄🔑',
  definition_en: 'Accessing objects or data without proper authorization checks.',
  definition_ar: 'الوصول إلى كائنات أو بيانات بدون فحص صلاحيات صحيح.'
},
{
  english: 'cross-origin resource sharing misconfiguration',
  arabic: 'سوء إعداد مشاركة الموارد عبر النطاقات (CORS)',
  icon: '🌐⚙️',
  definition_en: 'Improper CORS settings that allow unauthorized cross-domain requests.',
  definition_ar: 'إعدادات CORS غير صحيحة تسمح بالطلبات عبر النطاقات غير المصرح بها.'
},
{
  english: 'click fraud',
  arabic: 'احتيال النقر',
  icon: '🖱️💰',
  definition_en: 'Tricking users to click on ads for revenue or damage.',
  definition_ar: 'خداع المستخدم للنقر على الإعلانات لتحقيق ربح أو ضرر.'
},
{
  english: 'jsonp injection',
  arabic: 'حقن JSONP',
  icon: '🌐📄',
  definition_en: 'Injecting malicious scripts through JSONP endpoints.',
  definition_ar: 'حقن سكربتات خبيثة عبر نقاط نهاية JSONP.'
},
{
  english: 'iframe injection',
  arabic: 'حقن IFrame',
  icon: '📄🖼️',
  definition_en: 'Embedding malicious iframes into a web page.',
  definition_ar: 'تضمين إطارات خبيثة في صفحة الويب.'
},
{
  english: 'subdomain takeover',
  arabic: 'الاستيلاء على النطاق الفرعي',
  icon: '🌐🚨',
  definition_en: 'Hijacking an unclaimed or misconfigured subdomain.',
  definition_ar: 'الاستيلاء على نطاق فرعي غير مملوك أو مُهيأ بشكل خاطئ.'
},
{
  english: 'web cache poisoning',
  arabic: 'تسميم ذاكرة التخزين المؤقت للويب',
  icon: '🗂️☠️',
  definition_en: 'Injecting malicious content into a cached version of a page.',
  definition_ar: 'حقن محتوى خبيث في نسخة مخزنة مؤقتاً من الصفحة.'
},
{
  english: 'clickjacking framebusting bypass',
  arabic: 'تجاوز منع الإطار في احتيال النقر',
  icon: '🖱️🚧',
  definition_en: 'Bypassing framebusting protections to perform clickjacking.',
  definition_ar: 'تجاوز حماية منع الإطار لأداء احتيال النقر.'
},
{
  english: 'password spraying',
  arabic: 'هجوم رش كلمات المرور',
  icon: '💦🔑',
  definition_en: 'Trying common passwords across many accounts without locking them.',
  definition_ar: 'تجربة كلمات مرور شائعة عبر حسابات متعددة بدون قفلها.'
},
{
  english: 'credential stuffing',
  arabic: 'حقن بيانات الاعتماد',
  icon: '🗄️🔑',
  definition_en: 'Using leaked credentials to automate login attempts on other sites.',
  definition_ar: 'استخدام بيانات اعتماد مسربة لتجربة تسجيل الدخول تلقائياً على مواقع أخرى.'
},
{
  english: 'broken session management',
  arabic: 'إدارة الجلسة المكسورة',
  icon: '🕵️‍♂️⚠️',
  definition_en: 'Flaws in session handling that allow attackers to hijack sessions.',
  definition_ar: 'ثغرات في إدارة الجلسات تسمح للمهاجمين بالاستيلاء عليها.'
},
{
  english: 'http request smuggling',
  arabic: 'تزوير طلب HTTP',
  icon: '📤⚔️',
  definition_en: 'Sending specially crafted requests to bypass security controls.',
  definition_ar: 'إرسال طلبات مُصممة لتجاوز ضوابط الأمان.'
},
{
  english: 'http response splitting',
  arabic: 'تقسيم الاستجابة HTTP',
  icon: '📤✂️',
  definition_en: 'Injecting headers to split server responses for attacks.',
  definition_ar: 'حقن رؤوس لتقسيم استجابات الخادم لتنفيذ الهجمات.'
},
{
  english: 'websocket vulnerability',
  arabic: 'ثغرة WebSocket',
  icon: '🌐🔌',
  definition_en: 'Flaws in WebSocket communication that can be exploited.',
  definition_ar: 'ثغرات في اتصال WebSocket يمكن استغلالها.'
},
{
  english: 'html injection',
  arabic: 'حقن HTML',
  icon: '📄🖌️',
  definition_en: 'Injecting HTML code into a web page to manipulate content.',
  definition_ar: 'حقن كود HTML في صفحة الويب للتلاعب بالمحتوى.'
},
{
  english: 'javascript prototype pollution',
  arabic: 'تلوث البروتوتايب في جافاسكريبت',
  icon: '🖥️⚠️',
  definition_en: 'Attacker modifies JS object prototype to manipulate behavior.',
  definition_ar: 'المهاجم يغير بروتوتايب كائن JS للتحكم بالسلوك.'
},
{
  english: 'server-side template injection',
  arabic: 'حقن القوالب من جانب الخادم',
  icon: '🖥️📝',
  definition_en: 'Injecting template code on the server to execute commands.',
  definition_ar: 'حقن كود القوالب على الخادم لتنفيذ الأوامر.'
},
{
  english: 'open port exposure',
  arabic: 'كشف البورت المفتوح',
  icon: '🌐🔓',
  definition_en: 'Exposed open ports that can be scanned and attacked.',
  definition_ar: 'البورتات المفتوحة المكشوفة التي يمكن فحصها والهجوم عليها.'
},
{
  english: 'information disclosure',
  arabic: 'كشف المعلومات',
  icon: '📄🔍',
  definition_en: 'Unintended exposure of sensitive information.',
  definition_ar: 'كشف غير مقصود لمعلومات حساسة.'
},
{
  english: 'clickjacking defense bypass',
  arabic: 'تجاوز دفاعات احتيال النقر',
  icon: '🖱️🚧',
  definition_en: 'Methods to bypass protections against clickjacking attacks.',
  definition_ar: 'طرق لتجاوز الحماية ضد هجمات احتيال النقر.'
},
{
  english: 'web server misconfiguration',
  arabic: 'سوء إعداد خادم الويب',
  icon: '🖥️⚙️',
  definition_en: 'Incorrect server settings that expose vulnerabilities.',
  definition_ar: 'إعدادات الخادم غير الصحيحة التي تكشف عن ثغرات.'
},
{
  english: 'javascript sandbox escape',
  arabic: 'الهروب من صندوق الأمان في جافاسكريبت',
  icon: '🖥️🏃',
  definition_en: 'Escaping restricted JS execution to perform malicious actions.',
  definition_ar: 'الهروب من بيئة تنفيذ JS المقيدة لتنفيذ أعمال خبيثة.'
},
{
  english: 'header injection',
  arabic: 'حقن رؤوس HTTP',
  icon: '📤⚠️',
  definition_en: 'Manipulating HTTP headers to perform attacks like XSS or redirect.',
  definition_ar: 'التلاعب برؤوس HTTP لتنفيذ هجمات مثل XSS أو إعادة التوجيه.'
},
{
  english: 'content spoofing',
  arabic: 'انتحال المحتوى',
  icon: '📄🎭',
  definition_en: 'Tricking users by showing fake content in a web page.',
  definition_ar: 'خداع المستخدمين عن طريق عرض محتوى مزيف في الصفحة.'
},
{
  english: 'oauth misconfiguration',
  arabic: 'سوء إعداد OAuth',
  icon: '🔑⚙️',
  definition_en: 'Incorrect OAuth settings that can allow unauthorized access.',
  definition_ar: 'إعدادات OAuth غير صحيحة تسمح بالوصول غير المصرح به.'
},
{
  english: 'jwt vulnerability',
  arabic: 'ثغرة JWT',
  icon: '📜⚠️',
  definition_en: 'Flaws in JSON Web Token implementation that can be exploited.',
  definition_ar: 'ثغرات في تنفيذ JWT يمكن استغلالها.'
},
{
  english: 'xml injection',
  arabic: 'حقن XML',
  icon: '📄💣',
  definition_en: 'Injecting malicious XML data into a web application.',
  definition_ar: 'حقن بيانات XML خبيثة في التطبيق.'
},
{
  english: 'nosql injection',
  arabic: 'حقن NoSQL',
  icon: '💉🗄️',
  definition_en: 'Injecting malicious queries into NoSQL databases.',
  definition_ar: 'حقن استعلامات خبيثة في قواعد بيانات NoSQL.'
},
{
  english: 'css injection',
  arabic: 'حقن CSS',
  icon: '🎨⚠️',
  definition_en: 'Injecting malicious CSS to manipulate web page appearance.',
  definition_ar: 'حقن CSS خبيث للتلاعب بمظهر صفحة الويب.'
},
{
  english: 'http request smuggling',
  arabic: 'تزوير طلب HTTP',
  icon: '📤⚔️',
  definition_en: 'Sending specially crafted HTTP requests to bypass security.',
  definition_ar: 'إرسال طلبات HTTP مُصممة لتجاوز الأمان.'
},
{
  english: 'http response splitting',
  arabic: 'تقسيم استجابة HTTP',
  icon: '📤✂️',
  definition_en: 'Injecting headers to split server responses for attacks.',
  definition_ar: 'حقن رؤوس لتقسيم استجابات الخادم لتنفيذ هجمات.'
},
{
  english: 'web cache poisoning',
  arabic: 'تسميم ذاكرة التخزين المؤقت للويب',
  icon: '🗂️☠️',
  definition_en: 'Injecting malicious content into cached pages to serve it to users.',
  definition_ar: 'حقن محتوى خبيث في الصفحات المخزنة مؤقتًا ليتم تقديمه للمستخدمين.'
},
{
  english: 'template injection',
  arabic: 'حقن القوالب',
  icon: '📝⚠️',
  definition_en: 'Injecting malicious template code to execute server-side actions.',
  definition_ar: 'حقن كود قوالب خبيث لتنفيذ عمليات من جانب الخادم.'
},
{
  english: 'object injection',
  arabic: 'حقن الكائنات',
  icon: '📦💣',
  definition_en: 'Injecting serialized objects to manipulate app behavior.',
  definition_ar: 'حقن كائنات مسلسلة للتلاعب بسلوك التطبيق.'
},
{
  english: 'insecure deserialization',
  arabic: 'إعادة التسلسل غير الآمنة',
  icon: '🔄⚠️',
  definition_en: 'Deserializing untrusted data leading to RCE or logic flaws.',
  definition_ar: 'إعادة تسلسل بيانات غير موثوقة مما يؤدي إلى تنفيذ كود عن بعد أو أخطاء منطقية.'
},
{
  english: 'open file download',
  arabic: 'تنزيل الملفات المفتوح',
  icon: '📂⬇️',
  definition_en: 'Allowing users to download sensitive files without proper checks.',
  definition_ar: 'السماح للمستخدمين بتنزيل ملفات حساسة بدون تحقق صحيح.'
},
{
  english: 'content security policy bypass',
  arabic: 'تجاوز سياسة أمان المحتوى (CSP)',
  icon: '🛡️⚠️',
  definition_en: 'Techniques to bypass CSP protections to run malicious scripts.',
  definition_ar: 'طرق لتجاوز حماية CSP لتشغيل سكربتات خبيثة.'
},
{
  english: 'http verb tampering',
  arabic: 'التلاعب بأفعال HTTP',
  icon: '🔀📤',
  definition_en: 'Altering HTTP methods to bypass server restrictions.',
  definition_ar: 'تغيير أساليب HTTP لتجاوز قيود الخادم.'
},
{
  english: 'parameter pollution',
  arabic: 'تلوث المعلمات',
  icon: '🔀⚠️',
  definition_en: 'Injecting multiple parameters to confuse the application logic.',
  definition_ar: 'حقن معلمات متعددة لتشويش منطق التطبيق.'
},
{
  english: 'broken access control',
  arabic: 'كسر التحكم بالوصول',
  icon: '🚫⚠️',
  definition_en: 'Improper access control allowing unauthorized access.',
  definition_ar: 'ضعف التحكم بالوصول يسمح بالوصول غير المصرح به.'
},
{
  english: 'forced browsing',
  arabic: 'التصفح القسري',
  icon: '🖱️🚪',
  definition_en: 'Accessing pages without authentication by guessing URLs.',
  definition_ar: 'الوصول إلى صفحات بدون مصادقة عن طريق تخمين الروابط.'
},
{
  english: 'credential stuffing',
  arabic: 'حقن بيانات الاعتماد',
  icon: '🗄️🔑',
  definition_en: 'Using leaked credentials to gain unauthorized access.',
  definition_ar: 'استخدام بيانات اعتماد مسربة للوصول غير المصرح به.'
},
{
  english: 'password spraying',
  arabic: 'هجوم رش كلمات المرور',
  icon: '💦🔑',
  definition_en: 'Trying common passwords across multiple accounts without locking them.',
  definition_ar: 'تجربة كلمات مرور شائعة عبر حسابات متعددة بدون قفلها.'
},
{
  english: 'session fixation',
  arabic: 'تثبيت الجلسة',
  icon: '🔗🕵️',
  definition_en: 'Forcing a user to use a known session ID to hijack it later.',
  definition_ar: 'إجبار المستخدم على استخدام معرف جلسة معروف للاستيلاء عليه لاحقًا.'
},
{
  english: 'session hijacking',
  arabic: 'اختطاف الجلسة',
  icon: '🕵️‍♂️🔑',
  definition_en: 'Stealing a valid user session to impersonate them.',
  definition_ar: 'سرقة جلسة مستخدم صالحة لانتحال هويته.'
},
{
  english: 'html injection',
  arabic: 'حقن HTML',
  icon: '📄🖌️',
  definition_en: 'Injecting HTML code to manipulate webpage content.',
  definition_ar: 'حقن كود HTML للتلاعب بمحتوى الصفحة.'
},
{
  english: 'javascript injection',
  arabic: 'حقن جافاسكريبت',
  icon: '🖥️💣',
  definition_en: 'Injecting JS code to manipulate DOM or steal data.',
  definition_ar: 'حقن كود JS للتلاعب بالـ DOM أو سرقة البيانات.'
},
{
  english: 'dom-based xss',
  arabic: 'XSS المستندة إلى DOM',
  icon: '🌐📝',
  definition_en: 'XSS vulnerability occurring on the client-side DOM manipulation.',
  definition_ar: 'ثغرة XSS تحدث على جانب العميل أثناء التلاعب بالـ DOM.'
},
{
  english: 'reflected xss',
  arabic: 'XSS المنعكس',
  icon: '🔄🌐',
  definition_en: 'XSS where the payload is reflected in the response immediately.',
  definition_ar: 'XSS حيث يتم عكس الحمولة الخبيثة في الاستجابة فورًا.'
},
{
  english: 'stored xss',
  arabic: 'XSS المخزن',
  icon: '💾🌐',
  definition_en: 'XSS that stores payloads in the server/database to affect multiple users.',
  definition_ar: 'XSS يخزن الحمولة في الخادم/قاعدة البيانات لتؤثر على عدة مستخدمين.'
},
{
  english: 'csrf',
  arabic: 'تزوير طلبات عبر المواقع (CSRF)',
  icon: '🔗⚔️',
  definition_en: 'Tricking authenticated users into performing unwanted actions.',
  definition_ar: 'خداع المستخدمين المصادق عليهم لتنفيذ إجراءات غير مرغوبة.'
},
{
  english: 'open redirect',
  arabic: 'إعادة توجيه مفتوحة',
  icon: '🔗➡️',
  definition_en: 'Redirecting users to malicious websites through vulnerable links.',
  definition_ar: 'إعادة توجيه المستخدمين لمواقع خبيثة عبر روابط ضعيفة.'
},
{
  english: 'subdomain takeover',
  arabic: 'الاستيلاء على النطاق الفرعي',
  icon: '🌐🚨',
  definition_en: 'Hijacking unclaimed or misconfigured subdomains.',
  definition_ar: 'الاستيلاء على نطاقات فرعية غير مملوكة أو مُهيأة بشكل خاطئ.'
},
{
  english: 'clickjacking',
  arabic: 'احتيال النقر',
  icon: '🖱️🎭',
  definition_en: 'Tricking users to click hidden elements without their knowledge.',
  definition_ar: 'خداع المستخدم للنقر على عناصر مخفية بدون علمه.'
},
{
  english: 'iframe injection',
  arabic: 'حقن IFrame',
  icon: '📄🖼️',
  definition_en: 'Embedding malicious iframes to perform attacks like clickjacking.',
  definition_ar: 'تضمين إطارات خبيثة لتنفيذ هجمات مثل احتيال النقر.'
},
{
  english: 'jsonp injection',
  arabic: 'حقن JSONP',
  icon: '🌐📄',
  definition_en: 'Injecting malicious payloads through JSONP endpoints.',
  definition_ar: 'حقن حمولة خبيثة عبر نقاط نهاية JSONP.'
},
{
  english: 'websocket injection',
  arabic: 'حقن WebSocket',
  icon: '🌐🔌',
  definition_en: 'Injecting malicious data in WebSocket connections.',
  definition_ar: 'حقن بيانات خبيثة في اتصالات WebSocket.'
},
{
  english: 'web application misconfiguration',
  arabic: 'سوء إعداد تطبيق الويب',
  icon: '🖥️⚙️',
  definition_en: 'Incorrect app settings that expose vulnerabilities.',
  definition_ar: 'إعدادات التطبيق غير الصحيحة التي تكشف عن ثغرات.'
},
{
  english: 'information disclosure',
  arabic: 'كشف المعلومات',
  icon: '📄🔍',
  definition_en: 'Unintended exposure of sensitive data through the web app.',
  definition_ar: 'كشف غير مقصود للبيانات الحساسة عبر التطبيق.'
},
{
  english: 'directory traversal',
  arabic: 'التنقل في الدليل',
  icon: '📂🔝',
  definition_en: 'Accessing files outside the intended directory structure.',
  definition_ar: 'الوصول إلى ملفات خارج هيكل الدلائل المقصودة.'
},
{
  english: 'error-based vulnerability',
  arabic: 'ثغرة مستندة إلى الأخطاء',
  icon: '⚠️📄',
  definition_en: 'Using error messages to gain information for attacks.',
  definition_ar: 'استخدام رسائل الأخطاء للحصول على معلومات للهجمات.'
},
{
  english: 'timing attack',
  arabic: 'هجوم التوقيت',
  icon: '⏱️⚔️',
  definition_en: 'Exploiting time differences in responses to extract sensitive info.',
  definition_ar: 'استغلال فروق التوقيت في الاستجابات لاستخراج معلومات حساسة.'
},
{
  english: 'business logic vulnerability',
  arabic: 'ثغرة منطق الأعمال',
  icon: '📊⚠️',
  definition_en: 'Flaws in the application logic that allow abuse.',
  definition_ar: 'ثغرات في منطق التطبيق تسمح بالاستغلال.'
},
{
  english: 'siem',
  arabic: 'إدارة معلومات وأحداث الأمان',
  icon: '🛡️💻',
  definition_en: 'A system that collects and analyzes security event data.',
  definition_ar: 'نظام يجمع ويحلل بيانات أحداث الأمان.'
},
{
  english: 'incident response',
  arabic: 'الاستجابة للحوادث',
  icon: '🚨🛠️',
  definition_en: 'The process of detecting, investigating, and mitigating security incidents.',
  definition_ar: 'عملية اكتشاف الحوادث الأمنية والتحقيق فيها والتخفيف من أثرها.'
},
{
  english: 'threat hunting',
  arabic: 'صيد التهديدات',
  icon: '🕵️‍♂️⚠️',
  definition_en: 'Proactively searching for potential security threats within a network.',
  definition_ar: 'البحث الاستباقي عن التهديدات الأمنية المحتملة داخل الشبكة.'
},
{
  english: 'intrusion detection system',
  arabic: 'نظام كشف التسلل (IDS)',
  icon: '🚨👁️',
  definition_en: 'A system that monitors network traffic for suspicious activity.',
  definition_ar: 'نظام يراقب حركة الشبكة للنشاطات المشبوهة.'
},
{
  english: 'intrusion prevention system',
  arabic: 'نظام منع التسلل (IPS)',
  icon: '🛡️⚡',
  definition_en: 'A system that detects and prevents malicious network traffic.',
  definition_ar: 'نظام يكشف ويمنع حركة الشبكة الضارة.'
},
{
  english: 'log management',
  arabic: 'إدارة السجلات',
  icon: '📜💾',
  definition_en: 'Collecting, storing, and analyzing logs for security purposes.',
  definition_ar: 'جمع وتخزين وتحليل السجلات لأغراض الأمان.'
},
{
  english: 'vulnerability assessment',
  arabic: 'تقييم الثغرات',
  icon: '🔍⚠️',
  definition_en: 'The process of identifying and evaluating security weaknesses.',
  definition_ar: 'عملية تحديد وتقييم نقاط الضعف الأمنية.'
},
{
  english: 'risk management',
  arabic: 'إدارة المخاطر',
  icon: '⚖️🛡️',
  definition_en: 'Identifying, assessing, and mitigating security risks.',
  definition_ar: 'تحديد وتقييم وتخفيف المخاطر الأمنية.'
},
{
  english: 'endpoint detection and response',
  arabic: 'كشف واستجابة النقاط الطرفية (EDR)',
  icon: '💻🛡️',
  definition_en: 'Monitoring endpoints to detect and respond to security threats.',
  definition_ar: 'مراقبة النقاط الطرفية للكشف عن التهديدات الأمنية والاستجابة لها.'
},
{
  english: 'security monitoring',
  arabic: 'مراقبة الأمان',
  icon: '📡🛡️',
  definition_en: 'Continuous observation of systems and networks to detect security issues.',
  definition_ar: 'مراقبة مستمرة للأنظمة والشبكات للكشف عن المشاكل الأمنية.'
},
{
  english: 'forensics',
  arabic: 'التحقيق الجنائي الرقمي',
  icon: '🕵️‍♂️💾',
  definition_en: 'Analyzing digital evidence to investigate security incidents.',
  definition_ar: 'تحليل الأدلة الرقمية للتحقيق في الحوادث الأمنية.'
},
{
  english: 'playbook',
  arabic: 'دليل الإجراءات',
  icon: '📖⚙️',
  definition_en: 'A set of predefined steps to handle specific security incidents.',
  definition_ar: 'مجموعة من الخطوات المحددة مسبقاً للتعامل مع حوادث أمنية محددة.'
},
{
  english: 'malware analysis',
  arabic: 'تحليل البرمجيات الخبيثة',
  icon: '🐛🔬',
  definition_en: 'Examining malicious software to understand its behavior and impact.',
  definition_ar: 'فحص البرمجيات الخبيثة لفهم سلوكها وتأثيرها.'
},
{
  english: 'phishing',
  arabic: 'التصيد الاحتيالي',
  icon: '🎣⚠️',
  definition_en: 'A technique to trick users into revealing sensitive information.',
  definition_ar: 'أسلوب لخداع المستخدمين للكشف عن معلومات حساسة.'
},
{
  english: 'detection rule',
  arabic: 'قاعدة الكشف',
  icon: '📏🔍',
  definition_en: 'A predefined condition to identify suspicious activity.',
  definition_ar: 'شرط محدد مسبقًا لتحديد النشاط المشبوه.'
},
{
  english: 'threat intelligence',
  arabic: 'معلومات التهديدات',
  icon: '🧠⚠️',
  definition_en: 'Data about potential threats used to prevent or respond to attacks.',
  definition_ar: 'بيانات عن التهديدات المحتملة تُستخدم لمنع الهجمات أو الاستجابة لها.'
},
{
  english: 'correlation',
  arabic: 'الترابط',
  icon: '🔗📝',
  definition_en: 'Linking multiple events to identify patterns or incidents.',
  definition_ar: 'ربط عدة أحداث لتحديد أنماط أو حوادث.'
},
{
  english: 'alert triage',
  arabic: 'تصنيف التنبيهات',
  icon: '⚡📊',
  definition_en: 'Prioritizing security alerts based on severity and impact.',
  definition_ar: 'ترتيب التنبيهات الأمنية حسب الشدة والأثر.'
},
{
  english: 'false positive',
  arabic: 'إيجابي كاذب',
  icon: '❌⚡',
  definition_en: 'An alert indicating a threat when there is none.',
  definition_ar: 'تنبيه يشير إلى تهديد بينما لا يوجد تهديد.'
},
{
  english: 'false negative',
  arabic: 'سلبي كاذب',
  icon: '❌🛡️',
  definition_en: 'Failure to detect an actual threat.',
  definition_ar: 'فشل في اكتشاف تهديد فعلي.'
},
{
  english: 'sandboxing',
  arabic: 'الصندوق الرملي',
  icon: '🖥️🧰',
  definition_en: 'Running untrusted code in an isolated environment for analysis.',
  definition_ar: 'تشغيل كود غير موثوق في بيئة معزولة للتحليل.'
},
{
  english: 'ioc',
  arabic: 'مؤشر الاختراق (IOC)',
  icon: '🕵️‍♂️📌',
  definition_en: 'Indicators used to detect malicious activity in networks.',
  definition_ar: 'مؤشرات تُستخدم للكشف عن النشاطات الضارة في الشبكات.'
},
{
  english: 'network traffic analysis',
  arabic: 'تحليل حركة الشبكة',
  icon: '📡📊',
  definition_en: 'Monitoring and analyzing network packets for threats.',
  definition_ar: 'مراقبة وتحليل حزم الشبكة لاكتشاف التهديدات.'
},
{
  english: 'honeypot',
  arabic: 'وعاء العسل',
  icon: '🍯🛡️',
  definition_en: 'A decoy system to attract attackers and study their methods.',
  definition_ar: 'نظام طُعم لجذب المهاجمين ودراسة أساليبهم.'
},
{
  english: 'threat actor',
  arabic: 'فاعل التهديد',
  icon: '🎭⚠️',
  definition_en: 'An entity responsible for malicious cyber activity.',
  definition_ar: 'جهة مسؤولة عن النشاطات السيبرانية الخبيثة.'
},
{
  english: 'attack vector',
  arabic: 'مسار الهجوم',
  icon: '🚪⚡',
  definition_en: 'The path or method used by an attacker to breach security.',
  definition_ar: 'المسار أو الطريقة التي يستخدمها المهاجم لاختراق الأمان.'
},
{
  english: 'security orchestration',
  arabic: 'تنسيق الأمان',
  icon: '🎛️🛡️',
  definition_en: 'Automating and coordinating security tools and processes.',
  definition_ar: 'أتمتة وتنسيق أدوات وعمليات الأمان.'
},
{
  english: 'playbook automation',
  arabic: 'أتمتة دليل الإجراءات',
  icon: '🤖📖',
  definition_en: 'Automating incident response procedures using predefined playbooks.',
  definition_ar: 'أتمتة إجراءات الاستجابة للحوادث باستخدام أدلة محددة مسبقاً.'
},
{
  english: 'advanced persistent threat',
  arabic: 'تهديد متقدم مستمر (APT)',
  icon: '🕵️‍♂️⚡',
  definition_en: 'A prolonged and targeted cyberattack against an organization.',
  definition_ar: 'هجوم سيبراني مستمر وموجه ضد منظمة.'
},
{
  english: 'log correlation',
  arabic: 'ترابط السجلات',
  icon: '📜🔗',
  definition_en: 'Analyzing multiple logs together to identify security incidents.',
  definition_ar: 'تحليل عدة سجلات معًا لتحديد الحوادث الأمنية.'
},
{
  english: 'alarm fatigue',
  arabic: 'إرهاق التنبيهات',
  icon: '😵⚡',
  definition_en: 'Reduced response efficiency due to too many alerts.',
  definition_ar: 'انخفاض كفاءة الاستجابة بسبب كثرة التنبيهات.'
},
{
  english: 'packet capture',
  arabic: 'التقاط الحزم',
  icon: '📡🗂️',
  definition_en: 'Capturing network packets for analysis and investigation.',
  definition_ar: 'التقاط حزم الشبكة للتحليل والتحقيق.'
},
{
  english: 'endpoint monitoring',
  arabic: 'مراقبة النقاط الطرفية',
  icon: '💻👁️',
  definition_en: 'Monitoring computers and devices for malicious activity.',
  definition_ar: 'مراقبة أجهزة الكمبيوتر والأجهزة للنشاطات الضارة.'
},
{
  english: 'threat modeling',
  arabic: 'نمذجة التهديدات',
  icon: '📊🛡️',
  definition_en: 'Analyzing potential threats to design defenses.',
  definition_ar: 'تحليل التهديدات المحتملة لتصميم وسائل الدفاع.'
},
{
  english: 'anomaly detection',
  arabic: 'كشف الشذوذ',
  icon: '🔍⚡',
  definition_en: 'Identifying unusual patterns in data that may indicate threats.',
  definition_ar: 'تحديد الأنماط غير المعتادة في البيانات التي قد تشير إلى تهديدات.'
},
{
  english: 'malware sandbox',
  arabic: 'صندوق تحليل البرمجيات الخبيثة',
  icon: '🐛🧰',
  definition_en: 'Isolated environment to analyze malware safely.',
  definition_ar: 'بيئة معزولة لتحليل البرمجيات الخبيثة بأمان.'
},
{
  english: 'traffic mirroring',
  arabic: 'نسخ حركة الشبكة',
  icon: '📡🔁',
  definition_en: 'Duplicating network traffic to monitor and analyze it.',
  definition_ar: 'نسخ حركة الشبكة لمراقبتها وتحليلها.'
},
{
  english: 'security baseline',
  arabic: 'المعيار الأمني',
  icon: '📏🛡️',
  definition_en: 'Minimum security settings required for systems.',
  definition_ar: 'الحد الأدنى من إعدادات الأمان المطلوبة للأنظمة.'
},
{
  english: 'attack surface',
  arabic: 'سطح الهجوم',
  icon: '🛡️⚡',
  definition_en: 'All points in a system that can be attacked by a threat actor.',
  definition_ar: 'جميع النقاط في النظام التي يمكن مهاجمتها بواسطة فاعل تهديد.'
},
{
  english: 'SOC analyst',
  arabic: 'محلل مركز العمليات الأمنية',
  icon: '👨‍💻🛡️',
  definition_en: 'A professional who monitors and responds to security incidents.',
  definition_ar: 'محترف يراقب ويستجيب للحوادث الأمنية.'
},
{
  english: 'SIEM correlation',
  arabic: 'ترابط SIEM',
  icon: '🛡️🔗',
  definition_en: 'Linking SIEM events to detect patterns of attacks.',
  definition_ar: 'ربط أحداث SIEM للكشف عن أنماط الهجمات.'
},
{
  english: 'data exfiltration',
  arabic: 'استخراج البيانات',
  icon: '📤⚠️',
  definition_en: 'Unauthorized transfer of data from an organization.',
  definition_ar: 'نقل البيانات من المنظمة بدون تصريح.'
},
{
  english: 'cyber kill chain',
  arabic: 'سلسلة قتل سيبرانية',
  icon: '🕵️‍♂️💀',
  definition_en: 'The steps attackers take to infiltrate and exploit targets.',
  definition_ar: 'الخطوات التي يتخذها المهاجمون لاختراق واستغلال الأهداف.'
},
{
  english: 'risk scoring',
  arabic: 'تقييم المخاطر',
  icon: '⚖️📝',
  definition_en: 'Assigning numeric values to risks based on severity.',
  definition_ar: 'تخصيص قيم رقمية للمخاطر بناءً على شدتها.'
},
{
  english: 'threat actor profiling',
  arabic: 'تحليل فاعل التهديد',
  icon: '🕵️‍♂️📊',
  definition_en: 'Studying attacker behavior to predict future attacks.',
  definition_ar: 'دراسة سلوك المهاجم للتنبؤ بالهجمات المستقبلية.'
},
{
  english: 'zero-day detection',
  arabic: 'كشف الثغرات صفرية اليوم',
  icon: '0️⃣⚠️',
  definition_en: 'Detecting unknown vulnerabilities before they are exploited.',
  definition_ar: 'كشف الثغرات غير المعروفة قبل استغلالها.'
},
{
  english: 'log retention',
  arabic: 'الاحتفاظ بالسجلات',
  icon: '📜⏳',
  definition_en: 'Keeping logs for a specified period to support investigations.',
  definition_ar: 'الاحتفاظ بالسجلات لفترة محددة لدعم التحقيقات.'
},
{
  english: 'endpoint protection platform',
  arabic: 'منصة حماية النقاط الطرفية (EPP)',
  icon: '💻🛡️',
  definition_en: 'Software to protect endpoints from malware and attacks.',
  definition_ar: 'برنامج لحماية النقاط الطرفية من البرمجيات الخبيثة والهجمات.'
},
{
  english: 'security orchestration automation',
  arabic: 'أتمتة وتنسيق الأمان (SOAR)',
  icon: '🤖🛡️',
  definition_en: 'Automating security operations processes and responses.',
  definition_ar: 'أتمتة عمليات واستجابات مركز العمليات الأمنية.'
},
{
  english: 'network segmentation',
  arabic: 'تقسيم الشبكة',
  icon: '🌐✂️',
  definition_en: 'Dividing a network into segments to limit attack spread.',
  definition_ar: 'تقسيم الشبكة إلى أجزاء للحد من انتشار الهجمات.'
},
{
  english: 'vulnerability management',
  arabic: 'إدارة الثغرات',
  icon: '🔍🛡️',
  definition_en: 'Identifying, assessing, and mitigating system vulnerabilities.',
  definition_ar: 'تحديد وتقييم وتخفيف ثغرات الأنظمة.'
},
{
  english: 'risk assessment',
  arabic: 'تقييم المخاطر',
  icon: '⚖️📊',
  definition_en: 'Analyzing potential risks to prioritize security measures.',
  definition_ar: 'تحليل المخاطر المحتملة لتحديد أولويات الإجراءات الأمنية.'
},
{
  english: 'security audit',
  arabic: 'تدقيق الأمان',
  icon: '📝🛡️',
  definition_en: 'Reviewing systems to ensure compliance with security policies.',
  definition_ar: 'مراجعة الأنظمة لضمان الامتثال لسياسات الأمان.'
},
{
  english: 'threat detection',
  arabic: 'كشف التهديدات',
  icon: '🔍⚡',
  definition_en: 'Identifying potential malicious activities in real-time.',
  definition_ar: 'تحديد الأنشطة الضارة المحتملة في الوقت الفعلي.'
},
{
  english: 'security alert',
  arabic: 'تنبيه أمني',
  icon: '⚡🚨',
  definition_en: 'Notification about a potential security incident.',
  definition_ar: 'إشعار حول حادث أمني محتمل.'
},
{
  english: 'behavioral analytics',
  arabic: 'تحليلات سلوكية',
  icon: '📊🧠',
  definition_en: 'Monitoring user and system behavior to detect anomalies.',
  definition_ar: 'مراقبة سلوك المستخدم والنظام للكشف عن الشذوذ.'
},
{
  english: 'advanced malware detection',
  arabic: 'كشف البرمجيات الخبيثة المتقدمة',
  icon: '🐛⚡',
  definition_en: 'Techniques to identify sophisticated malware threats.',
  definition_ar: 'طرق لتحديد التهديدات البرمجية المعقدة.'
},
{
  english: 'network intrusion',
  arabic: 'تسلل الشبكة',
  icon: '🌐🚨',
  definition_en: 'Unauthorized access to a network system.',
  definition_ar: 'الوصول غير المصرح به إلى نظام الشبكة.'
},
{
  english: 'cybersecurity monitoring',
  arabic: 'مراقبة الأمن السيبراني',
  icon: '🖥️👁️',
  definition_en: 'Continuous observation of systems to detect threats.',
  definition_ar: 'المراقبة المستمرة للأنظمة للكشف عن التهديدات.'
},
{
  english: 'data breach',
  arabic: 'اختراق البيانات',
  icon: '📂🔓',
  definition_en: 'Unauthorized access to sensitive information.',
  definition_ar: 'الوصول غير المصرح به إلى المعلومات الحساسة.'
},
{
  english: 'forensic investigation',
  arabic: 'التحقيق الجنائي الرقمي',
  icon: '🕵️‍♀️🔬',
  definition_en: 'Examining digital evidence to uncover security incidents.',
  definition_ar: 'فحص الأدلة الرقمية للكشف عن الحوادث الأمنية.'
},
{
  english: 'security policy',
  arabic: 'سياسة الأمان',
  icon: '📑🛡️',
  definition_en: 'A set of rules defining security practices for an organization.',
  definition_ar: 'مجموعة من القواعد التي تحدد ممارسات الأمان للمنظمة.'
},
{
  english: 'vulnerability scanning',
  arabic: 'فحص الثغرات',
  icon: '🔍💻',
  definition_en: 'Automated process of identifying weaknesses in systems.',
  definition_ar: 'عملية آلية لتحديد نقاط الضعف في الأنظمة.'
},
{
  english: 'endpoint detection',
  arabic: 'كشف النقاط الطرفية',
  icon: '💻🔍',
  definition_en: 'Monitoring devices to identify malicious activity.',
  definition_ar: 'مراقبة الأجهزة لتحديد الأنشطة الضارة.'
},
{
  english: 'security dashboard',
  arabic: 'لوحة تحكم الأمان',
  icon: '📊🛡️',
  definition_en: 'A visual interface to monitor security events.',
  definition_ar: 'واجهة مرئية لمراقبة الأحداث الأمنية.'
},
{
  english: 'threat intelligence platform',
  arabic: 'منصة معلومات التهديدات',
  icon: '🧠⚠️',
  definition_en: 'Collects and analyzes threat data to improve defenses.',
  definition_ar: 'جمع وتحليل بيانات التهديدات لتعزيز الدفاعات.'
},
{
  english: 'alert escalation',
  arabic: 'تصعيد التنبيهات',
  icon: '📈⚡',
  definition_en: 'Raising important alerts to higher authority for action.',
  definition_ar: 'رفع التنبيهات الهامة إلى السلطة العليا لاتخاذ الإجراءات.'
},
{
  english: 'security operations workflow',
  arabic: 'سير عمل العمليات الأمنية',
  icon: '🔄🛡️',
  definition_en: 'Sequence of processes for handling security incidents.',
  definition_ar: 'تسلسل العمليات للتعامل مع الحوادث الأمنية.'
},
{
  english: 'event correlation',
  arabic: 'ترابط الأحداث',
  icon: '🔗📊',
  definition_en: 'Analyzing multiple events to detect patterns or incidents.',
  definition_ar: 'تحليل عدة أحداث للكشف عن الأنماط أو الحوادث.'
},
{
  english: 'security metrics',
  arabic: 'مؤشرات الأمان',
  icon: '📊🛡️',
  definition_en: 'Measures used to evaluate security performance.',
  definition_ar: 'مقاييس تُستخدم لتقييم أداء الأمان.'
},
{
  english: 'incident management',
  arabic: 'إدارة الحوادث',
  icon: '🛠️🚨',
  definition_en: 'Process of handling security incidents from detection to resolution.',
  definition_ar: 'عملية التعامل مع الحوادث الأمنية من الاكتشاف حتى الحل.'
},
{
  english: 'security testing',
  arabic: 'اختبار الأمان',
  icon: '🧪🛡️',
  definition_en: 'Evaluating systems to identify vulnerabilities.',
  definition_ar: 'تقييم الأنظمة لتحديد الثغرات.'
},
{
  english: 'network security monitoring',
  arabic: 'مراقبة أمن الشبكة',
  icon: '🌐👁️',
  definition_en: 'Tracking network activity to detect malicious behavior.',
  definition_ar: 'تتبع نشاط الشبكة للكشف عن السلوكيات الضارة.'
},
{
  english: 'threat lifecycle',
  arabic: 'دورة حياة التهديد',
  icon: '🔄⚠️',
  definition_en: 'Stages of a threat from initial reconnaissance to attack execution.',
  definition_ar: 'مراحل التهديد من الاستطلاع الأولي حتى تنفيذ الهجوم.'
},
{
  english: 'malware sandboxing',
  arabic: 'صندوق تحليل البرمجيات الخبيثة',
  icon: '🐛🧰',
  definition_en: 'Running malware in isolated environments to study behavior.',
  definition_ar: 'تشغيل البرمجيات الخبيثة في بيئات معزولة لدراسة سلوكها.'
},
{
  english: 'security playbook',
  arabic: 'دليل إجراءات الأمان',
  icon: '📖🛡️',
  definition_en: 'Predefined procedures for responding to security incidents.',
  definition_ar: 'إجراءات محددة مسبقاً للاستجابة للحوادث الأمنية.'
},
{
  english: 'alert fatigue',
  arabic: 'إرهاق التنبيهات',
  icon: '😓⚡',
  definition_en: 'Desensitization due to excessive security alerts.',
  definition_ar: 'فقدان الحساسية نتيجة كثرة التنبيهات الأمنية.'
},
{
  english: 'advanced persistent threat',
  arabic: 'تهديد متقدم مستمر (APT)',
  icon: '🕵️‍♂️⚡',
  definition_en: 'A long-term, targeted cyber attack by a skilled actor.',
  definition_ar: 'هجوم سيبراني طويل المدى ومستهدف بواسطة جهة ماهرة.'
},
{
  english: 'incident documentation',
  arabic: 'توثيق الحوادث',
  icon: '📝🚨',
  definition_en: 'Recording details of security incidents for review and analysis.',
  definition_ar: 'تسجيل تفاصيل الحوادث الأمنية للمراجعة والتحليل.'
},
{
  english: 'security audit trail',
  arabic: 'سجل تدقيق الأمان',
  icon: '📜🛡️',
  definition_en: 'A chronological record of events and actions for security review.',
  definition_ar: 'سجل زمني للأحداث والإجراءات لمراجعة الأمان.'
},
{
  english: 'endpoint telemetry',
  arabic: 'بيانات قياس النقاط الطرفية',
  icon: '💻📡',
  definition_en: 'Collection of endpoint data for monitoring and threat detection.',
  definition_ar: 'جمع بيانات النقاط الطرفية للمراقبة والكشف عن التهديدات.'
},
{
  english: 'SOC automation',
  arabic: 'أتمتة مركز العمليات الأمنية',
  icon: '🤖🛡️',
  definition_en: 'Automating repetitive SOC tasks to improve efficiency.',
  definition_ar: 'أتمتة المهام المتكررة في مركز العمليات الأمنية لتحسين الكفاءة.'
},
{
  english: 'security visibility',
  arabic: 'رؤية الأمان',
  icon: '👁️🛡️',
  definition_en: 'Ability to monitor and understand security posture across systems.',
  definition_ar: 'القدرة على مراقبة وفهم وضع الأمان عبر الأنظمة.'
},
{
  english: 'threat prioritization',
  arabic: 'أولوية التهديدات',
  icon: '⚡📊',
  definition_en: 'Ranking threats based on potential impact and urgency.',
  definition_ar: 'تصنيف التهديدات بناءً على الأثر المحتمل والأهمية.'
},
{
  english: 'security orchestration workflow',
  arabic: 'سير عمل تنسيق الأمان',
  icon: '🔄🎛️',
  definition_en: 'Automated sequence of SOC processes to respond to threats.',
  definition_ar: 'تسلسل آلي لعمليات مركز العمليات الأمنية للاستجابة للتهديدات.'
},
{
  english: 'cyber defense',
  arabic: 'الدفاع السيبراني',
  icon: '🛡️🌐',
  definition_en: 'Protecting systems and networks from cyber attacks.',
  definition_ar: 'حماية الأنظمة والشبكات من الهجمات السيبرانية.'
},
{
  english: 'threat intelligence feed',
  arabic: 'تغذية معلومات التهديدات',
  icon: '🧠📡',
  definition_en: 'Continuous updates of threat data for SOC analysis.',
  definition_ar: 'تحديث مستمر لبيانات التهديدات لتحليل مركز العمليات الأمنية.'
},
{
  english: 'real-time monitoring',
  arabic: 'المراقبة في الوقت الحقيقي',
  icon: '⏱️👁️',
  definition_en: 'Observing systems instantly as events happen.',
  definition_ar: 'مراقبة الأنظمة فور وقوع الأحداث.'
},
{
  english: 'SOC metrics',
  arabic: 'مؤشرات مركز العمليات الأمنية',
  icon: '📊🛡️',
  definition_en: 'Key performance indicators to evaluate SOC effectiveness.',
  definition_ar: 'مؤشرات الأداء الرئيسية لتقييم فعالية مركز العمليات الأمنية.'
},
{
  english: 'incident containment',
  arabic: 'احتواء الحوادث',
  icon: '🚧⚠️',
  definition_en: 'Stopping the spread of security incidents to limit damage.',
  definition_ar: 'إيقاف انتشار الحوادث الأمنية للحد من الضرر.'
},
{
  english: 'endpoint hardening',
  arabic: 'تحصين النقاط الطرفية',
  icon: '💻🛡️',
  definition_en: 'Applying security measures to reduce vulnerabilities on devices.',
  definition_ar: 'تطبيق إجراءات أمان لتقليل نقاط الضعف في الأجهزة.'
},
{
  english: 'raspberry pi',
  arabic: 'راسبيري باي',
  icon: '🍓💻',
  definition_en: 'A small single-board computer used for experiments, IoT, and security projects.',
  definition_ar: 'كمبيوتر صغير على لوحة واحدة يُستخدم للتجارب، وإنترنت الأشياء، ومشاريع الأمان.'
},
{
  english: 'arduino',
  arabic: 'أردوينو',
  icon: '🔧🤖',
  definition_en: 'A microcontroller platform used for prototyping electronics and security devices.',
  definition_ar: 'منصة متحكم دقيق تُستخدم لتجربة الإلكترونيات وأجهزة الأمان.'
},
{
  english: 'esp8266',
  arabic: 'ESP8266',
  icon: '📡🤖',
  definition_en: 'A Wi-Fi microcontroller used for IoT and network security projects.',
  definition_ar: 'متحكم دقيق مزود بشبكة Wi-Fi يُستخدم لمشاريع إنترنت الأشياء وأمان الشبكات.'
},
{
  english: 'esp32',
  arabic: 'ESP32',
  icon: '📡⚡',
  definition_en: 'An advanced Wi-Fi and Bluetooth microcontroller for IoT and security systems.',
  definition_ar: 'متحكم دقيق متقدم يدعم Wi-Fi وBluetooth لمشاريع إنترنت الأشياء وأنظمة الأمان.'
},
{
  english: 'nfc reader',
  arabic: 'قارئ NFC',
  icon: '📶💳',
  definition_en: 'A device that reads NFC tags for access control and authentication.',
  definition_ar: 'جهاز يقرأ علامات NFC للتحكم في الوصول والمصادقة.'
},
{
  english: 'rfid module',
  arabic: 'وحدة RFID',
  icon: '📡🔖',
  definition_en: 'A module used to read/write RFID tags for security and tracking.',
  definition_ar: 'وحدة تُستخدم لقراءة وكتابة علامات RFID للأمان والتتبع.'
},
{
  english: 'gpio pins',
  arabic: 'مخارج/مدخلات GPIO',
  icon: '🔌⚡',
  definition_en: 'General-purpose pins on microcontrollers for sensors and actuators in security systems.',
  definition_ar: 'مخارج ومدخلات على المتحكمات الدقيقة للحساسات والمشغلات في أنظمة الأمان.'
},
{
  english: 'ultrasonic sensor',
  arabic: 'حساس فوق صوتي',
  icon: '🔊📏',
  definition_en: 'A sensor that measures distance using ultrasonic waves, used in security robots or alarms.',
  definition_ar: 'حساس يقيس المسافة باستخدام الموجات فوق الصوتية، يُستخدم في الروبوتات الأمنية أو الإنذارات.'
},
{
  english: 'camera module',
  arabic: 'وحدة كاميرا',
  icon: '📷🔒',
  definition_en: 'A camera for video surveillance and monitoring in security projects.',
  definition_ar: 'كاميرا للمراقبة بالفيديو والمراقبة في مشاريع الأمان.'
},
{
  english: 'motion sensor',
  arabic: 'حساس الحركة',
  icon: '🏃‍♂️⚡',
  definition_en: 'Detects movement for alarms, surveillance, and security systems.',
  definition_ar: 'يكتشف الحركة لأجهزة الإنذار والمراقبة وأنظمة الأمان.'
},
{
  english: 'buzzer',
  arabic: 'صفارة/جهاز إنذار',
  icon: '🔊🚨',
  definition_en: 'An audio signaling device for alarms and notifications in security systems.',
  definition_ar: 'جهاز إصدار أصوات للتحذيرات والتنبيهات في أنظمة الأمان.'
},
{
  english: 'relay module',
  arabic: 'وحدة مرحل',
  icon: '⚡🔁',
  definition_en: 'A module to control high-voltage devices with microcontrollers in security applications.',
  definition_ar: 'وحدة للتحكم بالأجهزة عالية الجهد باستخدام المتحكمات الدقيقة في تطبيقات الأمان.'
},
{
  english: 'temperature sensor',
  arabic: 'حساس درجة الحرارة',
  icon: '🌡️🔒',
  definition_en: 'Monitors temperature in secure environments or IoT security devices.',
  definition_ar: 'يراقب درجة الحرارة في البيئات الآمنة أو أجهزة إنترنت الأشياء الأمنية.'
},
{
  english: 'led indicator',
  arabic: 'مصباح LED',
  icon: '💡⚡',
  definition_en: 'Visual indicator used in security systems to show status or alerts.',
  definition_ar: 'مؤشر بصري يُستخدم في أنظمة الأمان لإظهار الحالة أو التنبيهات.'
},
{
  english: 'keypad module',
  arabic: 'وحدة لوحة المفاتيح',
  icon: '🔢🔒',
  definition_en: 'Used for PIN entry in access control and security systems.',
  definition_ar: 'تُستخدم لإدخال أرقام PIN في التحكم بالوصول وأنظمة الأمان.'
},
{
  english: 'wifi module',
  arabic: 'وحدة Wi-Fi',
  icon: '📡💻',
  definition_en: 'Provides wireless connectivity for security and IoT devices.',
  definition_ar: 'يوفر الاتصال اللاسلكي لأجهزة الأمان وإنترنت الأشياء.'
},
{
  english: 'bluetooth module',
  arabic: 'وحدة Bluetooth',
  icon: '🔵📡',
  definition_en: 'Enables short-range wireless communication for security gadgets.',
  definition_ar: 'يمكن الاتصال اللاسلكي قصير المدى لأجهزة الأمان.'
},
{
  english: 'sd card module',
  arabic: 'وحدة بطاقة SD',
  icon: '💾🔒',
  definition_en: 'Used to store logs, images, or video in security projects.',
  definition_ar: 'تُستخدم لتخزين السجلات أو الصور أو الفيديو في مشاريع الأمان.'
},
{
  english: 'gps module',
  arabic: 'وحدة GPS',
  icon: '📍🛰️',
  definition_en: 'Provides location tracking for security systems and devices.',
  definition_ar: 'يوفر تتبع الموقع لأنظمة وأجهزة الأمان.'
},
];

function seedDatabase(db) {
  // Combine hardcoded seed data with user seeds
  const allSeeds = [...seedData, ...userSeeds];
  
  // Deduplicate by normalized English (trimmed, case-insensitive)
  const normalize = (s) => (s || '').trim().toLowerCase();
  const seen = new Set();
  const deduped = [];
  for (const term of allSeeds) {
    const key = normalize(term.english);
    if (!key) continue;
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push({
        english: (term.english || '').trim(),
        arabic: (term.arabic || '').trim(),
        icon: term.icon || '',
        definition_en: (term.definition_en || '').trim(),
        definition_ar: (term.definition_ar || '').trim(),
      });
    }
  }

  const stmt = db.prepare(`INSERT OR IGNORE INTO terms (english, arabic, icon, definition_en, definition_ar)
                           VALUES (?, ?, ?, ?, ?)`);

  deduped.forEach(term => {
    stmt.run(term.english, term.arabic, term.icon, term.definition_en, term.definition_ar);
  });

  stmt.finalize((err) => {
    if (err) {
      console.error('Error seeding database:', err);
    } else {
      // Remove existing duplicates (case-insensitive) if any already in DB
      db.run(`DELETE FROM terms
              WHERE id NOT IN (
                SELECT MIN(id)
                FROM terms
                GROUP BY LOWER(TRIM(english))
              )`, function(cleanErr) {
        if (cleanErr) {
          console.error('Error cleaning duplicates:', cleanErr);
        } else {
          console.log(`Seeded ${deduped.length} unique terms. Cleaned ${this.changes || 0} duplicate rows.`);
        }
      });
    }
  });
}

if (require.main === module) {
  const sqlite3 = require('sqlite3').verbose();
  const DB_PATH = './data.db';
  const db = new sqlite3.Database(DB_PATH);
  seedDatabase(db);
  db.close();
}

module.exports = { seedDatabase };
