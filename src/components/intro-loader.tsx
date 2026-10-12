import { Logo } from '@/components/logo';
import { firm } from '@/content/site';

// Runs before the overlay is parsed, so a repeat visit never sees it flash.
// The intro plays once per browser session and only on the homepage, so deep links
// from search or shared URLs are never delayed.
const skipScript = `try{var d=document.documentElement;if(location.pathname!=='/'||sessionStorage.getItem('intro')){d.setAttribute('data-intro','skip')}else{sessionStorage.setItem('intro','1')}}catch(e){document.documentElement.setAttribute('data-intro','skip')}`;

/**
 * Brief branded intro. It is plain server-rendered markup whose timing lives entirely in CSS
 * (see .intro-* in globals.css): the page underneath is always in the HTML, and the overlay
 * removes itself after ~1.1s even if JavaScript is slow or disabled.
 */
export function IntroLoader() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: skipScript }} />
      <div id="intro-loader" aria-hidden="true">
        <div className="intro-mark">
          <Logo className="intro-logo h-16 w-auto sm:h-20" title="" />
          <span className="intro-line" />
          <span className="intro-name">{firm.tagline}</span>
        </div>
      </div>
    </>
  );
}
