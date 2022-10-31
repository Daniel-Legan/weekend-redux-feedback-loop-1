Hey Maia,

General Feedback.

---
| Functional Requirements | Complete? |
| --- | :---: |
| Multi page form with client side routing and navigation (next button) | no |
| Data stored in Redux when navigating from page to page | no |
| User is notified when trying to leave a blank score | no |
| Review Component displays scores and comments from current redux state | no |
| Submit button sends data to the server via Axios | no |
| Confirmaion Page displays after data is POSTed to the server | no |
| Button on Confirmation Page clears Redux and starts a new survey | no |
| Views are broken down into components | no |

---
### Notes:

Notes on the above Functional Requirements.

---
| General Items | Complete? |
| --- | :---: |
| More than 15 git commits | no |
| Commits are descriptive of the changes made or feature added | yes |
| Readme file updated | no |
| Appropriate amount of code comments | no |
| Code is consistently formatted | yes |
| Server code organized with router & module files | no |

---
### Notes:

Notes on General Items

I like that you have local state collecting the user inputs and using dispatch to send to the redux store. Your "type" is descriptive to what you want to the store to take. I think breaking down each dispatch into its own reducer is a good idea since if you want to only change one value before building your object, you don't have to find the index or key of your array or object before you submit to the database. Your code is well organized.

I do not understand why you created a count reducer in your store. I am curious to what you had planned to do with it. I think you're on the right track to building your object to send with axios.