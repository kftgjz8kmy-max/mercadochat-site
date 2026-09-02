export type UseCaseResultType = "listing" | "photo-identification" | "technical" | "price-range" | "discount" | "promotion" | "eligibility" | "excel" | "bulk-update" | "sale" | "ranking" | "restock" | "stagnant" | "performance" | "dashboard";

export type UseCaseCard = { id: string; category: string; prompt: string; resultType: UseCaseResultType; resultTitle: string; resultDescription?: string };

export const landing = {
  hero: {
    eyebrow: "Asistente de IA para Mercado Libre",
    description:
      "Empieza a vender, mejora tus publicaciones y entiende tus ganancias con un asistente que trabaja por ti.",
  },
  useCases: [
    { id: "create-listing", category: "Crea una publicación", prompt: "Quiero vender este celular. Está nuevo, tiene 256 GB y tengo tres unidades.", resultType: "listing", resultTitle: "Publicación lista para revisar" },
    { id: "publish-from-photo", category: "Publica desde una foto", prompt: "Usa estas fotos, identifica el producto y pregúntame solo lo que falte.", resultType: "photo-identification", resultTitle: "Faltan solo 2 datos" },
    { id: "technical-details", category: "Completa datos técnicos", prompt: "Completa los atributos faltantes y verifica que los datos sean correctos.", resultType: "technical", resultTitle: "12 atributos verificados", resultDescription: "3 atributos completados" },
    { id: "compare-prices", category: "Compara tus precios", prompt: "Compara mi precio con publicaciones similares y dime si debo ajustarlo.", resultType: "price-range", resultTitle: "4% sobre el rango", resultDescription: "Precio actual: S/ 1,399" },
    { id: "calculate-discount", category: "Calcula tu descuento", prompt: "Con mis costos y comisiones, dime hasta cuánto puedo descontar sin perder dinero.", resultType: "discount", resultTitle: "Mantienes margen positivo", resultDescription: "Descuento máximo: 11%" },
    { id: "create-promotion", category: "Crea una promoción", prompt: "Crea una promoción de 10% para estos productos durante siete días.", resultType: "promotion", resultTitle: "Promoción lista para confirmar", resultDescription: "Oferta de la semana" },
    { id: "add-to-promotion", category: "Agrega a promoción", prompt: "Agrega estos productos a la promoción Ofertas de la Semana.", resultType: "eligibility", resultTitle: "Productos preparados", resultDescription: "5 de 6 agregados" },
    { id: "profit-excel", category: "Calcula tus ganancias", prompt: "Te doy mis costos. Crea un Excel con la ganancia neta después de comisiones y envíos.", resultType: "excel", resultTitle: "Ganancia neta calculada", resultDescription: "126 publicaciones analizadas" },
    { id: "bulk-catalog", category: "Actualiza tu catálogo", prompt: "Usa este Excel para actualizar los precios y el stock de mis publicaciones.", resultType: "bulk-update", resultTitle: "Cambios listos para aprobar", resultDescription: "84 productos revisados" },
    { id: "last-sale", category: "Consulta tu última venta", prompt: "Muéstrame mi última venta con producto, comprador, pago, envío y estado.", resultType: "sale", resultTitle: "S/ 1,249", resultDescription: "Hace 12 minutos" },
    { id: "compare-products", category: "Compara tus productos", prompt: "Dame los tres productos más vendidos y los tres menos vendidos del trimestre.", resultType: "ranking", resultTitle: "Más y menos vendidos" },
    { id: "restock", category: "Planifica tu reposición", prompt: "Analiza mis ventas y dime qué productos debo reponer y cuántas unidades comprar.", resultType: "restock", resultTitle: "Basado en rotación y stock" },
    { id: "stagnant-products", category: "Detecta productos detenidos", prompt: "Muéstrame las publicaciones que no tuvieron ventas en los últimos 60 días.", resultType: "stagnant", resultTitle: "Requieren atención", resultDescription: "9 publicaciones sin ventas" },
    { id: "improve-listings", category: "Mejora publicaciones", prompt: "Encuentra publicaciones con visitas pero pocas ventas y dime qué debería mejorar.", resultType: "performance", resultTitle: "Conversión: 0.24%", resultDescription: "1,240 visitas · 3 ventas" },
    { id: "quarterly-diagnosis", category: "Diagnostica tu trimestre", prompt: "Analiza este trimestre, compáralo con el anterior y muéstrame un diagnóstico con gráficas.", resultType: "dashboard", resultTitle: "Rendimiento en crecimiento", resultDescription: "S/ 184,500 · +14%" },
  ] satisfies UseCaseCard[],
  photoExamples: [
    { eyebrow: "Vendedor en acción", image: "/images/lifestyle/seller-workspace.png", alt: "Vendedora trabajando en su tienda online desde una laptop", note: "Decisiones más claras para tu operación." },
    { eyebrow: "Equipo conectado", image: "/images/lifestyle/agency-team.png", alt: "Equipo de ecommerce revisando ventas y pedidos", note: "Una vista clara para cada cliente." },
    { eyebrow: "Publica con menos pasos", image: "/images/lifestyle/publish-from-photo.png", alt: "Vendedora fotografiando un smartphone para publicarlo en su tienda online", note: "De una foto a una publicación lista para revisar." },
    { eyebrow: "Tu catálogo bajo control", image: "/images/lifestyle/catalog-control.png", alt: "Operador de ecommerce revisando inventario y catálogo desde una laptop", note: "Precios, stock y promociones al día." },
    { eyebrow: "Convierte datos en acción", image: "/images/lifestyle/sales-analysis.png", alt: "Equipo de ecommerce analizando el rendimiento de sus ventas", note: "Detecta oportunidades para crecer con claridad." },
  ],
  features: [
    ["/images/feature-icons/publishing-v3-transparent.png", "Publica en minutos", ["Crea una publicación conversando", "Publica desde una foto", "Completa y verifica datos técnicos"]],
    ["/images/feature-icons/market-research.png", "Mejora tus precios", ["Compara tus precios", "Calcula descuentos", "Crea promociones", "Agrega productos a promociones"]],
    ["/images/feature-icons/order-management.png", "Controla tu operación", ["Calcula ganancias en Excel", "Actualiza precios y stock", "Consulta tus últimas ventas", "Identifica los más y menos vendidos"]],
    ["/images/feature-icons/sales-insights.png", "Analiza tus ventas", ["Encuentra productos que no se venden", "Optimiza publicaciones", "Genera un diagnóstico trimestral"]],
  ],
  steps: [
    ["1", "Crea tu cuenta", "Regístrate y prepara tu espacio de trabajo."],
    ["2", "Conecta Mercado Libre", "Autoriza el acceso para consultar tus productos, publicaciones y ventas."],
    ["3", "Instala tu asistente merchat", "Conéctalo con ChatGPT, Claude u otra herramienta compatible."],
    ["4", "Gestiona tu negocio", "Pregunta, publica y gestiona tu operación desde una conversación."],
  ],
  plans: [
    { name: "Vendedor", audience: "Para quienes quieren entender mejor su operación.", originalPrice: "58", price: "29", prefix: "", setup: "", featured: false, cta: "Gratis por 14 días", items: ["Conecta una cuenta de Mercado Libre", "Consulta ventas, pedidos y entregas", "Revisa publicaciones, precios y stock", "Analiza rendimiento y oportunidades", "Consulta promociones y campañas", "Consultas mensuales incluidas", "Analizar tu cuenta sin realizar cambios"] },
    { name: "Vendedor Pro", audience: "Tu asistente para operar Mercado Libre.", originalPrice: "198", price: "99", prefix: "", setup: "", featured: true, cta: "Gratis por 14 días", items: ["Todo lo incluido en Vendedor", "Conecta una cuenta de Mercado Libre", "Crea y actualiza publicaciones", "Cambia precios y stock", "Pausa y reactiva publicaciones", "Gestiona promociones y descuentos", "Analiza ventas y rendimiento", "Revisa oportunidades en Product Ads", "Confirma antes de ejecutar cambios"] },
    { name: "Vendedor Ultra", audience: "Para agencias y equipos que operan varias cuentas.", originalPrice: "398", price: "199", prefix: "", setup: "", featured: false, cta: "Comenzar con Ultra", items: ["Todo lo incluido en Vendedor Pro", "Conecta hasta 3 cuentas de Mercado Libre", "Consulta y opera cada cuenta por separado", "Gestiona publicaciones, precios y promociones", "Analiza el rendimiento de cada negocio", "Uso intensivo de merchat", "Soporte prioritario", "Agrega cuentas adicionales por S/50 / mes"] },
  ],
  trust: ["Conectas Mercado Libre mediante autorización oficial.", "Cada usuario solo accede a sus propias cuentas.", "Tus datos permanecen separados por cliente.", "Te pedimos confirmación antes de acciones importantes."],
  faqs: [
    ["¿Qué incluye la prueba gratis?", "Incluye todo lo que viene en el plan Vendedor Pro con una cuenta de Mercado Libre."],
    ["¿Cuándo comienza mi prueba?", "Desde la creación de la cuenta."],
    ["¿Qué pasa cuando terminan los 14 días?", "Debes elegir un plan para seguir usando merchat."],
    ["¿Necesito tarjeta para comenzar?", "No necesitas tarjeta para comenzar."],
    ["¿Necesito conocimientos técnicos?", "No. Solo necesitas crear tu cuenta en merchat y hacer preguntas desde ChatGPT, Claude u otra herramienta compatible."],
    ["¿El sistema puede publicar productos?", "Sí. Puede preparar la publicación y te pedirá confirmación antes de publicarla."],
    ["¿Puede modificar información sin mi permiso?", "No de forma automática: te pedirá confirmación antes de publicar o cambiar información."],
    ["¿Puedo conectar varias cuentas?", "Sí. El plan Agencia permite gestionar hasta tres cuentas y añadir más cuando lo necesites."],
    ["¿Cómo comienzo?", "Haz clic en «Comienza Gratis» y sigue los pasos para conectar Mercado Libre y tu asistente de IA."],
  ],
} as const;
