import pino from 'pino';

export interface SharedLoggerOptions {
    isProduction?: boolean; 
    lokiHost?: string;      
    appName?: string;       
    serviceName?: string;   
    logLevel?: pino.Level;  
    lokiUsername?: string;
    lokiPassword?: string;
  }
  