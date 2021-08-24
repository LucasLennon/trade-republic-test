import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import './main.scss';

import App from '@/pages/App.vue';

import Badge from '@/components/Badge/index.vue';
import Box from '@/components/Box/index.vue';
import Button from '@/components/Button/index.vue';
import Card from '@/components/Card/index.vue';
import Input from '@/components/Input/index.vue';
import Flex from '@/components/Flex/index.vue';
import Text from '@/components/Text/index.vue';

import * as US from './locales/en-US/translation.json';
import * as BR from './locales/pt-BR/translation.json';
import * as DE from './locales/de-DE/translation.json';

const i18n = createI18n({
  locale: window.navigator.language,
  fallbackLocale: 'en-US',
  messages: {
    'en-US': US,
    'pt-BR': BR,
    'de-DS': DE,
  },
});

const VueApp = createApp(App);

VueApp.use(i18n);

VueApp.component('Badge', Badge);
VueApp.component('Box', Box);
VueApp.component('Button', Button);
VueApp.component('Card', Card);
VueApp.component('Input', Input);
VueApp.component('Flex', Flex);
VueApp.component('Text', Text);

VueApp.mount('#app');
