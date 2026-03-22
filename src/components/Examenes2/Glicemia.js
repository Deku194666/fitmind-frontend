import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Glicemia.css';

function Glicemia() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="fxh-detail240">

            <p className="fxh-title">Glicemia</p>

            <p className="fxh-subtitle">📌 Introducción</p>
            <p className="fxh-text">
                El examen de <strong>Glicemia</strong> (o glucemia) es una prueba que mide los niveles de glucosa en sangre,
                siendo fundamental para diagnosticar y monitorizar la <Link to="/ecnt/diabetes">Diabetes Mellitus</Link> y otros trastornos metabólicos.
                Según la OMS, 422 millones de personas padecen diabetes en el mundo, haciendo de este examen una herramienta esencial en medicina preventiva y manejo crónico.
            </p>

            <p className="fxh-subsubtitle">📜 Historia del Examen de Glicemia</p>
            <ul className="fxh-list">
                <li><strong>Siglo I D.C.:</strong> Primeras descripciones de diabetes (Aretaeus de Capadocia).</li>
                <li><strong>1776:</strong> Matthew Dobson identifica glucosa en orina de pacientes diabéticos.</li>
                <li><strong>1848:</strong> Hermann von Fehling desarrolla método químico para medir glucosa.</li>
                <li><strong>1960s:</strong> Introducción de tiras reactivas para autocontrol.</li>
                <li><strong>1970s:</strong> Avances en glucómetros portátiles.</li>
                <li><strong>2000s:</strong> Monitores continuos de glucosa (MCG).</li>
            </ul>

            <p className="fxh-subsubtitle">🔍 Tipos de Exámenes de Glicemia</p>
            <div className="fxh-table-wrapper">
                <table className="fxh-table">
                    <thead>
                        <tr>
                            <th>Prueba</th>
                            <th>Descripción</th>
                            <th>Valores Normales</th>
                            <th>Valores Alterados</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Glicemia en ayunas</td>
                            <td>Mide glucosa tras 8h sin comer</td>
                            <td>70-99 mg/dL</td>
                            <td>≥126 mg/dL (diabetes)</td>
                        </tr>
                        <tr>
                            <td>Glicemia aleatoria</td>
                            <td>Mide glucosa en cualquier momento</td>
                            <td>Menor a 140 mg/dL</td>
                            <td>≥200 mg/dL + síntomas</td>
                        </tr>
                        <tr>
                            <td>HbA1c</td>
                            <td>Promedio de glucosa en 3 meses</td>
                            <td>Menor a 5.7%</td>
                            <td>≥6.5% (diabetes)</td>
                        </tr>
                        <tr>
                            <td>PTGO (Prueba de Tolerancia Oral a Glucosa)</td>
                            <td>Mide respuesta a 75g de glucosa</td>
                            <td>Menor a 140 mg/dL (2h post)</td>
                            <td>≥200 mg/dL (2h post)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="fxh-subsubtitle">🏥 Usos Clínicos</p>
            <p className="fxh-text"><strong>1. Diagnóstico de:</strong></p>
            <ul className="fxh-list">
                <li><Link to="/ecnt/diabetes">Diabetes Mellitus</Link> (tipo 1, tipo 2, gestacional)</li>
                <li>Prediabetes (glicemia alterada en ayunas o intolerancia a glucosa)</li>
                <li>Hipoglucemia (glucosa menor a 70 mg/dL)</li>
            </ul>

            <p className="fxh-text"><strong>2. Monitorización de:</strong></p>
            <ul className="fxh-list">
                <li>Pacientes diabéticos (autocontrol domiciliario)</li>
                <li>Eficacia de tratamiento (dieta, medicamentos, insulina)</li>
                <li>Complicaciones agudas (cetoacidosis diabética)</li>
            </ul>

            <p className="fxh-text"><strong>3. Detección en Poblaciones de Riesgo:</strong></p>
            <ul className="fxh-list">
                <li><Link to="/ecnt/obesidad">Obesidad</Link> o   <Link to="/ecnt/sindromemetabolico">  Síndrome Metabólico   </Link>  </li>
                <li>Antecedentes familiares de <Link to="/ecnt/diabetes">Diabetes Mellitus</Link></li>
                <li>Mujeres con diabetes gestacional previa</li>
            </ul>

            <p className="fxh-subtitle">📊 Interpretación de Resultados</p>
            <div className="fxh-table-wrapper">
                <table className="fxh-table">
                    <thead>
                        <tr>
                            <th>Condición</th>
                            <th>Glicemia en Ayunas</th>
                            <th>HbA1c</th>
                            <th>PTGO (2h)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Normal</td>
                            <td>70-99 mg/dL</td>
                            <td>Menor a 5.7%</td>
                            <td>Menor a 140 mg/dL</td>
                        </tr>
                        <tr>
                            <td>Prediabetes</td>
                            <td>100-125 mg/dL</td>
                            <td>5.7-6.4%</td>
                            <td>140-199 mg/dL</td>
                        </tr>
                        <tr>
                            <td>Diabetes</td>
                            <td>≥126 mg/dL</td>
                            <td>≥6.5%</td>
                            <td>≥200 mg/dL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="fxh-subsubtitle">💡 Recomendaciones para Controlar la Glicemia</p>
            <p className="fxh-text"><strong>Dieta:</strong></p>
            <ul className="fxh-list">
                <li>✅ Alimentos con bajo índice glucémico (verduras, legumbres)</li>
                <li>❌ Evitar azúcares refinados y carbohidratos simples</li>
            </ul>
            <p className="fxh-text"><strong>Ejercicio:</strong> 150 min/semana de actividad aeróbica</p>
            <p className="fxh-text"><strong>Peso saludable:</strong> Reducción del 5-10% del peso mejora resistencia a insulina</p>

            <p className="fxh-subtitle">📌 Conclusión</p>
            <p className="fxh-text">
                El examen de <strong>Glicemia</strong> es la piedra angular en el diagnóstico y manejo de la <Link to="/ecnt/diabetes">Diabetes Mellitus</Link>,
                una enfermedad con altísimo impacto en salud global. Su correcta interpretación, junto con modificaciones en estilo de vida, puede prevenir complicaciones como ceguera, nefropatía o amputaciones.
                Tecnologías emergentes como los monitores continuos de glucosa están revolucionando su manejo.
            </p>

        </div>
    );
}

export default Glicemia;