import { siReact } from 'simple-icons';

export function ReactIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siReact.hex}`}
            aria-label={siReact.title}
        >
            <path d={siReact.path} />
        </svg>
    );
}
