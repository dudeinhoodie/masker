/**
 * Combine two class names;
 *
 * @param base {string}      – base class name;
 * @param className {string} – additional class name;
 */
export function concatClassName(base: string, className: string): string {
    return [base, className].filter((cn) => cn).join(' ');
}
