# Field

The field component is a superset of the `input` component, essentially building ontop of the input to allow you to easily validate your inputs without hassle.

The field collects four main props to function effectively `state`, `setState`, `name` and `regex`.

```tsx
<Field name={""}  state={} setState={} regex={}/>
```

## Props

The Field component takes in all the regular props that the regular input takes with the addition of the following props :

Props|Types| Definition|
|----|-----|-----------|
state| ```any``` | A reference value where the value of the input will be referred to|
setState |  ```React.Dispatch<React.SetStateAction<T>>``` | A setter function
regex  | ```regExp``` | A predefined regular expression with which state reference will be tested
regexErrorMessage | ```string``` | An error message that will be displayed during the Field error state
customStyles | ```customStyles``` | An object of options for customizing the Field component. It supports Tailwind CSS, Bootstrap and other class based styling solutions

## Customizations

Customization in the Field component can be done with the customStyles props which takes in an object with the following

```tsx
<Field customStyles={
    {
        wrapper : "",
        label : "",
        labelError : "",
        input : "",
        inputError : "",
        infoGroup: {
            wrapper : "",
            svg : "",
            svgError : "",
            errorMessage : ""
    }
}/>
```

The styles will be assigned to the tags within the Field component as follows

```
 div [wrapper]
  ├─ label [label, labelError]
  ├─ input [input, inputError]
  └─ infoGroup 
      └─ div [wrapper]
           ├─ svg [svg, svgError]
           └─ span/ svg:hover [errorMessage]
```

:::info
Support for other libraries will be coming in the future to improve the versatility of the library
:::  
