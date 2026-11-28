# 🏠 Real Estate Sales Analytics Dashboard

Proyecto end-to-end de **Data Analytics** enfocado en analizar el desempeño comercial de una empresa inmobiliaria, comprender el comportamiento de sus clientes y transformar los resultados en decisiones de negocio.

El proyecto cubre todo el flujo:

**Raw Data → ETL → Data Quality → Analysis → Dashboard → Data Storytelling → CI/CD → Deployment**

---

## 🔗 Proyecto

### 🌐 Live Demo
[View Interactive Dashboard](https://gerardo-soto.github.io/real-estate-sales-analytics-dashboard/)

### 💻 GitHub Repository
[View Source Code](https://github.com/Gerardo-Soto/real-estate-sales-analytics-dashboard)

---

## 🎯 1. Problema identificado

Una empresa inmobiliaria necesita entender mejor **qué factores están impulsando sus ingresos y cómo se comportan sus clientes después de realizar una primera compra**.

Los datos de clientes, propiedades y ventas contienen información valiosa, pero por sí solos no permiten responder fácilmente preguntas como:

- ¿Qué ciudades generan mayores ingresos?
- ¿Qué canales de venta tienen mejor desempeño?
- ¿Qué tipos de propiedad generan más ventas?
- ¿Qué perfiles de compradores tienen mayor presencia?
- ¿Qué segmentos presentan mayor probabilidad de recompra?
- ¿En qué momentos existe una mayor oportunidad de reactivar clientes?
- ¿Cómo transformar estos hallazgos en acciones comerciales?

El objetivo del proyecto fue convertir datos operativos en una solución que permitiera conectar:

> **Datos → Información → Insights → Decisiones**

---

## 🛠️ 2. Solución desarrollada

La solución fue construida en tres etapas principales:

### 🔄 ETL & Data Quality

Se realizó un proceso de extracción, transformación y limpieza utilizando **Python y Pandas**.

Entre las principales tareas se incluyeron:

- análisis inicial de calidad de datos;
- detección de valores nulos;
- validación de tipos de datos;
- búsqueda de duplicados;
- validación de identificadores;
- transformación de columnas;
- eliminación de información redundante;
- normalización de tablas;
- generación de datasets procesados para análisis.

El modelo final quedó estructurado principalmente en:

```text
Customers
    │
    │ customer_id
    ▼
Sales
    ▲
    │ property_id
    │
Properties
```

Esto permitió separar información de:

- clientes;
- propiedades;
- transacciones de venta.

---

### 📊 Interactive Dashboard

Se desarrolló un dashboard web utilizando **Next.js, React y TypeScript**.

El dashboard permite analizar los datos mediante filtros interactivos por:

- 📍 Ciudad
- 📅 Año
- 🏠 Tipo de propiedad

Los principales KPIs disponibles son:

- 💰 Revenue
- 🏘️ Total Sales
- 🎟️ Average Ticket
- 💵 Total Commission

También incluye análisis visual de:

- evolución mensual de ingresos;
- ingresos por ciudad;
- desempeño por canal de venta;
- ingresos por tipo de propiedad;
- perfil de compradores;
- comportamiento de recompra;
- análisis de cohortes.

El dashboard también cuenta con soporte bilingüe:

```text
🇪🇸 Español
🇺🇸 English
```

---

### 📖 Data Storytelling

Además del dashboard tradicional, se desarrolló una experiencia de **Data Storytelling** integrada dentro de la aplicación.

El objetivo es transformar las visualizaciones en una narrativa ejecutiva que responda progresivamente:

```text
¿Cómo está funcionando el negocio?
                ↓
¿Qué está generando los ingresos?
                ↓
¿Quiénes son los clientes?
                ↓
¿Cuándo vuelven a comprar?
                ↓
¿Qué acciones puede tomar la empresa?
```

La presentación incluye cinco secciones:

1. **Resumen Ejecutivo**
2. **Desempeño Comercial**
3. **Perfil del Comprador**
4. **Oleadas de Recompra**
5. **Conclusiones y Recomendaciones**

---

## 🧰 3. Herramientas utilizadas

### Data Analysis & ETL

| Tecnología | Uso |
|---|---|
| Python | Procesamiento y análisis |
| Pandas | Limpieza y transformación |
| NumPy | Operaciones numéricas |
| SciPy | Análisis estadístico |
| Matplotlib | Análisis exploratorio |
| Jupyter Notebook | ETL y análisis |

### Dashboard

| Tecnología | Uso |
|---|---|
| Next.js | Framework web |
| React | Componentes interactivos |
| TypeScript | Tipado y lógica |
| Tailwind CSS | Diseño y estilos |
| Recharts | Visualizaciones |
| Papa Parse | Lectura de CSV |

### Engineering & Deployment

| Tecnología | Uso |
|---|---|
| Git | Control de versiones |
| GitHub | Repositorio |
| GitHub Actions | CI/CD |
| GitHub Pages | Hosting |
| Next.js Static Export | Generación del sitio estático |

---

## 📈 4. Resultados

El análisis permitió identificar:

### 💰 Más de $6B en ingresos

El negocio generó aproximadamente:

```text
$6.01B Revenue
```

durante el periodo analizado.

### 🏘️ 8,500 ventas

Se analizaron:

```text
8,500 transactions
```

con un ticket promedio cercano a:

```text
$707K
```

---

### 🔁 77% de tasa de recompra

Uno de los principales hallazgos fue que aproximadamente:

```text
77.13%
```

de los clientes realizaron más de una compra.

Esto indica un nivel importante de recurrencia dentro del negocio.

---

### 👥 Diferencias entre segmentos

El análisis permitió identificar diferencias en el comportamiento de compra entre:

- Primera vez
- Inversionistas
- Alto patrimonio

Los compradores de **primera vez** presentaron una tasa de recompra especialmente alta.

---

### 🌊 La recompra ocurre en oleadas

El análisis de cohortes mostró que la recompra no ocurre de manera uniforme.

Existen determinadas ventanas después de la primera compra donde aumenta la probabilidad de que los clientes vuelvan a comprar.

Este comportamiento puede utilizarse para diseñar:

- campañas CRM;
- estrategias de reactivación;
- programas de fidelización;
- comunicaciones personalizadas.

---

## 💡 5. Valor para una empresa

La solución permite transformar información histórica de ventas en conocimiento accionable.

Una empresa podría utilizar este tipo de análisis para:

- identificar mercados con mayor impacto en ingresos;
- detectar los canales comerciales más efectivos;
- identificar tipos de propiedad con mayor desempeño;
- comprender los perfiles de sus compradores;
- detectar clientes con mayor potencial de recompra;
- diseñar campañas de fidelización;
- planear estrategias de reactivación;
- centralizar KPIs comerciales en un dashboard;
- apoyar decisiones comerciales mediante datos.

---

## 🧠 Principales aprendizajes

Este proyecto me permitió trabajar un problema de datos de principio a fin:

```text
Raw Data
   ↓
Data Cleaning
   ↓
ETL
   ↓
Data Quality
   ↓
Statistical Analysis
   ↓
Business Analysis
   ↓
Interactive Dashboard
   ↓
Data Storytelling
   ↓
GitHub Actions
   ↓
Deployment
```

El objetivo no fue únicamente construir visualizaciones, sino demostrar cómo convertir datos en una herramienta para apoyar la **toma de decisiones empresariales**.

---

## 🚀 Deployment

El proyecto utiliza **GitHub Actions** para automatizar el proceso de despliegue.

Cada actualización enviada a la rama principal ejecuta:

```text
Push to main
      ↓
Install dependencies
      ↓
Next.js Build
      ↓
Static Export
      ↓
GitHub Pages
      ↓
Production
```

Esto permite mantener automáticamente actualizada la versión publicada del dashboard.

---

## 👨‍💻 Author

**Gerardo Soto**

System Engineer | Data Analyst | AWS Cloud | DevOps

[GitHub](https://github.com/Gerardo-Soto)

---

## 📌 Project Summary

> This project demonstrates my ability to transform raw data into business insights through ETL, statistical analysis, interactive visualization and data storytelling, while also applying software engineering and CI/CD practices to deliver a production-ready analytics solution.
