/* eslint-disable no-multi-assign */
// holds the TypeScript types
// these types can be used now in other files without importing

interface Website {
  id: number;
  layout: string;
  title: string;
}

type WebsiteState = {
  websites: Website;
};

type WebsiteAction = {
  type: string;
  website: Website;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type = DispatchType = (args: WebsiteAction) => WebsiteAction;
