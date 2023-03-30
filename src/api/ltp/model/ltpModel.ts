export interface LtpResult {
  texts: string[];
  res: any[];
}

export interface LtpResponse {
  code: string;
  result: LtpResult;
  message: string;
  type: string;
}

export interface LtpTask {
  texts: string[];
  type: string;
}
