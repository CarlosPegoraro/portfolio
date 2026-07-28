import { siPhp } from 'simple-icons';

export function PhpIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siPhp.hex}`}
            aria-label={siPhp.title}
        >
            <path d={siPhp.path} />
        </svg>
    );
}