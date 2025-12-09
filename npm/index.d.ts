declare module '@apiverve/compliments' {
  export interface complimentsOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface complimentsResponse {
    status: string;
    error: string | null;
    data: ComplimentGeneratorData;
    code?: number;
  }


  interface ComplimentGeneratorData {
      compliment: string;
  }

  export default class complimentsWrapper {
    constructor(options: complimentsOptions);

    execute(callback: (error: any, data: complimentsResponse | null) => void): Promise<complimentsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: complimentsResponse | null) => void): Promise<complimentsResponse>;
    execute(query?: Record<string, any>): Promise<complimentsResponse>;
  }
}
