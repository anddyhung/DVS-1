export type SocialMediaProps = {
  type: string;
  url: string | undefined;
};

export type LanguagesProps = {
  language: string;
  proficiency: string;
};

export type OrganizationProps = {
  organizationName: string;
  dayOfRegistration: Date;
  description: string;
  revenue: string;
  country: string;
  state: string;
  city: string;
  industry: string;
  teamSize: string;
  specialities: string[];
  fundingStage: string;
  logo: string;
  website: string;
  socialLink: string;
};

export interface ClientsProfile {
  email: string | undefined;
  phoneNumber: string;
  country: string;
  birthday: null | Date | undefined;
  languages: null | LanguagesProps[];
  profileCompleteness: number | undefined;
  socialMedia: null | SocialMediaProps[];
  organization: null | OrganizationProps;
}
export type ClientHistory = {
  numberOfJobPosted: number;
  hired: number;
};
