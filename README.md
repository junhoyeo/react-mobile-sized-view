# 🍑 react-mobile-sized-view

> Mobile sized view component for React, with support for neumorphism ui

## 🚀 Examples
<img width="50%" src="https://github.com/junhoyeo/react-mobile-sized-view/raw/master/docs/examples/buymetesla.png" /><img width="50%" src="https://github.com/junhoyeo/react-mobile-sized-view/raw/master/docs/examples/nike-calendar.png">

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
    style={{ backgroundColor: '#F6DADB' }}
    screenStyle={{
      backgroundColor: '#fefefe',
      boxShadow: '-31px -31px 62px #FAE0E0, 31px 31px 62px #EAB6BE',
    }}
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
