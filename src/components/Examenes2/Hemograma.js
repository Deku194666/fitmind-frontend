import React, { useEffect } from 'react';
import './Hemograma.css';
import { Link } from 'react-router-dom';


function Hemograma() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="fxh-detail238">

            <p className="fxh-title">Hemograma</p>

            <p className="fxh-subtitle">📌 Introducción</p>
            <p className="fxh-text">
                El <strong>Hemograma</strong> es uno de los exámenes de laboratorio más solicitados en medicina.
                Evalúa los componentes celulares de la sangre, proporcionando información clave sobre el estado
                de salud general y ayudando a diagnosticar anemias, infecciones y trastornos hematológicos.
            </p>

            <p className="fxh-subsubtitle">📜 Historia del Hemograma</p>
            <ul className="fxh-list">
                <li><strong>1658:</strong> Primera observación de glóbulos rojos por Jan Swammerdam.</li>
                <li><strong>1852:</strong> Karl Vierordt desarrolla el primer método para contar células sanguíneas.</li>
                <li><strong>1877:</strong> Paul Ehrlich introduce tinciones para diferenciar células sanguíneas.</li>
                <li><strong>1953:</strong> Wallace Coulter inventa el contador automático de células.</li>
                <li><strong>1970s:</strong> Se automatiza completamente el análisis.</li>
                <li><strong>2000s:</strong> Analizadores hematológicos de 5 y 6 parámetros.</li>
            </ul>

            <p className="fxh-subsubtitle">🔍 Componentes del Hemograma</p>
            <p className="fxh-text"><strong>1. Serie Roja (Eritrocitos o Glóbulos Rojos)</strong></p>
            <div className="fxh-table-wrapper">
                <table className="fxh-table">
                    <thead>
                        <tr>
                            <th>Parámetro</th>
                            <th>Valores Normales</th>
                            <th>Significado Clínico</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <Link to="/examenes2/hemoglobina">  Hemoglobina  </Link></td> 
                            <td>H: 13-17 g/dL | M: 12-16 g/dL</td>
                            <td>Transporte de oxígeno</td>
                        </tr>
                        <tr>
                            <td> <Link to="/examenes2/hematocrito">Hematocrito  </Link> </td>  
                            <td>H: 40-52% | M: 36-48%</td>
                            <td>Porcentaje de glóbulos rojos</td>
                        </tr>
                        <tr>
                            <td>VCM</td>
                            <td>80-100 fL</td>
                            <td>Tamaño de los eritrocitos</td>
                        </tr>
                        <tr>
                            <td>HCM</td>
                            <td>27-33 pg</td>
                            <td>Cantidad de Hb por glóbulo</td>
                        </tr>
                        <tr>
                            <td>CHCM</td>
                            <td>32-36 g/dL</td>
                            <td>Concentración de Hb</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="fxh-text"><strong>2. Serie Blanca (Leucocitos)</strong></p>
            <div className="fxh-table-wrapper">
                <table className="fxh-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Valores Normales (x10³/μL)</th>
                            <th>Función</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Neutrófilos</td>
                            <td>1.8-7.5</td>
                            <td>Defensa contra bacterias</td>
                        </tr>
                        <tr>
                            <td>Linfocitos</td>
                            <td>1.0-4.8</td>
                            <td>Inmunidad específica</td>
                        </tr>
                        <tr>
                            <td>Monocitos</td>
                            <td>0.1-0.8</td>
                            <td>Fagocitosis</td>
                        </tr>
                        <tr>
                            <td>Eosinófilos</td>
                            <td>0.04-0.4</td>
                            <td>Alergias/parásitos</td>
                        </tr>
                        <tr>
                            <td>Basófilos</td>
                            <td>0.01-0.1</td>
                            <td>Inflamación</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="fxh-text"><strong>3. Plaquetas</strong></p>
            <div className="fxh-table-wrapper">
                <table className="fxh-table">
                    <thead>
                        <tr>
                            <th>Parámetro</th>
                            <th>Valores Normales</th>
                            <th>Importancia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Recuento</td>
                            <td>150-450 x10³/μL</td>
                            <td>Coagulación</td>
                        </tr>
                        <tr>
                            <td>Volumen Plaquetario Medio</td>
                            <td>7-11 fL</td>
                            <td>Tamaño plaquetario</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="fxh-subsubtitle">🏥 Usos Clínicos</p>
            <p className="fxh-text"><strong>1. Diagnóstico de:</strong></p>
            <ul className="fxh-list">
                <li>Anemias (ferropénica, megaloblástica)</li>
                <li>Infecciones (bacterianas, virales)</li>
                <li>Leucemias y trastornos mieloproliferativos</li>
                <li>Trastornos hemorrágicos/coagulación</li>
                <li>Enfermedades inflamatorias</li>
            </ul>

            <p className="fxh-text"><strong>2. Monitorización de:</strong></p>
            <ul className="fxh-list">
                <li>Quimioterapia/Radioterapia</li>
                <li>Tratamientos con inmunosupresores</li>
                <li>Evolución de infecciones</li>
                <li>Postoperatorio</li>
            </ul>

            <p className="fxh-text"><strong>3. Evaluación de síntomas como:</strong></p>
            <ul className="fxh-list">
                <li>Fatiga/palidez (anemia)</li>
                <li>Fiebre sin foco (infección)</li>
                <li>Sangrados anormales</li>
                <li>Adenopatías</li>
            </ul>

            <p className="fxh-subtitle">📊 Interpretación de Resultados</p>
            <p className="fxh-text"><strong>1. Anemia microcítica (VCM bajo)</strong></p>
            <ul className="fxh-list">
                <li>Ferropenia</li>
                <li>Talasemia</li>
            </ul>

            <p className="fxh-text"><strong>2. Leucocitosis con desviación izquierda</strong></p>
            <ul className="fxh-list">
                <li>Infección bacteriana aguda</li>
            </ul>

            <p className="fxh-text"><strong>3. Pancitopenia</strong></p>
            <ul className="fxh-list">
                <li>Aplasia medular</li>
                <li>Infiltración medular</li>
            </ul>

            <p className="fxh-text"><strong>4. Trombocitosis</strong></p>
            <ul className="fxh-list">
                <li>Procesos inflamatorios</li>
                <li>Hemorragia aguda</li>
            </ul>

            <p className="fxh-subsubtitle">💡 Recomendaciones</p>
            <ul className="fxh-list">
                <li><strong>Preparación:</strong> No requiere ayuno (a menos que se pida con otros exámenes)</li>
                <li><strong>Interpretación:</strong> Siempre correlacionar con clínica</li>
                <li><strong>Seguimiento:</strong> Repetir si hay alteraciones significativas</li>
            </ul>

            <p className="fxh-subtitle">📌 Conclusión</p>
            <p className="fxh-text">
                El <strong>Hemograma</strong> es una herramienta diagnóstica fundamental que proporciona información valiosa sobre el
                estado hematológico y general del paciente. Su correcta interpretación requiere considerar el contexto clínico y puede
                ser el primer paso para diagnosticar condiciones desde deficiencias nutricionales hasta enfermedades hematológicas complejas.
            </p>

        </div>
    );
}

export default Hemograma;