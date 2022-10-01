A reactjs project I was working on required the use of stars to display ratings. The stars to be shown must include full stars but also half stars e.g. (4.5 star rating)

There are lots of ways to solve this requirement but this piece of code is the solution I implemented. It makes use of svg loops. Additionally empty stars are also accounted for to help with UX i.e it is easier to recognize 4 star rating when the 5th star is present but with a complementary color.

To demonstrate: ( * * * * - ) is slightly easier to interprete than only displaying 4 stars ( * * * * ), especially when you have a lot of UI cards on the screen making use of this component.

To use this, simply import into the needed parent component and pass the rating as a prop number.

It can also be modified using the CSS class names and to display more stars if needed e.g. 10 star rating, unstead of the current cap at 5 stars.
