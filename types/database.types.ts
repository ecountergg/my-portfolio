export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          // the data expected from .select()
          id: string;
          name: string;
          email: string;
          message: string;
          created_at: Date;
        };
        Insert: {
          name: string;
          email: string;
          message: string;
        };
      };
    };
  };
}
