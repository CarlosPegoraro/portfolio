import { siLaravel } from 'simple-icons';

export function LaravelIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siLaravel.hex}`}
            aria-label={siLaravel.title}
        >
            <path d={siLaravel.path} />
        </svg>
    );
}