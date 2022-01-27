# Michael Scott Paper Company

## Frontend CMS "lite" MVP Project by Eliot Sanford

- The app is a React MVP app that gives the user a way to create and manage content on an HTML website. When complete, functionality is expected to include a chosen layout with text and background images or colors in various sections of the application. In addition, the user will be able to preview the website.

### [Live link to the deployed application](https://michael-scott-paper.netlify.app/)

---

### How to install and run the project locally

#### 1. Clone the repo

- `git clone git@github.com:techieeliot/michael-scott-paper.git`

#### 2. Change directory to Michael Scott Paper

- `cd michael-scott-paper`

#### 3. Install your packages

- `yarn`

#### 4. Start your app in your local environment

- `yarn start`

#### 5. View your app in the browser

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

### Checklist of requirements

- [x] [feature: select from one of three different single page layouts](https://github.com/techieeliot/michael-scott-paper/issues/16)

- [ ] [feature: customize layout background with color or image](https://github.com/techieeliot/michael-scott-paper/issues/10)

- [ ] [feature: customize a section background with a color or image](https://github.com/techieeliot/michael-scott-paper/issues/11)

- [ ] [feature: add text to a section within a layout](https://github.com/techieeliot/michael-scott-paper/issues/12)

- [ ] [feature: add some basic text formatting (i.e. bold, italics, underline, etc.)](https://github.com/techieeliot/michael-scott-paper/issues/13)

- [ ] [feature: pop out to a "preview" mode where they can see their layout outside of the editor.](https://github.com/techieeliot/michael-scott-paper/issues/14)

- [x] [feature: responsive layout for moble or tablet devices](https://github.com/techieeliot/michael-scott-paper/issues/15)

- [x] Use React (Nice to haves: Redux, TypeScript, and Testing)

- [x] Create a readme with getting started instructions

---

### Technologies Used

#### Languages and Frameworks

    	* React
    	* Redux
    	* TypeScript
    	* React Router
    	* Ant Design
    	* Styled Components

### My Next Steps

As of January 27, 2022, I have created a way for the user to add a website, name the website, and choose a layout. Currently, the user advances to the page builder view, so my next step is to pull down the webpage title and layout to send that information into the header menu and the sidebar. The next step from there is to update the state in the header.

After that I would render a layout based on the layout selected by the user. The next step is to create a content builder reducer to allow the user to build out five sections of the page with each of those having content and/or a background.

After state for the content is setup, then I could pull that content into the page and use the left sidebar to select a section and change the contents of that section using the editable sections or the right side bar options of uploading an image or adding color to the background. With content in the sections, I would research and select a WYSIWIG editor to include in the editable content sections.

The final step would include allowing the user to preview the website, which would take some further thought as I arrived at that part. But, I can imagine that I'd disable the editable component sections and set the menus to no longer display.

### Parting Words

Thank you for reviewing my readme all the way to this point.

Thank you to my code reviewers for taking valuable company time out of your day to review my project.

Please report any feedback to me via Pull Request and/or [Twitter dm @techieeliot](https://twitter.com/techieEliot).

All the best,

Eliot Sanford
