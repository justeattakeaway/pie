# React 19

This guide will show you how to set up the PIE Web Components in a React 19 application.

> This guide assumes you have first followed the Getting started, Typography and CSS setup guides.
> Please make sure to follow them before continuing with this guide.

## Table of Contents

- [Dependencies](#dependencies)
- [Usage](#usage)

## Dependencies
The first step is to install the React specific dependency:

**Using Yarn:**

```bash
yarn add @lit/react
```

**Using NPM:**

```bash
npm install @lit/react
```

## Usage

For React-based applications, there is a `/react/` entry point in both `@justeattakeaway/pie-webc` and `@justeattakeaway/pie-icons-webc` as shown in the example code below:

```tsx


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="card">
            <PieButton onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </PieButton>

            <PieIconButton>
                <IconClose></IconClose>
            </PieIconButton>
        </div>
        </>
    );
}

export default App;
```

You should now be able to use any components you need in your React application!
