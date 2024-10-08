import React, { useState, useEffect } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../images/ReoNa1.jpg';
import { useSpring, animated, config } from '@react-spring/web';
import styles from '../css/BackgroundColorChangeHome.module.css';
import Swal from "sweetalert2";
import 'animate.css';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {
    const [{ background }] = useSpring (
        () => ({
            from: { background: 'var(--step0)' },
            to: [
                { background: 'var(--step0)' },
                { background: 'var(--step1)' },
                { background: 'var(--step2)' },
                { background: 'var(--step3)' },
                { background: 'var(--step4)' },
            ],
                config: config.molasses,
                loop: { reverse: true },
            }),
        []
    );

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((afterRotation) => afterRotation - 1);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const showSweetAlert = () => {
        Swal.fire({
            title: "Yahaloooo!!!",
            text: "Welcome to the Portfolio Website using React JS\nI have hobbies playing games, watching anime, and listening to music",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutUp
                animate__faster
                `
            },
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'custom-ok-button'
            }
        });
    };

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);
    
    return (
        <div className="Home">
            {/* Background Animation */}
            <div className={styles.container}>
                <div className={styles.squares}>
                    <div className={styles.block} />
                    <div className={styles.block} />
                    <animated.div className={styles.block} style={{ background }} />
                </div>
                <animated.div className={styles.background} style={{ background }} />
            </div>

            {/* Main Content */}
            <div className="content pt-4 text-dark">
                <h1 className='pb-3 fw-bold'>Welcome to My Profile</h1>
                <div data-aos="zoom-in"><img src={myImage} alt="MyWife" className="rounded-circle w-25 mt-5 mb-5" style={{ border: '5px solid white', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.8)', transform: `rotate(${rotation}deg)` }} /></div>
                <p className='pt-2 fs-5'>This website was developed using ReactJS <br></br> Programmer and Web Development</p>
                <div><button className="btn btn-primary" onClick={showSweetAlert}>A little About Me</button></div>
            </div>
        </div>
    )
}