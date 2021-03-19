import { useState } from 'react';
import styles from '../styles/components/Formacao.module.css'

const Formacao = () => {

    const [courses,setCourses] = useState(0);

    function nextCourse() {
        let count = courses;
        if(courses < 4){
            count++;
            setCourses(count);
        }else{
            setCourses(0);
        }
    }

    function previousCourse() {
        let count = courses;
        if(courses > 0){
            count--;
            setCourses(count);
        }else{
            setCourses(4);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.formationItem}>
                <div className={styles.formationItemContent}>
                    <h3>Bacharelado em Engenharia de Computação</h3>
                    <a href="https://portal.pcs.ifsuldeminas.edu.br/">IFSULDEMINAS – Campus Poços de Caldas</a>
                    <p>Cursando: 2018 até 2023 | 7º Período</p>
                    <p>Duração: 5 Anos</p>
                </div>
                <div className={styles.buttons}>
                    <button disabled>Anterior</button> 
                    <button disabled>Próximo</button> 
                </div>
            </div>
            <div className={styles.formationItem}>
                {(courses == 0) && (
                    <>
                        <div className={styles.formationItemContent}>
                            <h3>Curso em Desenvolvedor Web Completo</h3>
                            <h4>Udemy</h4>
                            <p>Finalizado: 2021 | Duração: 46,5 horas</p>
                        </div>
                    </>
                )}
                {(courses == 1) && (
                    <>
                        <div className={styles.formationItemContent}>
                            <h3>Montagem e manutenção de computadores</h3>
                            <h4>IFSULDEMINAS – Campus Poços de Caldas</h4>
                            <p>Finalizado: 2019 | Duração: 40 horas</p>
                        </div>
                    </>
                )}
                {(courses == 2) && (
                    <>
                        <div className={styles.formationItemContent}>
                            <h3>Introdução a programação linear</h3>
                            <h4>IFSULDEMINAS – Campus Poços de Caldas</h4>
                            <p>Finalizado: 2019 | Duração: 40 horas</p>
                        </div>
                    </>
                )}
                {(courses == 3) && (
                    <>
                        <div className={styles.formationItemContent}>
                            <h3>HTML Web Developer</h3>
                            <h4>Digital Innovation One</h4>
                            <p>Finalizado: 2021 | Duração: 27 horas</p>
                        </div>
                    </>
                )}
                {(courses == 4) && (
                    <>
                        <div className={styles.formationItemContent}>
                            <h3>Linux: A introdução ao SO</h3>
                            <h4>Digital Innovation One</h4>
                            <p>Finalizado: 2021 | Duração: 10 horas</p>
                        </div>
                    </>
                )}
                <div className={styles.buttons}>
                    <button onClick={previousCourse}>Anterior</button> 
                    <button onClick={nextCourse}>Próximo</button> 
                </div>
            </div> 
            
        </div>
    );
}

export default Formacao;