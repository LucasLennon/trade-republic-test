import { render } from '@testing-library/vue';

import Badge from '@/components/Badge/index.vue';
import Box from '@/components/Box/index.vue';
import Button from '@/components/Button/index.vue';
import Card from '@/components/Card/index.vue';
import Input from '@/components/Input/index.vue';
import Flex from '@/components/Flex/index.vue';
import Text from '@/components/Text/index.vue';

import * as US from '@/locales/en-US/translation.json';

type translations = {
  [keys: string]: string;
};

const options = {
  global: {
    components: {
      Badge,
      Box,
      Button,
      Card,
      Input,
      Flex,
      Text,
    },
    mocks: {
      $t: (value: string, options: any): any => {
        const translations: translations = US;
        if (options) {
          return translations[value].replace(/[{]\s(isin)\s[}]/g, options.isin);
        } else {
          return translations[value];
        }
      },
    },
  },
};

const renderWithTranslation = (ui: any) => render(ui, { ...options });

export { renderWithTranslation };
