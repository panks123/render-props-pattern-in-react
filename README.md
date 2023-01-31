# Render Props pattern in react

The Render Props is a  technique in ReactJS for sharing code between React components using a prop whose value is a function.

Child component takes render props as a function and calls it instead of implementing its own render logic.

In brief, we pass a function from the parent component to the child component as a render props, and the child component calls that function instead of implementing its own logic of render.