import { siDocker } from 'simple-icons';

export function DockerIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siDocker.hex}`}
            aria-label={siDocker.title}
        >
            <path d={siDocker.path} />
        </svg>
    );
}
