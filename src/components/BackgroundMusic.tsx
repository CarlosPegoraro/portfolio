import { useEffect, useRef, useState } from "react";

export function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.4;

        audio
            .play()
            .catch(() => {
                // Alguns navegadores bloqueiam autoplay com som.
                // Nesse caso, a música só vai tocar após interação do usuário.
            });
    }, []);

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = !audio.muted;
        setIsMuted(audio.muted);

        if (audio.paused) {
            audio.play().catch(() => {});
        }
    };

    return (
        <>
            <audio ref={audioRef} autoPlay loop>
                <source src="/music/fundo.mp3" type="audio/mpeg" />
                Seu navegador não suporta áudio.
            </audio>

            <button onClick={toggleMute} className={"text-3xl"}>
                {isMuted ? <i className="bi bi-volume-up"></i> : <i className="bi bi-volume-mute-fill"></i>}
            </button>
        </>
    );
}