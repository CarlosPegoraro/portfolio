import { siLivewire } from 'simple-icons';

export function LivewireIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siLivewire.hex}`}
            aria-label={siLivewire.title}
        >
            <path d={siLivewire.path} />
        </svg>
    );
}
