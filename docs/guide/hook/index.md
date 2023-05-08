# useVerify

useVerify is a custom hook that allows you to validate your state with regex outside of the [Field](/guide/) component 

The useVerify hook takes in one argument which is
|Argument | Type |
|--------|-----|
| deps | depsProps

The useVerify hook allows Formy to validate state without having to take over the whole form which allows for more flexibilty.

```tsx
import { useVerify, regex, depsProps } from "formy"

function App (){
    const [email, setEmail] = useState("")

    const deps: depsProps[] = [
        {state: email, regex: regex.email}
    ]

    const isValid = useVerify(deps)
}
```

The useVerify will look through the deps array and validate each object with the assigned regex and if all states match the assigned regex, the `isValid` value returned will be true and if one fails then the isValid will be false.

If you're using typescript, you ensure more typesafety by defining your `deps` array with the `depsProps` prop.