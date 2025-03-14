export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatar_url?: string;
  occupation: string;
  industry: string;
  daily_screen_time: number;
  device_usage: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  carbon_goal: number;
  created_at: string;
  updated_at: string;
}

export interface DigitalWellbeing {
  id: string;
  user_id: string;
  date: string;
  screen_time: number;
  device_breakdown: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  app_usage: {
    app_name: string;
    usage_minutes: number;
    carbon_impact: number;
  }[];
  total_carbon_impact: number;
  created_at: string;
  updated_at: string;
}