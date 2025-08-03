import pino from 'pino';

export interface SharedLoggerOptions {
  scope?: string;
  lokiHost?: string;      
  appName?: string;       
  serviceName?: string;   
  logLevel?: pino.Level;  
  lokiUsername?: string;
  lokiPassword?: string;
  }
  