/**
 * Complexity test file in a deeply nested folder.
 * Path: app/complexity-tests/deep/nested/decision-points/
 */

export type NestedPayload = {
  value?: number;
  children?: NestedPayload[];
  flag?: boolean;
};

/**
 * Recursive-style branching with nested optional chaining and conditionals.
 */
export function evaluateNestedPayload(
  payload: NestedPayload | null,
  depth: number = 0,
  maxDepth: number = 5
): number {
  if (payload == null) {
    return depth;
  }

  const raw = payload?.value ?? 0;
  const children = payload?.children;

  if (depth >= maxDepth) {
    return raw > 0 ? raw : 0;
  }

  if (children?.length === 0) {
    return payload?.flag ? raw + 1 : raw;
  }

  if (children != null && children.length > 0) {
    let sum = raw;
    for (const child of children) {
      const v = child?.value ?? 0;
      if (v > 0) {
        sum += evaluateNestedPayload(
          child,
          depth + 1,
          maxDepth
        );
      } else if (child?.flag) {
        sum += 1;
      }
    }
    return sum;
  }

  return payload?.flag ? raw + depth : raw;
}

/**
 * Switch inside loops with multi-line conditionals.
 */
export function processByKind(
  items: Array<{ kind: string; value?: number }>,
  defaultVal: number = 0
): number[] {
  const results: number[] = [];

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const val = item?.value ?? defaultVal;

    switch (item?.kind) {
      case 'add':
        results.push(val > 0 ? val + 1 : val);
        break;
      case 'double':
        if (val >= 0) {
          results.push(val * 2);
        } else {
          results.push(val);
        }
        break;
      case 'skip':
        if (val === 0) continue;
        results.push(val);
        break;
      default:
        results.push(val ?? defaultVal);
    }
  }

  return results;
}

/**
 * Deep ternary and logical chains across many lines.
 */
export function resolveDeep(
  a: number | null | undefined,
  b: number | null | undefined,
  c: number | null | undefined,
  d: number = 0
): number {
  return (
    a != null && a >= 0
      ? a
      : b != null
        ? b < 0
          ? d
          : b
        : c != null && c > 0
          ? c
          : d
  );
}
