import IWebsite from "../interfaces/IWebsite";

type WebsiteState = {
  websites: IWebsite[];
};

type WebsiteAction = {
  type: string;
  website: IWebsite;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type DispatchType = (args: WebsiteAction) => WebsiteAction;
