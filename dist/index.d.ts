import pino from 'pino';
import { SharedLoggerOptions } from './interface/options';
/**
 * Create and configure a Pino logger instance.
 * @param options Opciones para personalizar el logger.
 * @returns Una instancia de Pino logger.
 */
export declare function createLogger(options?: SharedLoggerOptions): pino.Logger<never, boolean>;
declare const _default: pino.Logger<never, boolean>;
export default _default;
