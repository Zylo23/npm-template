import { multiply } from '@/index';
import { describe, expect, it } from 'vitest';

describe('multiply', () => {
    it('multiplies two numbers', () => {
        expect(multiply(3, 4)).toBe(12);
    });
});
