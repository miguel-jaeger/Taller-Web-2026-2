# Desplegar Pollería Romerito en Vercel

La página está en la rama `Integrador`. La rama `main` solo contiene el README, así que selecciona `Integrador` al desplegar.

Repositorio actual: <https://github.com/miguel-jaeger/Taller-Web-2026-2>

## Opción 1: desplegar el repositorio actual

No hace falta crear un clon para desplegarlo.

1. Entra a [Vercel](https://vercel.com/) e inicia sesión con GitHub.
2. Selecciona **Add New → Project**.
3. Importa `miguel-jaeger/Taller-Web-2026-2`.
4. Usa **Framework Preset: Other**. El proyecto es HTML, CSS e imágenes estáticas; no requiere comando de build.
5. Deja **Root Directory** en `./`. Si Vercel pide **Output Directory**, usa `.` porque `index.html` está en la raíz.
6. Pulsa **Deploy** y luego sigue la sección **Desplegar `Integrador` como producción**.

Cuando `Integrador` quede configurada en Production, los siguientes `push` a esa rama actualizarán el sitio.

## Desplegar `Integrador` como producción

El entorno **Production** ya viene creado en Vercel. No necesitas crear otro entorno para cambiar la rama de producción.

1. Abre el proyecto y entra a **Deployments → Create Deployment**.
2. En **Git Reference**, escribe `Integrador` y crea el despliegue. Esto genera el primer deployment de esa rama.
3. Cuando termine, entra a **Settings → Environments → Production**.
4. Abre **Branch Tracking**, selecciona `Integrador` y pulsa **Save**.
5. Los siguientes commits que subas a `Integrador` generarán despliegues de producción.

Si aparece **No deployments found for “Integrador”**, crea primero el deployment del paso 2 y vuelve a **Branch Tracking**. Si la rama no aparece como Git Reference, comprueba que Vercel tenga conectado el repositorio correcto y que la rama esté subida a GitHub:

```bash
git push -u origin NOMBRE-DE-LA-RAMA
```

Las demás ramas conectadas generan despliegues **Preview**; solo `Integrador`, configurada en el entorno **Production**, actualizará el sitio público.

### Entorno separado para pruebas (opcional)

Si quieres un entorno como `staging` además de Production, entra a **Settings → Environments → Create Environment**, ponle un nombre y configura su **Branch Tracking**. Los entornos personalizados requieren un plan Pro o Enterprise; para publicar esta web no hacen falta.

## Opción 2: crear una copia nueva desde GitHub

Puedes importar el repositorio desde la interfaz web de GitHub, sin usar la terminal:

1. Abre [GitHub Import](https://github.com/new/import).
2. En **Your source repository URL**, pega:

   ```text
   https://github.com/miguel-jaeger/Taller-Web-2026-2.git
   ```

3. Elige tu usuario u organización como propietario y escribe un nombre para el repositorio nuevo, por ejemplo `Romerito-Vercel`.
4. Elige si el repositorio será público o privado y pulsa **Begin import**.
5. Cuando termine la importación, abre el repositorio nuevo en Vercel con **Add New → Project**.
6. Sigue la configuración estática de la opción 1 y después **Desplegar `Integrador` como producción**.

La importación copia el historial y las ramas del repositorio. Comprueba que `Integrador` aparezca en el repositorio nuevo antes de desplegar.

## Opción 3: crear una copia con Git

Primero crea un repositorio vacío en GitHub, sin README ni otros archivos iniciales. Luego ejecuta estos comandos en una terminal:

```bash
git clone --branch Integrador --single-branch https://github.com/miguel-jaeger/Taller-Web-2026-2.git Romerito-Vercel
cd Romerito-Vercel
git remote set-url origin https://github.com/TU-USUARIO/TU-REPOSITORIO-NUEVO.git
git push -u origin Integrador
```

Reemplaza `TU-USUARIO` y `TU-REPOSITORIO-NUEVO` por los datos de tu repositorio. Después, impórtalo en Vercel y selecciona `Integrador` como rama de producción.

## Si Vercel muestra una página vacía o el README

- Confirma que la rama de producción sea `Integrador`, no `main`.
- Confirma que `index.html` esté en la raíz del proyecto y que el **Root Directory** sea `./`.
- Comprueba que `css/style.css` e `img/` estén incluidos en el repositorio.
