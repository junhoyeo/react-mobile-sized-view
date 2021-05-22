# react-mobile-sized-view

![demo image](https://github.com/junhoyeo/react-mobile-sized-view/raw/master/docs/demo.gif)

> 🍑 Responsive Mobile-sized Wrapper for React

## 🚀 Examples
<a href="https://github.com/junhoyeo/buymetesla"><img width="50%" src="https://github.com/junhoyeo/react-mobile-sized-view/raw/master/docs/examples/buymetesla.png" /></a><a href="https://github.com/junhoyeo/NIKE-THE-DRAW-Calendar"><img width="50%" src="https://github.com/junhoyeo/react-mobile-sized-view/raw/master/docs/examples/nike-calendar.png"></a>

> ⚠️ Warning: **The following examples can be using the outdated version of this package, and can not be the best usage here**(this package was very ugly before I tidy up lol). Please use issues and PRs in this repository for sharing more ideas and suggestions, including proper exploits

- [junhoyeo/buymetesla](https://github.com/junhoyeo/buymetesla)
- [junhoyeo/NIKE-THE-DRAW-Calendar](https://github.com/junhoyeo/NIKE-THE-DRAW-Calendar)

> **[🚀 Add your apps here too!](https://github.com/junhoyeo/react-mobile-sized-view/issues/new)**

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

- [useScreenSize](https://github.com/junhoyeo/react-mobile-sized-view/blob/master/src/hooks/useScreenSize.ts): Use this to get the size of the `MobileSizedView`
- [useWindowSize](https://github.com/junhoyeo/react-mobile-sized-view/blob/master/src/hooks/useWindowSize.ts)
