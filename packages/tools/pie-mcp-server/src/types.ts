export interface PieData {
    metadata: {
        version: string;
        generatedAt: string;
        componentCount: number;
        iconCount: number;
    };
    components: Record<string, ComponentData>;
    icons: {
        categories: IconCategory[];
        count: number;
    };
}

export interface FrameworkExample {
    available: boolean;
    code: string | null;
    sourceUrl: string;
    liveUrl: string;
    error?: string;
}

export interface FrameworkExamples {
    nextjsV14: FrameworkExample;
    nextjsV15: FrameworkExample;
    nuxt: FrameworkExample;
    vanilla: FrameworkExample;
    repository: string;
}

export interface ComponentData {
    name: string;
    version: string;
    description: string;
    status: string;
    replaces: Record<string, string[]> | null;
    tagName: string;
    className: string | null;
    slots: Array<{ name: string; description: string }>;
    properties: Array<{
        name: string;
        type: string;
        description: string;
        attribute: string;
        default: string | null;
        reflects: boolean;
        readonly: boolean;
    }>;
    events: Array<{ name: string; type: string; description: string }>;
    methods: Array<{
        name: string;
        description: string;
        parameters: Array<{ name: string; type: string }>;
        returnType: string;
    }>;
    validValues: Record<string, string[]>;
    mixins: Array<{ name: string; package: string }>;
    installation: string;
    examples: ComponentExamples | null;
    frameworkExamples: FrameworkExamples | null;
}

export interface ComponentExamples {
    basic: string | null;
    variants: Array<{ name: string; props: Record<string, string> }>;
    patterns: Array<{ name: string; description: string; code: string }>;
    imports: string[];
}

export interface IconCategory {
    name: string;
    displayName: string;
    icons: Array<{ name: string; displayName: string }>;
}
