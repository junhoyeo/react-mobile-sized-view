# 🍑 react-mobile-sized-view

> Mobile sized view component for React, with support for neumorphism ui

## 🚀 Examples
<img width="50%" src="docs/examples/buymetesla.png" /><img width="50%" src="docs/examples/nike-calendar.png">

## 📦 Usage

```bash
yarn add styled-components && yarn add -D @types/styled-components
yarn add react-mobile-sized-view
```

```tsx
import React from 'react';
import MobileSizedView from 'react-mobile-sized-view';

const App: React.FC = () => (
  <MobileSizedView
    backgroundColor="#F6DADB"
    screenBackgroundColor="#fefefe"
    screenLightShadow="-31px -31px 62px #FAE0E0"
    screenDarkShadow="31px 31px 62px #EAB6BE"
    isRounded
  >
    <h1>Title in Screen</h1>
  </MobileSizedView>
);

export default App;
```

## ⚓️ Hooks

```tsx
import { useScreenSize } from 'react-mobile-sized-view';

const SomeComponent: React.FC = () => {
  const { width: screenWidth } = useScreenSize();
  // Comes with SSR support

  return (
    <div
      style={{
        width: screenWidth,
        height: screenWidth,
        backgroundColor: 'coral',
      }}
    />
  );
};
```

- useScreenSize
- useWindowSize
