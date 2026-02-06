import type { PieData } from './types.js';

export function toPascalCase (str: string): string {
    return str
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

export function normalizeComponentName (name: string): string {
    const lower = name.toLowerCase().trim();
    return lower.startsWith('pie-') ? lower : `pie-${lower}`;
}

export function levenshtein (a: string, b: string): number {
    const m = a.length;
    const n = b.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0) as number[]);

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = a[i - 1] === b[j - 1]
                ? dp[i - 1][j - 1]
                : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }

    return dp[m][n];
}

export function findClosestComponent (name: string, pieData: PieData): string | null {
    const normalized = normalizeComponentName(name);
    let best: string | null = null;
    let bestDist = Infinity;

    for (const key of Object.keys(pieData.components)) {
        const fullKey = `pie-${key.replace('pie-', '')}`;
        const dist = levenshtein(normalized, fullKey);
        if (dist < bestDist) {
            bestDist = dist;
            best = key;
        }
    }

    // Only suggest if the distance is reasonable (less than half the name length)
    return best && bestDist <= Math.ceil(normalized.length / 2) ? best : null;
}

export function componentNotFoundError (name: string, pieData: PieData): { content: Array<{ type: 'text'; text: string }>; isError: true } {
    const suggestion = findClosestComponent(name, pieData);
    let message = `Component "${name}" not found.`;

    if (suggestion) {
        message += ` Did you mean **${suggestion}** (\`${pieData.components[suggestion].tagName}\`)?`;
    } else {
        message += ' Use `search_components` to find available components.';
    }

    return {
        content: [{ type: 'text' as const, text: message }],
        isError: true,
    };
}

export function markdownTable (headers: string[], rows: string[][]): string {
    if (rows.length === 0) return '';

    const separator = headers.map(() => '---');
    const lines = [
        `| ${headers.join(' | ')} |`,
        `| ${separator.join(' | ')} |`,
        ...rows.map((row) => `| ${row.map((cell) => cell.replace(/\|/g, '\\|')).join(' | ')} |`),
    ];

    return lines.join('\n');
}
