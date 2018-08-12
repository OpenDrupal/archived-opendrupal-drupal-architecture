# Content first!
Node types and other content

--vv--

# Content first!
![Architecture step: Function + Content](lesson-1/slides/images/steps-fc---.png)<!-- .element: style="width: 100%;" -->

- Derive content types from design and functional specs.
- User profiles are also content.

--vv--

# Content first!
- Content: Page content, comment, user profile, image, file, blocks of text.
- Drupal content: node, taxonomie, comments, files, etc.
- Content types are like bricks for a Drupal architect.

--vv--

# Content first!
![Architecture step: Content + Display](lesson-1/slides/images/steps--cd--.png)<!-- .element: style="width: 100%;" -->

- Choose a content type based on
  - Function within the website.
  - Combination of fields (= content).
  - Access to content (editor + visitor).
  - Clean structure of the content model.
- Choose fields based on
  - Type of content.
  - Access to the field (editor + visitor).
  - Re-use of a field or relation to other content.
  - How the content is entered (by editor)
  - How the content is displayed.

--vv--

# Tasks
- What types of content are used for the website?
- Where and how is this content used (input and display)?
- How can this content be stored (node, vocabulary, block, media, user profile, etc.)
- Is the content structure logical?
- What fields can be used to store this content?
- Who can maintain which content? Are all operations permitted (create, edit, delete)?

--vv--

# Tips
- Content related modules:
  - Paragraphs 
  - Entity Reference (core)
  - Field Group
  - Entity Embed Form
  - Media (core)
  - Various media related modules
- With Devel module you can generate dummy content.
