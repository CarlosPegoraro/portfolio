import { siGit } from 'simple-icons';

export function GitIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siGit.hex}`}
            aria-label={siGit.title}
        >
            <path d={siGit.path} />
        </svg>
    );
}
