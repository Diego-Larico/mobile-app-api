export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json([ 
    {
 id: "A101", 
nombre: "Bolsa de Hombro Trenzada", 
precio_soles: 85.00,
 categoria: "Bolsas", 
descripcion: "Bolso compacto con cadena dorada.", 
colores: ["Negro", "Beige", "Rojo"], 
stock: true
},
    { 
id: "A102", 
nombre: "Sombrero Estilo Panamá", 
precio_soles: 45.00,
 categoria: "Sombrero",
 descripcion: "Ala ancha, cinta decorativa.", 
material: "Paja sintética", 
stock: true
    },
    {
 id: "A103", 
nombre: "Gorra Denim Casual",
 precio_soles: 30.00,
 categoria: "Gorra",
 descripcion: "Tela denim con ajuste trasero.",
 colores: ["Denim Claro", "Denim Oscuro"],
 stock: true
 },
    {
 id: "A104",
 nombre: "Set de Aretes Largos Dorados",
 precio_soles: 25.00, 
categoria: "Joyería", 
descripcion: "Diseño geométrico, estilo minimalista.", 
material: "Aleación",
 stock: true 
},
    { 
id: "A105", 
nombre: "Bufanda de Seda Estampada",
 precio_soles: 55.00, 
categoria: "Bufandas", 
descripcion: "Estampado abstracto, tejido suave.", 
colores: ["Multicolor"], 
stock: true 
},
    {
 id: "A106", 
nombre: "Cinturón de Cadena Gruesa", 
precio_soles: 40.00,
 categoria: "Cinturones", 
descripcion: "Cinturón metálico ajustable para vestidos o jeans.",
 material: "Metal",
 stock: true 
},
    {
 id: "A107", 
nombre: "Lentes de Sol Ojo de Gato",
 precio_soles: 65.00, 
categoria: "Lentes",
 descripcion: "Montura acrílica, protección UV400.",
 colores: ["Negro", "Tortuga"],
 stock: true
 },
    {
 id: "A108",
 nombre: "Billetera Plegable Ecocuero",
 precio_soles: 35.00, 
categoria: "Bolsas", 
descripcion: "Diseño delgado con múltiples compartimentos.", 
material: "Ecocuero",
 stock: true 
},
    {
 id: "A109", 
nombre: "Reloj Minimalista Cuadrado",
 precio_soles: 120.00, 
categoria: "Joyería",
 descripcion: "Correa de cuero fino, dial sin números.",
 material: "Acero/Cuero",
 stock: true
 },
    {
 id: "A110", 
nombre: "Guantes de Lana Tejida", 
precio_soles: 30.00, 
categoria: "Otros", 
descripcion: "Tejido grueso, ideales para invierno.", 
colores: ["Gris", "Vino"], 
stock: true
 },
    {
 id: "A111", 
nombre: "Bolsa Tote de Lona Grande", 
precio_soles: 50.00, 
categoria: "Bolsas", 
descripcion: "Ideal para compras o playa, resistente.", 
material: "Lona",
 stock: true 
},
    { 
id: "A112", 
nombre: "Set de Anillos Finos (5 uds)", 
precio_soles: 18.00,
 categoria: "Joyería", 
descripcion: "Anillos apilables en tono plata.", 
material: "Acero", 
stock: true
 },
    { 
id: "A113",
 nombre: "Vincha Trenzada de Terciopelo",
 precio_soles: 22.00,
 categoria: "Cabello",
 descripcion: "Diseño de diadema ancha, tacto suave.",
 colores: ["Burdeo", "Verde Oscuro"], 
stock: true
 },
    {
 id: "A114",
 nombre: "Mochila Pequeña de Nylon", 
precio_soles: 95.00,
 categoria: "Bolsas",
 descripcion: "Ideal para uso diario, estilo urbano.", 
material: "Nylon", 
stock: true 
},
    {
 id: "A115", 
nombre: "Collar Dije de Luna", 
precio_soles: 35.00,
 categoria: "Joyería",
 descripcion: "Cadena delgada con dije de luna en resina.", 
material: "Metal/Resina", 
stock: true

}
  ]);
}
