---
title: 'Use Context and Reducer together'
excerpt: 'React Context API and useReducer implemented'
coverImage: '/assets/blog/.jpg'
orientation: landscape
date: '2023-02-05'
author:
  name: Juan G
  picture: '/assets/me/profilepic.jpg'
ogImage:
  url: '/assets/blog/.jpg'
---

If you are a JavaScript developer probably you've heard about Redux. Managing the state is a frequent use case where JavaScript developers tend to use a library to make it easier.
Redux is a good alternative when your application becomes much more larger and complex. In the meanwhile, according to the project requirements and constraints, if it stays small and less complex, you can group `useContext` and `useReducer` React Hooks together.

## What is Context

The Context API was introduced by the React team for accessing the state from a general context in your components, without passing props down manually.
Is recommended to use the Context API when your components, at different nesting levels, need to use a global state.

The scenario when the props are passed down through multiple components is usually known as Drop Drilling. It can be solved by using Component Composition (Breaking down Components into smaller and indenpendent pieces) or by adding the Context API.

```js
// Create the context with a Default Value
const MyContext = React.createContext(null);

export const useCustomContext = () => {
	const contextValue = useContext(MyContext);
	if (contextValue === null) {
		throw Error('Context has not been Provided!');
	}
	return contextValue;
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<MyContext.Provider value={{ count, setCount }}>
			<Counter />
			<MyTextComponent />
		</MyContext.Provider>
	);
}

function Counter() {
	const { count, setCount } = useCustomContext();
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
		</div>
	);
}

function MyTextComponent() {
	return <Text />;
}

function Text() {
	const { count } = useCustomContext();
	return <h1>{count}</h1>;
}
```

## What is useReducer

The `useReducer` was introduced by the React team in the v.18. It provides you a way to manage state changes through predefined actions. So it becomes predictable.

## Use them together

Let's implement a solution with both hooks for a React Application that needs to share the state management through different components.
Example

```ts
// State definition
export interface AppStateI {
	count: number;
}

export interface StateContextPropsI {
	state: AppStateI;
	dispatch: React.Dispatch<ActionI>;
}

export const Context = createContext<StateContextPropsI | null>(null);

export const useAppContext = (): StateContextPropsI => {
	const contextValue = useContext(AppContext);
	if (contextValue === null) throw Error('Context has not been Provided!');
	return contextValue;
};
```

## Conclusion

- [GitHub Code]().
