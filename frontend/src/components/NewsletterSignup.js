import { useFetcher } from 'react-router-dom';

import styles from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {

  const fetcher = useFetcher();
  const{data, state} = fetcher;

  useEffect(() => {

    if(state === 'idle' && data && data.message){
      window.alert(data.message)
    }

  }, [data,state])

  return (
    <fetcher.Form method="post" action='/newsletter' className={styles.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;