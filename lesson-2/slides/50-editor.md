# Editor friendly interface

--vv--

# Editor friendly: Strategies
- Consider the editor: Most frequent user of the site, provide tools for easy maintenance.
- Avoid access to complex and risk full pages (Block placement, Views, Permissions)
- Reduce the visual noise: tailor admin views, make menu for major admin tasks, avoid needless words.

--vv--

# Editor friendly: Strategies
- Use Views to create customised overview pages.
- Does the front page have unique content, consider a content type for the front page.
- Consider a separate content type for nodes that should not be deleted by the editor, e.d. landing page. Do not grant create and delete permission for this type.

--vv--

# Editor friendly Interface
- What roles are working with the site?
- What navigation does each role need?
- What are the main editorial tasks?
- Which overviews are required by the editor to perform these tasks?

--vv--

# Modules
- Admin overview pages
  - Views
  - Views Bulk Operations (partly in core)
- Navigation
  - Admin Toolbar
  - Toolbar Menu
- Media
  - Image crop
  - Media Browser
- Other
  - Role assign
  - Draggable Views

--vv--

# Text Format
- Text Format: Configurable filter for safe display of text.
- CKEditor is the default WYSIWYG.

--vv--

# Text Format examples
- Editor, Administrator
  - **Full HTML**: With WYSIWYG editor and many (or all) HTML allowed.
  - **Raw**: No WYSIWYG, all HTML allowed. For example for legacy HTML with divs, spans and classes.
- Visitor
  - **Restricted HTML**: No WYSIWYG, small set of HTML. For comments with links, bold, emoticons.
  - **Plain text**: No HTML, convert line breaks. For basic comments.

--vv--

# Text Format requirements
- What are the editor’s requirements  for entering content?
- Which set of HTML tags?
- Inline images or not? Other media inline?
- Copy/Paste from MS Word?
- Include custom HTML elements (e.g. button)?

--vv--

# Modules
- **Linkit**: Link to content
- **Entity Embed**: Embed media or entities
