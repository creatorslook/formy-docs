# Get Started


## Installation
### Prerequisites

-   [Node.js](https://nodejs.org/) version 16 or higher.
-   An Existing React Project.

```js
npm install formy
```

## Quick Tutorial
- **Imports**

After installing Formy into your existing application, import the following Components

```tsx
import { Field, Button, useVerify, depsProps }
import "formy/styles.css"
```
If you're not using typescript then remove `depsProps` from your import and if you want to style these components then remove `formy/styles.css` as well.

- **Structure**

Once imported, you can begin using these components and types

```tsx
import { useState } from "react"
import { Field, Button, useVerify, depsProps, regex }

function App() {
    const [email, setEmail] = useState<string | undefined>("")

    const deps:depsProps[] = [
        { state: email, regex: regex.email }
    ]

    const isValid = useVerify(deps)

    function handleSubmit() {
        console.log(email)
    }

    return (
        <form>
        <Field name="Email" type="email" state={email} regex={regex.email} setState={setEmail} />
        <Button onClick={ handleSubmit } disabled={isValid} />
        </form>
    )
}
```

Formy also provides you with predefined [Regular expressions](/guide/components/regex) for email, passwords and cards which you can add to your import statement

The [useVerify](/guide/hook/) collects an argument of type `depsProps` which you define as an array of objects each containing the state and the regex that should be used to validate the corresponding state. It returns an `isValid` value which can be true | false and can be used to handle disabled states like on the [Button](/guide/components/button) as shown in the example above

The [Field](/guide/components/) acts like a regular input but collects necessary props to function like `state`, `setState`, `name` and `regex`

- **View**

Run the development server and view your app

The default State:

![formy screenshot](/defaultView.png)

Error State:

![fromy err screenshot](/errView.png)

I should look like this provided that you imported `formy/styles.css` and if not you can style the [Field](/guide/components/) and [Button](/guide/components/button)


