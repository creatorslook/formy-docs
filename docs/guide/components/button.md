# Button

The button is a superset of the button component and comes with default styling and provides you with some small ease of life features.

It takes in all the props that are available to the regular HTML button and doesn't require any props to function effectively.

```tsx
<Button onClick={} name={""} />
```

## Props

The Button component takes in all the regular props that the regular button takes with the addition of the following props :

Props|Types| Definition|
|----|-----|-----------|
name | ```string``` | The name of the button component
customStyles | ```customStyles``` | An object of options for customizing the Button component. It supports Tailwind CSS, Bootstrap and other class based styling solutions


:::info
Support for other libraries will be coming in the future to improve the versatility of the library
:::  
