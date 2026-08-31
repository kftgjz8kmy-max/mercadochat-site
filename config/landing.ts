export type UseCaseResultType = "listing" | "photo-identification" | "technical" | "price-range" | "discount" | "promotion" | "eligibility" | "excel" | "bulk-update" | "sale" | "ranking" | "restock" | "stagnant" | "performance" | "dashboard";

export type UseCaseCard = { id: string; category: string; prompt: string; resultType: UseCaseResultType; resultTitle: string; resultDescription?: string };

export const landing = {
  hero: {
    eyebrow: "Asistente IA para Mercado Libre",
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
    ["/images/feature-icons/market-research.png", "Aumenta tu margen", ["Compara tus precios", "Calcula descuentos", "Crea promociones", "Agrega productos a promociones"]],
    ["/images/feature-icons/order-management.png", "Ten todo bajo control", ["Calcula ganancias en Excel", "Actualiza precios y stock", "Consulta tu última venta", "Identifica los más y menos vendidos"]],
    ["/images/feature-icons/sales-insights.png", "Haz crecer tus ventas", ["Encuentra productos que no se venden", "Optimiza publicaciones", "Genera un diagnóstico trimestral"]],
  ],
  steps: [
    ["1", "Crea tu cuenta", "Regístrate en segundos y prepara tu espacio de trabajo."],
    ["2", "Conecta Mercado Libre", "Autoriza tu cuenta y sincroniza tus datos de forma segura."],
    ["3", "Elige dónde conversar", "Conecta merchat con ChatGPT, Claude u otra herramienta compatible."],
    ["4", "Gestiona tu negocio", "Habla, pregunta y recibe ayuda para tomar mejores decisiones."],
  ],
  plans: [
    { name: "Vendedor", audience: "Para vendedores con una operación constante.", price: "149", prefix: "", setup: "Implementación única: S/249", featured: false, cta: "Solicitar demo", items: ["1 cuenta de Mercado Libre", "Consultas de ventas y órdenes", "Información de productos y precios", "Consulta de publicaciones propias", "Investigación básica de productos", "Creación asistida de publicaciones", "Soporte estándar"] },
    { name: "Vendedor Pro", audience: "Para vendedores fuertes y tiendas con mayor volumen.", price: "299", prefix: "", setup: "Implementación única: S/499", featured: true, cta: "Elegir Vendedor Pro", items: ["Todo lo del plan Vendedor", "Mayor volumen de consultas", "Investigación frecuente de productos", "Comparación de publicaciones", "Uso recurrente para crear publicaciones", "Configuración personalizada para tu tienda", "Capacitación inicial", "Soporte prioritario", "Revisión mensual de funcionamiento"] },
    { name: "Agencia", audience: "Para agencias y operadores que administran varias cuentas.", price: "749", prefix: "Desde ", setup: "Implementación desde: S/1,200", featured: false, cta: "Hablar sobre mi agencia", items: ["Hasta 3 cuentas de Mercado Libre", "Separación de información por cliente", "Consultas y acciones por cliente", "Configuración independiente por cuenta", "Capacitación para el equipo", "Incorporación asistida de cuentas", "Cuenta adicional: S/150/mes", "Soporte prioritario"] },
  ],
  trust: ["Conexión oficial mediante autorización de Mercado Libre.", "Cada usuario solo accede a sus propias cuentas.", "Separación de datos entre clientes.", "Confirmación antes de acciones importantes."],
  faqs: [
    ["¿Necesito conocimientos técnicos?", "No. Puedes hacer preguntas como lo harías a una persona de tu equipo."],
    ["¿El sistema puede publicar productos?", "Puede preparar publicaciones y siempre te pide confirmación antes de realizar cambios."],
    ["¿Puede modificar información sin mi permiso?", "No. Las acciones relevantes requieren una confirmación previa."],
    ["¿Puedo conectar varias cuentas?", "Sí. El plan Agencia permite gestionar hasta tres cuentas y añadir más cuando lo necesites."],
    ["¿Cómo comienzo?", "Solicita una demostración y revisaremos tu operación para recomendarte el mejor punto de partida."],
  ],
} as const;
