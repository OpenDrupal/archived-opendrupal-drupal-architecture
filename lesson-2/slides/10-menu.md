# Menu, URL, Breadcrumb

--vv--

# Menu
![Architecture steps: Function + Display](lesson-1/slides/images/steps-f-d--.png)<!-- .element: style="width: 100%;" -->

- Which menu’s does the site have?
  - Main navigation
  - Footer menu(s), User menu, Other?
- In what form are menu’s displayed?
  - List of links
  - Simple pull-down, Pull-down with extra info?
  - Different per device?

--vv--

# Menu
![Architecture steps: Function](lesson-1/slides/images/steps-f----.png)<!-- .element: style="width: 100%;" -->

- Which content types are placed in an (hierarchical) menu structure?
- Which content types are used for landing pages (which are usually accessed via the menu)?

--vv--

# Menu Modules
- Menu (core)
- Menu Block: More display functions.
- Menu Item Extras: Makes menu items fieldable.

--vv--

# URL
![Architecture steps: Function + Content](lesson-1/slides/images/steps-fc---.png)<!-- .element: style="width: 100%;" -->

- What URLs are used for landing pages?
- What URL pattern is used per content type?
- What is the URL pattern of hierarchical pages?

--vv--

# URL Modules
- Path (core)
- Pathauto: Provides patterns and automatic URL’s.
- Token: Provides placeholders for Pathauto.

--vv--

# Breadcrumb
![Architecture steps: Function](lesson-1/slides/images/steps-f----.png)<!-- .element: style="width: 100%;" -->

- Is a breadcrumb used in the site?
- Is the page title displayed in the breadcrumb?
- The child URL must match parent URL
  - parent: /articles; child: /articles/example-article
  - parent: /articles; child: /article/example-article (FAIL)

--vv--

# Breadcrumb Modules
- Breadcrumb
  - Menu Breadcrumb, Taxonomy Breadcrumb, Easy Breadcrumb, Menu position
- Active trail
  - Menu Trail By Path, Context Active Trail
