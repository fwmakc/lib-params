export interface ParamInterface {
  loadCallback: () => Promise<{ [key: string]: any }>;
  saveCallback: (object: { [key: string]: any }) => Promise<void>;
  [key: string]: any;
}
