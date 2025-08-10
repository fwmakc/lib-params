export function fromJson(storedValue: string): { [key: string]: any } {
  return JSON.parse(storedValue || '{}') || {};
}
