import { ParamInterface } from './param.interface';

export abstract class ParamTemplate<T extends ParamInterface> {
  protected allowParameters: Array<string> = [];

  constructor(protected params: T) {
    this.params = params;
  }

  async load(): Promise<boolean> {
    try {
      const loadedParams: { [key: string]: any } =
        await this.params.loadCallback();

      for (const key of this.allowParameters) {
        (this.params[key] as ParamInterface) = loadedParams[key];
      }

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async save(): Promise<boolean> {
    try {
      const preparedParams: { [key: string]: any } = {};

      for (const key of this.allowParameters) {
        preparedParams[key] = this.params[key];
      }

      await this.params.saveCallback(preparedParams);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
