export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json([
    {
 id: "L501", 
nombre: "Set de Aretes Acero", 
precio_soles: 20.00, 
descripcion: "Set de 3 pares de acero inoxidable.", 
material: "Acero 316L", 
stock: true
 },
    {
 id: "L502", 
nombre: "Gorras con Logo Bordado", 
precio_soles: 30.00,
 descripcion: "Estilo 'dad hat' con logo de Blue Pecas bordado.", 
colores: ["Blanco", "Rosa Pastel"]
 },
    { 
id: "L503", 
nombre: "Straple de Rib Tejido",
 precio_soles: 37.00, 
descripcion: "Punto acanalado, muy elástico y cómodo.",
 tallas_disponibles: ["Única"], 
colores: ["Negro", "Verde Militar"]
 },
    {
 id: "L504",
 nombre: "Top de Gamuza",
 precio_soles: 35.00, 
descripcion: "Top corto de tirantes finos en textura de gamuza suave.",
 tallas_disponibles: ["S", "M"],
 colores: ["Marrón", "Beige"] 
},
    {
 id: "L505",
 nombre: "Vestido Slip Dress Satín", 
precio_soles: 110.00, 
descripcion: "Vestido lencero de satín con caída suave.", 
tallas_disponibles: ["S", "M", "L"],
 colores: ["Plata", "Negro"]
},
    { 
id: "L506",
 nombre: "Pantalón de Cuadros Tartán", 
precio_soles: 99.00, 
descripcion: "Corte recto, tela con estampado de cuadros tartán.",
 tallas_disponibles: ["28", "30", "32"],
 colores: ["Rojo/Negro"]
 },
    { 
id: "L507", 
nombre: "Chaqueta Bomber Acolchada", 
precio_soles: 150.00,
 descripcion: "Estilo bomber, acolchada y ligera.", 
tallas_disponibles: ["S", "M", "L"],
 colores: ["Verde Oscuro"]
 },
    {
 id: "L508",
 nombre: "Minifalda de Neopreno", 
precio_soles: 55.00, 
descripcion: "Falda con volumen en tela de neopreno.",
 tallas_disponibles: ["XS", "S", "M"], 
colores: ["Amarillo"]
 },
    {
 id: "L509", 
nombre: "Body Asimétrico",
 precio_soles: 70.00, 
descripcion: "Body de un solo hombro, tela de punto doble.",
 tallas_disponibles: ["S", "M"], 
colores: ["Blanco"]
},
    {
 id: "L510", 
nombre: "Malla Ciclismo Biker Shorts", 
precio_soles: 45.00, 
descripcion: "Shorts ajustados de ciclista, tiro alto.", 
tallas_disponibles: ["S", "M", "L"], 
colores: ["Negro", "Lila"]
 },
    { 
id: "L511",
 nombre: "Top con Plumas Decorativas", 
precio_soles: 80.00, 
descripcion: "Strapless con borde superior de plumas sintéticas.",
 tallas_disponibles: ["S", "M"]
 },
    { 
id: "L512", 
nombre: "Maxi Falda de Tul", 
precio_soles: 130.00, 
descripcion: "Falda larga de varias capas de tul, cintura elástica.",
 tallas_disponibles: ["Única"],
 colores: ["Negro"] 
},
    { 
id: "L513", 
nombre: "Blusa con Escote Corazón", 
precio_soles: 65.00, 
descripcion: "Blusa ajustada con escote en forma de corazón.", 
tallas_disponibles: ["S", "M", "L"], 
colores: ["Rojo"]
 },
    { 
id: "L514",
 nombre: "Vestido Tweed Mini", 
precio_soles: 140.00, 
descripcion: "Vestido corto de tweed con botones dorados, estilo Chanel.", 
tallas_disponibles: ["S", "M"], 
colores: ["Azul Marino/Blanco"]
 },
    {
 id: "L515", 
nombre: "Botas Cowboy de Ecocuero", 
precio_soles: 190.00, 
descripcion: "Botas de caña media con detalles bordados.",
 tallas_disponibles: ["36", "37", "38", "39"],
 colores: ["Blanco Roto"]
 }
  ]);
}
