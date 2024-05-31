'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/shared/lib/hooks/useStore';

const Counter = observer(() => {
  const { t } = useTranslation();

  const {
    counterStore: { counter, count, getData }
  } = useStore();

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
