import { siTypescript } from 'simple-icons';

export function TypescriptIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siTypescript.hex}`}
            aria-label={siTypescript.title}
        >
            <path d={siTypescript.path} />
        </svg>
    );
}
