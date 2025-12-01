export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json([
    {
 id: "CG01", 
nombre: "Vestido Midi de Lino",
 precio_soles: 145.00, 
descripcion: "Vestido de corte midi, tela de lino fresca.",
 categoria: "Vestidos", 
tallas_disponibles: ["S", "M", "L"], 
colores: ["Blanco Roto", "Verde Oliva"]
 },
    {
 id: "CG02", 
nombre: "Pantalón Wide Leg Sastre", 
precio_soles: 95.00, 
descripcion: "Pierna ancha, tiro alto, estilo sastre.", 
categoria: "Pantalones",
 tallas_disponibles: ["28", "30", "32", "34"], 
colores: ["Negro", "Beige", "Chocolate"]
 },
    {
 id: "CG03", 
nombre: "Blusa con Nudo Frontal",
 precio_soles: 55.00, 
descripcion: "Blusa corta, detalle de nudo y mangas abullonadas.", 
categoria: "Blusas",
 tallas_disponibles: ["S", "M"], 
colores: ["Amarillo Pastel", "Lila", "Blanco"]
},
    {
 id: "CG04",
 nombre: "Chaqueta Biker de Cuero Sintético",
 precio_soles: 160.00, 
descripcion: "Chaqueta estilo biker con detalles metálicos.", 
categoria: "Chaquetas", 
tallas_disponibles: ["XS", "S", "M", "L"],
 colores: ["Negro"]
},
    {
 id: "CG05", 
nombre: "Falda Plisada Larga",
 precio_soles: 85.00,
 descripcion: "Falda plisada de cintura alta, largo hasta el tobillo.", 
categoria: "Faldas",
 tallas_disponibles: ["Única"],
 colores: ["Gris Perla", "Azul Marino"]
},
    {
 id: "CG06", 
nombre: "Jeans Skinny Tiro Alto", 
precio_soles: 79.00, 
descripcion: "Calce ajustado, denim con elastano.", 
categoria: "Pantalones", 
tallas_disponibles: ["26", "28", "30", "32"], 
colores: ["Azul Clásico", "Negro Lavado"]
},
    { 
id: "CG07", 
nombre: "Top de Punto Acanalado", 
precio_soles: 35.00, 
descripcion: "Top de tirantes en tejido de punto acanalado (rib).", 
categoria: "Tops",
 tallas_disponibles: ["Única"],
 colores: ["Blanco", "Marrón", "Terracota"]
},
    { 
id: "CG08", 
nombre: "Cárdigan Largo Tejido",
 precio_soles: 110.00, 
descripcion: "Cárdigan de lana sintética con caída larga, abrigador.",
 categoria: "Abrigos", 
tallas_disponibles: ["S", "M", "L"], 
colores: ["Beige", "Gris Oscuro"]
 },
    {
 id: "CG09", 
nombre: "Short de Ecocuero", 
precio_soles: 65.00, 
descripcion: "Short de tiro alto en ecocuero, con bolsillos laterales.",
 categoria: "Shorts", 
tallas_disponibles: ["XS", "S", "M"],
 colores: ["Negro"] 
 },
    {
 id: "CG10", 
nombre: "Polera Oversize con Gráfico",
 precio_soles: 88.00, 
descripcion: "Polera de corte oversize, estampado gráfico en espalda.", 
categoria: "Poleras", 
tallas_disponibles: ["M", "L", "XL"], 
colores: ["Blanco"] 
 },
    {
 id: "CG11", 
nombre: "Blazer de Lino Estampado", 
precio_soles: 125.00, 
descripcion: "Blazer ligero de lino con estampado de rayas. Sin forro.", 
categoria: "Blazers",
 tallas_disponibles: ["S", "M"], 
colores: ["Rayas Azules"]
 },
    { 
id: "CG12",
 nombre: "Falda Mini de Tweed", 
precio_soles: 75.00, 
descripcion: "Falda mini confeccionada en tela de tweed, estilo clásico.", 
categoria: "Faldas",
 tallas_disponibles: ["S", "M"],
 colores: ["Blanco y Negro"] 
},
    {
 id: "CG13", 
nombre: "Jumpsuit Palazzo",
 precio_soles: 180.00, 
descripcion: "Enterizo de pierna palazzo, escote en V y cinturón.", 
categoria: "Enterizos",
 tallas_disponibles: ["S", "M"], 
colores: ["Rojo Intenso", "Azul Rey"]
},
    {
 id: "CG14", 
nombre: "Camisa Oxford Clásica", 
precio_soles: 60.00, 
descripcion: "Camisa de corte recto en tela Oxford, básico versátil.", 
categoria: "Camisas",
 tallas_disponibles: ["S", "M", "L"], 
colores: ["Azul Claro", "Blanco"]
 },
    { 
id: "CG15", 
nombre: "Leggings Deportivos Compresión", 
precio_soles: 55.00,
 descripcion: "Leggings de compresión, tela de secado rápido.", 
categoria: "Ropa Deportiva",
 tallas_disponibles: ["XS", "S", "M", "L"], 
colores: ["Negro", "Gris Melange"] 
},
    {
 id: "CG16", 
nombre: "Pantalón Cargo Ajustable", 
precio_soles: 105.00,
 descripcion: "Pantalón estilo cargo con tobillos ajustables, utilitario.",
 categoria: "Pantalones",
 tallas_disponibles: ["28", "30", "32"], 
colores: ["Caqui", "Verde Militar"] 
 }
  ]);
}
