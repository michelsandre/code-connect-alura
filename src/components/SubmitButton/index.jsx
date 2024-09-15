import { useFormStatus } from 'react-dom';
import { Button } from '../Button';
import { SpinnerButton } from '../SpinnerButton';
import { ArrowFoward } from '../Icons/ArrowFoward';

export const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit">
      {pending ? (
        <SpinnerButton />
      ) : (
        <>
          {children} <ArrowFoward />
        </>
      )}
    </Button>
  );
};
