export type BosKonfYear = "2023" | "2024";

export type Program = {
  date: string;
  location: string;
  address: string;
  /**
   * URL to buy tickets
   */
  ticketUrl?: string;
  schedule: ProgramEvent[];
  sponsors: Sponsor[];
};

export type ProgramEvent = {
  title: string;
  description: string;
  speaker?: Speaker;
  image: string;
  from: string;
  to: string;
  type: "info" | "talk" | string;
  attachments?: EventAttachment[];
  videoUrl?: string;
};

export type EventAttachment = {
  name: "Presentasjon" | string;
  url: string;
};

export type Sponsor = {
  name: string;
  logo: string;
  url: string;
  description?: string;
};

export type Speaker = {
  name: string;
  description: string;
  imageUrl?: string | undefined;
};
