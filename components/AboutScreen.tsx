import { useEffect, useRef, useState, forwardRef } from "react";
import Image from "next/legacy/image";
import starBack from "../public/starBack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DownArrow from "./DownArrow";
import MaskButton from "./MaskButton";
import ObserverItem from "./ObserverItem";

const AboutScreen = forwardRef<
    HTMLDivElement,
    { visibleItems: Set<string>; skillRef: React.RefObject<HTMLDivElement> }
>((props, ref) => {
    const { visibleItems, skillRef } = props;

    useEffect(() => {
        const firstFront = document.querySelector(".flip .front");
        if (firstFront) {
            firstFront.classList.add("no-style");
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({ target, isIntersecting }) => {
                    if (isIntersecting) {
                        target.classList.add("typing-ani");
                        element2?.classList.add("typing-ani");
                        observer.unobserve(target);
                    }
                });
            },
            { threshold: 0.9 }
        );

        const element = document.querySelector(".text-1");
        const element2 = document.querySelector(".text-2");
        if (element) observer.observe(element);
        return () => observer.disconnect();
    });

    return (
        <section className="container" ref={ref}>
            <div className="background-stars">
                <Image src={starBack} layout="fill" alt="background-img" />
            </div>
            <header className="about-title">
                <ObserverItem key={0} visible={visibleItems.has(`ID-0`)}>
                    <h1 className="header" data-id="ID-0">
                        ABOUT
                    </h1>
                </ObserverItem>
            </header>
            <article className="about-content">
                <article className="about-text">
                    <div className="typing-ani">
                        <p className={`text-1`}>안녕하세요.</p>
                    </div>
                    <div className="typing-ani">
                        <p className={`text-2`}>
                            신입 프론트엔드 개발자{" "}
                            <b className="name-text">박희태</b>
                            입니다.
                        </p>
                    </div>
                </article>
                <section className="about-card">
                    <ObserverItem key={1} visible={visibleItems.has(`ID-1`)}>
                        <div className="item" data-id={`ID-1`}>
                            <div className="flip">
                                <div className="front">
                                    <FontAwesomeIcon
                                        icon={faAddressCard}
                                        color="rgba(255, 255, 255, 0.776)"
                                        style={{
                                            height: "auto",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                                <div className="back back1">
                                    <FontAwesomeIcon icon={faUser} />
                                    <p>
                                        name:{" "}
                                        <span
                                            style={{
                                                fontFamily: "Koreail-Light",
                                            }}
                                        >
                                            박희태
                                        </span>
                                    </p>
                                    <p>
                                        phone:{" "}
                                        <a
                                            className="tel"
                                            href="tel:010-2994-9783"
                                        >
                                            010-2994-9783
                                        </a>
                                    </p>
                                    <p>
                                        email:{" "}
                                        <a
                                            className="mail"
                                            href="mailto:mkoiui98@gmail.com"
                                        >
                                            mkoiui98@gmail.com
                                        </a>
                                    </p>
                                    <p>birth date: 98.11.26</p>
                                </div>
                            </div>
                        </div>
                    </ObserverItem>
                    <ObserverItem key={2} visible={visibleItems.has(`ID-2`)}>
                        <div className="item" data-id={`ID-2`}>
                            <div className="flip">
                                <div className="front">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        style={{ width: "70%", height: "auto" }}
                                    />
                                </div>
                                <div className={`back back2`}>
                                    <MaskButton
                                        value="Github"
                                        link="https://github.com/heeeete"
                                    />
                                </div>
                            </div>
                        </div>
                    </ObserverItem>
                    <ObserverItem key={3} visible={visibleItems.has(`ID-3`)}>
                        <div className="item" data-id={`ID-3`}>
                            <div className="flip">
                                <div className="front">
                                    <p className="tistory">BLOG</p>
                                </div>
                                <div className="back back2">
                                    <MaskButton
                                        value="Tistory"
                                        link="https://gaebarsaebal.tistory.com/"
                                    />
                                </div>
                            </div>
                        </div>
                    </ObserverItem>
                </section>
            </article>
            <div className="Arrow">
                <DownArrow ArrowColor="white" targetRef={skillRef} />
            </div>

            <style jsx>
                {`
                    .container {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100dvw;
                        height: 100dvh;
                        padding-top: 80px;
                        position: relative;
                        overflow: hidden;
                        background-color: rgba(0, 0, 0);
                    }
                    .background-stars {
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 230%;
                        height: 230%;
                        position: absolute;
                        animation: space-rotate 500s linear infinite;
                    }

                    .about-title {
                        position: relative;
                        width: 100dvw;
                        display: flex;
                        justify-content: center;
                    }

                    .header {
                        font-size: 4em;
                    }

                    .about-content {
                        position: relative;
                        display: flex;
                        align-items: center;
                        width: 100dvw;
                    }

                    .about-text {
                        font-family: Koreail-Light;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.5dvw;
                        width: 70%;
                        white-space: nowrap;
                    }

                    .text-1,
                    .text-2 {
                        border-right: 3px solid white;
                        width: 0;
                        overflow: hidden;
                    }
                    .text-1 {
                        padding: 5px 0;
                    }

                    .text-1.typing-ani {
                        animation: typing 1.5s steps(22) forwards,
                            blink-cursos 1s step-end infinite;
                    }

                    .text-2.typing-ani {
                        animation: typing 1.5s steps(22) forwards,
                            blink-cursos 1s step-end infinite;
                        animation-delay: 2s;
                    }

                    @keyframes typing {
                        from {
                            width: 0;
                        }
                        to {
                            width: 100%;
                        }
                    }

                    .name-text {
                        font-family: Koreail-Bold;
                        font-size: 2dvw;
                    }

                    .about-card {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 17rem;
                    }
                    .item {
                        padding: 10px;
                        width: 17rem;
                        aspect-ratio: 10/6;
                        margin: 1.5vh 0;
                        perspective: 1000px;
                        transition: 0.5s;
                    }
                    .flip {
                        position: relative;
                        transition: 0.5s;
                        width: 100%;
                        height: 100%;
                        transform-style: preserve-3d;
                    }
                    .front,
                    .back {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        backface-visibility: hidden;
                        border-radius: 10px;
                        box-shadow: 0px 0px 15px 5px rgb(255, 255, 255);
                        background-color: rgba(255, 255, 255, 0.776);
                    }
                    .front.no-style {
                        background-color: transparent;
                    }
                    .front {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                    }
                    .back {
                        display: flex;
                        padding: 5px 10px;
                        flex-direction: column;
                        transform: rotateY(180deg);
                    }
                    .back1 {
                        justify-content: center;
                    }
                    .back2 {
                        align-items: center;
                        justify-content: center;
                        font-size: 1.3em;
                    }
                    .back > * {
                        margin: 3px 0;
                    }
                    .item:hover .flip,
                    .flip:hover {
                        transform: rotateY(180deg);
                    }

                    .tistory-box {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 70%;
                        height: 123%;
                        border-radius: 50%;
                        background-color: black;
                    }

                    .tistory {
                        font-size: 100px;
                        font-weight: bolder;
                    }

                    .tel,
                    .mail {
                        text-decoration-line: none;
                        color: black;

                        &:hover {
                            color: rgb(223, 154, 25);
                        }
                    }

                    h1 {
                        color: white;
                        margin-bottom: 5vh;
                    }
                    @keyframes space-rotate {
                        from {
                            transform: translate(-50%, -50%) rotate(0deg);
                        }
                        to {
                            transform: translate(-50%, -50%) rotate(360deg);
                        }
                    }

                    @keyframes blink-cursos {
                        50% {
                            border-color: transparent;
                        }
                    }

                    .Arrow {
                        position: absolute;
                        bottom: 5vh;
                    }
                    @media all and (max-width: 768px) {
                        .header {
                            font-size: 2em;
                        }
                        .Arrow {
                            right: 5dvw;
                        }
                        .about-content {
                            flex-direction: column;
                        }
                        .about-text {
                            font-size: 5dvw;
                        }
                        .name-text {
                            font-size: 6dvw;
                        }
                        .item {
                            width: 10rem;
                        }
                        .tistory {
                            font-size: 2rem;
                        }
                        .back2 {
                            font-size: 1rem;
                        }
                        .back1 {
                            font-size: 10px;
                        }
                    }
                `}
            </style>
        </section>
    );
});

export default AboutScreen;
