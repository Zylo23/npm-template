import { subtract } from '@/index';
import { describe, expect, it } from 'vitest';

describe('subtract', () => {
    it('subtracts two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });
});
