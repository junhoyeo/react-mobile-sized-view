# 🍑 react-mobile-sized-view
> Mobile sized view component for React, with support for neumorphism ui

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
