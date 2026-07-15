declare module '@apiverve/compliments' {
  export interface complimentsOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface complimentsResponse {
    status: string;
    error: string | null;
    data: ComplimentGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface ComplimentGeneratorData {
      compliment: null | string;
  }

  export default class complimentsWrapper {
    constructor(options: complimentsOptions);

    execute(callback: (error: any, data: complimentsResponse | null) => void): Promise<complimentsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: complimentsResponse | null) => void): Promise<complimentsResponse>;
    execute(query?: Record<string, any>): Promise<complimentsResponse>;
  }
}
