'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { hoc } from '@/shared/utils/hoc';

import { useCounter } from './model/props/useCounter.props';

const Counter = hoc.observer(useCounter, ({ counter, count, getData }) => {
  const { t } = useTranslation();

  return (
    <div>
      <p>
        {t('Counter:')} {counter}
      </p>

      <button onClick={count}>{t('Count')}</button>

      <button onClick={getData}>{t('Get Data')}</button>
    </div>
  );
});

export default Counter;
