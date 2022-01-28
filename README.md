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

### My Approach

In terms of developing my TypeScript skills for the long-term, my approach was that I needed to get more comfortable with TypeScript in a basic way on a single page first. As I created issues for the assignment and created interfaces to model the data in the store, I came to the realization that I needed to take a step back and create the Home page component—despite it not being a part of the requirements. I believe it provides a smoother user experience to add this page, anyhow, because the user can see how many their webpages at a high level view from a dashboard of sorts.

When combining the Home component with the Layout Selector component it forms a "todo application". There's CRUD functionality related to the IWebsite Interface. Not only can a website be created in the Home component, but it also can be given a layout/renamed (updated) and deleted using redux dispatched actions. A user can start with an "Untitled Page" to proceed to Layout Selector page, or when a Title is already given, the user can head straight to the Page Builder component. I added the ability to rename the title and select a layout from the three option for the website in the Layout Selector view.

I used several libraries to help me in this project in addition to Redux. The React Router DOM library to not only route the pages but connect the URL with a unique id created for each website. The React-UUID library creates a lengthy id that is passed into the new website object and sent into the URL for the path of the next page. Components are built with ready made components from the Ant Design design framework. They are purely dumb components with atomic pieces, many of which I made my own with Styled Components. I'm very comfortable with each of these libraries, and it allowed me to focus on the TypeScript aspect of the project.

In the Page Builder view, it's important to note that a user can navigate back to Home and Layout Selector using the New Page and Edit Layout links at the top right. In the center content section, the components for the layouts are built but set to be hidden conditionally at present—refactoring the layout components is a must in the future. The other sections of the Page Builder component are built with the title at the header menu, a layout image displayed, a radio selection for the sections of a two-column layout, a background color feature, an image uploader, and editable sections of the content layout.

The Page Builder sub-components are not connected to the Redux store in any way, so the state of the website and content interfaces are disconnected and not provided into the components yet. I have provided state locally or with local storage to allow some functionality to be seen at the individual level.

I was in the process of pulling down the title and the layout into the Page Builder component as time expired. With the layout passed through to the Page Builder view a conditionally rendered component in the Content Viewer component.

In my processes, I was created issues to keep me on track that I would make pull requests against. This methodology helped me draft pull requests with multiple small commits. As I pushed code to the draft pull request, then I would see whether tests passed the Netlify checks and a deployment was successfully compiled in a staging environment preview url. I did not include any integration or unit testing in the code, so at a minimum I smoke tested in staging before promoting the pull request to the main branch. A deployment to production was configured when merging or pushing to main.

### My Next Steps

As of January 27, 2022, I have created a way for the user to add a website, name the website, and choose a layout. I wish I could have documented the code more, but that would be something that I might do next to provide ideas of where and what I was thinking of doing next. Currently, the user advances to the page builder view, so my next step is to pull down the webpage title and layout to send that information into the header menu and the sidebar. The next step from there is to update the state in the header.

After that I would render a layout based on the layout selected by the user. The next step is to create a content builder reducer to allow the user to build out five sections of the page with each of those having content and/or a background.

After state for the content is setup, then I could pull that content into the page and use the left sidebar to select a section and change the contents of that section using the editable sections or the right side bar options of uploading an image or adding color to the background. With content in the sections, I would research and select a WYSIWYG editor to include in the editable content sections.

The final step would include allowing the user to preview the website, which would take some further thought as I arrived at that part. But, I can imagine that I'd disable the editable component sections and set the menus to no longer display. Most of these next steps are laid out in my open issues in GitHub.

Best practices would have included testing either from the beginning or along the way. I didn't write tests in this iteration, since I felt adding too many new learning experiences would have made the project even more ambitious than it already was.

### Parting Words

Thank you for reviewing my readme all the way to this point— it's kinda long.

The project was a really great first opportunity for me to combine React and Redux with TypeScript. This project was challenging but a great learning experience.

Thank you to my code reviewers for taking valuable company time out of your day to review my project.

Please report any feedback to me via Pull Request and/or [Twitter dm @techieeliot](https://twitter.com/techieEliot).

All the best,

Eliot Sanford
