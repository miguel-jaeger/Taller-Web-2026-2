# Proyecto final · Estudio Verde

Scaffold funcional para el proyecto final del Taller de Programación Web.
Está basado en los requisitos de la presentación **S17_s1 - Presentación del proyecto final**.
El archivo `17.docx` de la carpeta de prácticas estaba vacío, por eso esta rama contiene
una plantilla en lugar de 10 ejercicios.

## Estructura

```text
index.html              Página de inicio
servicios.html          Página de servicios y tabla comparativa
contacto.html           Página de contacto con formulario validado
css/estilos.css         Estilos, variables y diseño responsivo
js/script.js            Menú, tema, filtros, modal, validación y toasts
img/logo.svg            Logotipo de ejemplo
```

## Cómo ejecutar

Abre `index.html` en el navegador. También puedes servir la carpeta con:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Requisitos cubiertos

- [x] Tres páginas: Inicio, Servicios y Contacto.
- [x] Navegación funcional entre páginas.
- [x] Etiquetas semánticas: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- [x] Formulario con validación en el cliente.
- [x] Tabla comparativa de planes.
- [x] Contenido multimedia: galería de imágenes y video.
- [x] CSS responsivo con media queries, Flexbox y Grid.
- [x] Separación de estructura (`HTML`), estilos (`CSS`) y comportamiento (`JS`).
- [x] JavaScript: manipulación del DOM, eventos, filtros, modal y tema oscuro.
- [x] Al menos tres funcionalidades dinámicas:
  1. Menú responsivo.
  2. Modo oscuro persistente.
  3. Galería con filtros.
  4. Ventana modal accesible.
  5. Validación de formulario y notificaciones.
- [x] Organización en carpetas `css/`, `js/` e `img/`.

## Personalización sugerida

1. Cambia el nombre, el logotipo y los colores en `:root` de `css/estilos.css`.
2. Reemplaza las imágenes de `picsum.photos` por imágenes propias en `img/`.
3. Adapta los textos de Inicio, Servicios y Contacto al tema del grupo.
4. Agrega al menos una funcionalidad dinámica adicional (por ejemplo, carrusel o lista de tareas).
5. Revisa accesibilidad: textos `alt`, etiquetas `label`, foco visible y contraste.

## Entregables de la semana 17

- Documento PDF con carátula, tabla de contenido, capítulos y anexos.
- ZIP/RAR con el código fuente completo.
- Exposición en vivo de 5 a 7 minutos.

Revisa la rúbrica de la presentación S17 antes de entregar.
