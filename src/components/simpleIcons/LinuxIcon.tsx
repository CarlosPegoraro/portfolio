import { siLinux } from 'simple-icons';

export function LinuxIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siLinux.hex}`}
            aria-label={siLinux.title}
        >
            <path d={siLinux.path} />
        </svg>
    );
}
