import React, { useEffect } from 'react';
import './PerfilLipidico.css';
import { Link } from 'react-router-dom';


function PerfilLipidico() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="fxh-detail239">

            <p className="fxh-title">Perfil Lipídico</p>

            <p className="fxh-subtitle">📌 Introducción</p>
            <p className="fxh-text">
                El <strong>Perfil Lipídico</strong> es un conjunto de pruebas sanguíneas que miden los niveles de grasas (lípidos) en la sangre.
                Es fundamental para evaluar el riesgo cardiovascular y diagnosticar alteraciones como hipercolesterolemia o  <Link to="/ecnt/dislipidemia"> Dislipidemias</Link>.
                Según la OMS, las enfermedades cardiovasculares causan el 32% de muertes globales, muchas prevenibles con un control lipídico adecuado.
            </p>

            <p className="fxh-subsubtitle">📜 Historia del Perfil Lipídico</p>
            <ul className="fxh-list">
                <li><strong> - Siglo XVIII:</strong> Primera identificación del colesterol por François Poulletier.</li>
                <li><strong> - 1913:</strong> Nikolai Anitschkov demuestra la relación entre colesterol y aterosclerosis en conejos.</li>
                <li><strong> - 1970s:</strong> Introducción del HDL como "colesterol bueno" (Premio Nobel a Brown y Goldstein, 1985).</li>
                <li><strong> - 2000s:</strong> Guías internacionales estandarizan valores (ATP III, ESC/EAS).</li>
            </ul>

            <p className="fxh-subsubtitle">🔍 ¿Qué Mide un Perfil Lipídico Básico?</p>
            <div className="fxh-table-wrapper">
                <table className="fxh-table">
                    <thead>
                        <tr>
                            <th>Parámetro</th>
                            <th>Qué Es</th>
                            <th>Valores Normales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <Link to="/examenes2/colesteroltotal">Colesterol Total  </Link>  </td>   
                            <td>Suma de todos los tipos de colesterol</td>
                            <td>Menor a 200 mg/dL</td>
                        </tr>
                        <tr>
                            <td>  <Link to="/examenes2/ldl">   LDL </Link>  ("Colesterol malo")</td>
                            <td>Principal causante de placas arteriales</td>
                            <td>Menor a 100 mg/dL (óptimo)</td>
                        </tr>
                        <tr>
                            <td> <Link to="/examenes2/hdl">   HDL </Link> ("Colesterol bueno")</td>
                            <td>Remueve exceso de colesterol</td>
                            <td>H: ≥40 mg/dL | M: ≥50 mg/dL</td>
                        </tr>
                        <tr>
                            <td>  <Link to="/examenes2/trigliceridos">  Triglicéridos  </Link>  </td>   
                            <td>Grasas de reserva energética</td>
                            <td>Menor a 150 mg/dL</td>
                        </tr>
                        <tr>
                            <td>No-HDL</td>
                            <td><Link to="/examenes2/colesteroltotal">Colesterol Total  </Link> - <Link to="/examenes2/hdl">   HDL </Link> (riesgo residual)</td>
                            <td>Menor a 130 mg/dL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="fxh-subsubtitle">🏥 Usos Clínicos</p>
            <p className="fxh-text"><strong>1. Evaluación de Riesgo Cardiovascular</strong></p>
            <ul className="fxh-list">
                <li> - Calcula el score de riesgo (Framingham, ASCVD).</li>
                <li> - Detecta dislipidemias genéticas (ej.: hipercolesterolemia familiar).</li>
            </ul>

            <p className="fxh-text"><strong>2. Diagnóstico de:</strong></p>
            <ul className="fxh-list">
                <li> - <Link to="/ecnt/hipercolesterolemia">  Hipercolesterolemia  </Link>  (LDL elevado)</li>  
                <li> - <Link to="/ecnt/hipertrigliceridemia">  Hipertrigliceridemia  </Link>  (riesgo de pancreatitis si mayor a 500 mg/dL)</li>
                <li> - <Link to="/ecnt/sindromemetabolico">  Síndrome metabólico    </Link> (HDL bajo + triglicéridos altos)</li>
            </ul>

            <p className="fxh-text"><strong>3. Monitoreo de Tratamientos</strong></p>
            <ul className="fxh-list">
                <li>Eficacia de estatinas u otros hipolipemiantes</li>
                <li>Cambios por dieta/ejercicio</li>
            </ul>

            <p className="fxh-subtitle">📊 Interpretación de Resultados</p>
            <div className="fxh-table-wrapper">
                <table className="fxh-table">
                    <thead>
                        <tr>
                            <th>Valor Alterado</th>
                            <th>Posibles Causas</th>
                            <th>Riesgos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>LDL ↑</td>
                            <td>Dieta rica en grasas saturadas, hipotiroidismo</td>
                            <td>Aterosclerosis, infarto</td>
                        </tr>
                        <tr>
                            <td>HDL ↓</td>
                            <td>Tabaquismo, sedentarismo, obesidad</td>
                            <td>Enfermedad vascular</td>
                        </tr>
                        <tr>
                            <td>Triglicéridos ↑↑</td>
                            <td>Diabetes no controlada, alcoholismo</td>
                            <td>Pancreatitis aguda</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="fxh-subsubtitle">💡 Recomendaciones para Mejorar Niveles</p>
            <p className="fxh-text"><strong>Dieta:</strong></p>
            <ul className="fxh-list">
                <li>✅ Aumentar fibra (avena, legumbres)</li>
                <li>✅ Grasas saludables (aguacate, pescado azul)</li>
                <li>❌ Evitar grasas trans (comida procesada)</li>
            </ul>
            <p className="fxh-text"><strong>Ejercicio:</strong> 150 min/semana de actividad aeróbica</p>
            <p className="fxh-text"><strong>Control de peso:</strong> IMC menor a 25</p>

            <p className="fxh-subtitle">📌 Conclusión</p>
            <p className="fxh-text">
                El <strong>Perfil Lipídico</strong> es una herramienta clave en medicina preventiva, capaz de identificar riesgos cardiovasculares años antes de que aparezcan síntomas.
                Su interpretación debe ser individualizada considerando edad, sexo y comorbilidades. Combinado con estilo de vida saludable y tratamientos cuando sea necesario, puede reducir hasta un 30% los eventos cardiovasculares.
            </p>

        </div>
    );
}

export default PerfilLipidico;