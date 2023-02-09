import type { ReactNode } from 'react';
import { createIntl, createIntlCache } from 'react-intl';
import messagesInEnglish from '../lang/en.json';

const LOCALE = 'en';

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: LOCALE,
    defaultLocale: LOCALE,
    messages: messagesInEnglish,
    defaultRichTextElements: {
      b: (msg) => <strong>{msg as ReactNode}</strong>,
      br: () => <br />,
      p: (msg) => <div>{msg as ReactNode}</div>,
    },
  },
  cache
);
export default intl;
