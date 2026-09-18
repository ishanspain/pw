const env = process.env.NODE_ENV

export class Logger {
  private constructor() {}

  static log(...args: unknown[]) {
    if (env === "dev") console.log(...args);
  }
}
