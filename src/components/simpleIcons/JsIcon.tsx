import { siJavascript } from 'simple-icons';

export function JsIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="52"
            height="52"
            fill={`#${siJavascript.hex}`}
            aria-label={siJavascript.title}
        >
            <path d={siJavascript.path} />
        </svg>
    );
}