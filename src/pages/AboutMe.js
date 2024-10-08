import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/BackgroundColorChangeAbout.module.css';
import { useSpring, animated, config, to } from "@react-spring/web";

export default function AboutMe() {
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
        })
    )

    return (
        <div className="AboutMe">
            {/* Backgrond About Me */}
            <div className={styles.container}>
                <div className={styles.squares}>
                    <div className={styles.block} />
                    <div className={styles.block} />
                    <animated.div className={styles.block} style={{ background }} />
                </div>
                <animated.div className={styles.background} style={{ background }} />
            </div>
        </div>
    )
}