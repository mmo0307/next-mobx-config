import { useStore } from '@/shared/lib/hooks/useStore';

const useCounter = () => {
  const {
    counterStore: { counter, count, getData }
  } = useStore();

  return {
    counter,
    count,
    getData
  };
};

export { useCounter };
