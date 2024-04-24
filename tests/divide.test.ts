import { divide } from '@/index';
import { describe, expect, it } from 'vitest';

describe('divide', () => {
    it('divides two numbers', () => {
        expect(divide(4, 2)).toBe(2);
    });
});
