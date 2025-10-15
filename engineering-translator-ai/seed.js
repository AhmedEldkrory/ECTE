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
  }
];



function seedDatabase(db) {
  const stmt = db.prepare(`INSERT OR IGNORE INTO terms (english, arabic, icon, definition_en, definition_ar)
                           VALUES (?, ?, ?, ?, ?)`);

  seedData.forEach(term => {
    stmt.run(term.english, term.arabic, term.icon, term.definition_en, term.definition_ar);
  });

  stmt.finalize((err) => {
    if (err) {
      console.error('Error seeding database:', err);
    } else {
      console.log(`Seeded ${seedData.length} engineering terms into the database. Duplicates were ignored.`);
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
