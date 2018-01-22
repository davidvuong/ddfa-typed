# ddfa-typed

**Welcome to ddfa-typed!**

This repository contains shared domain types for DDFA ([ddfa-rn-app](https://github.com/davidvuong/ddfa-rn-app) and [ddfa-api](https://github.com/davidvuong/ddfa-api)).

## Installation and usage

```bash
yarn add ddfa-typed --dev
```

```es6
import type { User } from 'ddfa-typed/Models/User';

const currentUser: ddfaTypes.models.User = {
  id: '...',
  name: 'David Vuong',
  username: 'david',
  avatar: '...',
  isAdmin: true,
};
```
