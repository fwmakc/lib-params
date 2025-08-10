import { MapInterface } from './map.interface';
import { ParamTemplate } from '../../param.template';

export class MapParam<T> extends ParamTemplate<MapInterface<T>> {
  protected allowParameters: Array<string> = ['currentMap'];

  find(name: string) {
    return this.params.currentMap[name];
  }

  forEach(callback: (value: T, key: string) => void): void {
    Object.entries(this.params.currentMap).forEach(([value, key]) =>
      callback(key, value),
    );
  }

  get() {
    return this.params.currentMap;
  }

  includes(name: string): boolean {
    return this.params.currentMap[name] !== undefined;
  }

  insert(name: string, value: T): boolean {
    const { allowKeys } = this.params;
    if (allowKeys.length && !allowKeys.includes(name)) {
      return false;
    }
    this.params.currentMap[name] = value;
    return true;
  }

  remove(name: string): boolean {
    const { allowKeys } = this.params;
    if (allowKeys.length && !allowKeys.includes(name)) {
      return false;
    }
    if (!this.includes(name)) {
      return false;
    }
    delete this.params.currentMap[name];
    return true;
  }

  clear(): void {
    this.params.currentMap = {};
  }
}
