import IWebsite from "../interfaces/IWebsite";

declare module "react-uuid";

type WebsiteState = {
  websites: IWebsite[];
};

type WebsiteAction = {
  type: string;
  payload: IWebsite;
};

type DispatchType = (args: WebsiteAction) => WebsiteAction;
