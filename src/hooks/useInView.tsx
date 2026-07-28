import {useEffect, useRef, useState} from "react";

type UseInViewOptions = {
    threshold?: number;
    triggerOnce?: boolean;
};

export function useInView<T extends HTMLElement>({
    threshold = 0.2,
    triggerOnce = true,
}: UseInViewOptions = {}) {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const visible = entry.isIntersecting;
                setIsVisible(visible);

                if (visible && triggerOnce) {
                    observer.disconnect();
                }
            },
            {threshold}
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, triggerOnce]);

    return {ref, isVisible};
}