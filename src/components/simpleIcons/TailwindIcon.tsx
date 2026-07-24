import { siTailwindcss } from 'simple-icons';

export function TailwindIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siTailwindcss.hex}`}
            aria-label={siTailwindcss.title}
        >
            <path d={siTailwindcss.path} />
        </svg>
    );
}
