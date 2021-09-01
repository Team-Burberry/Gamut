import SignUp from '../components/signUp/SignUp.jsx';
import Head from 'next/head';

export default function SignUpPage() {
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <main>
        <SignUp/>
      </main>
    </div>
  )
}