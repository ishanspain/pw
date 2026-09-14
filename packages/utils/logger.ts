const env = "dev";

export class Logger {
  private constructor() {}

  static log(...args: unknown[]) {
    if (env === "dev") console.log(...args);
  }
}
