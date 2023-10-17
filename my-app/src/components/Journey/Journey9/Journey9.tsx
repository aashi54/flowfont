import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "./journey9.css"

const Journey9 = () => {
  const router = useRouter();

  useEffect(() => {
  
    const delay = setTimeout(() => {
      router.push('/');
    }, 4000);

    
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="thank-you-page">
        <div className="thanks">
      <h1 className='j9-heading'>Thank You For Applying</h1>
      <p className='j9-para'>Our Team Will Contact You Soon</p>
      </div>
    </div>
  );
};

export default Journey9;
