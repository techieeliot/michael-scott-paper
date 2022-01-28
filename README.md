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

In terms of developing my TypeScript skills for the long-term, my approach was that I needed to get more comfortable with TypeScript in a basic way on a single page first. As I created issues for the assignment and created interfaces to model the data in the store, I came to the realization that I needed to take a step back and create the Home page component—despite it not being a part of the requirements. I believe it provides a smoother user experience to add this page, anyhow, because the user can see how many webpages exist at a high level view from a dashboard of sorts.

<img width="843" alt="Screen Shot 2022-01-28 at 9 51 09 AM" src="https://user-images.githubusercontent.com/19453294/151578314-f52cb117-b5ff-404d-b5b3-902844e37294.png">

When combining the Home component with the Layout Selector component it forms a "todo application". There's CRUD functionality related to the IWebsite Interface. Not only can a website be created in the Home component, but it also can be given a layout/renamed (updated) and deleted using redux dispatched actions. A user can start with an "Untitled Page" to proceed to Layout Selector page, or when a Title is already given, the user can head straight to the Page Builder component. I added the ability to rename the title and select a layout from the three option for the website in the Layout Selector view. Something that is not functional is that the redux store is not fetching the existing title and layout selection, so I would have added this if given more time. I did add rules into the components that requires a title and selection be provided or they should return to the Home component.

<img width="975" alt="Screen Shot 2022-01-28 at 9 52 07 AM" src="https://user-images.githubusercontent.com/19453294/151578486-6164a008-1bbc-4a34-a629-0f84f63165d4.png">
<br />
<img width="567" alt="Screen Shot 2022-01-28 at 9 56 31 AM" src="https://user-images.githubusercontent.com/19453294/151579228-7135cd7e-07cb-4032-9544-2f9e8ebd1824.png">

I used several libraries to help me in this project in addition to Redux. The React Router DOM library to not only route the pages but connect the URL with a unique id created for each website. The React-UUID library creates a lengthy id that is passed into the new website object and sent into the URL for the path of the next page.

<img width="532" alt="Screen Shot 2022-01-28 at 9 53 49 AM" src="https://user-images.githubusercontent.com/19453294/151578761-9ad943b6-9a82-4c74-a2c6-59453fa7c405.png">

Components are built with ready made components from the Ant Design design framework. They are purely dumb components with atomic pieces, many of which I made my own with Styled Components. I'm very comfortable with each of these libraries, and it allowed me to focus on the TypeScript aspect of the project rather than building these features from scratch.

<img width="1132" alt="Screen Shot 2022-01-28 at 9 55 02 AM" src="https://user-images.githubusercontent.com/19453294/151578964-80357271-118c-4b8a-8904-089c0344dec7.png">

In the Page Builder view, it's important to note that a user can navigate back to Home and Layout Selector using the New Page and Edit Layout links at the top left.

<img width="286" alt="Screen Shot 2022-01-28 at 9 49 57 AM" src="https://user-images.githubusercontent.com/19453294/151578104-e3ec7a2a-f523-4908-8906-922748922bed.png">

In the center content section, the components for the layouts are built but set to be hidden conditionally at present—refactoring the layout components is a must in the future. The other sections of the Page Builder component are built with the title at the header menu, a layout image displayed, a radio selection for the sections of a two-column layout, a background color feature, an image uploader, and editable sections of the content layout. The sidebars collapse on click or at a smaller screen breakpoint.

<img width="1432" alt="Screen Shot 2022-01-28 at 10 00 26 AM" src="https://user-images.githubusercontent.com/19453294/151579941-13a536fc-b5c3-4b64-8cef-3967b70c791f.png">

The Page Builder sub-components are not connected to the Redux store in any way, so the state of the website and content interfaces are disconnected and not provided into the components yet. I have provided state locally or with local storage to allow some functionality to be seen at the individual level. The sections of the page do not save the content values but are editable.

<img width="804" alt="Screen Shot 2022-01-28 at 10 03 03 AM" src="https://user-images.githubusercontent.com/19453294/151580357-461137c3-f523-4040-ab96-66a4c877e002.png">

I was in the process of pulling down the title and the layout into the Page Builder component as time expired. With the layout passed through to the Page Builder view a conditionally rendered component in the Content Viewer component.

<img width="893" alt="Screen Shot 2022-01-28 at 10 09 14 AM" src="https://user-images.githubusercontent.com/19453294/151581420-e55a5657-4a72-4a15-a6c0-7ad8dc287ed5.png">

In my processes, I was created issues to keep me on track that I would make pull requests against. This methodology helped me draft pull requests with multiple small commits. As I pushed code to the draft pull request, then I would see whether deployment tests passed the Netlify checks and a deployment was successfully compiled in a staging environment preview url. I did not include any integration or unit testing in the code, so at a minimum I smoke tested in staging before promoting the pull request to the main branch. A deployment to production was configured when merging or pushing to main.

<img width="687" alt="Screen Shot 2022-01-28 at 10 03 56 AM" src="https://user-images.githubusercontent.com/19453294/151580535-76333790-92f1-4d84-bc6a-43efebd6312b.png">
<br />
<img width="955" alt="Screen Shot 2022-01-28 at 10 05 11 AM" src="https://user-images.githubusercontent.com/19453294/151580744-d9cdba21-4d18-489c-83ba-e7c233c3aea4.png">

### My Next Steps

As of January 27, 2022, I have created a way for the user to add a website, name the website, and choose a layout. I wish I could have documented the code more, but that would be something that I might do next to provide ideas of where and what I was thinking of doing next. Currently, the user advances to the page builder view, so my next step is to pull down the webpage title and layout to send that information into the header menu and the sidebar. The next step from there is to update the state in the header.

<img width="947" alt="Screen Shot 2022-01-28 at 10 12 11 AM" src="https://user-images.githubusercontent.com/19453294/151581861-2c0d355f-a956-4982-9927-ee389804a0d3.png">

After that I would render a layout based on the layout selected by the user. The next step is to create a content builder reducer to allow the user to build out five sections of the page with each of those having content and/or a background.

<img width="884" alt="Screen Shot 2022-01-28 at 10 13 26 AM" src="https://user-images.githubusercontent.com/19453294/151582059-148692d3-72f5-4a87-821b-d5aa8820cce0.png">

After state for the content is setup, then I could pull that content into the page and use the left sidebar to select a section and change the contents of that section using the editable sections or the right side bar options of uploading an image or adding color to the background. With content in the sections, I would research and select a WYSIWYG editor to include in the editable content sections.

The final step would include allowing the user to preview the website, which would take some further thought as I arrived at that part. But, I can imagine that I'd disable the editable component sections and set the menus to no longer display. Most of these next steps are laid out in my open issues in GitHub.

Best practices would have included testing either from the beginning or along the way to prevent bugs. Regrettably, I didn't write tests in this iteration, since I felt adding too many new learning experiences in a POC would have made the project even more ambitious than it already was, so I permitted this technical debt in the project for now.

### Parting Words

Thank you for reviewing my readme all the way to this point— it's kinda long.

The project was a really great first opportunity for me to combine React and Redux with TypeScript. This project was challenging but a great learning experience.

Thank you to my code reviewers for taking valuable company time out of your day to review my project.

Please report any feedback to me via Pull Request and/or [Twitter dm @techieeliot](https://twitter.com/techieEliot).

All the best,

Eliot Sanford
