import * as React from 'react';
import { ComponentType } from 'react';
import { observer } from 'mobx-react-lite';

/**
 * Base
 */
const base = <SP, HP>(
  hook: (props: Partial<SP>) => HP,
  Source: ComponentType<HP & SP>,
  tracked = false
) => {
  const base = (props: SP) => (
    <Source
      {...(hook(props) || ({} as any))}
      {...props}
    />
  );

  const Result: any = tracked ? observer(base) : base;

  Result.Original = Source;
  Result.hook = hook;

  return Result as any as ComponentType<Partial<HP> & Partial<SP>> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };
};

/**
 * Wrap component with hook function with will be called in HOC component render
 */
const hoc = function <SP, HP>(
  hook: (props: SP) => HP,
  Source: ComponentType<HP & SP>
) {
  const Result: any = (props: SP) => (
    <Source
      {...(hook(props) || ({} as any))}
      {...props}
    />
  );

  Result.Original = Source;
  Result.hook = hook;

  return Result as any as ComponentType<Partial<HP> & SP> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };
};

/**
 * Wrap component with hook function with will be called in HOC component render with connected mobx
 */
hoc.observer = <SP, HP>(
  hook: (props: Partial<SP>) => HP,
  Source: ComponentType<HP & SP>
) => base(hook, Source, true);

export { hoc };
