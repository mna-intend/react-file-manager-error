import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

type WebVitalsMetric = {
    name: string;
    value: number;
    delta: number;
    id: string;
    entries: PerformanceEntry[];
};

const reportWebVitals = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
    }
};

export default reportWebVitals;