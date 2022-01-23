import IWebsite from "./interfaces/IWebsite";

type WebsiteState = {
  websites: IWebsite[];
};

type WebsiteAction = {
  type: string;
  website: IWebsite;
};

type DispatchType = (args: WebsiteAction) => WebsiteAction;
